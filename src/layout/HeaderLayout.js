"use client";

import "@/assets/css/layout.css"
import { FaRegSun, FaRegMoon } from "react-icons/fa";
import { ImSearch } from "react-icons/im";
import React from "react";
import { useStore } from "@/hooks/useStore";

export default function HeaderLayout() {

    //store
    const {
        LayoutStore: { modeStyle, setModeStyle },
    } = useStore();
    
    return ((
        <>
            <div className="header">
                <div className="icon_left"></div>
                <div className="icon_right">
                    { modeStyle === true ? <FaRegMoon onClick={setModeStyle} style={{height: "25px", width: "25px", marginTop: "3px"}} /> : <FaRegSun onClick={setModeStyle} style={{height: "25px", width: "25px", marginTop: "3px"}} />}
                    <div style={{width: "25px"}}/>
                    <ImSearch style={{height: "23px", width: "23px", marginTop: "3.5px"}}/>
                    {/* <PiDotsThreeOutlineBold /> */}
                </div>
            </div>
        </>
    ));
}