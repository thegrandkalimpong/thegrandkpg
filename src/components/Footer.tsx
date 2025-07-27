import {
    Facebook,
    Instagram,
    Mail,
    Phone,
    MapPin,
    ArrowRight,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Footer = () => {
    return (
        <footer className="bg-moss-dark text-cream relative mt-24">
            {/* Main Footer Content */}
            <div className="relative z-10 mx-auto mb-12 max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 gap-8 py-12 md:grid-cols-2 lg:grid-cols-4">
                    {/* Brand Section */}
                    <div className="lg:col-span-2">
                        <div className="flex flex-col items-center space-y-4 md:items-start">
                            <div className="flex h-16 w-16 items-center justify-center rounded-full bg-white">
                                <div className="">
                                    {/* <span className="text-lg font-bold text-white">
                                        TGK
                                    </span> */}
                                    <Link href="/">
                                        <Image src="/logo.jpg" alt="Logo" width={70} height={70}
                                            className="rounded-full p-2 bg-white"
                                        />
                                    </Link>
                                </div>
                            </div>
                            <div className="text-center md:text-left">
                                <h2 className="text-cream mb-2 text-2xl font-bold lg:text-3xl">
                                    The Grand Kalimpong
                                </h2>
                                <p className="text-cream/70 max-w-md leading-relaxed">
                                    Experience the serene beauty of the
                                    Himalayas with luxury accommodations,
                                    breathtaking views, and warm hospitality in
                                    the heart of Kalimpong.
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div className="text-center md:text-left">
                        <h3 className="text-cream mb-4 text-lg font-semibold">
                            Quick Links
                        </h3>
                        <ul className="space-y-3">
                            {[
                                "About Us",
                                "Rooms & Suites",
                                "Dining",
                                "Activities",
                                "Gallery",
                                "Contact",
                            ].map((link) => (
                                <li key={link}>
                                    <a
                                        href="#"
                                        className="text-cream/70 hover:text-cream group flex items-center justify-center transition-colors duration-200 md:justify-start"
                                    >
                                        <ArrowRight className="mr-2 h-4 w-4 opacity-0 transition-opacity duration-200 group-hover:opacity-100" />
                                        {link}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Contact Info */}
                    <div className="text-center md:text-left">
                        <h3 className="text-cream mb-4 text-lg font-semibold">
                            Contact Info
                        </h3>
                        <div className="space-y-4">
                            <div className="flex items-center justify-center md:justify-start">
                                <Phone className="text-cream/80 mr-3 h-5 w-5 flex-shrink-0" />
                                <span className="text-cream/70">
                                    +91 1234567890
                                </span>
                            </div>
                            <div className="flex items-center justify-center md:justify-start">
                                <Mail className="text-cream/80 mr-3 h-5 w-5 flex-shrink-0" />
                                <span className="text-cream/70">
                                    info@grandkalimpong.com
                                </span>
                            </div>
                            <div className="flex items-start justify-center md:justify-start">
                                <MapPin className="text-cream/80 mt-0.5 mr-3 h-5 w-5 flex-shrink-0" />
                                <span className="text-cream/70">
                                    Hill Cart Road, Kalimpong
                                    <br />
                                    West Bengal, India - 734301
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
                                href="#"
                                className="bg-cream/10 hover:bg-cream/20 flex h-10 w-10 items-center justify-center rounded-full transition-colors duration-200"
                            >
                                <Facebook className="text-cream h-5 w-5" />
                            </a>
                            <a
                                href="#"
                                className="bg-cream/10 hover:bg-cream/20 flex h-10 w-10 items-center justify-center rounded-full transition-colors duration-200"
                            >
                                <Instagram className="text-cream h-5 w-5" />
                            </a>
                        </div>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="border-cream/20 border-t py-6">
                    <div className="flex flex-col items-center justify-between space-y-4 md:flex-row md:space-y-0">
                        <p className="text-cream/60 text-center text-sm md:text-left">
                            © 2025 The Grand Kalimpong. All rights reserved.
                        </p>
                        <div className="flex flex-wrap items-center justify-center space-x-6 text-sm">
                            <a
                                href="#"
                                className="text-cream/60 hover:text-cream transition-colors duration-200"
                            >
                                Privacy Policy
                            </a>
                            <a
                                href="#"
                                className="text-cream/60 hover:text-cream transition-colors duration-200"
                            >
                                Terms of Service
                            </a>
                            <a
                                href="#"
                                className="text-cream/60 hover:text-cream transition-colors duration-200"
                            >
                                Sitemap
                            </a>
                        </div>
                    </div>
                </div>
            </div>

            {/* Developer Credit */}
            <div className="absolute right-0 bottom-0 left-0 bg-black py-4">
                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
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
        </footer>
    );
};

export default Footer;
