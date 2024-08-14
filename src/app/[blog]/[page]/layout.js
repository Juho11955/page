"use client"; // this is a client component

import "@/assets/css/layout.css"
import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { useStore } from "@/hooks/useStore";
import SecondSidebar from "@/layout/blog/SecondSidebar";

export default function PageLayout({children}, params) {

    // router
    const router = useRouter();

    // store
    const {
        LayoutStore: { modeStyle, setModeStyle, mode_side, mode_border, mode_font},
    } = useStore();

    // get list data
    const [mainList, setMainList] = useState([{id: 1, name: "first", src: "/image/logo_white.png"}, {id: 2, name: "second", src: "/image/logo_white.png"}, {id: 3, name: "third", src: "/image/logo_white.png"}, {id: 3, name: "third", src: "/image/logo_white.png"}]);

    useEffect(() => {
        console.log(`${mainList}`)
    }, [mainList])


    return (
    <>
        <div className="page">
            <SecondSidebar params={params}>
                {children}
            </SecondSidebar>
        </div>
    </>
    );
}