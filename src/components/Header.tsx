import React from "react";
import Nav from "./Nav";
import Image from "next/image";
import Link from "next/link";

const Header = () => {
    return (
        <header className="relative z-50 h-24 flex items-center  font-semibold">
            <div
                className="text-greenish flex h-full items-center justify-between"
                id="header"
            >
                <Link href="/" >

                    <Image
                        src="/logo.webp"
                        alt="Logo"
                        width={85}
                        height={85}
                    />
                </Link>
                <Nav />
            </div>
        </header>
    );
};

export default Header;
