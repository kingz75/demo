"use client";

import { useReveal } from "@/hooks/useReveal";

export default function FeatureStrip() {
    const containerRef = useReveal();

    const items = [
        { num: "01", title: "Customer Interface", text: "Guests scan a QR code linked to their table and open a mobile-first ordering app without downloading anything." },
        { num: "02", title: "Kitchen Interface", text: "Incoming orders reach the prep team instantly, helping the kitchen work from live requests instead of delayed handoffs." },
        { num: "03", title: "Admin Dashboard", text: "Restaurant managers log in securely to review orders, track sales, manage inventory, and update statuses in real time." },
        { num: "04", title: "Flexible Payments", text: "Support both Pay Now through gateways like Paystack or Flutterwave and Pay Later for smoother dine-in service." }
    ];

    return (
        <section className="feature-strip mt-4 lg:mt-6" ref={containerRef}>
            <div className="reveal grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                {items.map((item, i) => (
                    <article key={i} className="p-4 lg:p-[1.35rem] rounded-[1.25rem] lg:rounded-3xl bg-[rgba(255,250,244,0.72)] border border-[rgba(64,39,19,0.08)] shadow-premium">
                        <span className="block mb-[0.8rem] text-[0.76rem] font-extrabold tracking-[0.14em] uppercase text-amber-deep">{item.num}</span>
                        <strong className="block text-base lg:text-[1.1rem] font-bold text-text">{item.title}</strong>
                        <p className="mt-[0.6rem] text-muted text-[0.9rem] lg:text-[0.95rem] leading-[1.6]">{item.text}</p>
                    </article>
                ))}
            </div>
        </section>
    );
}
