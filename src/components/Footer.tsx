import {
    Mail,
    Phone,
    MapPin,
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
        { id: 5, label: "Activities", route: "/activities" },
        { id: 6, label: "Contact", route: "/contact" },
    ];

const Footer = () => {
    return (
        <footer className="bg-moss-dark text-cream relative z-20 mt-24 pb-24">
            {/* Main Footer Content */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 lg:pt-12">

                <div className="px-4 sm:px-6 xl:px-8 grid grid-cols-1 gap-4 mb-12">
                    <div className="flex flex-col gap-6 items-start">
                        <Link href="/" className="">
                            <Image
                                src={`${footerData.logo.src}` || "/logo.jpg"}
                                alt="Logo"
                                width={70}
                                height={70}
                                className="rounded-full bg-white p-2"
                            />
                        </Link>
                        <h2 className="text-2xl text-left text-cream mb-0">
                            The Grand Kalimpong
                        </h2>
                        <p className="max-w-md text-sm leading-relaxed text-cream/70">
                            {footerData.description}
                        </p>
                    </div>
                </div>

                {/* Quick Links */}
                <div className="lg:mt-4 w-fit lg:mx-auto">
                    <div className="px-4 sm:px-6 xl:px-8 mb-8">
                        <h3 className="text-lg font-semibold mb-4 text-left text-cream">Quick Links</h3>
                        <ul className="space-y-2">
                            {navLinks.map((link) => (
                                <li key={link.id}>
                                    <Link
                                        href={link.route}
                                        className="text-cream/70 hover:text-cream transition-colors duration-200"
                                    >
                                        {link.label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>

                {/* contact */}

                <div className="px-4 sm:px-6 xl:px-8 mb-8 lg:mt-4">
                    <h3 className="text-lg font-semibold mb-4 text-left text-cream">Contact</h3>
                    <div className="footer-contact-container">
                        <Phone className="mr-3 h-5 w-5 flex-shrink-0 text-cream/80" />
                        <a href={`tel:${contact.phone}`} className="text-cream/70">
                            {contact.phone}
                        </a>
                    </div>
                    <div className="footer-contact-container">
                        <Mail className="mr-3 h-5 w-5 flex-shrink-0 text-cream/80" />
                        <a
                            href={`mailto:${contact.email}`}
                            className="break-all whitespace-normal text-cream/70"
                        >
                            {contact.email}
                        </a>
                    </div>
                    <div className="footer-contact-container">
                        <MapPin className="mt-0.5 mr-3 h-5 w-5 flex-shrink-0 text-cream/80" />
                        <span className="text-left text-cream/70">
                            {contact.address.line1}
                        </span>
                    </div>
                </div>
            </div>

            <div className="flex gap-4 w-full justify-center mx-auto border-y border-cream/20 py-2 mb-8">
                <a
                    href={`${contact.socialLinks.instagram}`}
                    className="footer-social"
                >
                    <Instagram />
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
                    <Youtube />
                </a>
            </div>
            <div className="flex flex-col items-center space-y-4 text-center">
                <p className="text-sm text-cream/60">{footerData.copyright}</p>
            </div>
            {/* Developer Credit */}
            <div className="absolute bottom-0 left-0 right-0 bg-black py-4">
                <div className="mx-auto max-w-7xl px-4 sm:px-6 xl:px-8">
                    <p className="text-center text-sm text-cream/50">
                        Designed and Developed by{" "}
                        <a
                            href="https://steadfastweb.studio"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="font-medium text-cream/80 transition-colors duration-200 hover:text-cream"
                        >
                            SteadFast Web Studio
                        </a>
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
