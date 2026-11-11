"use client";
import { useEffect, useRef } from "react";

export function useReveal(deps: unknown[] = []) {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const nodes = el.querySelectorAll(".reveal, .reveal-left, .reveal-right, .reveal-scale");
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((e) => { if (e.isIntersecting) e.target.classList.add("in-view"); }),
      { threshold: 0.08, rootMargin: "0px 0px -48px 0px" }
    );
    nodes.forEach((n) => observer.observe(n));
    return () => observer.disconnect();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, deps);

  return ref as React.RefObject<HTMLDivElement>;
}
