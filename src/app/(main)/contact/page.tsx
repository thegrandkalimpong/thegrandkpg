import React from "react";
import { Mail, Phone } from "lucide-react";

export const metadata = {
    title: "Contact Us",
};

const page = () => {
    return (
        <section className="pt-0 text-black">
            <div className="bg-greenish h-full min-h-svh w-full px-6 py-24">
                <div className="mx-auto flex h-full w-full max-w-3xl flex-col items-start justify-center gap-4 px-4 text-left">
                    <p className="text-cream text-xl font-semibold">
                        Get in Touch With Us
                    </p>
                    <h1 className="font-mageline text-cream mt-4 text-5xl font-bold">
                        Contact us today to learn more about our resort.
                    </h1>

                    <hr className="bg-cream h-0.5 w-full border-0 opacity-20" />
                    <div className="text-cream flex w-full flex-col items-center justify-between gap-0.5 py-4 font-medium md:flex-row">
                        <div className="flex flex-col items-center justify-center md:flex-row md:gap-3">
                            <Phone className="mb-2 md:mb-0" />
                            <p>Call Us</p>
                            <p className="mb-2 opacity-60 md:mb-0">
                                (Mon - Sun: 8:00 - 22:00)
                            </p>
                        </div>
                        <a href="tel:">+91 1234567890</a>
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
                        <a href="mailto:">gdk@gmail.com</a>
                    </div>

                    <hr className="bg-cream h-0.5 w-full border-0 opacity-20" />
                    <p className="text-cream pt-4">
                        Lorem ipsum, dolor sit amet consectetur adipisicing
                        elit. Exercitationem, unde quaerat. Vel quas quasi
                        corrupti aut ducimus commodi facere, deserunt eaque
                        laborum nemo dolore dolorum minima error fugiat optio
                        molestiae ad? Assumenda illum repellat molestiae eaque
                        asperiores animi aperiam laborum nesciunt, dignissimos,
                        sequi eius velit odio magnam tenetur perferendis nobis?
                    </p>
                </div>
            </div>
        </section>
    );
};

export default page;
