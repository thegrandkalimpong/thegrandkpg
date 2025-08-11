'use client'

import React, { useState, useRef } from 'react'

const ContactForm = () => {
    const [result, setResult] = useState("");
    const [isSubmitting, setIsSubmitting] = useState(false);
    const formRef = useRef<HTMLFormElement>(null);

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setIsSubmitting(true);
        setResult("Sending...");

        if (!formRef.current) {
            setResult("Form reference not found.");
            setIsSubmitting(false);
            return;
        }

        const formData = new FormData(formRef.current);
        formData.append("access_key", "b8548bd5-ce87-472a-9dcb-26491f398f10");

        try {
            const response = await fetch("https://api.web3forms.com/submit", {
                method: "POST",
                body: formData
            });

            const data = await response.json();

            if (data.success) {
                setResult("Form submitted successfully ✅");
                formRef.current.reset();
            } else {
                setResult(`❌ ${data.message}`);
            }
        } catch (error) {
            setResult("Something went wrong. Please try again later.");
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <section className="bg-greenish ">
            <div className="max-w-3xl mx-auto pb-18 px-6">
                <h2 className="text-cream font-mageline text-5xl font-semibold mb-6">Contact Form</h2>
                <form ref={formRef} className="space-y-4" onSubmit={handleSubmit}>
                    <div>
                        <label className="block text-cream mb-2" htmlFor="name">Name</label>
                        <input type="text" id="name" name="name" required className="w-full p-4  bg-cream text-moss-dark focus:outline-none focus:ring-4 focus:ring-cream/20" placeholder="Your Name"
                        />
                    </div>
                    <div>
                        <label className="block text-cream mb-2" htmlFor="name">Mobile</label>
                        <input type="text" id="name" name="name" className="w-full p-4  bg-cream text-moss-dark focus:outline-none focus:ring-4 focus:ring-cream/20" placeholder="Your Mobile Number"
                        />
                    </div>
                    <div>
                        <label className="block text-cream mb-2" htmlFor="email">Email</label>
                        <input type="email" id="email" name="email" className="w-full p-4  bg-cream text-moss-dark focus:outline-none focus:ring-4 focus:ring-cream/20" placeholder="Your Email" />
                    </div>
                    <div>
                        <label className="block text-cream mb-2" htmlFor="message">Message</label>
                        <textarea id="message" name="message" rows={4} required className="w-full p-4  bg-cream focus:outline-none focus:ring-4 focus:ring-cream/20 text-moss-dark" placeholder="Your Message"></textarea>
                    </div>
                    <button type="submit" disabled={isSubmitting} className="bg-[hsl(115,40%,45%)] text-cream px-4 py-2 hover:bg-cream/90 hover:text-moss-dark transition-colors font-semibold">
                        {isSubmitting ? "Sending..." : "Send Message"}
                    </button>
                </form>
                <p className="text-cream mt-4">{result}</p>
            </div>
        </section>
    );
}

export default ContactForm;
