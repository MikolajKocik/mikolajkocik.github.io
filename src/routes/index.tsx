import { createFileRoute } from "@tanstack/react-router";
import photo from "@/assets/photo.jpeg";
import heroBg from "@/assets/hero-bg.svg";
import diagramLaptop from "@/assets/diagram-laptop.png";
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
  SiBlazor,
} from "react-icons/si";
import { FaLinkedin } from "react-icons/fa";
import { VscAzure, VscAzureDevops } from "react-icons/vsc";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Mikołaj Kocik — .NET Developer & AI Engineer" },
      { name: "description", content: "Portfolio of Mikołaj Kocik, a .NET Developer & AI Engineer based in Poznań. Scalable systems, clean architecture, LLM integrations." },
      { property: "og:title", content: "Mikołaj Kocik — .NET Developer & AI Engineer" },
      { property: "og:description", content: "From system design to clean implementation." },
    ],
    links: [
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      { rel: "stylesheet", href: "https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@400;500;600;700&family=JetBrains+Mono:wght@400;500&display=swap" },
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
    href: GITHUB_URL,
  },
  {
    name: "RentCarX",
    tagline: "Cloud-native vehicle reservation platform.",
    desc: "Covering the full rental lifecycle: search, booking, Stripe payments, PDF/Excel reporting, and email notifications via Hangfire background workers.",
    solved: "Decouples long-running tasks (reservation deadlines, emails) from the main API thread. Full observability stack with Grafana and Prometheus. Performance verified under load via Azure Load Testing.",
    href: GITHUB_URL,
  },
  {
    name: "BookIt",
    tagline: "Hotel management system.",
    desc: "Includes a full reservation cycle, dynamic availability checks, discount codes, Stripe payments, and guest reviews. Includes a dedicated MCP server for AI agent integration.",
    solved: "Automates guest service via AI agents — an LLM invokes MCP tools (e.g. notify_staff → Slack) without human involvement. Eliminates manual booking errors and handles payments without storing sensitive card data.",
    href: GITHUB_URL,
  },
  {
    name: "WorkPulse",
    tagline: "Team Command Center",
    desc: "Blazor-based management platform bringing together Azure DevOps task tracking, SSL certificate expiry monitoring, and real-time host diagnostics into a single unified interface for operations managers.",
    solved: "Removes the need to open the full Azure DevOps portal or log into servers via RDP/SSH for routine checks. A background service automatically alerts on expiring SSL certificates before they cause outages.",
    href: GITHUB_URL,
  },
  {
    name: "AI-helpdesk",
    tagline: "Intelligent IT helpdesk system.",
    desc: "Combines LLMs with proactive infrastructure management. Features a real-time chat interface (SignalR), semantic search via pgvector, automated asset discovery through LDAP/Active Directory, and Jira integration for ticket management.",
    solved: "Reduces repetitive support tickets through AI automation. A built-in PII scrubber sanitizes queries before they reach the model. Self-healing logic monitors disk space and restarts services without human intervention.",
    href: GITHUB_URL,
  },
];

const skillGroups = [
  { title: "Cloud & infra", items: ["Azure", "Azure DevOps", "Azure Functions", "Azure Entra", "Docker", "Docker compose", "Linux", "Git", "CI/CD"] },
  { title: "Architecture", items: ["C#", "asp net core", "web api (REST)", "MVC", "CQRS", "Clean architecture", "minimal APIs", "mediatR", "EF Core"] },
  { title: "Testing", items: ["postman", "xUnit", "az load testing", "swagger", "debugger"] },
  { title: "Observability & Persistence", items: ["PostgreSQL", "Grafana", "Prometheus"] },
  { title: "LLM — Topics", items: ["RAG", "Chatbot", "HuggingFace", "Re-ranking", "Tools calling", "Structured Outputs", "Semantic search/cache"] },
  { title: "AI — related", items: ["microsoft semantic kernel", "model context protocol", "Microsoft ML ONNX", "pgvector", "python (basics)"] },
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
  { Icon: SiBlazor, label: "Blazor", color: "#512BD4" },
];

function Portfolio() {
  const marqueeItems = [...techLogos, ...techLogos];
  const currentYear = new Date().getFullYear();
  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* NAV */}
      <header className="sticky top-0 z-50 bg-nav text-nav-foreground border-b border-white/10">
        <div className="mx-auto max-w-6xl px-6 py-4 flex items-center justify-between">
          <a href="#top" className="font-mono text-lg">{"{{ Mikołaj Kocik }}"}</a>
          <nav className="hidden md:flex gap-8 text-sm">
            {navItems.map((n) => (
              <a key={n.label} href={n.href} target={n.external ? "_blank" : undefined} rel={n.external ? "noopener noreferrer" : undefined} className="hover:text-accent transition-colors">
                {n.label}
              </a>
            ))}
          </nav>
        </div>
      </header>

      {/* HERO */}
      <section id="top" className="relative overflow-hidden">
        <img src={heroBg} alt="" aria-hidden className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-r from-primary/40 to-transparent" />
        <div className="relative mx-auto max-w-6xl px-6 py-16 md:py-24 grid md:grid-cols-[auto_1fr_auto] gap-8 items-center">
          <img src={photo} alt="Mikołaj Kocik" className="w-44 h-44 md:w-52 md:h-52 rounded-md object-cover ring-2 ring-white/40 shadow-2xl" />
          <div className="text-white">
            <h1 className="text-3xl md:text-5xl font-semibold">.NET Developer<br />&amp; AI Engineer</h1>
            <div className="mt-4 h-px w-64 bg-white/60" />
            <div className="mt-6 flex flex-wrap gap-3">
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
        <div className="mx-auto max-w-4xl px-6 py-20 space-y-5 text-lg">
          <p>Hi! I'm Mikołaj Kocik, a <span className="text-primary font-medium">.NET Developer &amp; AI Engineer</span>.</p>
          <p>
            I build applications with a strong emphasis on <span className="text-primary font-medium">scalability</span> and{" "}
            <span className="text-primary font-medium">architectural integrity</span>, always evaluating multiple approaches to find the best possible answer to an engineering problem.
          </p>
        </div>
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

      {/* QUOTE */}
      <section className="bg-primary text-primary-foreground">
        <div className="mx-auto max-w-5xl px-6 py-12 text-center">
          <p className="text-2xl md:text-3xl font-light italic">"From system design to clean implementation."</p>
        </div>
      </section>

      {/* PROJECTS */}
      <section id="projects" className="bg-background">
        <div className="mx-auto max-w-6xl px-6 py-24">
          <h2 className="text-5xl text-primary font-semibold mb-12">Projects</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {projects.map((p) => (
              <article key={p.name} className="bg-card border border-border rounded-md overflow-hidden shadow-sm hover:shadow-lg transition-shadow">
                <header className="bg-accent text-accent-foreground px-5 py-3 flex items-center justify-between">
                  <h3 className="text-xl font-semibold">{p.name}</h3>
                  <a href={p.href} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1.5 text-sm px-3 py-1 rounded bg-background text-foreground hover:bg-white transition">
                    <SiGithub /> Code
                  </a>
                </header>
                <div className="p-6 space-y-4">
                  <p className="font-medium">{p.tagline}</p>
                  <p className="text-muted-foreground">{p.desc}</p>
                  <h4 className="text-primary text-xl font-semibold pt-2">What problems solved?</h4>
                  <p className="text-muted-foreground">{p.solved}</p>
                </div>
              </article>
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
        <div className="mx-auto max-w-5xl px-6 py-24">
          <h2 className="text-5xl text-primary font-semibold mb-12">Experience</h2>
          <div className="relative pl-8 border-l-2 border-border">
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
          </div>
        </div>
      </section>

      {/* EDUCATION */}
      <section id="education" className="bg-background">
        <div className="mx-auto max-w-5xl px-6 py-24">
          <h2 className="text-5xl text-primary font-semibold mb-8">Education</h2>
          <p className="text-xl">Computer Science</p>
          <p className="text-lg text-muted-foreground">WSB Merito University in Poznań</p>
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
        <div className="mx-auto max-w-6xl px-6 py-24">
          <h2 className="text-5xl text-primary font-semibold mb-12">Skills</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {skillGroups.map((g) => (
              <div key={g.title} className="bg-card border border-border rounded-md overflow-hidden">
                <div className="bg-accent text-accent-foreground px-4 py-2 font-semibold">{g.title}</div>
                <ul className="p-5 space-y-1.5 list-disc pl-8 text-muted-foreground">
                  {g.items.map((i) => <li key={i}>{i}</li>)}
                </ul>
              </div>
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
