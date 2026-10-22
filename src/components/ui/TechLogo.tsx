import type { ReactElement } from "react";
import { asset } from "@/lib/asset";

/** Brand logos: key -> file in /public/logos (devicon "original" SVGs, MIT; lnrs/srm supplied by owner). */
export const BRAND: Record<string, string> = {
  python: "/logos/python.svg", mysql: "/logos/mysql.svg", mongodb: "/logos/mongodb.svg", postgresql: "/logos/postgresql.svg",
  bash: "/logos/bash.svg", powershell: "/logos/powershell.svg", "github-actions": "/logos/github-actions.svg",
  jenkins: "/logos/jenkins.svg", svn: "/logos/svn.svg", "azure-devops": "/logos/azure-devops.svg", ansible: "/logos/ansible.svg",
  terraform: "/logos/terraform.svg", github: "/logos/github.svg", confluence: "/logos/confluence.svg", jira: "/logos/jira.svg",
  opentelemetry: "/logos/opentelemetry.svg", grafana: "/logos/grafana.svg", kibana: "/logos/kibana.svg",
  prometheus: "/logos/prometheus.svg", dynatrace: "/logos/dynatrace.svg", azure: "/logos/azure.svg", aws: "/logos/aws.svg",
  linux: "/logos/linux.svg", docker: "/logos/docker.svg", kubernetes: "/logos/kubernetes.svg", flask: "/logos/flask.svg",
  arduino: "/logos/arduino.svg", lnrs: "/logos/lnrs.webp", srm: "/logos/srm.webp",
  react: "/logos/react.svg", nextjs: "/logos/nextjs.svg", typescript: "/logos/typescript.svg",
  javascript: "/logos/javascript.svg", tailwindcss: "/logos/tailwindcss.svg", redux: "/logos/redux.svg",
  nestjs: "/logos/nestjs.svg", nodejs: "/logos/nodejs.svg", redis: "/logos/redis.svg", java: "/logos/java.svg",
  git: "/logos/git.svg",
};

const P = { fill: "none", stroke: "currentColor", strokeWidth: 1.5, strokeLinecap: "round", strokeLinejoin: "round" } as const;

/** Thin line icons (48x48 viewBox, currentColor) for skills without an official logo. */
export const CONCEPT: Record<string, ReactElement> = {
  sql: (
    <g {...P}>
      <ellipse cx="24" cy="13" rx="13" ry="5" />
      <path d="M11 13v22c0 2.8 5.8 5 13 5s13-2.2 13-5V13" />
      <path d="M11 24c0 2.8 5.8 5 13 5s13-2.2 13-5" />
    </g>
  ),
  servicenow: (
    <g {...P}>
      <circle cx="24" cy="24" r="15" />
      <circle cx="24" cy="24" r="6" />
      <path d="M24 9v9M24 30v9M9 24h9M30 24h9" />
    </g>
  ),
  medal: (
    <g {...P}>
      <path d="M16 5l6 13M32 5l-6 13" />
      <circle cx="24" cy="29" r="12" />
      <path d="M24 23l2 4 4.4.6-3.2 3 .8 4.4L24 33l-4 2 .8-4.4-3.2-3 4.4-.6z" />
    </g>
  ),
  gitsvn: (
    <g {...P}>
      <circle cx="14" cy="10" r="4" /><circle cx="14" cy="38" r="4" /><circle cx="34" cy="20" r="4" />
      <path d="M14 14v20M34 24c0 6-6 8-20 10" />
    </g>
  ),
  gitleaks: (
    <g {...P}>
      <circle cx="17" cy="24" r="8" /><path d="M25 24h16M35 24v6M41 24v4" />
      <path d="M8 40L40 8" />
    </g>
  ),
  trufflehog: (
    <g {...P}>
      <circle cx="21" cy="21" r="11" /><path d="M29 29l11 11" />
      <path d="M16 21h10M21 16v10" />
    </g>
  ),
  githubapi: (
    <g {...P}>
      <path d="M17 12l-9 12 9 12M31 12l9 12-9 12" /><path d="M27 10l-6 28" />
    </g>
  ),
  chip: (
    <g {...P}>
      <rect x="13" y="13" width="22" height="22" rx="3" />
      <rect x="19" y="19" width="10" height="10" rx="1.5" />
      <path d="M19 7v6M29 7v6M19 35v6M29 35v6M7 19h6M7 29h6M35 19h6M35 29h6" />
    </g>
  ),
  reactquery: (
    <g {...P}>
      <circle cx="24" cy="24" r="14" />
      <path d="M18 18c3-3 8-3 12 0l-4 4M30 30c-3 3-8 3-12 0l4-4" />
      <circle cx="24" cy="24" r="3" fill="currentColor" />
    </g>
  ),
  styledcomponents: (
    <g {...P}>
      <path d="M16 32c0-8 6-12 12-16 6 4 12 8 12 16s-5.4 12-12 12-12-4-12-12z" />
      <path d="M24 16v16M28 26c2-2 4-2 6 0" />
    </g>
  ),
  wcag: (
    <g {...P}>
      <circle cx="24" cy="14" r="5" />
      <path d="M12 23h24M24 23v17l-5 8M24 33l5 7" />
    </g>
  ),
  jwt: (
    <g {...P}>
      <rect x="10" y="14" width="28" height="20" rx="4" />
      <circle cx="24" cy="24" r="4" />
      <path d="M10 24h10M28 24h10" />
    </g>
  ),
  rbac: (
    <g {...P}>
      <rect x="14" y="20" width="20" height="18" rx="3" />
      <path d="M19 20v-6a5 5 0 0 1 10 0v6M24 27v4" />
    </g>
  ),
  websockets: (
    <g {...P}>
      <path d="M14 20a14 14 0 0 1 20 0M10 16a20 20 0 0 1 28 0M18 24a8 8 0 0 1 12 0" />
      <circle cx="24" cy="30" r="3" fill="currentColor" />
      <path d="M24 33v9" />
    </g>
  ),
  prisma: (
    <g {...P}>
      <polygon points="24,8 38,38 10,38" />
      <path d="M24 8v30M24 20l7 18" />
    </g>
  ),
  rabbitmq: (
    <g {...P}>
      <path d="M14 26c0-6 4-16 10-16s4 10 4 16c0 0 4-16 10-16s2 10 0 16c4 2 6 6 6 12 0 7-6 12-15 12s-15-5-15-12c0-6 2-10 0-12z" />
      <circle cx="20" cy="30" r="1.5" fill="currentColor" />
      <circle cx="28" cy="30" r="1.5" fill="currentColor" />
    </g>
  ),
  copilot: (
    <g {...P}>
      <circle cx="24" cy="24" r="13" />
      <circle cx="19" cy="22" r="2.5" fill="currentColor" />
      <circle cx="29" cy="22" r="2.5" fill="currentColor" />
      <path d="M18 29c2 2 4 3 6 3s4-1 6-3" />
    </g>
  ),
  claude: (
    <g {...P}>
      <circle cx="24" cy="24" r="14" />
      <path d="M24 14v20M14 24h20M17 17l14 14M17 31l14-14" />
    </g>
  ),
  openai: (
    <g {...P}>
      <path d="M24 10a14 14 0 0 1 12 7l-5 3a8 8 0 0 0-7-4 8 8 0 0 0-7 4l-5-3a14 14 0 0 1 12-7z" />
      <circle cx="24" cy="24" r="6" />
      <path d="M12 24a12 12 0 0 1 6-10l3 5a6 6 0 0 0-3 5c0 2 1 4 3 5l-3 5a12 12 0 0 1-6-10zM36 24a12 12 0 0 1-6 10l-3-5a6 6 0 0 0 3-5c0-2-1-4-3-5l3-5a12 12 0 0 1 6 10z" />
    </g>
  ),
  vercel: (
    <g {...P}>
      <polygon points="24,10 40,38 8,38" fill="currentColor" />
    </g>
  ),
  lighthouse: (
    <g {...P}>
      <polygon points="20,10 28,10 32,38 16,38" />
      <path d="M18 20h12M17 28h14M24 10v-4" />
      <path d="M12 12l5 4M36 12l-5 4" />
    </g>
  ),
  postman: (
    <g {...P}>
      <circle cx="24" cy="24" r="14" />
      <path d="M16 26l8-8 8 8M24 18v16" />
    </g>
  ),
  swagger: (
    <g {...P}>
      <circle cx="24" cy="24" r="14" />
      <path d="M17 21c2-3 5-4 8-4s6 2 7 5c-1 3-3 4-7 5s-6 2-7 5c1 3 4 5 7 5s6-1 8-4" />
    </g>
  ),
  restapi: (
    <g {...P}>
      <rect x="10" y="16" width="28" height="16" rx="4" />
      <path d="M16 24h16M14 20h2M14 24h2M14 28h2" />
      <path d="M28 20l4 4-4 4" />
    </g>
  ),
};

export function isBrand(name: string): boolean {
  return name in BRAND;
}

interface Props {
  /** Logo key from data.ts (brand or concept). */
  name: string;
  /** Pixel size (square). Default 40. */
  size?: number;
  /** Accessible label. Omit when the logo is decorative (a visible name sits beside it). */
  label?: string;
  className?: string;
}

export default function TechLogo({ name, size = 40, label, className = "" }: Props) {
  if (isBrand(name)) {
    return (
      <img
        src={asset(BRAND[name])}
        alt={label ?? ""}
        width={size}
        height={size}
        loading="lazy"
        decoding="async"
        draggable={false}
        className={className}
        style={{ width: size, height: size, objectFit: "contain" }}
      />
    );
  }
  return (
    <svg
      viewBox="0 0 48 48"
      width={size}
      height={size}
      className={className}
      style={{ width: size, height: size }}
      role={label ? "img" : undefined}
      aria-label={label}
      aria-hidden={label ? undefined : true}
    >
      {CONCEPT[name] ?? CONCEPT.chip}
    </svg>
  );
}
