"use client";

import { useEffect } from "react";

export function Motion() {
  useEffect(() => {
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const seen = new WeakSet<Element>();
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          entry.target.classList.add("is-in");
          observer.unobserve(entry.target);
        });
      },
      { threshold: 0.18, rootMargin: "0px 0px -8% 0px" },
    );

    const watch = (node: Element) => {
      if (seen.has(node)) return;
      seen.add(node);
      if (reduce) node.classList.add("is-in");
      else observer.observe(node);
    };

    document.querySelectorAll(".reveal").forEach(watch);
    const changes = new MutationObserver(() => {
      document.querySelectorAll(".reveal").forEach(watch);
    });
    changes.observe(document.body, { childList: true, subtree: true });

    return () => {
      observer.disconnect();
      changes.disconnect();
    };
  }, []);

  return null;
}
