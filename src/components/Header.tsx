import React from "react";
import Nav from "./Nav";
import Image from "next/image";
import Link from "next/link";

const Header = () => {
    return (
        <header className="relative z-52 flex h-24 items-center bg-transparent font-semibold">
            <div
                className="text-greenish flex h-full items-center justify-between"
                id="header"
            >
                <Link href="/">
                    <Image src="/logo.jpg" alt="Logo" width={70} height={70} 
                    className="rounded-full p-2 bg-white"
                    />
                </Link>
                <Nav />
            </div>
        </header>
    );
};

export default Header;
