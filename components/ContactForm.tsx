"use client";

import { useState, useRef } from "react";
import { useReveal } from "@/hooks/useReveal";

declare global {
    interface Window {
        emailjs: any;
    }
}

export default function ContactForm() {
    const containerRef = useReveal();
    const formRef = useRef<HTMLFormElement>(null);
    const [status, setStatus] = useState("Request a Demo");
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [placeholder, setPlaceholder] = useState("Enter your work email");

    const EMAILJS_PUBLIC_KEY = "L2M0lBn79hjMs2xdc";
    const EMAILJS_SERVICE_ID = "service_e2zc5i9";
    const EMAILJS_TEMPLATE_ID = "template_xsgkr0p";

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!formRef.current) return;

        setIsSubmitting(true);
        setStatus("Sending...");

        try {
            if (!window.emailjs) {
                const script = document.createElement("script");
                script.src = "https://cdn.jsdelivr.net/npm/@emailjs/browser@4/dist/email.min.js";
                script.onload = () => {
                    window.emailjs.init(EMAILJS_PUBLIC_KEY);
                    sendForm();
                };
                document.head.appendChild(script);
            } else {
                sendForm();
            }
        } catch (error) {
            console.error("EmailJS error:", error);
            setStatus("Error - Try Again");
            setIsSubmitting(false);
        }
    };

    const sendForm = async () => {
        try {
            await window.emailjs.sendForm(EMAILJS_SERVICE_ID, EMAILJS_TEMPLATE_ID, formRef.current);
            setStatus("Sent Successfully!");
            setPlaceholder("Thanks, we'll be in touch.");
            formRef.current?.reset();
        } catch (error) {
            console.error("EmailJS send error:", error);
            setStatus("Error - Try Again");
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <section className="cta py-8 lg:py-14 scroll-mt-20" id="contact" ref={containerRef}>
            <div className="cta-card reveal flex flex-col lg:flex-row items-center justify-between gap-6 lg:gap-8 p-4 lg:p-[1.7rem] border border-[rgba(64,39,19,0.08)] rounded-[1.25rem] lg:rounded-3xl bg-[rgba(255,250,244,0.72)] shadow-premium">
                <div className="flex-1 min-w-0">
                    <p className="eyebrow text-amber-deep font-extrabold tracking-[0.14em] uppercase text-[0.76rem]">See The Full Flow</p>
                    <h2 className="font-fraunces font-semibold leading-[1.1] tracking-[-0.04em] text-[clamp(1.8rem,4vw,3.5rem)] text-text">
                        Book a walkthrough of QR ordering, admin control, kitchen flow, and flexible payment.
                    </h2>
                </div>
                <form className="cta-form flex flex-col md:flex-row items-center gap-[0.8rem] w-full lg:max-w-[29rem]" ref={formRef} onSubmit={handleSubmit}>
                    <label className="sr-only" htmlFor="email">Email address</label>
                    <input
                        id="email"
                        name="email"
                        type="email"
                        required
                        placeholder={placeholder}
                        className="w-full min-h-[3.2rem] px-[1rem] py-[0.85rem] border border-[rgba(64,39,19,0.12)] rounded-full bg-[rgba(255,255,255,0.82)] text-text focus:outline-none focus:ring-2 focus:ring-amber/55 focus:ring-offset-2"
                    />
                    <button
                        className="button-solid w-full md:w-auto inline-flex items-center justify-center min-h-[3.2rem] px-[1.5rem] py-[0.85rem] rounded-full bg-gradient-to-br from-[#2a211b] to-[#4a2e22] text-[#fff8ef] font-bold shadow-[0_16px_30px_rgba(42,33,27,0.22)] transition-all hover:-translate-y-[1px] disabled:opacity-70"
                        type="submit"
                        disabled={isSubmitting}
                    >
                        {status}
                    </button>
                </form>
            </div>
        </section>
    );
}
