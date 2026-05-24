const contacts = [
  { label: "Email", value: "alexanderchieng@gmail.com", href: "mailto:alexanderchieng@gmail.com" },
  { label: "Instagram", value: "@alex__chieng", href: "https://www.instagram.com/alex__chieng/" },
  { label: "SoundCloud", value: "alex c", href: "https://soundcloud.com/chiengchiengchieng" }
];

export const metadata = {
  title: "Contact | Alexander Chieng"
};

export default function ContactPage() {
  return (
    <section className="section-stack">
      <p className="eyebrow">Contact</p>
      <h1 className="page-title mt-3">start a project</h1>
      <p className="body-copy mt-5 max-w-2xl">
        feel free to reach out if you have a project in mind, want to collaborate, or just want to say hi. 
      </p>

      <div className="mt-14 grid gap-x-10 gap-y-12 lg:grid-cols-3">
        {contacts.map((item) => (
          <a
            className="surface-card block"
            href={item.href}
            key={item.label}
          >
            <span className="eyebrow">{item.label}</span>
            <p className="mt-4 text-lg text-[color:var(--muted)] underline decoration-[0.08em] underline-offset-[0.55rem]">
              {item.value}
            </p>
          </a>
        ))}
      </div>
    </section>
  );
}
