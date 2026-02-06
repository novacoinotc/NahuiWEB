"use client";

import { useEffect, useRef, useCallback } from "react";

interface CursorNetworkProps {
  intensity?: "light" | "full";
}

interface Node {
  x: number;
  y: number;
  vx: number;
  vy: number;
  baseOpacity: number;
}

export default function CursorNetwork({ intensity = "full" }: CursorNetworkProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const nodesRef = useRef<Node[]>([]);
  const mouseRef = useRef({ x: -9999, y: -9999 });
  const animationRef = useRef<number>(0);
  const resizeRef = useRef<number>(0);

  const getNodeCount = useCallback(() => {
    if (typeof window === "undefined") return 60;
    const isMobile = window.innerWidth < 768;
    if (intensity === "light") return isMobile ? 20 : 40;
    return isMobile ? 30 : 90;
  }, [intensity]);

  const connectionDistance = intensity === "light" ? 120 : 150;
  const cursorRadius = intensity === "light" ? 150 : 200;

  const initNodes = useCallback(
    (width: number, height: number) => {
      const count = getNodeCount();
      nodesRef.current = Array.from({ length: count }, () => ({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * 0.4,
        vy: (Math.random() - 0.5) * 0.4,
        baseOpacity: Math.random() * 0.3 + 0.1,
      }));
    },
    [getNodeCount]
  );

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const setSize = () => {
      const dpr = window.devicePixelRatio || 1;
      const rect = canvas.parentElement?.getBoundingClientRect();
      if (!rect) return;
      canvas.width = rect.width * dpr;
      canvas.height = rect.height * dpr;
      canvas.style.width = `${rect.width}px`;
      canvas.style.height = `${rect.height}px`;
      ctx.scale(dpr, dpr);
      if (nodesRef.current.length === 0) {
        initNodes(rect.width, rect.height);
      }
    };

    setSize();

    const handleResize = () => {
      cancelAnimationFrame(resizeRef.current);
      resizeRef.current = requestAnimationFrame(() => {
        const oldWidth = canvas.width / (window.devicePixelRatio || 1);
        const oldHeight = canvas.height / (window.devicePixelRatio || 1);
        setSize();
        const newWidth = canvas.width / (window.devicePixelRatio || 1);
        const newHeight = canvas.height / (window.devicePixelRatio || 1);
        // Scale existing nodes
        nodesRef.current.forEach((node) => {
          node.x = (node.x / oldWidth) * newWidth;
          node.y = (node.y / oldHeight) * newHeight;
        });
      });
    };

    const handleMouseMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      mouseRef.current = {
        x: e.clientX - rect.left,
        y: e.clientY - rect.top,
      };
    };

    const handleMouseLeave = () => {
      mouseRef.current = { x: -9999, y: -9999 };
    };

    const draw = () => {
      const w = canvas.width / (window.devicePixelRatio || 1);
      const h = canvas.height / (window.devicePixelRatio || 1);
      ctx.clearRect(0, 0, w, h);

      const mx = mouseRef.current.x;
      const my = mouseRef.current.y;
      const nodes = nodesRef.current;

      // Update node positions (drift)
      for (const node of nodes) {
        node.x += node.vx;
        node.y += node.vy;

        // Bounce off edges
        if (node.x < 0 || node.x > w) node.vx *= -1;
        if (node.y < 0 || node.y > h) node.vy *= -1;
        node.x = Math.max(0, Math.min(w, node.x));
        node.y = Math.max(0, Math.min(h, node.y));

        // Subtle cursor repulsion/attraction
        const dxMouse = node.x - mx;
        const dyMouse = node.y - my;
        const distMouse = Math.sqrt(dxMouse * dxMouse + dyMouse * dyMouse);
        if (distMouse < cursorRadius && distMouse > 0) {
          const force = (cursorRadius - distMouse) / cursorRadius * 0.02;
          node.vx += (dxMouse / distMouse) * force;
          node.vy += (dyMouse / distMouse) * force;
        }

        // Dampen velocity
        node.vx *= 0.99;
        node.vy *= 0.99;
      }

      // Draw connections
      for (let i = 0; i < nodes.length; i++) {
        for (let j = i + 1; j < nodes.length; j++) {
          const dx = nodes[i].x - nodes[j].x;
          const dy = nodes[i].y - nodes[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < connectionDistance) {
            const midX = (nodes[i].x + nodes[j].x) / 2;
            const midY = (nodes[i].y + nodes[j].y) / 2;
            const distFromMouse = Math.sqrt(
              (midX - mx) * (midX - mx) + (midY - my) * (midY - my)
            );

            const lineOpacity = (1 - dist / connectionDistance) * 0.3;

            if (distFromMouse < cursorRadius) {
              const proximity = 1 - distFromMouse / cursorRadius;
              ctx.strokeStyle = `rgba(0, 229, 255, ${lineOpacity + proximity * 0.5})`;
              ctx.lineWidth = 0.5 + proximity;
            } else {
              ctx.strokeStyle = `rgba(100, 120, 140, ${lineOpacity})`;
              ctx.lineWidth = 0.5;
            }

            ctx.beginPath();
            ctx.moveTo(nodes[i].x, nodes[i].y);
            ctx.lineTo(nodes[j].x, nodes[j].y);
            ctx.stroke();
          }
        }
      }

      // Draw nodes
      for (const node of nodes) {
        const dxM = node.x - mx;
        const dyM = node.y - my;
        const distM = Math.sqrt(dxM * dxM + dyM * dyM);

        let radius = 1.5;
        let opacity = node.baseOpacity;
        let color = "100, 120, 140";

        if (distM < cursorRadius) {
          const proximity = 1 - distM / cursorRadius;
          radius = 1.5 + proximity * 2.5;
          opacity = node.baseOpacity + proximity * 0.7;
          color = "0, 229, 255";

          // Draw glow for close nodes
          if (proximity > 0.5) {
            ctx.beginPath();
            ctx.arc(node.x, node.y, radius + 4, 0, Math.PI * 2);
            ctx.fillStyle = `rgba(0, 229, 255, ${proximity * 0.15})`;
            ctx.fill();
          }
        }

        ctx.beginPath();
        ctx.arc(node.x, node.y, radius, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(${color}, ${opacity})`;
        ctx.fill();
      }

      // Draw cursor halo
      if (mx > 0 && my > 0 && mx < w && my < h) {
        const gradient = ctx.createRadialGradient(mx, my, 0, mx, my, cursorRadius * 0.6);
        gradient.addColorStop(0, "rgba(0, 229, 255, 0.06)");
        gradient.addColorStop(0.5, "rgba(0, 229, 255, 0.02)");
        gradient.addColorStop(1, "rgba(0, 229, 255, 0)");
        ctx.beginPath();
        ctx.arc(mx, my, cursorRadius * 0.6, 0, Math.PI * 2);
        ctx.fillStyle = gradient;
        ctx.fill();
      }

      animationRef.current = requestAnimationFrame(draw);
    };

    animationRef.current = requestAnimationFrame(draw);

    window.addEventListener("resize", handleResize);
    window.addEventListener("mousemove", handleMouseMove);
    canvas.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      cancelAnimationFrame(animationRef.current);
      cancelAnimationFrame(resizeRef.current);
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("mousemove", handleMouseMove);
      canvas.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, [initNodes, connectionDistance, cursorRadius]);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full pointer-events-none"
      style={{ pointerEvents: "none" }}
    />
  );
}
