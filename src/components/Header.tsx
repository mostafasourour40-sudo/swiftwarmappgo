import Link from "next/link";

export function Header() {
  const links = [
    ["الرئيسية", "/"],
    ["Mind", "/mind"],
    ["Space", "/space"],
    ["Media", "/media"],
    ["Objects", "/objects"],
    ["Experiences", "/experiences"],
  ];

  return (
    <header className="site-header">
      <div className="container header-inner">
        <Link href="/" className="site-brand">SwiftWarm</Link>
        <nav className="header-nav" aria-label="التنقل الرئيسي">
          {links.map(([label, href]) => (
            <Link key={href} href={href}>{label}</Link>
          ))}
        </nav>
        <Link href="/compass" className="header-cta">ابدأ رحلتك</Link>
      </div>
    </header>
  );
}
