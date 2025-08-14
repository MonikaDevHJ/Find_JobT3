    // app/find_job/layout.tsx
    import React from "react";
    import NavbarForFindJob from "./NavbarForPostJob"; // we’ll create this next

    export default function LayoutPostJob({ children }: { children: React.ReactNode }) {
    return (
        <div>
        <NavbarForFindJob />
        <main>{children}</main>
        </div>
    );
    }
