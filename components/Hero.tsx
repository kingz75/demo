"use client";

import Link from "next/link";
import { useReveal } from "@/hooks/useReveal";

export default function Hero() {
    const containerRef = useReveal();

    return (
        <section className="hero grid grid-cols-1 lg:grid-cols-[1.02fr_0.98fr] gap-6 lg:gap-8 pt-12 lg:pt-20 pb-0 px-0" id="hero" ref={containerRef}>
            <div className="hero-copy reveal relative space-y-6 lg:space-y-8">
                <p className="eyebrow text-amber-deep font-extrabold tracking-[0.14em] uppercase text-[0.7rem] lg:text-[0.76rem]">
                    QR Ordering For Modern Dining
                </p>
                <h1 className="font-fraunces font-semibold leading-[0.98] tracking-[-0.04em] text-[clamp(2.2rem,8vw,3.4rem)] lg:text-[clamp(2.8rem,6vw,5.5rem)] lg:max-w-[12ch]">
                    From table scan to payment, every order moves through one connected restaurant system.
                </h1>
                <p className="hero-text text-muted text-[1rem] lg:text-[1.08rem] leading-[1.72] max-w-[36rem]">
                    Customers scan a unique QR code linked to their table, browse a rich mobile menu, and place orders instantly.
                    The kitchen receives live order flow, while admins track tables, payments, inventory, invoices, and daily performance from one dashboard.
                </p>
                <div className="hero-actions flex flex-col lg:flex-row gap-4 mt-6 lg:mt-8">
                    <Link href="#features" className="button-solid inline-flex items-center justify-center min-h-[3.2rem] w-full lg:w-auto px-[1.5rem] py-[0.85rem] rounded-full bg-gradient-to-br from-[#2a211b] to-[#4a2e22] text-[#fff8ef] font-bold shadow-[0_16px_30px_rgba(42,33,27,0.22)] transition-all hover:-translate-y-[1px]">
                        Explore Features
                    </Link>
                    <Link href="#results" className="button-link inline-flex items-center justify-center min-h-[3.2rem] w-full lg:w-auto py-[0.85rem] px-0 text-text font-bold transition-all hover:translate-x-1">
                        See Impact
                    </Link>
                </div>
                <ul className="hero-points grid gap-[0.6rem] lg:gap-[0.8rem] mt-[1.5rem] lg:mt-[2.1rem] p-0 list-none" aria-label="Key benefits">
                    {[
                        "Each table gets a unique QR code that opens a mobile ordering experience",
                        "Admins see live orders, table numbers, payment status, sales, and inventory",
                        "Guests can pay now with Paystack or Flutterwave, or place orders and pay later"
                    ].map((point, i) => (
                        <li key={i} className="flex items-center gap-[0.8rem] text-muted text-[0.9rem] lg:text-[0.95rem]">
                            <span className="w-[0.7rem] h-[0.7rem] rounded-full bg-gradient-to-br from-amber to-red shrink-0" />
                            {point}
                        </li>
                    ))}
                </ul>
            </div>

            <div className="hero-stage reveal grid grid-cols-1 lg:grid-cols-[1fr_.55fr] items-stretch gap-5 relative group">
                <div className="device-card device-main p-4 lg:p-[1.4rem] border border-[rgba(64,39,19,0.09)] rounded-[1.25rem] lg:rounded-3xl bg-gradient-to-b from-[rgba(255,249,241,0.9)] to-[rgba(255,245,233,0.72)] shadow-premium overflow-hidden">
                    <div className="device-head flex items-center justify-between gap-4 text-muted text-[0.92rem]">
                        <span>Restaurant solution snapshot</span>
                        <span className="status-pill px-[0.75rem] py-[0.45rem] rounded-full bg-[rgba(46,143,102,0.11)] text-green font-bold text-[0.82rem]">Live Service</span>
                    </div>
                    <div className="metric-row grid grid-cols-1 lg:grid-cols-1 gap-3 mt-3 lg:mt-[1.35rem]">
                        {[
                            { val: "100+", label: "dishes presented with detailed descriptions, imagery, and dietary tags in the customer experience" },
                            { val: "Live", label: "admin visibility into table numbers, ordered items, payment statuses, sales, and inventory" },
                            { val: "2 Ways", label: "payment flexibility through online checkout or Pay Later handling with tracked settlement" }
                        ].map((m, i) => (
                            <article key={i} className="p-4 lg:p-[1.15rem] rounded-[1.1rem] bg-[rgba(255,255,255,0.5)] border border-[rgba(64,39,19,0.06)]">
                                <strong className="block text-[1.4rem] font-extrabold tracking-[-0.04em] leading-tight">{m.val}</strong>
                                <span className="block mt-1 text-muted text-[0.8rem] leading-snug">{m.label}</span>
                            </article>
                        ))}
                    </div>
                    <div className="service-flow grid gap-[0.75rem] lg:gap-[0.9rem] mt-4">
                        {[
                            { label: "Customer", accent: "text-green", title: "Scan, browse, and order", text: "The mobile web app lets diners view the menu, add items, change quantities, and leave special instructions." },
                            { label: "Kitchen", accent: "text-red", title: "Receive live ticket updates", text: "Orders reach the kitchen in real time so preparation starts quickly and status changes can be reflected across the system." },
                            { label: "Admin", accent: "text-amber-deep", title: "Track every order and payment", text: "Managers monitor table activity, order details, payment progress, and performance without switching between tools." }
                        ].map((f, i) => (
                            <div key={i} className="flow-card p-4 lg:p-[1.1rem] rounded-[1.15rem] bg-[rgba(255,255,255,0.56)] border border-[rgba(64,39,19,0.06)]">
                                <span className={`flow-label block mb-2 text-[0.74rem] font-extrabold tracking-[0.14em] uppercase ${f.accent}`}>{f.label}</span>
                                <strong className="block mb-2 text-base lg:text-[1.12rem] text-text">{f.title}</strong>
                                <p className="text-muted text-[0.9rem] leading-[1.6]">{f.text}</p>
                            </div>
                        ))}
                    </div>
                </div>

                <aside className="device-card device-side self-end hidden lg:flex flex-col p-[1.2rem] border border-[rgba(64,39,19,0.09)] rounded-3xl bg-gradient-to-b from-[rgba(255,249,241,0.9)] to-[rgba(255,245,233,0.72)] shadow-premium overflow-hidden">
                    <div className="device-head flex items-center justify-between gap-4 text-muted text-[0.92rem]">
                        <span>Payment Status</span>
                        <span>7:30 PM</span>
                    </div>
                    <div className="table-grid grid grid-cols-2 gap-[0.8rem] mt-[1.4rem]">
                        {[
                            "shadow-[inset_0_0_0_10px_rgba(203,90,66,0.2)]",
                            "shadow-[inset_0_0_0_10px_rgba(241,169,59,0.18)]",
                            "shadow-[inset_0_0_0_10px_rgba(46,143,102,0.16)]",
                            "shadow-[inset_0_0_0_10px_rgba(203,90,66,0.2)]",
                            "shadow-[inset_0_0_0_10px_rgba(46,143,102,0.16)]",
                            "shadow-[inset_0_0_0_10px_rgba(241,169,59,0.18)]"
                        ].map((shadow, i) => (
                            <span key={i} className={`aspect-square rounded-[1.4rem] border border-[rgba(64,39,19,0.08)] bg-[rgba(255,255,255,0.58)] ${shadow}`} />
                        ))}
                    </div>
                    <div className="legend grid gap-[0.65rem] mt-4 text-muted text-[0.88rem]">
                        {[
                            { color: "bg-[rgba(46,143,102,0.65)]", label: "Paid" },
                            { color: "bg-[rgba(241,169,59,0.75)]", label: "Pay Later" },
                            { color: "bg-[rgba(203,90,66,0.75)]", label: "Pending" }
                        ].map((item, i) => (
                            <span key={i} className="flex items-center gap-2">
                                <i className={`w-3 h-3 rounded-full ${item.color}`} /> {item.label}
                            </span>
                        ))}
                    </div>
                </aside>
            </div>
        </section>
    );
}
