"use client";

import ScrollProgress from "../ui/ScrollProgress";
import PageLoader from "../ui/PageLoader";
import BackToTop from "../ui/BackToTop";

export default function ClientShell({ children }: { children: React.ReactNode }) {
  return (
    <>
      <PageLoader />
      <ScrollProgress />
      {children}
      <BackToTop />
    </>
  );
}
