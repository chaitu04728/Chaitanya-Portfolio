import Link from "next/link";

export default function NotFound() {
  return (
    <main style={{ minHeight: "100svh", display: "grid", placeItems: "center", textAlign: "center", padding: "2rem" }}>
      <div>
        <p style={{ fontFamily: "var(--f-mono), monospace", fontSize: "14px", letterSpacing: "0.08em", color: "var(--mute)", textTransform: "uppercase" }}>
          404 — Not Found
        </p>
        <h1 style={{ fontSize: "clamp(32px, 5vw, 64px)", fontWeight: 700, margin: "1rem 0" }}>
          Page not found.
        </h1>
        <p style={{ color: "var(--ink-2)", marginBottom: "2rem" }}>
          The page you are looking for doesn&apos;t exist.
        </p>
        <Link href="/" className="btn btn-primary">
          Back to home
        </Link>
      </div>
    </main>
  );
}
