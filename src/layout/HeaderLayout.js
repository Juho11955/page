"use client";

import "@/assets/css/layout.css"
import { FaRegSun, FaRegMoon } from "react-icons/fa";
import { ImSearch } from "react-icons/im";
import React from "react";
import { useStore } from "@/hooks/useStore";

export default function HeaderLayout() {

    //store
    const {
        LayoutStore: { modeStyle, setModeStyle, mode_font, mode_main},
    } = useStore();
    
    return ((
        <>
            <div className="header"  style={{backgroundColor: `${mode_main}`, color: `${mode_font}`}}>
                <div className="icon_left"></div>
                <div className="icon_right">
                    <div className="dark">
                        { modeStyle === true ? <FaRegMoon onClick={setModeStyle} style={{height: "25px", width: "25px", marginTop: "3px"}} /> : <FaRegSun onClick={setModeStyle} style={{height: "25px", width: "25px", marginTop: "3px"}} />}
                    </div>
                    <div style={{width: "15px"}}/>
                    <div className="search">
                        <ImSearch style={{height: "23px", width: "23px", marginTop: "3.5px"}}/>
                    </div>
                    {/* <PiDotsThreeOutlineBold /> */}
                </div>
            </div>
        </>
    ));
}