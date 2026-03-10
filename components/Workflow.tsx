"use client";

import { useReveal } from "@/hooks/useReveal";

export default function Workflow() {
    const containerRef = useReveal();

    const steps = [
        { step: "Step 1", title: "Scan the table QR", text: "Customers scan the unique QR code assigned to their table and open the mobile ordering page instantly." },
        { step: "Step 2", title: "Browse and place the order", text: "Diners review dishes, add items to cart, adjust quantities, enter instructions, and send the order in real time." },
        { step: "Step 3", title: "Kitchen and admin respond live", text: "The kitchen receives the request for preparation while the admin dashboard records the table, items, and payment state." },
        { step: "Step 4", title: "Pay now or settle later", text: "Customers can complete payment online immediately or choose Pay Later, and admins can mark and track settlement afterward." }
    ];

    return (
        <section className="workflow py-8 lg:py-14 scroll-mt-20" id="workflow" ref={containerRef}>
            <div className="workflow-panel reveal grid grid-cols-1 lg:grid-cols-[0.95fr_1.05fr] gap-[1.4rem] p-4 lg:p-[1.6rem] border border-[rgba(64,39,19,0.08)] rounded-[1.25rem] lg:rounded-3xl bg-[rgba(255,250,244,0.72)] shadow-premium">
                <div className="workflow-copy p-3 lg:p-[1.2rem] space-y-4">
                    <p className="eyebrow text-amber-deep font-extrabold tracking-[0.14em] uppercase text-[0.76rem]">Connected Workflow</p>
                    <h2 className="font-fraunces font-semibold leading-[1.1] tracking-[-0.04em] text-[clamp(1.8rem,4vw,3.8rem)] text-text">
                        Simple for diners, controlled for staff.
                    </h2>
                    <p className="text-muted text-[0.95rem] lg:text-[1.05rem] leading-[1.72]">
                        The platform keeps the customer journey straightforward while giving the restaurant team real-time visibility from order placement to payment confirmation.
                    </p>
                </div>
                <div className="workflow-steps grid gap-3 lg:gap-4">
                    {steps.map((s, i) => (
                        <article key={i} className="p-4 lg:p-[1.25rem] rounded-[1.25rem] lg:rounded-[1.5rem] bg-[rgba(255,255,255,0.52)] border border-[rgba(64,39,19,0.06)]">
                            <span className="block mb-2 text-[0.76rem] font-extrabold tracking-[0.14em] uppercase text-amber-deep">{s.step}</span>
                            <h3 className="text-base lg:text-[1.12rem] font-bold mb-2 text-text">{s.title}</h3>
                            <p className="text-muted text-[0.88rem] lg:text-[0.92rem] leading-[1.65] m-0">{s.text}</p>
                        </article>
                    ))}
                </div>
            </div>

            <blockquote className="testimonial reveal grid items-center p-5 lg:p-[1.8rem] border border-[rgba(64,39,19,0.08)] rounded-[1.25rem] lg:rounded-3xl bg-gradient-to-b from-[rgba(42,33,27,0.98)] to-[rgba(67,42,31,0.96)] text-[#fff5ea] shadow-premium mt-4">
                <p className="text-[1rem] lg:text-[1.15rem] lg:text-center text-[rgba(255,245,234,0.84)] leading-[1.72] m-0">
                    &quot;A diner can scan, order, and check out from the table, while the restaurant keeps full control of orders, payments, and operational visibility in the background.&quot;
                </p>
            </blockquote>
        </section>
    );
}
