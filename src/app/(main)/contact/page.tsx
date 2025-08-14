import React from "react";
import { Mail, MessageCircle, Phone } from "lucide-react";
import ContactForm from "@/components/ContactForm";
import { contact } from "@/data/data";

export const metadata = {
    title: "Contact Us",
};

const page = () => {
    return (
        <section className="max-w-none pt-0">
            <div className="bg-greenish w-full px-6 py-24">
                <div className="mx-auto flex h-full w-full max-w-3xl flex-col items-start justify-center gap-4 px-4 text-left">
                    <h1 className="text-cream">Get in Touch With Us</h1>
                    <p className="text-cream mt-4 mb-4 text-xl font-semibold">
                        {/* Contact us today to learn more about our resort. */}
                        We&apos;re Here to Help You Plan the Perfect Stay
                    </p>

                    <hr className="bg-cream h-0.5 w-full border-0 opacity-20" />
                    <div className="text-cream flex w-full flex-col items-center justify-between gap-0.5 py-4 font-medium md:flex-row">
                        <div className="flex flex-col items-center justify-center md:flex-row md:gap-3">
                            <Phone className="mb-2 md:mb-0" />
                            <p>Call Us</p>
                            <p className="mb-2 opacity-60 md:mb-0">
                                (Mon - Sun: 8:00 - 22:00)
                            </p>
                        </div>
                        <a href={`tel:${contact.phone}`}>{contact.phone}</a>
                    </div>
                    <hr className="bg-cream h-0.5 w-full border-0 opacity-20" />
                    <div className="text-cream flex w-full flex-col items-center justify-between gap-0.5 py-4 font-medium md:flex-row">
                        <div className="flex flex-col items-center justify-center md:flex-row md:gap-3">
                            <MessageCircle className="mb-2 md:mb-0" />
                            <p>WhatsApp Us</p>
                            <p className="mb-2 opacity-60 md:mb-0">
                                (Mon - Sun: 8:00 - 22:00)
                            </p>
                        </div>
                        <a href={`https://wa.me/${contact.whatsapp}`} target="_blank">
                            {contact.whatsapp}
                        </a>
                    </div>
                    <hr className="bg-cream h-0.5 w-full border-0 opacity-20" />
                    <div className="text-cream flex w-full flex-col items-center justify-between gap-0.5 py-4 font-medium md:flex-row">
                        <div className="flex flex-col items-center justify-center md:flex-row md:gap-3">
                            <Mail className="mb-2 md:mb-0" />
                            <p>Mail Us</p>
                            <p className="mb-2 opacity-60 md:mb-0">
                                Response time approx. 4 hours
                            </p>
                        </div>
                        <a href={`mailto:${contact.email}`}>
                            {contact.email}
                        </a>
                    </div>

                    <hr className="bg-cream h-0.5 w-full border-0 opacity-20" />
                    <p className="text-cream py-4">
                        Whether you&apos;re ready to book your next getaway,
                        have questions about our rooms, or need help planning a
                        special event, our team at
                        <strong> The Grand Kalimpong </strong> is here for
                        you.&nbsp; Reach out by phone, WhatsApp, or
                        email&mdash;we&apos;ll respond promptly and make sure
                        your experience is as smooth and enjoyable as your stay
                        with us. From the moment you contact us to the day you
                        check out, we&apos;re dedicated to creating
                        unforgettable memories for you.
                    </p>
                    <hr className="bg-cream h-0.5 w-full border-0 opacity-20" />
                </div>
            </div>

            <ContactForm />
        </section>
    );
};

export default page;
