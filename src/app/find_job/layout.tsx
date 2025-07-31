    // app/find_job/layout.tsx
    import React from "react";
    import NavbarForFindJob from "./NavbarForFindJob"; // we’ll create this next

    export default function LayoutFindJob({ children }: { children: React.ReactNode }) {
    return (
        <div>
        <NavbarForFindJob />
        <main>{children}</main>
        </div>
    );
    }
