import Link from "next/link";
import { NavLink } from "@/components/nav-link";

const links = [
  { href: "/about", label: "About" },
  { href: "/music", label: "Music" },
  { href: "/contact", label: "Contact" }
];

const socialLinks = [
  {
    href: "https://open.spotify.com/artist/0lp0zwA706jQSaeOWLbczB",
    label: "Spotify",
    icon: SpotifyIcon
  },
  {
    href: "https://www.instagram.com/alex__chieng/",
    label: "Instagram",
    icon: InstagramIcon
  },
  {
    href: "https://soundcloud.com/chiengchiengchieng",
    label: "SoundCloud",
    icon: SoundCloudIcon
  }
];

export function SiteHeader() {
  return (
    <header className="panel-frame sticky top-3 z-20 py-1">
      <div className="flex flex-col gap-5 lg:flex-row lg:items-center lg:gap-8">
        <Link className="inline-flex min-w-0 items-center gap-3" href="/music">
          <span className="h-3 w-3 shrink-0 rounded-full bg-[linear-gradient(135deg,var(--text),var(--accent))]" />
          <span className="grid min-w-0 gap-0.5">
            <strong className="truncate text-[0.86rem] uppercase tracking-[0.18em]">
              Alexander Chieng
            </strong>
          </span>
        </Link>

        <nav
          aria-label="Primary"
          className="flex w-full flex-wrap justify-between gap-x-8 gap-y-2 lg:ml-10 lg:flex-1 lg:gap-x-12"
        >
          {links.map((link) => (
            <NavLink href={link.href} key={link.href}>
              {link.label}
            </NavLink>
          ))}
        </nav>

        <div className="flex items-center gap-4 lg:ml-8 lg:shrink-0">
          {socialLinks.map((link) => {
            const Icon = link.icon;

            return (
              <a
                aria-label={link.label}
                className="text-[color:var(--muted)] transition duration-200 hover:text-[color:var(--text)]"
                href={link.href}
                key={link.label}
                rel="noreferrer"
                target="_blank"
              >
                <Icon className="h-5 w-5" />
              </a>
            );
          })}
        </div>
      </div>
    </header>
  );
}

function SpotifyIcon({ className }) {
  return (
    <svg
      aria-hidden="true"
      className={className}
      fill="none"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="1.5" />
      <path
        d="M7.4 10.2C10.5 9.2 13.7 9.4 16.4 10.9"
        stroke="currentColor"
        strokeLinecap="round"
        strokeWidth="1.5"
      />
      <path
        d="M8.2 13.1C10.6 12.4 12.9 12.6 15 13.8"
        stroke="currentColor"
        strokeLinecap="round"
        strokeWidth="1.5"
      />
      <path
        d="M9.1 15.8C10.7 15.3 12.2 15.5 13.6 16.3"
        stroke="currentColor"
        strokeLinecap="round"
        strokeWidth="1.5"
      />
    </svg>
  );
}

function InstagramIcon({ className }) {
  return (
    <svg
      aria-hidden="true"
      className={className}
      fill="none"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect
        height="14"
        rx="4"
        stroke="currentColor"
        strokeWidth="1.5"
        width="14"
        x="5"
        y="5"
      />
      <circle cx="12" cy="12" r="3.25" stroke="currentColor" strokeWidth="1.5" />
      <circle cx="16.4" cy="7.6" fill="currentColor" r="1" />
    </svg>
  );
}

function SoundCloudIcon({ className }) {
  return (
    <svg
      aria-hidden="true"
      className={className}
      fill="none"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M7 16.8H18.1C19.7 16.8 21 15.5 21 13.9C21 12.4 19.9 11.2 18.5 11.1C18.3 8.8 16.4 7 14 7C12.4 7 11 7.7 10.1 8.9C9.7 8.7 9.3 8.6 8.9 8.6C7.4 8.6 6.2 9.7 6 11.2C4.8 11.4 4 12.4 4 13.7C4 15.4 5.3 16.8 7 16.8Z"
        stroke="currentColor"
        strokeLinejoin="round"
        strokeWidth="1.5"
      />
      <path
        d="M7 10.5V17.2M8.8 9.5V17.2M10.6 8.9V17.2"
        stroke="currentColor"
        strokeLinecap="round"
        strokeWidth="1.5"
      />
    </svg>
  );
}
