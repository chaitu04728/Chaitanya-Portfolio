"use client";
import { useEffect, useState } from "react";
import SectionHeading from "@/components/ui/SectionHeading";
import TechLogo from "@/components/ui/TechLogo";
import { PROJECTS, type Project } from "@/lib/data";

function Visual({ kind }: { kind: Project["visual"] }) {
  if (kind === "ssmma")
    return (
      <div className="mu mu-ssmma" aria-hidden="true">
        <div className="mu-bar"><i /><i /><i /><b /><em>Cart (3)</em></div>
        <div className="mu-shop-grid">
          <div className="mu-card">
            <div className="mu-thumb"><span /></div>
            <div className="mu-meta"><b /><span /></div>
            <div className="mu-badge">In stock</div>
          </div>
          <div className="mu-card">
            <div className="mu-thumb"><span /></div>
            <div className="mu-meta"><b /><span /></div>
            <div className="mu-badge">RBAC Active</div>
          </div>
        </div>
        <div className="mu-order-strip">
          <div><b /><span>Order #1042 · Dispatched</span></div>
          <em>PDF Catalog ↓</em>
        </div>
      </div>
    );
  if (kind === "explorer")
    return (
      <div className="mu mu-explorer" aria-hidden="true">
        <div className="mu-bar"><i /><i /><i /><b /><em>Live Runner</em></div>
        <div className="mu-code">
          <div className="mu-tabs"><b>App.tsx</b><span>Preview</span><span>Docs</span></div>
          <div className="mu-lines">
            <p><i className="kw"/> <i className="fn"/>() &#123;</p>
            <p>&nbsp;&nbsp;<i className="kw"/> [count, setCount] = useState(0);</p>
            <p>&nbsp;&nbsp;<i className="ret"/> &lt;<i className="tag"/> onClick=&#123;() =&gt; ...&#125;&gt;</p>
            <p>&nbsp;&nbsp;&nbsp;&nbsp;Count: &#123;count&#125;</p>
            <p>&nbsp;&nbsp;&lt;/<i className="tag"/>&gt;;</p>
            <p>&#125;</p>
          </div>
        </div>
        <div className="mu-output">
          <span>Interactive Preview</span>
          <button type="button">Click: 42</button>
        </div>
      </div>
    );
  return (
    <div className="mu mu-analyzeit" aria-hidden="true">
      <div className="mu-bar"><i /><i /><i /><b /><em>9+ Tabs</em></div>
      <div className="mu-tab-strip">
        <span className="on">Overview</span>
        <span>Regression</span>
        <span>Datasets</span>
        <span>Reports</span>
      </div>
      <div className="mu-stats">
        <div><small>Sentiment</small><b>94.8%</b></div>
        <div><small>R² Score</small><b>0.912</b></div>
        <div><small>Export</small><b>SheetJS</b></div>
      </div>
      <div className="mu-chart">
        <div className="mu-bars">
          <i style={{ height: "45%" }} />
          <i style={{ height: "70%" }} />
          <i style={{ height: "55%" }} />
          <i style={{ height: "90%" }} />
          <i style={{ height: "65%" }} />
          <i style={{ height: "100%" }} />
          <i style={{ height: "80%" }} />
        </div>
      </div>
    </div>
  );
}

export default function Work() {
  const [open, setOpen] = useState(0);
  // Below 900px the panels are a vertical accordion: tapping toggles. On desktop, hover/focus opens a panel.
  const [stacked, setStacked] = useState(false);
  useEffect(() => {
    const mq = window.matchMedia("(max-width: 899px)");
    const sync = () => setStacked(mq.matches);
    sync();
    mq.addEventListener("change", sync);
    return () => mq.removeEventListener("change", sync);
  }, []);
  return (
    <section id="work" className="section" aria-labelledby="work-heading">
      <style>{css}</style>
      <div className="wrap">
        <SectionHeading id="work" lead="Things I've" accent="built." />
        <div className="wk-row rv" role="list">
          {PROJECTS.map((p, i) => {
            const isOpen = open === i;
            return (
              <article
                key={p.id}
                role="listitem"
                className={`wk-panel${isOpen ? " is-open" : ""}`}
                onMouseEnter={() => { if (!stacked) setOpen(i); }}
                aria-labelledby={`wk-t-${p.id}`}
              >
                <button
                  type="button"
                  className="wk-spine"
                  aria-expanded={isOpen}
                  aria-controls={`wk-b-${p.id}`}
                  onFocus={() => { if (!stacked) setOpen(i); }}
                  onClick={() => setOpen((cur) => (stacked && cur === i ? -1 : i))}
                  tabIndex={isOpen && !stacked ? -1 : 0}
                >
                  <span className="wk-sn mono">{p.number}</span>
                  <span className="wk-st">{p.title}</span>
                  <span className="wk-plus" aria-hidden="true">+</span>
                </button>

                <div className="wk-bw" id={`wk-b-${p.id}`}>
                  <div className="wk-body">
                    <div className="wk-left">
                      <p className="wk-kick mono">
                        {p.number} · {p.kicker} · {p.date}
                      </p>
                      <h3 id={`wk-t-${p.id}`} className="wk-title">{p.title}</h3>
                      <p className="wk-desc">{p.description}</p>
                      <ul className="wk-feat">
                        {p.features.map((f) => (
                          <li key={f}>{f}</li>
                        ))}
                      </ul>
                      <ul className="wk-tech" aria-label="Technologies">
                        {p.tech.map((t) => (
                          <li key={t.name}>
                            {t.logo && <TechLogo name={t.logo} size={16} />}
                            {t.name}
                          </li>
                        ))}
                      </ul>
                      {p.link && (
                        <a className="btn btn-primary btn-sm wk-link" href={p.link.href} target="_blank" rel="noopener noreferrer" tabIndex={isOpen ? 0 : -1}>
                          {p.link.label} <span aria-hidden="true">↗</span>
                        </a>
                      )}
                    </div>
                    <div className="wk-right">
                      <div className="wk-vis">
                        <Visual kind={p.visual} />
                      </div>
                      <p className="wk-cap mono">Illustrative UI</p>
                    </div>
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}

const css = `
.wk-row{display:flex;gap:12px;margin-top:56px;height:min(78svh,600px)}
.wk-panel{position:relative;flex:1 1 0;min-width:0;overflow:hidden;border-radius:26px;background:var(--card);box-shadow:inset 0 0 0 1px var(--line);transition:flex-grow .9s var(--ease),box-shadow .6s var(--ease)}
.wk-panel.is-open{flex-grow:8;box-shadow:inset 0 0 0 1px var(--line),0 40px 80px -30px rgba(13,13,13,.25)}
.wk-panel:has(.wk-spine:focus-visible){outline:2px solid var(--ink);outline-offset:3px}
.wk-spine{position:absolute;inset:0;z-index:2;display:flex;flex-direction:column;align-items:center;justify-content:space-between;padding:24px 0;width:100%;transition:opacity .4s var(--ease)}
.wk-spine:focus-visible{outline:none}
.wk-panel.is-open .wk-spine{opacity:0;pointer-events:none}
.wk-sn{font-size:12px;letter-spacing:.08em;color:var(--mute)}
.wk-st{writing-mode:vertical-rl;transform:rotate(180deg);font-weight:700;font-size:20px;letter-spacing:-.03em;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;max-height:calc(100% - 100px)}
.wk-plus{font-size:26px;line-height:1;width:36px;height:36px;border-radius:50%;display:grid;place-items:center;box-shadow:inset 0 0 0 1px rgba(13,13,13,.2);transition:transform .6s var(--ease),background .4s var(--ease),color .4s var(--ease)}
.wk-panel:hover .wk-plus,.wk-spine:focus-visible .wk-plus{transform:rotate(90deg);background:var(--ink);color:#fff}
.wk-bw{position:absolute;inset:0;opacity:0;pointer-events:none;transition:opacity .3s var(--ease)}
.wk-panel.is-open .wk-bw{opacity:1;pointer-events:auto;transition:opacity .6s var(--ease) .3s}
.wk-body{display:grid;grid-template-columns:minmax(0,1.15fr) minmax(0,1fr);gap:28px;height:100%;padding:36px;min-width:min(100%,760px)}
.wk-left{display:flex;flex-direction:column;min-width:0;overflow:hidden}
.wk-kick{font-size:11px;letter-spacing:.08em;text-transform:uppercase;color:var(--mute)}
.wk-title{margin-top:12px;font-weight:700;font-size:clamp(26px,2.9vw,42px);letter-spacing:-.045em;line-height:1.02;text-wrap:balance}
.wk-desc{margin-top:14px;font-size:15px;line-height:1.5;color:var(--ink-2)}
.wk-feat{margin-top:16px;display:grid;grid-template-columns:1fr 1fr;gap:6px 16px}
.wk-feat li{font-size:13px;line-height:1.3;color:var(--ink-2);padding-left:14px;position:relative}
.wk-feat li::before{content:"";position:absolute;left:0;top:.6em;width:6px;height:1px;background:var(--ink)}
.wk-tech{margin-top:16px;display:flex;flex-wrap:wrap;gap:6px}
.wk-tech li{display:inline-flex;align-items:center;gap:6px;height:28px;padding-inline:11px;border-radius:999px;font-size:12px;font-weight:500;box-shadow:inset 0 0 0 1px var(--line);background:var(--paper)}
.wk-tech li:has(img){padding-left:7px}
.wk-link{margin-top:auto;align-self:flex-start}
.wk-tech + .wk-link{margin-top:20px}
.wk-right{display:flex;flex-direction:column;min-width:0}
.wk-vis{flex:1;min-height:0;border-radius:18px;background:var(--paper);box-shadow:inset 0 0 0 1px var(--line);overflow:hidden;clip-path:inset(0 100% 0 0);transition:clip-path .1s linear;display:grid;place-items:center;padding:20px}
.wk-panel.is-open .wk-vis{clip-path:inset(0 0 0 0);transition:clip-path 1.1s var(--ease) .35s}
.wk-cap{margin-top:10px;font-size:10.5px;letter-spacing:.08em;text-transform:uppercase;color:var(--faint);text-align:right}

/* mini UIs: grayscale only */
.mu{width:100%;max-width:340px;max-height:100%;border-radius:14px;background:#fff;box-shadow:0 20px 40px -24px rgba(13,13,13,.4),inset 0 0 0 1px var(--line);padding:14px;display:grid;gap:10px;overflow:hidden}
.mu span,.mu b{display:block;height:7px;border-radius:4px;background:#e1ded8}
.mu b{background:#c9c6c0;width:55%}
.mu-bar{display:flex;gap:5px;align-items:center}
.mu-bar i{width:8px;height:8px;border-radius:50%;background:#d6d3cd}
.mu-bar b{margin-left:auto;width:34%;height:7px}
.mu-bar em{font-style:normal;font-size:10.5px;font-weight:600;background:var(--ink);color:#fff;border-radius:999px;padding:3px 10px;margin-left:auto}

.mu-shop-grid{display:grid;grid-template-columns:1fr 1fr;gap:8px}
.mu-card{padding:8px;border-radius:10px;box-shadow:inset 0 0 0 1px var(--line);display:grid;gap:6px;background:#faf9f7}
.mu-thumb{height:46px;border-radius:6px;background:#e8e6e1;display:grid;place-items:center}
.mu-thumb span{width:50%;height:6px}
.mu-meta b{width:70%;height:7px}
.mu-meta span{width:45%;height:6px;margin-top:4px}
.mu-badge{font-size:9.5px;font-weight:600;text-transform:uppercase;letter-spacing:.06em;color:var(--mute);padding-top:2px}
.mu-order-strip{display:flex;align-items:center;justify-content:space-between;padding:8px 10px;border-radius:8px;background:#f3f1ec;font-size:11px}
.mu-order-strip b{width:70px;height:6px;margin-bottom:3px}
.mu-order-strip span{width:120px;height:5px}
.mu-order-strip em{font-style:normal;font-size:10.5px;font-weight:600;color:var(--ink)}

.mu-code{background:#181818;color:#e5e5e5;border-radius:10px;overflow:hidden;padding-bottom:8px}
.mu-tabs{display:flex;gap:8px;padding:6px 10px;background:#0d0d0d;font-size:10px}
.mu-tabs b{background:none;color:#fff;width:auto;height:auto;font-size:10px}
.mu-tabs span{background:none;color:#888;width:auto;height:auto;font-size:10px}
.mu-lines{padding:8px 10px;font-family:var(--f-mono),monospace;font-size:9.5px;line-height:1.5;color:#aaa}
.mu-lines p{margin:0}
.mu-lines .kw{display:inline-block;width:20px;height:5px;background:#c678dd;border-radius:2px}
.mu-lines .fn{display:inline-block;width:26px;height:5px;background:#61afef;border-radius:2px}
.mu-lines .ret{display:inline-block;width:18px;height:5px;background:#e06c75;border-radius:2px}
.mu-lines .tag{display:inline-block;width:18px;height:5px;background:#e5c07b;border-radius:2px}
.mu-output{display:flex;align-items:center;justify-content:space-between;padding:8px 10px;border-radius:8px;box-shadow:inset 0 0 0 1px var(--line);font-size:11px}
.mu-output span{width:auto;height:auto;background:none;font-weight:600;color:var(--mute)}
.mu-output button{font-size:11px;font-weight:600;background:var(--ink);color:#fff;padding:4px 12px;border-radius:6px}

.mu-tab-strip{display:flex;gap:4px;overflow:hidden;font-size:10px;font-weight:600}
.mu-tab-strip span{width:auto;height:auto;background:#f0eee9;padding:4px 8px;border-radius:6px;color:var(--mute)}
.mu-tab-strip span.on{background:var(--ink);color:#fff}
.mu-stats{display:grid;grid-template-columns:repeat(3,1fr);gap:6px}
.mu-stats>div{padding:6px 8px;border-radius:8px;background:#f5f3ee}
.mu-stats small{display:block;font-size:9px;text-transform:uppercase;letter-spacing:.05em;color:var(--mute)}
.mu-stats b{width:auto;height:auto;background:none;font-size:13px;font-weight:700;color:var(--ink);margin-top:2px}
.mu-chart{height:68px;border-radius:8px;box-shadow:inset 0 0 0 1px var(--line);padding:8px 10px 4px;display:flex;align-items:flex-end}
.mu-bars{display:flex;width:100%;height:100%;align-items:flex-end;justify-content:space-between;gap:6px}
.mu-bars i{flex:1;background:linear-gradient(180deg,var(--ink),#777);border-radius:3px 3px 0 0}

@media (max-width:1180px){
 .wk-body{padding:26px;gap:20px}
 .wk-feat{grid-template-columns:1fr}
 .wk-desc{font-size:14px}
 .wk-feat li{font-size:12.5px}
}
@media (max-width:899px){
 .wk-row{flex-direction:column;height:auto;margin-top:40px}
 .wk-panel{flex:none;display:flex;flex-direction:column}
 .wk-spine{position:relative;inset:auto;flex-direction:row;gap:14px;padding:0 18px;height:76px;justify-content:flex-start;text-align:left}
 .wk-st{writing-mode:horizontal-tb;transform:none;font-size:17px;max-height:none;flex:1;min-width:0;text-align:left;line-height:1.15;white-space:normal;display:-webkit-box;-webkit-line-clamp:2;-webkit-box-orient:vertical}
 .wk-panel.is-open .wk-spine{opacity:1;pointer-events:auto}
 .wk-plus{flex:none}
 .wk-panel.is-open .wk-plus{transform:rotate(45deg)}
 .wk-bw{position:relative;inset:auto;display:grid;grid-template-rows:0fr;opacity:1;pointer-events:auto;transition:grid-template-rows .8s var(--ease)}
 .wk-panel.is-open .wk-bw{grid-template-rows:1fr;transition:grid-template-rows .8s var(--ease)}
 .wk-bw>.wk-body{overflow:hidden;min-height:0}
 .wk-body{grid-template-columns:minmax(0,1fr);padding:0 18px;min-width:0;height:auto;gap:18px}
 .wk-panel.is-open .wk-body{padding-bottom:22px}
 .wk-feat{grid-template-columns:1fr 1fr}
 .wk-vis{min-height:260px}
 .wk-left{overflow:visible}
 .wk-link{margin-top:20px}
}
@media (max-width:420px){.wk-feat{grid-template-columns:1fr}}
@media (prefers-reduced-motion:reduce){.mu-mic i{animation:none}}
`;
