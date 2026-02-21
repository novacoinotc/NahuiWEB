"use client";

import ScrollProgress from "../ui/ScrollProgress";
import BackToTop from "../ui/BackToTop";

export default function ClientShell({ children }: { children: React.ReactNode }) {
  return (
    <>
      <ScrollProgress />
      {children}
      <BackToTop />
    </>
  );
}
