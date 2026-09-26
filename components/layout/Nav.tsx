"use client";

import { ArrowUpRight, Menu, X } from "lucide-react";
import { useState } from "react";
import { profile } from "@/lib/portfolioData";

const mid = [
  { label: "WORK", id: "projects" },
  { label: "ABOUT", id: "about" },
  { label: "JOURNAL", id: "experience" },
];

export function Nav() {
  const [open, setOpen] = useState(false);
  const jump = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setOpen(false);
  };

  return (
    <header className="nav mist-nav">
      <a href="#home" className="brand-hd">
        H. D.
      </a>

      <nav className={open ? "links mid open" : "links mid"}>
        {mid.map((l) => (
          <button key={l.id} type="button" onClick={() => jump(l.id)}>
            {l.label}
          </button>
        ))}
        <button type="button" className="nav-contact mobile-only" onClick={() => jump("contact")}>
          CONTACT
        </button>
      </nav>

      <div className="nav-right">
        <button type="button" className="nav-contact" onClick={() => jump("contact")}>
          CONTACT
        </button>
        <a
          className="nav-arrow"
          href={profile.resumeUrl}
          target="_blank"
          rel="noreferrer"
          aria-label="Open resume"
        >
          <ArrowUpRight size={16} />
        </a>
      </div>

      <button className="menu" aria-label="Toggle navigation" type="button" onClick={() => setOpen(!open)}>
        {open ? <X /> : <Menu />}
      </button>
    </header>
  );
}
