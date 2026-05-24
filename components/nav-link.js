"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export function NavLink({ href, children }) {
  const pathname = usePathname();
  const isActive = pathname === href;

  return (
    <Link
      href={href}
      aria-current={isActive ? "page" : undefined}
      className={[
        "px-0 py-2 text-[0.72rem] uppercase tracking-[0.22em] transition duration-200",
        isActive
          ? "text-[color:var(--text)] underline decoration-[0.08em] underline-offset-[0.55rem]"
          : "text-[color:var(--muted)] hover:text-[color:var(--text)]"
      ].join(" ")}
    >
      {children}
    </Link>
  );
}
