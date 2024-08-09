"use client";

import "@/assets/css/layout.css"
import { useStore } from "@/hooks/useStore";

export default function MainLayout({ children }) {

    //store
    const {
        LayoutStore: { mode_main, mode_font },
    } = useStore();

    return (
        <>
            <div className="main" style={{backgroundColor: `${mode_main}`, color: `${mode_font}`}}>
                {/* <div className="contents"> */}
                    {children}
                {/* </div> */}
            </div>
        </>
    );
}