"use client";

import { useEffect, useId, useRef, useState } from "react";

export function DisclosureSection({ eyebrow, countLabel, children }) {
  const panelId = useId();
  const animationFrameRef = useRef(null);
  const [isExpanded, setIsExpanded] = useState(false);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    return () => {
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
    };
  }, []);

  function togglePanel() {
    if (isExpanded) {
      setIsExpanded(false);
      return;
    }

    setIsMounted(true);
    animationFrameRef.current = requestAnimationFrame(() => {
      setIsExpanded(true);
    });
  }

  function handleTransitionEnd(event) {
    if (event.target !== event.currentTarget || isExpanded) {
      return;
    }

    setIsMounted(false);
  }

  return (
    <section className="surface-card rounded-[1.75rem] border border-[color:rgba(24,21,18,0.1)] px-5 py-5 sm:px-7">
      <button
        aria-controls={panelId}
        aria-expanded={isExpanded}
        className="flex w-full cursor-pointer items-center justify-between gap-4 text-left"
        onClick={togglePanel}
        type="button"
      >
        <span>
          <span className="eyebrow block">{eyebrow}</span>
          <span className="mt-3 block text-sm uppercase tracking-[0.16em] text-[color:var(--muted)]">
            {countLabel}
          </span>
        </span>
        <span
          aria-hidden="true"
          className={[
            "disclosure-icon inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-[color:rgba(24,21,18,0.12)] text-[color:var(--muted)] transition-transform duration-300",
            isExpanded ? "disclosure-icon-open" : ""
          ].join(" ")}
        >
          <svg
            className="h-4 w-4"
            fill="none"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M6 9L12 15L18 9"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="1.6"
            />
          </svg>
        </span>
      </button>

      <div
        aria-hidden={!isExpanded}
        className={[
          "disclosure-panel",
          isExpanded ? "disclosure-panel-open" : ""
        ].join(" ")}
        id={panelId}
        inert={!isExpanded}
        onTransitionEnd={handleTransitionEnd}
      >
        <div className="disclosure-panel-inner">{isMounted ? children : null}</div>
      </div>
    </section>
  );
}
