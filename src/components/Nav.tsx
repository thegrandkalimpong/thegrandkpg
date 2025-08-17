"use client";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { AlignJustify, Facebook, Instagram, Twitter, X } from "lucide-react";
import Link from "next/link";
import React, { useRef } from "react";
import NavHamburger from "./NavHamburger";
import { usePathname } from "next/navigation";
import { contact } from "@/data/data";

const Nav = () => {
    const [isOpen, setIsOpen] = React.useState(false);
    const navRef = useRef<HTMLDivElement>(null);

    // Initialize nav as hidden
    useGSAP(() => {
        if (navRef.current) {
            gsap.set(navRef.current, { y: -2000 });
        }
    }, []);

    useGSAP(() => {
        buttonAnimation();
        if (isOpen && navRef.current) {
            NavBarEnter();
        } else if (!isOpen && navRef.current) {
            NavBarLeave();
        }
    }, [isOpen]);

    const buttonAnimation = () => {
        if (isOpen) {
            gsap.to("#cross", {
                rotate: 90,
                duration: 0.3,
                ease: "power2.out",
            });
        } else {
            gsap.to("#cross", {
                rotate: 0,
                duration: 0.3,
                ease: "power2.in",
            });
        }
    };

    const toggleMenu = () => {
        if (!navRef.current) return;
        setIsOpen((prev) => !prev);
    };

    const NavBarEnter = () => {
        gsap.fromTo(
            navRef.current,
            { y: -2000 },
            { opacity: 1, y: 0, duration: 0.5, ease: "power2.out" },
        );
    };

    const NavBarLeave = () => {
        gsap.to(navRef.current, {
            // opacity: 0,
            y: -2000,
            duration: 0.5,
            ease: "power2.in",
            onComplete: () => setIsOpen(false),
        });
    };
    const pathname = usePathname();

    return (
        <div className="flex ">
            <div className="hidden md:flex items-center gap-6 ">
                
                <Link
                    href={contact.socialLinks.facebook}
                    target="_blank"
                >
                    <Facebook className={`${pathname === "/" ?'homepage-navbar-social':'navbar-social'} h-6 w-6`} />
                </Link>
                <Link
                    href={contact.socialLinks.instagram}
                    target="_blank"
                >
                    <Instagram className={`${pathname === "/" ? 'homepage-navbar-social' : 'navbar-social'} h-6 w-6`} />
                </Link>
                {/* <Link
                    href={"/"}
                >
                    <Twitter className={`${pathname === "/" ? 'homepage-navbar-social' : 'navbar-social'} h-6 w-6`} />
                </Link> */}
            </div>
            <button
                className={`text-greenish ml-6 relative z-50 p-2 transition-transform hover:scale-110 ${isOpen ? "" : ""}`}
                onClick={toggleMenu}
                aria-label="Toggle menu"
            >
                <NavHamburger isOpen={isOpen} />
            </button>

            <nav
                ref={navRef}
                className={`bg-cream fixed top-0 right-0 left-0 z-40 h-screen w-full ${isOpen ? "pointer-events-auto" : "pointer-events-none"
                    }`}
                style={{ opacity: 0, transform: "translateY(-2000px)" }}
            >
                <div className="font-mageline flex h-full flex-col items-center justify-center gap-8 text-5xl">
                    <NavLink href="/" label="Home" toggleMenu={toggleMenu} />
                    <NavLink
                        href="/our-hotel"
                        label="Our Hotel"
                        toggleMenu={toggleMenu}
                    />
                    <NavLink
                        href="/rooms"
                        label="Rooms"
                        toggleMenu={toggleMenu}
                    />
                    <NavLink
                        href="/gallery"
                        label="Gallery"
                        toggleMenu={toggleMenu}
                    />
                    <NavLink
                        href="/activities"
                        label="Activities"
                        toggleMenu={toggleMenu}
                    />
                    <NavLink
                        href="/contact"
                        label="Contact Us"
                        toggleMenu={toggleMenu}
                    />
                </div>
            </nav>
        </div>
    );
};

const NavLink = ({
    label,
    href,
    toggleMenu,
    ...props
}: {
    label: string;
    href: string;
    toggleMenu: () => void;
}) => {
    const linkRef = useRef<HTMLAnchorElement>(null);
    const underlineRef = useRef<HTMLSpanElement>(null);

    const onMouseEnterAnimation = () => {
        if (underlineRef.current) {
            gsap.to(underlineRef.current, {
                scaleX: 1,
                duration: 0.4,
                transformOrigin: "left",
                ease: "power2.out",
            });
        }
    };

    const onMouseLeaveAnimation = () => {
        if (underlineRef.current) {
            gsap.to(underlineRef.current, {
                scaleX: 0,
                duration: 0.4,
                transformOrigin: "right",
                ease: "power2.in",
            });
        }
    };

    return (
        <Link
            ref={linkRef}
            href={href}
            onClick={toggleMenu}
            {...props}
            className="text-moss hover:text-moss-dark relative inline-block transition-all duration-300 hover:scale-105"
            onMouseEnter={onMouseEnterAnimation}
            onMouseLeave={onMouseLeaveAnimation}
        >
            <span className="relative z-10">{label}</span>
            <span
                ref={underlineRef}
                className="bg-moss absolute bottom-0 left-0 h-[3px] w-full origin-left scale-x-0"
            />
        </Link>
    );
};

export default Nav;
