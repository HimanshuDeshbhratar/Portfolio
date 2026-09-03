"use client";
import { Menu, X, Sparkles } from "lucide-react";
import { useState } from "react";
const links = ["Home", "About", "Experience", "Projects", "Skills", "Achievements", "Contact"];
export function Nav({ onChat }: { onChat: () => void }) {
 const [open, setOpen] = useState(false);
 const jump = (label: string) => { document.getElementById(label.toLowerCase())?.scrollIntoView({ behavior: "smooth" }); setOpen(false); };
 return <header className="nav"><a href="#home" className="brand">HIMANSHU<span>.dev</span></a><nav className={open ? "links open" : "links"}>{links.map(l => <button key={l} onClick={() => jump(l)}>{l}</button>)}<button className="chat-mini" onClick={onChat}><Sparkles size={15}/> Ask Himanshu AI</button></nav><button className="menu" aria-label="Toggle navigation" onClick={() => setOpen(!open)}>{open ? <X/> : <Menu/>}</button></header>;
}
