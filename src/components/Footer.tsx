import {
    Mail,
    Phone,
    MapPin,
    ArrowRight,
    Instagram,
    Facebook,
    Youtube,
} from "lucide-react";

import Image from "next/image";
import Link from "next/link";
import React from "react";
import { contact, footerData } from "@/data/data";

const navLinks: {
    id: number;
    label: string;
    route: string;
}[] = [
        { id: 1, label: "Contact Us", route: "/contact" },
        { id: 2, label: "Our Hotel", route: "/our-hotel" },
        { id: 3, label: "Rooms", route: "/rooms" },
        { id: 4, label: "Gallery", route: "/gallery" },
        { id: 5, label: "Contact", route: "/contact" }
    ];


const Footer = () => {
    return (
        <footer className="bg-moss-dark text-cream relative z-20 mt-24">
            {/* Main Footer Content */}
            <div className="relative z-10 mx-auto mb-12 max-w-9xl px-4 sm:px-6 xl:px-8">
                <div className="grid grid-cols-1 gap-8 py-12 xl:grid-cols-4">
                    {/* Brand Section */}
                    <div className="xl:col-span-2">
                        <div className="flex flex-col items-center space-y-6 xl:items-start ">
                            <div className="flex h-16 w-16 items-center justify-center rounded-full bg-white ">
                                <div className="">
                                    {/* <span className="text-lg font-bold text-white">
                                        TGK
                                    </span> */}
                                    <Link href="/">
                                        <Image
                                            src={`${footerData.logo.src}` || "/logo.jpg"}
                                            alt="Logo"
                                            width={70}
                                            height={70}
                                            className="rounded-full bg-white p-2"
                                        />  
                                    </Link>
                                </div>
                            </div>
                            <div className="text-center xl:text-left">
                                <h2 className="text-cream xl:text-left mb-3 text-2xl font-bold xl:text-3xl">
                                    The Grand Kalimpong
                                </h2>
                                <p className="text-cream/70 max-w-md leading-relaxed">
                                    {footerData.description}
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div className="text-center xl:text-left ">
                        <h3 className="text-cream xl:text-left mb-4 text-lg font-semibold">
                            Quick Links
                        </h3>
                        <ul className="space-y-4">
                            {navLinks.map((link) => (
                                <li key={link.id}>
                                    <Link
                                        href={link.route}
                                        className="text-cream/70 hover:text-cream group flex items-center justify-center transition-colors duration-200 xl:justify-start"
                                    >
                                        {link.label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Contact Info */}
                    <div className="text-center xl:text-left ">
                        <h3 className="text-cream xl:text-left xl:ml-9 mb-4 text-lg font-semibold">
                            Contact Info
                        </h3>
                        <div className="space-y-4">
                            <div className="flex items-center justify-center xl:justify-start">
                                <Phone className="text-cream/80 mr-3 h-5 w-5 flex-shrink-0" />
                                <span className="text-cream/70">
                                    <a href={`tel:${contact.phone}`}>{contact.phone}</a>
                                </span>
                            </div>
                            <div className="flex items-center justify-center xl:justify-start">
                                <Mail className="text-cream/80 mr-3 h-5 w-5 flex-shrink-0" />
                                <span className="text-cream/70 break-all whitespace-normal ">
                                    <a href={`mailto:${contact.email}`}> 
                                        
                                        {contact.email}
                                    </a>
                                </span>
                            </div>
                            <div className="flex items-start justify-center xl:justify-start">
                                <MapPin className="text-cream/80 mt-0.5 mr-3 h-5 w-5 flex-shrink-0 " />
                                <span className="text-cream/70 ">
                                    {contact.address.line1}
                                    <br />
                                    {contact.address.line2}
                                </span>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Social Media */}
                <div className="border-cream/20 border-t py-8">
                    <div className="flex items-center justify-center space-x-6">
                        <span className="text-cream/80 font-medium">
                            Follow Us:
                        </span>
                        <div className="flex space-x-4">
                           
                            <a
                                href={`${contact.socialLinks.instagram}`}
                                className="footer-social"
                            >
                                <Instagram className="" />
                            </a>
                             <a
                                href={`${contact.socialLinks.facebook}`}
                                className="footer-social"
                            >
                                <Facebook />
                            </a>
                             <a
                                href={`${contact.socialLinks.youtube}`}
                                className="footer-social"
                            >
                                <Youtube className="" />
                            </a>
                        </div>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="border-cream/20 border-t py-6">
                    <div className="flex flex-col items-center text-center justify-between space-y-4 ">
                        <p className="text-cream/60 text-center text-sm ">
                            {footerData.copyright}
                        </p>
                    </div>
                </div>
            </div>

            {/* Developer Credit */}
            <div className="absolute right-0 bottom-0 left-0 bg-black py-4">
                <div className="mx-auto max-w-7xl px-4 sm:px-6 xl:px-8">
                    <p className="text-cream/50 text-center text-sm">
                        Designed and Developed by{" "}
                        <a
                            href="https://steadfastweb.studio"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-cream/80 hover:text-cream font-medium transition-colors duration-200"
                        >
                            SteadFast Web Studio
                        </a>
                    </p>
                </div>
            </div>
        </footer >
    );
};

export default Footer;
