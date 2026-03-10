"use client";

import { useReveal } from "@/hooks/useReveal";

export default function Results() {
    const containerRef = useReveal();

    return (
        <section className="results py-8 lg:py-14 scroll-mt-20" id="results" ref={containerRef}>
            {/* <div className="section-heading reveal grid gap-[0.9rem] max-w-[40rem] mb-10 lg:mb-12">
                <p className="eyebrow text-amber-deep font-extrabold tracking-[0.14em] uppercase text-[0.76rem]">Platform Highlights</p>
                <h2 className="font-fraunces font-semibold leading-[1.1] tracking-[-0.04em] text-[clamp(2rem,4.8vw,4.4rem)] text-text">
                    The system is designed around the real operational details that matter in a restaurant.
                </h2>
            </div> */}

            <div className="results-layout grid grid-cols-1 lg:grid-cols-[1fr_0.72fr] gap-4 mt-6 lg:mt-8">
                <div className="results-metrics reveal grid grid-cols-1 md:grid-cols-3 gap-4 p-4 border border-[rgba(64,39,19,0.08)] rounded-[1.25rem] lg:rounded-3xl bg-[rgba(255,250,244,0.72)] shadow-premium">
                    {[
                        // { val: "70+", text: "dishes presented with detailed descriptions, imagery, and dietary tags in the customer experience" },
                        // { val: "Live", text: "admin visibility into table numbers, ordered items, payment statuses, sales, and inventory" },
                        // { val: "2 Modes", text: "payment flexibility through online checkout or Pay Later handling with tracked settlement" }
                    ].map((m, i) => (
                        <article key={i} className="p-4 lg:p-[1.15rem] rounded-[1.15rem] bg-[rgba(255,255,255,0.5)] border border-[rgba(64,39,19,0.06)]">
                            <strong className="block text-[1.4rem] lg:text-[1.65rem] font-extrabold tracking-[-0.04em] leading-[1.2]">{m.val}</strong>
                            <span className="block mt-[0.35rem] text-muted text-[0.82rem] lg:text-[0.85rem] leading-[1.45]">{m.text}</span>
                        </article>
                    ))}
                </div>

                <blockquote className="testimonial reveal grid items-center p-5 lg:p-[1.8rem] border border-[rgba(64,39,19,0.08)] rounded-[1.25rem] lg:rounded-3xl bg-gradient-to-b from-[rgba(42,33,27,0.98)] to-[rgba(67,42,31,0.96)] text-[#fff5ea] shadow-premium">
                    <p className="text-[1rem] lg:text-[1.15rem] text-[rgba(255,245,234,0.84)] leading-[1.72] m-0">
                        &quot;A diner can scan, order, and check out from the table, while the restaurant keeps full control of orders, payments, and operational visibility in the background.&quot;
                    </p>
                </blockquote>
            </div>
        </section>
    );
}
