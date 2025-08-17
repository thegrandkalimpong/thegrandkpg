"use client";

import React, { useState, useRef } from "react";

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
        formData.append("access_key", "dad0fc62-891e-4395-9987-5f28dfc44b33");

        try {
            const response = await fetch("https://api.web3forms.com/submit", {
                method: "POST",
                body: formData,
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
        <section className="bg-greenish mt-24 max-w-none">
            <div className="mx-auto max-w-3xl px-6 py-18">
                <h2 className="text-cream mb-16">Have a question? Reach out!</h2>
                <form
                    ref={formRef}
                    className="space-y-4"
                    onSubmit={handleSubmit}
                >
                    <div>
                        <label htmlFor="name">Name</label>
                        <input
                            type="text"
                            id="name"
                            name="name"
                            required
                            className=""
                            placeholder="Your Name"
                        />
                    </div>
                    <div>
                        <label htmlFor="name">Mobile</label>
                        <input
                            type="text"
                            id="name"
                            name="name"
                            className=""
                            placeholder="Your Mobile Number"
                        />
                    </div>
                    <div>
                        <label htmlFor="email">Email</label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            className=""
                            placeholder="Your Email"
                        />
                    </div>
                    <div>
                        <label htmlFor="message">Message</label>
                        <textarea
                            id="message"
                            name="message"
                            rows={4}
                            required
                            className=""
                            placeholder="Your Message"
                        ></textarea>
                    </div>
                    <button
                        type="submit"
                        className="submit-button"
                        disabled={isSubmitting}
                    >
                        {isSubmitting ? "Sending..." : "Send Message"}
                    </button>
                </form>
                <p className="text-cream mt-4">{result}</p>
            </div>
        </section>
    );
};

export default ContactForm;
