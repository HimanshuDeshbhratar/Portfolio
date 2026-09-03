"use client";
import { Bot, Send, X, Sparkles } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { demoAnswer } from "@/lib/portfolioData";
type Msg = { role: "bot" | "user"; text: string };
const prompts = ["What did you work on at People Tech Group?", "Tell me about the vehicle telemetry project", "What technologies do you work with?", "What projects have you built?"];
export function Chat({ open, onClose }: { open: boolean; onClose: () => void }) {
 const [messages, setMessages] = useState<Msg[]>([{ role: "bot", text: "Ask me anything about Himanshu’s experience, projects, skills, or achievements." }]);
 const [value, setValue] = useState(""); const [thinking, setThinking] = useState(false); const end = useRef<HTMLDivElement>(null);
 useEffect(() => end.current?.scrollIntoView({ behavior: "smooth" }), [messages, thinking]);
 const send = (question = value) => { if (!question.trim() || thinking) return; setMessages(m => [...m, { role: "user", text: question }]); setValue(""); setThinking(true); window.setTimeout(() => { setMessages(m => [...m, { role: "bot", text: demoAnswer(question) }]); setThinking(false); }, 450); };
 if (!open) return null;
 return <aside className="chat-panel" aria-label="Ask Himanshu AI"><div className="chat-header"><span><Bot size={20}/><b>Himanshu AI</b><small>● Online</small></span><button onClick={onClose} aria-label="Close chat"><X size={19}/></button></div><div className="messages">{messages.map((m, i) => <div key={i} className={`message ${m.role}`}>{m.text}</div>)}{thinking && <div className="message bot typing"><i/><i/><i/></div>}<div ref={end}/></div>{messages.length < 3 && <div className="suggestions">{prompts.map(p => <button key={p} onClick={() => send(p)}>{p}</button>)}</div>}<form className="composer" onSubmit={e => { e.preventDefault(); send(); }}><input aria-label="Ask a question" value={value} onChange={e => setValue(e.target.value)} placeholder="Ask about Himanshu…"/><button aria-label="Send message" type="submit"><Send size={17}/></button></form></aside>;
}
export function ChatLauncher({ onClick }: { onClick: () => void }) { return <button className="chat-launcher" onClick={onClick}><Sparkles size={18}/><span>Ask Himanshu AI</span></button>; }
