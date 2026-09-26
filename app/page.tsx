"use client";

import dynamic from "next/dynamic";
import {
  ArrowUpRight,
  Code2,
  FileText,
  Github,
  Linkedin,
  Mail,
  MapPin,
  Phone,
  Radio,
  Send,
  Zap,
} from "lucide-react";
import { useEffect, useState } from "react";
import { Nav } from "@/components/layout/Nav";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import {
  experiences,
  profile,
  projects,
  skills,
} from "@/lib/portfolioData";

const ForestScene = dynamic(
  () => import("@/components/jungle/ForestScene").then((m) => m.ForestScene),
  { ssr: false, loading: () => <div className="forest-fallback" aria-hidden="true" /> },
);

type TechIcon = { slug: string; file?: string; invert?: boolean };

const techIcons: Record<string, TechIcon> = {
  "C++": { slug: "cplusplus" },
  Python: { slug: "python" },
  JavaScript: { slug: "javascript" },
  TypeScript: { slug: "typescript" },
  React: { slug: "react" },
  HTML5: { slug: "html5" },
  CSS: { slug: "css3" },
  "Node.js": { slug: "nodejs" },
  "Express.js": { slug: "express", invert: true },
  "REST APIs": { slug: "fastapi" },
  MongoDB: { slug: "mongodb" },
  MySQL: { slug: "mysql" },
  gRPC: { slug: "grpc" },
  Docker: { slug: "docker" },
  Git: { slug: "git" },
  GitHub: { slug: "github", invert: true },
  AWS: { slug: "amazonwebservices", file: "amazonwebservices-original-wordmark" },
  "CI/CD": { slug: "githubactions" },
  "VS Code": { slug: "vscode" },
  Linux: { slug: "linux" },
  JSON: { slug: "json" },
  CMake: { slug: "cmake" },
  WebSockets: { slug: "socketio", invert: true },
};

const SectionTitle = ({ title, accent }: { title: string; accent?: string }) => (
  <div className="section-title">
    <h2>
      {title} {accent && <span>{accent}</span>}
    </h2>
  </div>
);

function TechBadge({ name }: { name: string }) {
  const meta = techIcons[name];
  const file = meta?.file ?? `${meta?.slug}-original`;
  const src = meta ? `https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/${meta.slug}/${file}.svg` : "";
  return (
    <span className="tech-badge">
      {meta ? (
        <img src={src} alt="" className={meta.invert ? "invert" : undefined} width={14} height={14} loading="lazy" />
      ) : (
        <Code2 size={13} />
      )}
      <span>{name}</span>
    </span>
  );
}

const TechTags = ({ items }: { items: readonly string[] }) => (
  <div className="tech-list">
    {items.map((t) => (
      <TechBadge key={t} name={t} />
    ))}
  </div>
);

export default function Home() {
  const [reduceMotion, setReduceMotion] = useState(false);

  useEffect(() => {
    setReduceMotion(window.matchMedia("(prefers-reduced-motion: reduce)").matches);
  }, []);

  return (
    <>
      <ForestScene reduceMotion={reduceMotion} />
      <main>
        <Nav />
        <section id="home" className="hero mist-hero">
          <div className="hero-center">
            <ScrollReveal>
              <h1 className="hero-name">HIMANSHU</h1>
            </ScrollReveal>
            <ScrollReveal delay={0.1}>
              <p className="hero-surname">DESHBHRATAR</p>
            </ScrollReveal>
            <ScrollReveal delay={0.18}>
              <hr className="hero-rule" />
              <p className="hero-tagline">Software Engineer | Backend-leaning dev building AI Systems</p>
            </ScrollReveal>
            <ScrollReveal delay={0.26}>
              <div className="hero-cta">
                <a className="btn-view-work" href="#projects">
                  <i className="firefly-dot" aria-hidden="true" />
                  VIEW WORK
                </a>
                <a className="btn-about" href="#about">
                  ABOUT ME <ArrowUpRight size={14} />
                </a>
              </div>
            </ScrollReveal>
          </div>
        </section>

        <section id="about" className="about-tight">
          <ScrollReveal>
            <SectionTitle title="About" accent="Me" />
            <p className="lead about-lead">
              Holaa amigos, I&apos;m Himanshu, B.Tech grad from NIT Rourkela building software for real-time vehicle
              systems and full-stack applications. I&apos;m drawn to backend systems, AI infras &amp; just digging out
              more of my interests
            </p>
          </ScrollReveal>
        </section>

        <section id="experience">
          <ScrollReveal>
            <SectionTitle title="Experience" />
          </ScrollReveal>
          {experiences.map((job) => (
            <ScrollReveal key={job.company}>
              <div className="timeline">
                <div className="year">{job.year}</div>
                <article className="experience-card">
                  <div>
                    <p className="company">{job.company}</p>
                    <h3>{job.role}</h3>
                    <p className="muted">
                      {job.location} · {job.date}
                    </p>
                    <p>{job.text}</p>
                    <TechTags items={job.tech} />
                    {job.company === "People Tech Group" && (
                      <div className="impact">
                        <Zap size={17} /> 5 ms average latency reduction
                      </div>
                    )}
                  </div>
                </article>
              </div>
            </ScrollReveal>
          ))}
        </section>

        <section id="projects">
          <ScrollReveal>
            <SectionTitle title="Projects" />
          </ScrollReveal>
          <div className="project-list">
            {projects.map((project) => (
              <ScrollReveal key={project.title}>
                <article className="project-card">
                  <div className="project-meta">
                    <p>{project.date}</p>
                    <Radio size={18} />
                  </div>
                  <h3>{project.title}</h3>
                  <h4>{project.subtitle}</h4>
                  <p>{project.description}</p>
                  <TechTags items={project.tech} />
                  <ul>
                    {project.highlights.map((x) => (
                      <li key={x}>{x}</li>
                    ))}
                  </ul>
                  <div className="project-links">
                    <a href={project.githubUrl} target="_blank" rel="noreferrer">
                      <Github size={16} /> GitHub
                    </a>
                    {project.liveUrl ? (
                      <a href={project.liveUrl} target="_blank" rel="noreferrer">
                        Live Demo <ArrowUpRight size={16} />
                      </a>
                    ) : (
                      <span title="Live demo URL not available">
                        Live Demo <ArrowUpRight size={16} />
                      </span>
                    )}
                  </div>
                </article>
              </ScrollReveal>
            ))}
          </div>
        </section>

        <section id="skills">
          <ScrollReveal>
            <SectionTitle title="Skills" />
          </ScrollReveal>
          <div className="skills-grid">
            {skills.map(([name, list], i) => (
              <ScrollReveal key={name} delay={i * 0.07}>
                <article className="skill-card">
                  <Code2 size={21} />
                  <h3>{name}</h3>
                  <div className="tech-list">
                    {list.map((skill) => (
                      <TechBadge key={skill} name={skill} />
                    ))}
                  </div>
                </article>
              </ScrollReveal>
            ))}
          </div>
        </section>

        <section id="contact" className="contact">
          <ScrollReveal>
            <SectionTitle title="Let's Build Something" accent="Great" />
            <p className="lead">Open to opportunities, interesting projects, and software engineering discussions.</p>
            <div className="contact-grid">
              <a href={`mailto:${profile.email}`}>
                <Mail />{" "}
                <span>
                  Email<small>{profile.email}</small>
                </span>
              </a>
              <a href={`tel:${profile.phone.replace(/\s/g, "")}`}>
                <Phone />{" "}
                <span>
                  Phone<small>{profile.phone}</small>
                </span>
              </a>
              <div>
                <MapPin />{" "}
                <span>
                  Location<small>{profile.location}</small>
                </span>
              </div>
            </div>
            <div className="social-links">
              <a href={profile.socials.github} target="_blank" rel="noreferrer">
                <Github size={17} /> GitHub
              </a>
              <a href={profile.socials.linkedin} target="_blank" rel="noreferrer">
                <Linkedin size={17} /> LinkedIn
              </a>
              <a href={profile.resumeUrl} target="_blank" rel="noreferrer">
                <FileText size={17} /> Resume
              </a>
            </div>
            <a className="button primary send" href={`mailto:${profile.email}`}>
              <Send size={17} /> Send Message
            </a>
          </ScrollReveal>
        </section>

        <footer>
          © 2026 Himanshu Deshbhratar. All rights reserved.{" "}
          <span>Built with Next.js & curiosity.</span>
        </footer>
      </main>
    </>
  );
}
