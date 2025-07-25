import React from "react";
import Nav from "./Nav";

const Header = () => {
    return (
        <header className="fixed top-0 right-0 left-0 z-50 h-20 font-semibold">
            <div
                className="text-greenish flex h-full items-center justify-between"
                id="header"
            >
                <p>Logo</p>
                <Nav />
            </div>
        </header>
    );
};

export default Header;
