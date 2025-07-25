import { Mail, Phone } from "lucide-react";
import React from "react";

const page = () => {
    return (
        <section className="pt-0 text-black">
            <div className="bg-greenish py-24 h-full min-h-svh w-full px-6 ">
                <div className="mx-auto flex h-full w-full max-w-3xl flex-col items-start justify-center gap-4 px-4 text-left">
                    <p className=" text-xl font-semibold text-cream">
                        Get in Touch With Us
                    </p>
                    <h1 className="font-mageline mt-4 text-5xl font-bold text-cream">
                        Contact us today to learn more about our resort.
                    </h1>

                    <hr className="h-0.5 w-full bg-cream border-0 opacity-20" />
                    <div className="flex flex-col md:flex-row w-full items-center justify-between gap-0.5 py-4 text-cream font-medium ">

                        <div className="flex flex-col md:flex-row md:gap-3 items-center justify-center ">

                            <Phone className="mb-2 md:mb-0" />
                            <p>Call Us</p>
                            <p className="mb-2 opacity-60 md:mb-0 ">(Mon - Sun: 8:00 - 22:00)</p>
                        </div>
                        <a href="tel:" >+91 1234567890</a>
                    </div>
                    <hr className="h-0.5 w-full bg-cream border-0 opacity-20" />
                    <div className="flex flex-col md:flex-row w-full items-center justify-between gap-0.5 py-4 text-cream font-medium ">

                        <div className="flex flex-col md:flex-row md:gap-3 items-center justify-center ">

                            <Mail className="mb-2 md:mb-0" />
                            <p>Mail Us</p>
                            <p className="mb-2 opacity-60 md:mb-0 ">Response time approx. 4 hours</p>
                        </div>
                        <a href="mailto:" >gdk@gmail.com</a>
                    </div>


                    <hr className="h-0.5 w-full bg-cream border-0 opacity-20" />
                    <p className="text-cream pt-4">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Exercitationem, unde quaerat. Vel quas quasi corrupti aut ducimus commodi facere, deserunt eaque laborum nemo dolore dolorum minima error fugiat optio molestiae ad? Assumenda illum repellat molestiae eaque asperiores animi aperiam laborum nesciunt, dignissimos, sequi eius velit odio magnam tenetur perferendis nobis?</p>

                </div>
            </div>
        </section>
    );
};

export default page;
