"use client"; // this is a client component

import "@/assets/css/layout.css"
import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { useStore } from "@/hooks/useStore";


export default function BlogLayout({children}) {

    return (
    <>
        <div className="blog">
            {children}
        </div>
    </>
    );
}