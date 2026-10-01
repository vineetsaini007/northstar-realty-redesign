import { Menu, X } from "lucide-react";
import { useState } from "react";

export default function Header({ onContact }: { onContact: () => void }) {
  const [open, setOpen] = useState(false);
  const close = () => setOpen(false);
  return <header className="site-header" id="top">
    <a href="#top" className="brand" onClick={close}><span className="brand-mark">✦</span><span>NORTHSTAR<span>REALTY</span></span></a>
    <button className="mobile-menu" aria-label={open ? "Close menu" : "Open menu"} aria-expanded={open} onClick={() => setOpen(!open)}>{open ? <X /> : <Menu />}</button>
    <nav className={open ? "header-nav open" : "header-nav"} aria-label="Main navigation">
      <a href="#homes" onClick={close}>Explore homes</a><a href="#approach" onClick={close}>Our approach</a><a href="#team" onClick={close}>Our team</a><a href="#redesign" onClick={close}>The redesign</a>
      <button className="nav-contact" onClick={() => { close(); onContact(); }}>Let’s talk</button>
    </nav>
  </header>;
}
