"use client"; // this is a client component

import "@/assets/css/layout.css"
import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";


export default function SidebarLayout() {

    // router
    const router = useRouter();

    // get list data
    const [mainList, setMainList] = useState([{id: 1, name: "first", src: "/image/logo_white.png"}, {id: 2, name: "second", src: "/image/logo_white.png"}, {id: 3, name: "third", src: "/image/logo_white.png"}, {id: 3, name: "third", src: "/image/logo_white.png"}]);

    useEffect(() => {
        console.log(`${mainList}`)
    }, [mainList])


    return (
    <>
        <div className="secondSidebar">
            <div className="secondUpper">
                    <span>Recent</span>
                    <div style={{width: "130px"}}></div>

            </div>
        </div>
    </>
    );
}