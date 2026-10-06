const links = [
  {
    label: "Instagram",
    href: "https://www.instagram.com/jeremygross.arw",
    icon: (
      <>
        <rect x="3" y="3" width="18" height="18" rx="5" />
        <circle cx="12" cy="12" r="4" />
        <circle cx="17.3" cy="6.7" r="0.6" fill="currentColor" />
      </>
    ),
  },
  {
    label: "TikTok",
    href: "https://www.tiktok.com/@grossjeremy",
    icon: (
      <path d="M13 3v11.5a3.5 3.5 0 1 1-3.5-3.5M13 3c.4 2.6 2.4 4.6 5 5" />
    ),
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/j%C3%A9r%C3%A9my-gross/",
    icon: (
      <>
        <rect x="3" y="3" width="18" height="18" rx="2" />
        <path d="M8 10.5V16M8 7.6v.1M11.5 16v-5.5M11.5 13c0-1.7 1-2.6 2.3-2.6s2.2.9 2.2 2.6V16" />
      </>
    ),
  },
];

export default function SocialLinks({ tabIndex }: { tabIndex?: number }) {
  return (
    <ul className="socials">
      {links.map((l) => (
        <li key={l.label}>
          <a
            href={l.href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={l.label}
            tabIndex={tabIndex}
          >
            <svg
              viewBox="0 0 24 24"
              width="14"
              height="14"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
            >
              {l.icon}
            </svg>
          </a>
        </li>
      ))}
    </ul>
  );
}
