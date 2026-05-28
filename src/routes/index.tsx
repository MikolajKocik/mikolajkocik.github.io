import { createFileRoute } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { Moon, Sun } from "lucide-react";
import photo from "@/assets/photo.jpeg";
import heroBg from "@/assets/hero-bg.svg";
import diagramLaptop from "@/assets/diagram-laptop.png";
import { useTheme } from "@/components/theme-provider";
import {
  SiDotnet,
  SiSharp,
  SiPostgresql,
  SiDocker,
  SiHuggingface,
  SiOllama,
  SiGit,
  SiGithub,
  SiGrafana,
  SiPrometheus,
  SiPostman,
  SiLinux,
  SiPython,
  SiSwagger,
} from "react-icons/si";
import { FaLinkedin } from "react-icons/fa";
import { VscAzure, VscAzureDevops } from "react-icons/vsc";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Mikołaj Kocik — .NET Developer & AI Engineer | Poznań" },
      { name: "description", content: "Portfolio of Mikołaj Kocik — .NET Developer & AI Engineer based in Poznań. C#, ASP.NET Core, Azure, Clean Architecture, CQRS, LLM & RAG integrations." },
      { name: "keywords", content: ".NET Developer, AI Engineer, C#, ASP.NET Core, Azure, Clean Architecture, CQRS, LLM, RAG, Semantic Kernel, Poznań, Mikołaj Kocik" },
      { name: "author", content: "Mikołaj Kocik" },
      { name: "robots", content: "index, follow" },
      { property: "og:title", content: "Mikołaj Kocik — .NET Developer & AI Engineer" },
      { property: "og:description", content: "From system design to clean implementation. Scalable .NET systems and AI-powered applications." },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "https://mikolajkocik.github.io/" },
      { property: "og:locale", content: "en_US" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "Mikołaj Kocik — .NET Developer & AI Engineer" },
      { name: "twitter:description", content: "From system design to clean implementation." },
    ],
    links: [
      { rel: "canonical", href: "https://mikolajkocik.github.io/" },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      { rel: "stylesheet", href: "https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@400;500;600;700&family=JetBrains+Mono:wght@400;500&display=swap" },
    ],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Person",
          name: "Mikołaj Kocik",
          jobTitle: ".NET Developer & AI Engineer",
          url: "https://mikolajkocik.github.io/",
          email: "mikolajkocik@onet.pl",
          address: { "@type": "PostalAddress", addressLocality: "Poznań", addressCountry: "PL" },
          sameAs: [
            "https://github.com/MikolajKocik",
            "https://www.linkedin.com/in/miko%C5%82aj-kocik-862b46317/",
          ],
          knowsAbout: [
            ".NET",
            "C#",
            "ASP.NET Core",
            "Azure",
            "Clean Architecture",
            "CQRS",
            "LLM",
            "RAG",
            "Semantic Kernel",
          ],
        }),
      },
    ],
  }),
  component: Portfolio,
});

const GITHUB_URL = "https://github.com/MikolajKocik";
const LINKEDIN_URL = "https://www.linkedin.com/in/miko%C5%82aj-kocik-862b46317/";
const EMAIL = "mikolajkocik@onet.pl";

const navItems = [
  { label: "Linkedin", href: LINKEDIN_URL, external: true },
  { label: "Education", href: "#education" },
  { label: "Projects", href: "#projects" },
  { label: "Experience", href: "#experience" },
  { label: "Skills", href: "#skills" },
];

const projects = [
  {
    name: "StockManager",
    tagline: "Warehouse management system.",
    desc: "Handles PZ/WZ/RW/MM operations, generates PDF documents and stores them in Azure Blob Storage. Includes AI-assisted vector search via Ollama.",
    solved: "Eliminates manual stock tracking. An asynchronous document flow offloads the API — a background worker generates PDFs and saves metadata to the database. Deployed via GitHub Actions with OIDC, no stored secrets.",
    tech: [".NET 8", "PostgreSQL", "pgvector", "Ollama (RAG)", "Event-Driven", "RabbitMQ", "Redis"],
    href: `${GITHUB_URL}/StockManager`,
  },
  {
    name: "RentCarX",
    tagline: "Cloud-native vehicle reservation platform.",
    desc: "Covering the full rental lifecycle: search, booking, Stripe payments, PDF/Excel reporting, and email notifications via Hangfire background workers.",
    solved: "Decouples long-running tasks (reservation deadlines, emails) from the main API thread. Full observability stack with Grafana and Prometheus. Performance verified under load via Azure Load Testing.",
    tech: [".NET 8", "Azure", "Docker", "Stripe", "Hangfire", "Grafana"],
    href: `${GITHUB_URL}/RentCarX`,
  },
  {
    name: "BookIt",
    tagline: "Hotel management system.",
    desc: "Includes a full reservation cycle, dynamic availability checks, discount codes, Stripe payments, and guest reviews. Includes a dedicated MCP server for AI agent integration.",
    solved: "Automates guest service via AI agents — an LLM invokes MCP tools (e.g. notify_staff → Slack) without human involvement. Eliminates manual booking errors and handles payments without storing sensitive card data.",
    tech: [".NET 8", "ASP.NET MVC", "Chatbot", "Model Context Protocol"],
    href: `${GITHUB_URL}/BookIt`,
  },
  {
    name: "Docs-assistant",
    tagline: "Retrieval-augmented documentation assistant.",
    desc: "Indexes large document corpora and serves contextual answers grounded in source material, combining on-device inference with managed Azure AI services.",
    solved: "Reduces time spent searching internal documentation. A hybrid retrieval pipeline (Azure AI Search + ONNX re-ranking) keeps answers grounded and verifiable, while Hugging Face models handle local embeddings.",
    tech: [".NET 8", "RAG", "ONNX Runtime", "Hugging Face", "Azure OpenAI", "Azure AI Search"],
    href: `${GITHUB_URL}/Azure-RAG-Docs-Assistant`,
  },
  {
    name: "ADH — AI-Driven Helpdesk",
    tagline: "Intelligent IT helpdesk system.",
    desc: "Combines local LLMs with proactive infrastructure management. Features a real-time chat interface (SignalR), semantic search via pgvector, automated asset discovery through LDAP/Active Directory, and Jira integration for ticket management.",
    solved: "Reduces repetitive support tickets through AI automation. A built-in PII scrubber sanitizes queries before they reach the model, and an ONNX re-ranker via Semantic Kernel keeps retrieval precise. Self-healing logic monitors disk space and restarts services without human intervention.",
    tech: [".NET 10", "SignalR", "PostgreSQL", "pgvector", "LDAP", "JIRA", "Local LLMs", "Semantic Kernel", "ONNX Runtime"],
    href: `${GITHUB_URL}/ai-driven-helpdesk`,
  },
];

const skillGroups = [
  { title: "Cloud & Infrastructure", items: ["Azure", "Azure DevOps", "Azure Functions", "Azure Entra ID", "Docker", "Docker Compose", "Linux", "Git", "CI/CD"] },
  { title: "Backend & Architecture", items: ["C#", "ASP.NET Core", "Web API (REST)", "ASP.NET MVC", "Minimal APIs", "Clean Architecture", "CQRS", "MediatR", "Entity Framework Core"] },
  { title: "Quality & Testing", items: ["xUnit", "Postman", "Swagger / OpenAPI", "Azure Load Testing", "Debugging & Profiling"] },
  { title: "Observability & Persistence", items: ["PostgreSQL", "Grafana", "Prometheus"] },
  { title: "LLM Engineering", items: ["Retrieval-Augmented Generation", "Conversational Agents", "Hugging Face", "Re-ranking", "Tool Calling", "Structured Outputs", "Semantic Search & Caching"] },
  { title: "Applied AI", items: ["Microsoft Semantic Kernel", "Model Context Protocol", "ONNX Runtime", "pgvector", "Python (working knowledge)"] },
];

const techLogos = [
  { Icon: SiDotnet, label: ".NET", color: "#512BD4" },
  { Icon: SiSharp, label: "C#", color: "#239120" },
  { Icon: VscAzure, label: "Azure", color: "#0078D4" },
  { Icon: VscAzureDevops, label: "Azure DevOps", color: "#0078D7" },
  { Icon: SiDocker, label: "Docker", color: "#2496ED" },
  { Icon: SiPostgresql, label: "PostgreSQL", color: "#4169E1" },
  { Icon: SiGrafana, label: "Grafana", color: "#F46800" },
  { Icon: SiPrometheus, label: "Prometheus", color: "#E6522C" },
  { Icon: SiGit, label: "Git", color: "#F05032" },
  { Icon: SiGithub, label: "GitHub", color: "#181717" },
  { Icon: SiLinux, label: "Linux", color: "#FCC624" },
  { Icon: SiPostman, label: "Postman", color: "#FF6C37" },
  { Icon: SiSwagger, label: "Swagger", color: "#85EA2D" },
  { Icon: SiHuggingface, label: "HuggingFace", color: "#FFD21E" },
  { Icon: SiOllama, label: "Ollama", color: "#000000" },
  { Icon: SiPython, label: "Python", color: "#3776AB" },
];

function Reveal({ children, className, delay = 0 }: { children: React.ReactNode; className?: string; delay?: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.6, ease: "easeOut", delay }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

function ThemeToggle() {
  const { theme, toggle } = useTheme();
  return (
    <button
      onClick={toggle}
      aria-label="Toggle dark mode"
      className="inline-flex items-center justify-center w-9 h-9 rounded-md border border-white/20 hover:bg-white/10 transition-colors"
    >
      {theme === "dark" ? <Sun size={16} /> : <Moon size={16} />}
    </button>
  );
}

function Portfolio() {
  const marqueeItems = [...techLogos, ...techLogos];
  const currentYear = new Date().getFullYear();
  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* NAV */}
      <header className="sticky top-0 z-50 bg-nav text-nav-foreground border-b border-white/10">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 py-4 flex items-center justify-between gap-4">
          <a href="#top" className="font-mono text-sm sm:text-lg truncate">{"{{ Mikołaj Kocik }}"}</a>
          <div className="flex items-center gap-3 sm:gap-5">
            <nav className="flex flex-wrap justify-end gap-x-4 gap-y-1 sm:gap-x-6 md:gap-8 text-xs sm:text-sm">
              {navItems.map((n) => (
                <a key={n.label} href={n.href} target={n.external ? "_blank" : undefined} rel={n.external ? "noopener noreferrer" : undefined} className="hover:text-accent transition-colors">
                  {n.label}
                </a>
              ))}
            </nav>
            <ThemeToggle />
          </div>
        </div>
      </header>

      {/* HERO */}
      <section id="top" className="relative overflow-hidden">
        <img src={heroBg} alt="" aria-hidden className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-r from-primary/40 to-transparent" />
        <div className="relative mx-auto max-w-6xl px-4 sm:px-6 py-12 sm:py-16 md:py-24 grid md:grid-cols-[auto_1fr_auto] gap-6 sm:gap-8 items-center text-center md:text-left">
          <img src={photo} alt="Mikołaj Kocik" className="w-36 h-36 sm:w-44 sm:h-44 md:w-52 md:h-52 rounded-md object-cover ring-2 ring-white/40 shadow-2xl mx-auto md:mx-0" />
          <div className="text-white">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-semibold">.NET Developer<br />&amp; AI Engineer</h1>
            <div className="mt-4 h-px w-48 sm:w-64 bg-white/60 mx-auto md:mx-0" />
            <div className="mt-6 flex flex-wrap justify-center md:justify-start gap-3">
              <a href={GITHUB_URL} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-5 py-2 rounded-md bg-primary/80 hover:bg-primary text-primary-foreground border border-white/30 transition">
                <SiGithub /> Github
              </a>
              <a href={`mailto:${EMAIL}`} className="px-5 py-2 rounded-md bg-white text-primary hover:bg-white/90 transition">Contact</a>
            </div>
          </div>
          <pre className="hidden lg:block font-mono text-sm text-white/90 bg-black/10 backdrop-blur-sm px-4 py-3 rounded-md border border-white/20">{`{
  "id": 1,
  "city": "Poznan",
  "isAvailable": true
}`}</pre>
        </div>
      </section>

      {/* INTRO */}
      <section className="bg-background">
        <Reveal className="mx-auto max-w-4xl px-4 sm:px-6 py-14 md:py-20 space-y-5 text-lg">
          <p>Hi! I'm Mikołaj Kocik, a <span className="text-primary font-medium">.NET Developer &amp; AI Engineer</span>.</p>
          <p>
            I build applications with a strong emphasis on <span className="text-primary font-medium">scalability</span> and{" "}
            <span className="text-primary font-medium">architectural integrity</span>, always evaluating multiple approaches to find the best possible answer to an engineering problem.
          </p>
        </Reveal>
      </section>

      {/* TECH MARQUEE */}
      <section className="bg-background border-y border-border py-10">
        <div className="marquee-mask overflow-hidden">
          <div className="flex w-max animate-marquee gap-14 px-6">
            {marqueeItems.map(({ Icon, label, color }, i) => (
              <div key={`${label}-${i}`} className="flex flex-col items-center gap-2 shrink-0" title={label}>
                <Icon size={48} style={{ color }} />
                <span className="text-xs text-muted-foreground font-mono">{label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* QUOTE + DIAGRAM */}
      <section className="bg-primary text-primary-foreground">
        <div className="mx-auto max-w-5xl px-6 py-12 text-center">
          <p className="text-2xl md:text-3xl font-light italic">"From system design to clean implementation."</p>
        </div>
      </section>
      <section className="bg-background border-b border-border">
        <Reveal className="mx-auto max-w-5xl px-6 py-16 flex justify-center">
          <div className="relative bg-gradient-to-b from-muted/70 to-muted/30 rounded-2xl p-5 md:p-8 border border-border/60 shadow-2xl">
            <img
              src={diagramLaptop}
              alt="UML sequence diagram of a reservation and payment flow displayed on a laptop — designed by Mikołaj Kocik"
              loading="lazy"
              className="w-full h-auto max-w-4xl rounded-lg"
            />
          </div>
        </Reveal>
      </section>

      {/* PROJECTS */}
      <section id="projects" className="bg-background">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 py-16 md:py-24">
          <Reveal><h2 className="text-3xl sm:text-4xl md:text-5xl text-primary font-semibold mb-8 md:mb-12">Selected Projects</h2></Reveal>
          <div className="grid md:grid-cols-2 gap-6">
            {projects.map((p, idx) => (
              <Reveal key={p.name} delay={idx * 0.05}>
                <article className="h-full bg-card border border-border rounded-md overflow-hidden shadow-sm hover:shadow-lg hover:-translate-y-0.5 transition-all">
                  <header className="bg-accent text-accent-foreground px-4 sm:px-5 py-3 flex items-center justify-between gap-3 flex-wrap">
                    <h3 className="text-lg sm:text-xl font-semibold">{p.name}</h3>
                    <a href={p.href} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1.5 text-xs sm:text-sm px-3 py-1 rounded bg-background text-foreground hover:bg-background/80 transition">
                      <SiGithub /> Code
                    </a>
                  </header>
                  <div className="p-6 space-y-4">
                    <p className="font-medium">{p.tagline}</p>
                    <div className="flex flex-wrap gap-1.5">
                      {p.tech.map((t) => (
                        <span key={t} className="inline-flex items-center px-2 py-0.5 rounded-full text-[11px] font-mono bg-primary/10 text-primary border border-primary/20">
                          {t}
                        </span>
                      ))}
                    </div>
                    <p className="text-muted-foreground">{p.desc}</p>
                    <h4 className="text-primary text-xl font-semibold pt-2">Problems solved</h4>
                    <p className="text-muted-foreground">{p.solved}</p>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
          <p className="mt-10 text-lg">More projects and descriptions available on my Github profile</p>
          <a href={GITHUB_URL} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 mt-4 px-6 py-2 rounded-md bg-accent text-accent-foreground hover:bg-primary transition">
            <SiGithub /> Github
          </a>
        </div>
      </section>

      {/* EXPERIENCE */}
      <section id="experience" className="bg-panel">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 py-16 md:py-24">
          <Reveal><h2 className="text-3xl sm:text-4xl md:text-5xl text-primary font-semibold mb-8 md:mb-12">Experience</h2></Reveal>
          <Reveal className="relative pl-8 border-l-2 border-border">
            <span className="absolute -left-[11px] top-1 w-5 h-5 rounded-full border-2 border-accent bg-background" />
            <h3 className="text-2xl font-medium">Junior Fullstack Developer</h3>
            <p className="text-muted-foreground mt-1">December 2025 – January 2026<br />Thinq Sp. z o.o. · Poznań</p>
            <ul className="mt-5 space-y-2 text-muted-foreground list-disc pl-5">
              <li>Developed and maintained web applications using ASP.NET Core Razor Pages</li>
              <li>Integrated with Azure DevOps, focusing on Work Items and User Stories management</li>
              <li>Implemented synchronization and updates of Work Items, including status transitions, metadata handling, and workflow support</li>
              <li>Designed and built responsive UI components using Telerik UI for ASP.NET Core</li>
              <li>Maintained and enhanced a legacy system based on Apache Subversion (SVN)</li>
            </ul>
          </Reveal>
        </div>
      </section>

      {/* EDUCATION */}
      <section id="education" className="bg-background">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 py-16 md:py-24">
          <Reveal><h2 className="text-3xl sm:text-4xl md:text-5xl text-primary font-semibold mb-6 md:mb-8">Education</h2></Reveal>
          <p className="text-xl">Computer Science</p>
          <p className="text-lg text-muted-foreground">WSB Merito University in Poznan</p>
          <ul className="mt-4 space-y-3 list-disc pl-6">
            <li>
              <span className="font-medium">Engineer</span><br />
              <span className="text-muted-foreground">Specialization: Programming · 2022 – 2026</span>
            </li>
            <li>
              <span className="font-medium">Master</span><br />
              <span className="text-muted-foreground">Specialization: Outsourcing of cloud solutions · 2026 – present</span>
            </li>
          </ul>
        </div>
      </section>

      {/* SKILLS */}
      <section id="skills" className="bg-panel">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 py-16 md:py-24">
          <Reveal><h2 className="text-3xl sm:text-4xl md:text-5xl text-primary font-semibold mb-8 md:mb-12">Skills</h2></Reveal>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {skillGroups.map((g, idx) => (
              <Reveal key={g.title} delay={idx * 0.05}>
                <div className="h-full bg-card border border-border rounded-md overflow-hidden hover:border-primary/40 transition-colors">
                  <div className="bg-accent text-accent-foreground px-4 py-2 font-semibold">{g.title}</div>
                  <ul className="p-5 space-y-1.5 list-disc pl-8 text-muted-foreground">
                    {g.items.map((i) => <li key={i}>{i}</li>)}
                  </ul>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer id="contact" className="bg-nav text-nav-foreground">
        <div className="mx-auto max-w-5xl px-6 py-12">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="font-mono text-sm">{"{{ Mikołaj Kocik }}"}</div>
            <div className="flex items-center gap-5">
              <a href={GITHUB_URL} target="_blank" rel="noopener noreferrer" aria-label="GitHub" className="hover:text-accent transition-colors">
                <SiGithub size={22} />
              </a>
              <a href={LINKEDIN_URL} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="hover:text-accent transition-colors">
                <FaLinkedin size={22} />
              </a>
              <a href={`mailto:${EMAIL}`} className="text-sm hover:text-accent transition-colors">{EMAIL}</a>
            </div>
          </div>
          <div className="h-px bg-white/15 my-6" />
          <p className="text-center text-xs text-white/60">© {currentYear} Mikołaj Kocik. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
