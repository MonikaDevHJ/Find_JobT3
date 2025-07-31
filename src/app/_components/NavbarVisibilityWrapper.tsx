"use client";

import { usePathname } from "next/navigation";
import Navbar from "./Navbar";

export default function NavbarVisibilityWrapper() {
  const pathname = usePathname();
  const isFindJobRoute = pathname.startsWith("/find_job");

  // Only render main Navbar if not on /find_job
  return !isFindJobRoute ? <Navbar /> : null;
}
