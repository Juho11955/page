"use client";

import "@/assets/css/layout.css"

export default function MainLayout({ children }) {
    return (
        <>
            <div className="main">
                main layout
                {children}
            </div>
        </>
    );
}