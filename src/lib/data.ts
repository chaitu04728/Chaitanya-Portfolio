/* Single source of truth for all site content. Every fact comes from Chaitanya Kumar Batchu's CV. */

import { asset } from "./asset";

export const PROFILE = {
  name: "Chaitanya Kumar Batchu",
  firstName: "Chaitanya",
  initials: "CK",
  role: "Full Stack Developer",
  heroTitle: "Full Stack Developer",
  dept: "Full Stack Engineering",
  company: "IBM",
  since: "Jul 2022",
  location: "Hyderabad, Telangana",
  email: "batchuchaitanyakumar356@gmail.com",
  phone: "+91 9032458334",
  phoneHref: "tel:+919032458334",
  github: "https://github.com/chaitu04728",
  linkedin: "https://www.linkedin.com/in/batchu-chaitanya-kumar/",
  resume: asset("/Chaitanya-Kumar-Batchu-Resume.pdf"),
  resumeSummary:
    "Full Stack Developer with 4.8 years of experience designing and delivering scalable, secure enterprise web applications using Next.js, React, NestJS, TypeScript, and PostgreSQL. Proven track record of building high-performance solutions across government, insurance, and retail/consumer domains, including a WCAG 2.1 AA–compliant citizen portal serving 1M+ monthly users. Experienced in AWS, Azure DevOps, CI/CD, and AI-assisted development, with a strong focus on performance, accessibility, and scalable system architecture.",
} as const;

export type SectionId = "about" | "skills" | "work" | "certifications" | "experience" | "achievements" | "contact";

/** Section tag numbers follow rendered order. Use as `${index} — ${label}`. */
export const SECTIONS: Record<SectionId, { index: string; label: string }> = {
  about: { index: "01", label: "About me" },
  skills: { index: "02", label: "Skills" },
  work: { index: "03", label: "Selected work" },
  certifications: { index: "04", label: "Certifications" },
  experience: { index: "05", label: "Experience" },
  achievements: { index: "06", label: "Honours & metrics" },
  contact: { index: "07", label: "Contact" },
};

export interface NavItem {
  id: SectionId;
  label: string;
  index: string;
}
export const NAV: NavItem[] = (["about", "skills", "work", "experience", "achievements", "contact"] as const).map((id) => ({
  id,
  index: SECTIONS[id].index,
  label: id === "work" ? "Work" : id[0].toUpperCase() + id.slice(1),
}));

/* ---------- Skills ---------- */
export type SkillFamily = "Frontend" | "Backend" | "Languages" | "AI & Cloud" | "Tools & Practices";

export interface Skill {
  /** Logo key for <TechLogo name=... /> (brand file in /public/logos or a concept icon). */
  logo: string;
  name: string;
  family: SkillFamily;
  /** Unique 2-letter element symbol. */
  symbol: string;
  /** Atomic number: 1-based position in the whole table. */
  number: number;
  /** Where the CV says it was used. Absent when the CV doesn't say. */
  usedIn?: string[];
}
export interface SkillGroup {
  family: SkillFamily;
  skills: Skill[];
}

type RawSkill = Omit<Skill, "number" | "family">;

const RAW: Record<SkillFamily, RawSkill[]> = {
  Frontend: [
    { logo: "nextjs", name: "Next.js", symbol: "Nx", usedIn: ["Citizen-facing portal serving 1M+ monthly users (Ministry of Transportation)", "AnalyzeIT enterprise sales analytics web app (Nestle)", "SSMMA & Web Dev Explorer platforms"] },
    { logo: "react", name: "React.js", symbol: "Re", usedIn: ["Core component architecture across Nestle AnalyzeIT and Ontario citizen portals", "WCAG 2.1 AA accessible UI engineering"] },
    { logo: "typescript", name: "TypeScript", symbol: "Ts", usedIn: ["Typed domain models, scalable state management, and strict contract verification"] },
    { logo: "redux", name: "Redux", symbol: "Rx", usedIn: ["Predictable global state management in high-density data applications"] },
    { logo: "reactquery", name: "React Query", symbol: "Rq", usedIn: ["Server-state caching, background data revalidation, and optimistic updates"] },
    { logo: "tailwindcss", name: "Tailwind CSS", symbol: "Tw", usedIn: ["Responsive layouts and design token utility styling on Web Dev Explorer"] },
    { logo: "styledcomponents", name: "Styled Components", symbol: "Sc", usedIn: ["Scoped component styling and CSS-in-JS architecture"] },
    { logo: "wcag", name: "WCAG 2.1 AA", symbol: "Wc", usedIn: ["Lighthouse accessibility audits, semantic HTML, and ARIA roles passing government audits"] },
  ],
  Backend: [
    { logo: "nestjs", name: "NestJS", symbol: "Ns", usedIn: ["Scalable enterprise microservices and modular backend architecture"] },
    { logo: "nodejs", name: "Node.js", symbol: "No", usedIn: ["RESTful APIs powering internal enterprise workflows at Suncorp Insurance"] },
    { logo: "postgresql", name: "PostgreSQL", symbol: "Pg", usedIn: ["Relational data modeling, indexing, and complex queries across enterprise systems"] },
    { logo: "redis", name: "Redis", symbol: "Rd", usedIn: ["In-memory session storage, caching layer, and high-speed data retrieval"] },
    { logo: "prisma", name: "Prisma", symbol: "Pm", usedIn: ["Type-safe database ORM and migrations on SSMMA Product Management System"] },
    { logo: "restapi", name: "RESTful API", symbol: "Ra", usedIn: ["Enterprise workflows at Suncorp & survey platform real-time synchronization at Nestle"] },
    { logo: "rbac", name: "RBAC & UAM", symbol: "Rb", usedIn: ["Designed end-to-end RBAC and User Access Management across enterprise modules"] },
    { logo: "websockets", name: "WebSockets", symbol: "Ws", usedIn: ["Real-time bi-directional synchronization and event communication"] },
    { logo: "jwt", name: "JWT Auth", symbol: "Jw", usedIn: ["Stateless token authentication and secure role-based authorization"] },
    { logo: "rabbitmq", name: "RabbitMQ", symbol: "Mq", usedIn: ["Asynchronous message queues, bulk uploads, and notification processing"] },
  ],
  Languages: [
    { logo: "javascript", name: "JavaScript (ES6+)", symbol: "Js", usedIn: ["Modern async patterns, DOM APIs, and core full-stack runtime logic"] },
    { logo: "html5", name: "HTML5", symbol: "Ht", usedIn: ["Semantic HTML structure ensuring complete assistive-technology support"] },
    { logo: "css3", name: "CSS3 / SCSS", symbol: "Cs", usedIn: ["Responsive styling, CSS grid/flexbox, animations, and preprocessors"] },
    { logo: "java", name: "Java", symbol: "Jv", usedIn: ["StackRoute Velocity Program, enterprise backend services, and Spring Boot"] },
    { logo: "python", name: "Python", symbol: "Py", usedIn: ["Data manipulation, automation scripts, and regression calculations"] },
    { logo: "sql", name: "SQL", symbol: "Sq", usedIn: ["Database modeling, schema design, and SQL Beginner to Advance certification"] },
  ],
  "AI & Cloud": [
    { logo: "copilot", name: "GitHub Copilot", symbol: "Cp", usedIn: ["AI-assisted software engineering; Certified GitHub Copilot 2025"] },
    { logo: "claude", name: "Claude CLI", symbol: "Cl", usedIn: ["Autonomous coding workflows and intelligent codebase management"] },
    { logo: "openai", name: "OpenAI API", symbol: "Oa", usedIn: ["Integrating intelligent models and LLM completions into web solutions"] },
    { logo: "vercel", name: "Vercel AI SDK", symbol: "Ai", usedIn: ["Streaming AI interfaces and conversational full-stack features"] },
    { logo: "aws", name: "AWS", symbol: "Aw", usedIn: ["S3, Amplify, App Runner, Lambda, IAM, CloudFront, API Gateway; AWS Cloud Practitioner 2023"] },
    { logo: "azure", name: "Azure", symbol: "Az", usedIn: ["Azure AD SSO (MSAL) integration; Azure Fundamentals 2022"] },
    { logo: "docker", name: "Docker", symbol: "Do", usedIn: ["Containerized development environments and multi-stage production builds"] },
    { logo: "kubernetes", name: "Kubernetes", symbol: "Ku", usedIn: ["Container orchestration, service scaling, and cloud deployment"] },
    { logo: "github-actions", name: "CI/CD & GitHub Actions", symbol: "Ga", usedIn: ["Automated testing, linting, build pipelines, and production deployments"] },
  ],
  "Tools & Practices": [
    { logo: "postman", name: "Postman", symbol: "Po", usedIn: ["REST API endpoint testing, validation, and automated collection suites"] },
    { logo: "swagger", name: "Swagger / OpenAPI", symbol: "Sw", usedIn: ["Interactive API documentation and schema specification"] },
    { logo: "lighthouse", name: "Lighthouse", symbol: "Lh", usedIn: ["Performance optimization and WCAG accessibility score auditing"] },
    { logo: "git", name: "Git & GitHub", symbol: "Gh", usedIn: ["Version control, branch protection rules, and team pull request reviews"] },
    { logo: "jira", name: "Jira & Confluence", symbol: "Ji", usedIn: ["Agile/Scrum sprint cycles, user story estimation, and technical documentation"] },
    { logo: "azure-devops", name: "Azure DevOps", symbol: "Ad", usedIn: ["DevOps Implementation certification 2025, work item tracking, and CI/CD"] },
    { logo: "servicenow", name: "ServiceNow", symbol: "Sn", usedIn: ["Triaging production incidents and tracking change requests (CRs) for deployments"] },
    { logo: "dynatrace", name: "Dynatrace", symbol: "Dt", usedIn: ["Server and URL health monitoring, identifying issues proactively before user impact"] },
    { logo: "powershell", name: "PowerShell & Windows Scheduler", symbol: "Ps", usedIn: ["Automating operational jobs and scheduled workflows, reducing manual effort by ~50%"] },
  ],
};

export const SKILL_FAMILIES = Object.keys(RAW) as SkillFamily[];

let atomic = 0;
export const SKILL_GROUPS: SkillGroup[] = SKILL_FAMILIES.map((family) => ({
  family,
  skills: RAW[family].map((s) => ({ ...s, family, number: ++atomic })),
}));
export const SKILLS: Skill[] = SKILL_GROUPS.flatMap((g) => g.skills);

/* ---------- Experience & education ---------- */
export interface ExperienceItem {
  id: string;
  role: string;
  company: string;
  period: string;
  bullets: string[];
}
export const EXPERIENCE: ExperienceItem[] = [
  {
    id: "ibm-nestle",
    role: "Package Consultant / Full Stack Developer",
    company: "IBM (Client: Nestle, Europe)",
    period: "Jun 2026 – Present",
    bullets: [
      "Developed AnalyzeIT, an enterprise web application using Next.js, React, TypeScript, and Ant Design to analyze high-density consumer product sales and customer sentiment data.",
      "Built a client-side analytics engine supporting all types of analysis and regression, with 10+ interactive Chart.js visualizations for business reporting.",
      "Architected the application's core state management and typed domain model, enabling a scalable 9+ tab workflow for reports, datasets, and statistical analyses.",
      "Integrated Excel import/export (SheetJS) and REST APIs with an external survey platform, implementing robust data mapping and efficient handling of large-scale datasets with real-time synchronization.",
      "Implemented Azure AD SSO (MSAL) and deployed the application to a Windows/IIS environment using iisnode.",
    ],
  },
  {
    id: "wipro-ontario",
    role: "Full Stack Developer (Project Engineer)",
    company: "Wipro Limited (Client: Ministry of Transportation, Ontario)",
    period: "Feb 2024 – May 2026",
    bullets: [
      "Built citizen-facing and internal Next.js portals from scratch used by 1M+ monthly users across Ontario using SSR and middleware-based architecture.",
      "Designed and implemented end-to-end RBAC and User Access Management (UAM), securing authorization across multiple enterprise modules.",
      "Raised Lighthouse accessibility scores by engineering WCAG 2.1 AA compliant React components with semantic HTML and ARIA roles, enabling full assistive-technology support and passing government compliance audits.",
    ],
  },
  {
    id: "wipro-suncorp",
    role: "Backend Developer (Project Engineer)",
    company: "Wipro Limited (Client: Suncorp Insurance, Australia)",
    period: "Jul 2022 – Jan 2024",
    bullets: [
      "Developed and maintained Node.js RESTful APIs powering internal enterprise workflows for Suncorp's operations team across production environments and maintaining structured logs using winston.",
      "Triaged and resolved production incidents via ServiceNow, tracking change requests (CRs) for deployments.",
      "Monitored application health and server performance using Dynatrace (server & URL monitoring), identifying issues proactively before user impact.",
      "Automated recurring operational jobs and scheduled workflows using Control-M, Windows Task Scheduler, and PowerShell scripts, reducing manual monitoring effort by ~50% and eliminating repetitive daily operational checks across production environments.",
    ],
  },
  {
    id: "wipro-velocity",
    role: "Full Stack Developer Trainee (Velocity Program)",
    company: "Wipro Limited (StackRoute)",
    period: "Jan 2022 – Jun 2022",
    bullets: [
      "Completed 6-month intensive Java Full Stack training focused on enterprise-grade application development.",
      "Built end-to-end applications using Java, Spring Boot, MySQL, React, CSS, and JavaScript.",
    ],
  },
];

export interface EducationItem {
  id: string;
  school: string;
  degree: string;
  place?: string;
  period?: string;
  pursuing?: boolean;
}
export const EDUCATION: EducationItem[] = [
  {
    id: "presidency",
    school: "Presidency University Bangalore",
    degree: "B. Tech in Computer Science",
    place: "Bangalore",
    period: "2022",
  },
];

/** Education + work merged into one path, oldest first. Experience section renders this. */
export interface TimelineItem {
  id: string;
  kind: "education" | "work";
  org: string;
  title: string;
  place?: string;
  period: string;
  pursuing?: boolean;
  bullets?: string[];
}
const edu = (id: string): EducationItem => EDUCATION.find((e) => e.id === id)!;
const job = (id: string): ExperienceItem => EXPERIENCE.find((e) => e.id === id)!;
const fromEdu = (e: EducationItem): TimelineItem => ({
  id: e.id,
  kind: "education",
  org: e.school,
  title: e.degree,
  place: e.place,
  period: e.pursuing ? "Currently pursuing" : (e.period ?? ""),
  pursuing: e.pursuing,
});
const fromJob = (e: ExperienceItem): TimelineItem => ({
  id: e.id,
  kind: "work",
  org: e.company,
  title: e.role,
  period: e.period,
  bullets: e.bullets,
});
export const TIMELINE: TimelineItem[] = [
  fromEdu(edu("presidency")),
  fromJob(job("wipro-velocity")),
  fromJob(job("wipro-suncorp")),
  fromJob(job("wipro-ontario")),
  fromJob(job("ibm-nestle")),
];

/* ---------- Projects ---------- */
export interface ProjectTech {
  name: string;
  /** Logo key, only when a logo exists. */
  logo?: string;
}
export interface Project {
  id: string;
  number: string;
  title: string;
  date: string;
  kicker: string;
  /** First CV bullet, used as the main description. */
  description: string;
  /** Both CV bullets, verbatim. */
  bullets: string[];
  /** Short feature phrases built from CV words. */
  features: string[];
  tech: ProjectTech[];
  link?: { href: string; label: string };
  /** Which illustrative mini-UI to draw. */
  visual: "ssmma" | "explorer" | "analyzeit";
}
export const PROJECTS: Project[] = [
  {
    id: "ssmma",
    number: "01",
    title: "SSMMA — Product Management System",
    date: "2024",
    kicker: "Full-stack enterprise e-commerce platform",
    description:
      "Full-stack product management platform with role-based access control (RBAC), cart and order management, bulk product uploads, PDF catalog generation, email notifications, and JWT authentication.",
    bullets: [
      "Built a full-stack platform using Next.js, TypeScript, PostgreSQL, Prisma, Redis, RabbitMQ, and Cloudinary with role-based access control (RBAC).",
      "Engineered cart/order management, bulk CSV uploads, automated PDF catalog generation, asynchronous email notifications, and JWT authentication.",
    ],
    features: [
      "Role-Based Access Control (RBAC)",
      "Cart & Order Management",
      "Bulk Product Uploads",
      "PDF Catalog Generation",
      "Asynchronous RabbitMQ Queues",
      "Redis Caching Layer",
      "Cloudinary Media Pipeline",
      "JWT Authentication",
    ],
    tech: [
      { name: "Next.js", logo: "nextjs" },
      { name: "TypeScript", logo: "typescript" },
      { name: "PostgreSQL", logo: "postgresql" },
      { name: "Prisma", logo: "prisma" },
      { name: "Redis", logo: "redis" },
      { name: "RabbitMQ", logo: "rabbitmq" },
      { name: "Cloudinary" },
      { name: "Tailwind CSS", logo: "tailwindcss" },
    ],
    link: { href: "https://ssmma.shop/", label: "Visit ssmma.shop" },
    visual: "ssmma",
  },
  {
    id: "web-dev-explorer",
    number: "02",
    title: "Web Dev Explorer — Developer Reference & Playground",
    date: "2024",
    kicker: "Interactive learning platform & live runner",
    description:
      "Interactive developer reference covering 150+ concepts across React, Next.js, JavaScript, and TypeScript, with a live in-browser code playground.",
    bullets: [
      "Interactive developer reference covering 150+ concepts (React, Next.js, JS, TypeScript) with a live code playground.",
      "Engineered with Next.js 14 App Router, TypeScript, and Tailwind CSS, deployed on Vercel for instant execution and interactive learning.",
    ],
    features: [
      "150+ Web Development Concepts",
      "Interactive Live Code Playground",
      "React & Next.js Design Patterns",
      "TypeScript Typing Deep-Dive",
      "Real-time In-Browser Code Execution",
      "Syntax Highlighting & Instant Search",
      "App Router Architecture",
      "Vercel Edge Deployment",
    ],
    tech: [
      { name: "Next.js 14", logo: "nextjs" },
      { name: "TypeScript", logo: "typescript" },
      { name: "Tailwind CSS", logo: "tailwindcss" },
      { name: "React", logo: "react" },
      { name: "Vercel", logo: "vercel" },
    ],
    link: { href: "https://www.chaitanyakumar.online/", label: "Visit chaitanyakumar.online" },
    visual: "explorer",
  }
];

/* ---------- Certifications ---------- */
export interface Certification {
  id: string;
  index: string;
  title: string;
  date: string;
  url?: string;
  issuer?: string;
}
const CERT_RAW: Omit<Certification, "index">[] = [
  { id: "sql", title: "SQL Beginner to Advance", issuer: "SQL Mastery", date: "2026" },
  { id: "devops", title: "Devops Implementation", issuer: "DevOps & Cloud", date: "2025" },
  { id: "genai", title: "Gen AI L1 & L2", issuer: "Generative AI", date: "2025" },
  { id: "copilot", title: "GitHub Copilot", issuer: "GitHub", date: "2025" },
  { id: "awscp", title: "AWS Cloud Practitioner", issuer: "Amazon Web Services (AWS)", date: "2023" },
  { id: "az900", title: "Azure Fundamentals", issuer: "Microsoft", date: "2022" },
];
export const CERTIFICATIONS: Certification[] = CERT_RAW.map((c, i) => ({ ...c, index: String(i + 1).padStart(2, "0") }));

/* ---------- Achievements ---------- */
export interface Achievement {
  id: string;
  index: string;
  label: string;
  caption: string;
  detail: string;
  logo: string;
  tint: string;
  number?: number;
  prefix?: string;
  suffix?: string;
  unit?: string;
}
const ACH_RAW: Omit<Achievement, "index">[] = [
  {
    id: "scale",
    label: "Citizen portal scale",
    caption: "Monthly users served across Ontario on Next.js portals",
    detail: "SSR and middleware architecture at Ministry of Transportation, Ontario",
    logo: "nextjs",
    tint: "rgba(0,0,0,0.12)",
    number: 1,
    suffix: "M+",
  },
  {
    id: "monitoring",
    label: "Operational automation",
    caption: "Reduction in manual operational monitoring effort",
    detail: "Automated via Control-M, Task Scheduler, and PowerShell at Suncorp Insurance",
    logo: "powershell",
    tint: "rgba(45,123,229,0.16)",
    number: 50,
    suffix: "%",
  },
  {
    id: "charts",
    label: "Analytics visualizations",
    caption: "Interactive Chart.js visualizations & regression analyses",
    detail: "Client-side analytics engine built for AnalyzeIT at Nestle",
    logo: "react",
    tint: "rgba(97,218,251,0.16)",
    number: 10,
    suffix: "+",
  },
  {
    id: "concepts",
    label: "Developer reference",
    caption: "Full-stack web development concepts covered with live playground",
    detail: "Interactive guide across React, Next.js, and TypeScript (Web Dev Explorer)",
    logo: "typescript",
    tint: "rgba(49,120,198,0.16)",
    number: 150,
    suffix: "+",
  },
  {
    id: "accessibility",
    label: "Accessibility compliance",
    caption: "WCAG 2.1 AA compliant components passing government audits",
    detail: "Semantic HTML and ARIA roles for full assistive-technology support",
    logo: "medal",
    tint: "rgba(16,185,129,0.16)",
    number: 100,
    suffix: "%",
  },
  {
    id: "workflow",
    label: "Analytical workflow tabs",
    caption: "Scalable multi-tab workflow for reports, datasets, and regressions",
    detail: "Architected core state management & typed domain model at Nestle",
    logo: "docker",
    tint: "rgba(36,150,237,0.16)",
    number: 9,
    suffix: "+",
  },
];
export const ACHIEVEMENTS: Achievement[] = ACH_RAW.map((a, i) => ({ ...a, index: String(i + 1).padStart(2, "0") }));
