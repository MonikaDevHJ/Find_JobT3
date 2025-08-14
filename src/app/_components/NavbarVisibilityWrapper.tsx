"use client";

import { usePathname } from "next/navigation";
import Navbar from "./Navbar";


export default function NavbarVisibilityWrapper() {
  const pathname = usePathname();
  const isFindJobRoute = pathname.startsWith("/find_job");
  const isPostJobRoute = pathname.startsWith("/post_job");

  // Hide the default navbar if we are in candidate or employer routes
  if(isFindJobRoute || isPostJobRoute){
    return null;
  }

  // Otherwise Show Default navbar
  return <Navbar/>
}
