"use client";
import { AlignJustify, X } from "lucide-react";
import { usePathname } from "next/navigation";
import React from "react";

const NavHamburger = ({ isOpen }: { isOpen: boolean }) => {
    const patheName = usePathname();
    console.log("Pathname:", patheName);

    return (
        <>
            {isOpen ? (
                <X size={28} id="cross" className="text-moss" />
            ) : patheName === "/" ? (
                <AlignJustify size={28} id="hamburger" className="text-white" />
            ) : (
                <AlignJustify size={28} id="hamburger" className="text-moss" />
            )}
        </>
    );
};

export default NavHamburger;
