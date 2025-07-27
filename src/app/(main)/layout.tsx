import React from "react";
import Footer from "@/components/Footer";
import Header from "@/components/Header";

const MainLayout = ({ children }: { children: React.ReactNode }) => {
    return (
        <div>
            <Header />
            <main className="relative">{children}</main>
            <Footer />
        </div>
    );
};

export default MainLayout;
