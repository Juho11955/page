"use client";

import "@/assets/css/layout.css"
import { useStore } from "@/hooks/useStore";
import { observer } from "mobx-react";
import HeaderLayout from "./HeaderLayout";
import FooterLayout from "./FooterLayout";

function MainLayout({ children }) {

    //store
    const {
        LayoutStore: { mode_main, mode_font },
    } = useStore();

    return (
        <>
            <div className="main" style={{backgroundColor: `${mode_main}`, color: `${mode_font}`}}>
                <HeaderLayout/>
                    {children}  sf
                <FooterLayout/>
            </div>
        </>
    );
}

export default observer(MainLayout);