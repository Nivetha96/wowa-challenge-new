import { useState, useEffect } from "react";
import JSXStyle from "styled-jsx/style";

export default function Nav() {
    return (
    <>
    <nav className="bg-white border-gray-200 px-4 py-5 dark:bg-gray-800">
        <img className="float-left mr-3 h-6 sm:h-9 object-contain" src="/wowa.png" alt="WOWA Logo" />
        <span className="relative self-center text-3xl font-semibold whitespace-nowrap dark:text-white">WOWA Challenge</span>
    </nav>
    </>
    );
}