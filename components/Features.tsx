"use client";

import { useReveal } from "@/hooks/useReveal";

export default function Features() {
    const containerRef = useReveal();

    const features = [
        {
            title: "QR Access By Table",
            text: "Every table uses a unique QR code so the system knows exactly where an order is coming from the moment the customer opens the mobile interface.",
            icon: (
                <svg viewBox="0 0 48 48" className="w-[1.7rem] h-[1.7rem] stroke-text fill-none stroke-2 stroke-linecap-round stroke-linejoin-round">
                    <path d="M15 6v12m18-12v12M9 18h30v18a6 6 0 0 1-6 6H15a6 6 0 0 1-6-6V18Z" />
                </svg>
            )
        },
        {
            title: "Rich Mobile Menu",
            text: "Customers can browse more than 100 dishes with descriptions, photos, and dietary tags in a layout that is easy to navigate on mobile devices.",
            icon: (
                <svg viewBox="0 0 48 48" className="w-[1.7rem] h-[1.7rem] stroke-text fill-none stroke-2 stroke-linecap-round stroke-linejoin-round">
                    <path d="M12 10h24a4 4 0 0 1 4 4v20a4 4 0 0 1-4 4H12a4 4 0 0 1-4-4V14a4 4 0 0 1 4-4Z" />
                    <path d="M16 18h16M16 24h10M16 30h8" />
                </svg>
            )
        },
        {
            title: "Cart, Quantities, Instructions",
            text: "Diners can add items to cart, adjust quantities, and leave special instructions before sending the order straight into the restaurant workflow.",
            icon: (
                <svg viewBox="0 0 48 48" className="w-[1.7rem] h-[1.7rem] stroke-text fill-none stroke-2 stroke-linecap-round stroke-linejoin-round">
                    <path d="M10 24h28M24 10v28" />
                    <circle cx="24" cy="24" r="16" />
                </svg>
            )
        },
        {
            title: "Kitchen Order Flow",
            text: "The kitchen interface receives orders in real time, helping the team stay aligned on what needs to be prepared and what is already moving through service.",
            icon: (
                <svg viewBox="0 0 48 48" className="w-[1.7rem] h-[1.7rem] stroke-text fill-none stroke-2 stroke-linecap-round stroke-linejoin-round">
                    <path d="M10 34c4-8 8-12 14-12s10 4 14 12" />
                    <circle cx="17" cy="18" r="4" />
                    <circle cx="31" cy="18" r="4" />
                </svg>
            )
        },
        {
            title: "Admin Control Center",
            text: "Admins can review table numbers, items ordered, payment statuses, daily sales, inventory levels, invoices, and order progress from one secure dashboard.",
            icon: (
                <svg viewBox="0 0 48 48" className="w-[1.7rem] h-[1.7rem] stroke-text fill-none stroke-2 stroke-linecap-round stroke-linejoin-round">
                    <path d="M12 34V14m12 20V8m12 26V20" />
                </svg>
            )
        },
        {
            title: "Pay Now Or Pay Later",
            text: "Customers can pay immediately through Paystack or Flutterwave using cards, transfers, or USSD, or choose Pay Later while admins track the payment state.",
            icon: (
                <svg viewBox="0 0 48 48" className="w-[1.7rem] h-[1.7rem] stroke-text fill-none stroke-2 stroke-linecap-round stroke-linejoin-round">
                    <path d="M14 16h20v18H14z" />
                    <path d="M18 22h12M18 28h8" />
                    <path d="M18 10h12" />
                </svg>
            )
        }
    ];

    return (
        <section className="features py-6 lg:py-10 scroll-mt-20" id="features" ref={containerRef}>
            <div className="section-heading reveal grid gap-[0.9rem] max-w-[40rem] mb-10 lg:mb-12">
                <p className="eyebrow text-amber-deep font-extrabold tracking-[0.14em] uppercase text-[0.76rem]">Core Features</p>
                <h2 className="font-fraunces font-semibold leading-[1.1] tracking-[-0.04em] text-[clamp(2rem,4.8vw,4.4rem)] text-text">
                    The experience is built around live ordering, clear management, and stress-free payment.
                </h2>
                <p className="text-muted text-[0.95rem] lg:text-[1.05rem] leading-[1.72]">
                    These features reflect the actual restaurant flow: a diner scans, places an order, the kitchen receives it, and management can track service and payment from one place.
                </p>
            </div>

            <div className="feature-grid grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {features.map((f, i) => (
                    <article key={i} className="reveal p-5 lg:p-6 border border-[rgba(64,39,19,0.08)] rounded-[1.25rem] lg:rounded-3xl bg-[rgba(255,250,244,0.72)] shadow-premium min-h-0 lg:min-h-[18rem]">
                        <div className="icon-wrap w-[2.8rem] h-[2.8rem] lg:w-[3.4rem] lg:h-[3.4rem] grid place-items-center mb-4 lg:mb-6 rounded-2xl bg-gradient-to-br from-[rgba(241,169,59,0.15)] to-[rgba(203,90,66,0.1)]">
                            {f.icon}
                        </div>
                        <h3 className="text-base lg:text-[1.12rem] font-bold mb-2 text-text">{f.title}</h3>
                        <p className="text-muted text-[0.9rem] lg:text-[0.95rem] leading-[1.72]">{f.text}</p>
                    </article>
                ))}
            </div>
        </section>
    );
}
