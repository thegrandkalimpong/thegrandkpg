import React from "react";
import Nav from "./Nav";
import Image from "next/image";
import Link from "next/link";

const Header = () => {
    return (
        <header className="relative z-52 flex h-24 w-full items-center font-semibold">
            <div
                className="text-greenish flex h-full w-full items-center justify-between"
                id="header"
            >
                <Link href="/">
                    <Image
                        src="/logo.jpg"
                        alt="Logo"
                        width={70}
                        height={70}
                        className="rounded-full bg-white p-2"
                    />
                </Link>
                
                <Nav />
            </div>
        </header>
    );
};

export default Header;
