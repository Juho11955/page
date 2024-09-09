"use client"; // this is a client component

import "@/assets/css/layout.css"
import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { useStore } from "@/hooks/useStore";
import { observer } from "mobx-react";
import Page from "./page";
import SecondSidebar from "@/layout/root/SecondSidebar";
import HeaderLayout from "@/layout/root/HeaderLayout";
import FooterLayout from "@/layout/root/FooterLayout";

function PageLayout({children}, params) {

    // router
    const router = useRouter();

    // store
    const {
        LayoutStore: { mode_main, mode_font },
    } = useStore();

    // get list data
    const [mainList, setMainList] = useState([{id: 1, name: "first", src: "/image/logo_white.png"}, {id: 2, name: "second", src: "/image/logo_white.png"}, {id: 3, name: "third", src: "/image/logo_white.png"}, {id: 3, name: "third", src: "/image/logo_white.png"}]);

    useEffect(() => {
        console.log(`${mainList}`)
    }, [mainList])


    return (
    <>
        <div className="page" style={{backgroundColor: `${mode_main}`, color: `${mode_font}`}}>
            <SecondSidebar/>
            <div className="inner_page">
                <HeaderLayout/>
                    {children}
                <FooterLayout/>
            </div>
        </div>
    </>
    );
}

export default observer(PageLayout);