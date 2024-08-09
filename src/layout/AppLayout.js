"use client";

import "@/assets/css/layout.css"
import HeaderLayout from "./HeaderLayout";
import SidebarLayout from "./SidebarLayout";
import MainLayout from "./MainLayout";
import FooterLayout from "./FooterLayout";
import React from "react";
import { useStore } from "@/hooks/useStore";
import { observer } from "mobx-react";

function AppLayout({ children }) {

    // // mode style state
    // const [modeStyle, setModeStyle] = useState(true);

    // // state로 화이트/블랙 모드 조절
    // const onModeStyle = () => {
    //     setModeStyle(!modeStyle);
    // }

    // state
    const {
        LayoutStore: { modeStyle, setModeStyle, mode_font},
    } = useStore();

    return (
        <>
            <div className="app">
                <SidebarLayout />
                {/* <SideSecondLayout /> */}
                <div className="right_side">
                    <MainLayout>
                        {children}
                        {/* <HeaderLayout />
                        <FooterLayout /> */}
                    </MainLayout>
                </div>
            </div>
        </>
    );
}

export default observer(AppLayout);