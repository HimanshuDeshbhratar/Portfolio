"use client";
import { ArrowDownRight, ArrowUpRight, Code2, FileText, Github, GraduationCap, Linkedin, Mail, MapPin, Phone, Radio, Send, Trophy, Zap } from "lucide-react";
import { useState } from "react";
import { Nav } from "@/components/layout/Nav";
import { Chat, ChatLauncher } from "@/components/chat/Chat";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { additionalProjects, education, experience, profile, projectCount, projects, skills } from "@/lib/portfolioData";

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

const SectionTitle = ({ label, title, accent }: { label: string; title: string; accent?: string }) => (
  <div className="section-title">
    <p>{label}</p>
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

function Network() {
  return (
    <div className="network" aria-hidden="true">
      <svg viewBox="0 0 520 370">
        <path className="wire" d="M258 183L105 80M258 183L420 85M258 183L120 288M258 183L426 285" />
        <path className="pulse" d="M258 183L105 80" />
        <path className="pulse p2" d="M258 183L426 285" />
      </svg>
      <div className="core">&lt;/&gt;</div>
      <div className="node n1">AI / AGENTS</div>
      <div className="node n2">
        REAL-TIME
        <br />
        SYSTEMS
      </div>
      <div className="node n3">
        BACKEND
        <br />
        ENGINEERING
      </div>
      <div className="node n4">
        FULL-STACK
        <br />
        DEVELOPMENT
      </div>
    </div>
  );
}

function VehicleArt() {
  return (
    <svg className="vehicle" viewBox="0 0 300 135" aria-label="Line illustration of a vehicle">
      <path d="M25 91h18l14-35 45-15h74l39 15 23 35h25v19h-18m-182 0h139M57 91h180M81 110a18 18 0 1 0 0-36 18 18 0 0 0 0 36Zm127 0a18 18 0 1 0 0-36 18 18 0 0 0 0 36ZM102 56l14-23h52l27 23" />
      <path className="vehicle-data" d="M12 52h62M191 29h95M233 68h55" />
    </svg>
  );
}

function MoodVisual() {
  return (
    <div className="mood-visual">
      <div className="flow">
        <b>FACE</b>
        <span>+</span>
        <b>WEATHER</b>
        <i>→</i>
        <b className="accent-box">LOGIC</b>
        <i>→</i>
        <b>SPOTIFY</b>
      </div>
      <div className="tracks">
        <span>☀ Focus Flow</span>
        <span>☺ Good Day</span>
        <span>~ Ambient Drive</span>
      </div>
    </div>
  );
}

function Telemetry() {
  return (
    <div className="telemetry">
      <div className="live">
        <i /> LIVE <small>UI DEMO DATA</small>
      </div>
      <div className="gauges">
        {[
          ["Engine RPM", "2450"],
          ["Speed", "88 km/h"],
          ["Coolant", "92°C"],
          ["Fuel", "62%"],
        ].map(([l, v]) => (
          <div key={l}>
            <small>{l}</small>
            <b>{v}</b>
          </div>
        ))}
      </div>
      <svg viewBox="0 0 300 70" className="chart">
        <path d="M0 57 C20 49 27 58 45 41 S75 53 95 25 S126 45 151 32 S180 35 196 16 S235 40 260 20 S285 30 300 9" />
      </svg>
    </div>
  );
}

export default function Home() {
  const [chat, setChat] = useState(false);
  return (
    <main>
      <Nav onChat={() => setChat(true)} />
      <section id="home" className="hero">
        <div className="hero-copy">
          <ScrollReveal>
            <p className="eyebrow">
              SOFTWARE ENGINEER <i />
            </p>
          </ScrollReveal>
          <ScrollReveal delay={0.08}>
            <h1>
              HIMANSHU
              <br />
              <span>DESHBHRATAR</span>
            </h1>
          </ScrollReveal>
          <ScrollReveal delay={0.16}>
            <p className="hero-text">Building real-time systems, scalable applications, and intelligent software.</p>
            <div className="hero-actions">
              <a className="button primary" href="#projects">
                Explore My Work <ArrowDownRight size={17} />
              </a>
              <a className="button secondary" href={profile.resumeUrl} target="_blank" rel="noreferrer">
                <FileText size={16} /> View Resume
              </a>
              <a className="button secondary" href="#contact">
                Contact Me
              </a>
            </div>
            <p className="availability">
              <i /> AVAILABLE FOR OPPORTUNITIES
            </p>
            <TechTags items={["C++", "Python", "TypeScript", "React", "Node.js", "MongoDB", "gRPC", "Docker"]} />
          </ScrollReveal>
        </div>
        <ScrollReveal className="hero-network" delay={0.25}>
          <Network />
        </ScrollReveal>
      </section>

      <section id="about">
        <ScrollReveal>
          <SectionTitle label="// ABOUT ME" title="Who I" accent="Am" />
        </ScrollReveal>
        <div className="about-grid">
          <ScrollReveal>
            <p className="lead">
              An engineering student at NIT Rourkela with experience building software for real-time vehicle systems and full-stack applications. I’m interested in backend systems, real-time communication, and intelligent applications.
            </p>
            <div className="metrics small-metrics">
              <div>
                <b>{projectCount}</b>
                <span>Public Projects</span>
              </div>
              <div>
                <b>1</b>
                <span>Internship</span>
              </div>
              <div>
                <b>550+</b>
                <span>DSA Problems</span>
              </div>
            </div>
          </ScrollReveal>
          <ScrollReveal delay={0.1}>
            <article className="education-card">
              <p className="eyebrow">EDUCATION</p>
              {education.map(([name, detail]) => (
                <div className="edu" key={name}>
                  <GraduationCap size={18} />
                  <div>
                    <b>{name}</b>
                    <small>{detail}</small>
                  </div>
                </div>
              ))}
            </article>
          </ScrollReveal>
        </div>
      </section>

      <section id="experience">
        <ScrollReveal>
          <SectionTitle label="// EXPERIENCE" title="Execution" accent="History" />
        </ScrollReveal>
        <ScrollReveal>
          <div className="timeline">
            <div className="year">2025</div>
            <article className="experience-card">
              <div>
                <p className="company">{experience.company}</p>
                <h3>{experience.role}</h3>
                <p className="muted">
                  {experience.location} · {experience.date}
                </p>
                <p>{experience.text}</p>
                <TechTags items={experience.tech} />
                <div className="impact">
                  <Zap size={17} /> 5 ms average latency reduction
                </div>
              </div>
              <VehicleArt />
            </article>
          </div>
        </ScrollReveal>
        <div className="milestones">
          {[
            ["2022", "NIT Rourkela"],
            ["2022", "Sarwashree Junior College"],
            ["2020", "Saraswat Central Public School"],
          ].map(([year, name]) => (
            <div key={name}>
              <b>{year}</b>
              <span>{name}</span>
            </div>
          ))}
        </div>
      </section>

      <section id="projects">
        <ScrollReveal>
          <SectionTitle label="// PROJECTS" title="Deployed" accent="Systems" />
        </ScrollReveal>
        <div className="project-grid">
          {projects.map((project, i) => (
            <ScrollReveal key={project.title} delay={i * 0.1}>
              <article className="project-card">
                <div className="project-meta">
                  <p>{project.date}</p>
                  <Radio size={18} />
                </div>
                <h3>{project.title}</h3>
                <h4>{project.subtitle}</h4>
                <p>{project.description}</p>
                {i === 0 ? <MoodVisual /> : <Telemetry />}
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
        <ScrollReveal>
          <div className="other-projects">
            <div>
              <p className="eyebrow">MORE FROM GITHUB</p>
              <h3>{projectCount} public projects total</h3>
              <p className="muted other-projects-note">Highlighted picks below — full list on GitHub.</p>
            </div>
            <div className="other-project-links">
              {additionalProjects.map(([name, url]) => (
                <a href={url} target="_blank" rel="noreferrer" key={name}>
                  {name}
                  <ArrowUpRight size={14} />
                </a>
              ))}
            </div>
            <a className="github-profile" href={profile.socials.github} target="_blank" rel="noreferrer">
              <Github size={16} /> View all on GitHub
            </a>
          </div>
        </ScrollReveal>
      </section>

      <section id="skills">
        <ScrollReveal>
          <SectionTitle label="// TECH STACK" title="Skills" />
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

      <section id="achievements">
        <ScrollReveal>
          <SectionTitle label="// ACHIEVEMENTS" title="Achievements" />
        </ScrollReveal>
        <div className="achievement-grid">
          {[
            ["550+", "DSA Problems Solved", "Across LeetCode and Codeforces"],
            ["1253", "Codeforces Rating", "Active programming-contest participant"],
            ["3+", "Player of the Match Awards", "All-rounder in regional tournaments"],
          ].map(([n, t, d]) => (
            <ScrollReveal key={t}>
              <article className="achievement">
                <Trophy size={21} />
                <b>{n}</b>
                <h3>{t}</h3>
                <p>{d}</p>
              </article>
            </ScrollReveal>
          ))}
        </div>
      </section>

      <section id="contact" className="contact">
        <ScrollReveal>
          <SectionTitle label="// CONTACT" title="Let's Build Something" accent="Great" />
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
        © 2026 Himanshu Deshbhratar. All rights reserved. <span>Built with Next.js, TypeScript & curiosity.</span>
      </footer>
      <Chat open={chat} onClose={() => setChat(false)} />
      <ChatLauncher onClick={() => setChat(true)} />
    </main>
  );
}
