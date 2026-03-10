"use client";

import { useEffect, useRef } from "react";

export function useReveal() {
    const containerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const revealItems = containerRef.current?.querySelectorAll(".reveal");
        if (!revealItems) return;

        const revealObserver = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (!entry.isIntersecting) return;
                    (entry.target as HTMLElement).classList.add("is-visible");
                    revealObserver.unobserve(entry.target);
                });
            },
            {
                threshold: 0.16,
                rootMargin: "0px 0px -40px 0px",
            }
        );

        revealItems.forEach((item, index) => {
            (item as HTMLElement).style.transitionDelay = `${Math.min(index * 70, 320)}ms`;
            revealObserver.observe(item);
        });

        return () => {
            revealObserver.disconnect();
        };
    }, []);

    return containerRef;
}
