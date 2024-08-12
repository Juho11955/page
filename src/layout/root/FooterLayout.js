"use client";

import "@/assets/css/layout.css"
import { useStore } from "@/hooks/useStore";
import React from "react";

export default function FooterLayout() {

    // store
    const {
        LayoutStore: { mode_footer, mode_border, mode_font},
    } = useStore();

    return (
        <>
            <div className="footer" style={{backgroundColor: `${mode_footer}`, borderTop: `${mode_border}`, color: `${mode_font}`}}>
                footer layout
            </div>
        </>
    );
}