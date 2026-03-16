import { useState, useEffect, useRef } from "react";

const S = `
@import url('https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@300;400;500;600;700;800&family=Fira+Code:wght@400;500&display=swap');
*{margin:0;padding:0;box-sizing:border-box;}
:root{--bg:#08090d;--card:#0f1015;--border:#ffffff09;--border2:#ffffff12;--ora:#f97316;--ora2:#fb923c;--oraL:#f9731610;--oraB:#f9731625;--text:#dde3f0;--muted:#7a8a9e;--dim:#555;--green:#22c55e;}
body{background:var(--bg);color:var(--text);font-family:'Plus Jakarta Sans',sans-serif;overflow-x:hidden;cursor:none;}
.cur{width:10px;height:10px;background:var(--ora);border-radius:50%;position:fixed;pointer-events:none;z-index:9999;mix-blend-mode:difference;}
.trl{width:26px;height:26px;border:1px solid #f9731640;border-radius:50%;position:fixed;pointer-events:none;z-index:9998;transition:left .12s ease,top .12s ease;}
::-webkit-scrollbar{width:3px;}::-webkit-scrollbar-thumb{background:var(--ora);border-radius:2px;}
nav{position:fixed;top:0;left:0;right:0;z-index:100;display:flex;justify-content:space-between;align-items:center;padding:1rem 4rem;background:#08090dee;backdrop-filter:blur(12px);border-bottom:1px solid var(--border);}
.logo{font-size:1.05rem;font-weight:800;color:#fff;letter-spacing:-.3px;}.logo em{font-style:normal;color:var(--ora);}
.nl{display:flex;gap:2rem;list-style:none;}
.nl a{font-family:'Fira Code',monospace;font-size:.72rem;color:var(--dim);text-decoration:none;letter-spacing:.5px;transition:color .2s;}
.nl a:hover{color:var(--ora2);}
.hero{min-height:100vh;display:grid;grid-template-columns:1fr auto;gap:4rem;padding:7rem 4rem 4rem;align-items:center;max-width:1200px;margin:0 auto;}
.tag{display:inline-flex;align-items:center;gap:5px;background:var(--oraL);border:1px solid var(--oraB);border-radius:20px;padding:.28rem .8rem;font-family:'Fira Code',monospace;font-size:.68rem;color:var(--ora2);margin-bottom:1.1rem;}
.pls{width:5px;height:5px;background:var(--green);border-radius:50%;animation:blink 1.5s infinite;}
@keyframes blink{0%,100%{opacity:1}50%{opacity:.15}}
h1.hn{font-size:clamp(2.2rem,4vw,3.2rem);font-weight:800;color:#fff;line-height:1.1;letter-spacing:-.5px;margin-bottom:.35rem;}
h1.hn b{color:var(--ora);}
.sub{font-family:'Fira Code',monospace;font-size:.75rem;color:var(--dim);letter-spacing:1px;margin-bottom:.9rem;}
.bar{width:28px;height:3px;background:var(--ora);border-radius:2px;margin-bottom:1.1rem;}
.desc{font-size:.95rem;color:var(--muted);line-height:1.75;margin-bottom:1.8rem;max-width:460px;}
.brow{display:flex;gap:.7rem;}
.b1{padding:.6rem 1.5rem;background:var(--ora);color:#fff;border:none;border-radius:8px;font-family:'Fira Code',monospace;font-size:.68rem;cursor:pointer;transition:background .2s;}
.b1:hover{background:#ea6d10;}
.b2{padding:.6rem 1.5rem;background:transparent;border:1px solid var(--oraB);color:var(--ora2);border-radius:8px;font-family:'Fira Code',monospace;font-size:.68rem;cursor:pointer;transition:all .2s;}
.b2:hover{background:var(--oraL);}
.hcard{width:180px;height:210px;background:var(--card);border:1px solid var(--border2);border-radius:18px;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:.55rem;position:relative;flex-shrink:0;}
.hbadge{position:absolute;top:-9px;right:-9px;width:24px;height:24px;background:var(--green);border-radius:50%;display:flex;align-items:center;justify-content:center;font-size:.65rem;border:2px solid var(--bg);color:#fff;}
.hci{font-size:3rem;font-weight:800;color:var(--ora);line-height:1;}
.hcn{font-size:.9rem;font-weight:700;color:#fff;}
.hcr{font-family:'Fira Code',monospace;font-size:.55rem;color:#333;letter-spacing:1px;}
section{padding:4.5rem 4rem;max-width:1200px;margin:0 auto;}
.sh{display:flex;align-items:center;gap:.9rem;margin-bottom:2rem;}
.sl{font-family:'Fira Code',monospace;font-size:.65rem;color:var(--ora);letter-spacing:3px;white-space:nowrap;}
.shr{flex:1;height:1px;background:var(--border);}
.skg{display:grid;grid-template-columns:repeat(auto-fit,minmax(180px,1fr));gap:1rem;}
.sk{background:var(--card);border:1px solid var(--border);border-radius:10px;padding:1.1rem;text-align:center;transition:border-color .2s,transform .2s;}
.sk:hover{border-color:var(--ora);transform:translateY(-3px);}
.ski{font-size:1.4rem;margin-bottom:.4rem;}
.skn{font-size:.82rem;font-weight:600;color:#ccc;margin-bottom:.6rem;}
.skb{height:3px;background:#1a1c24;border-radius:2px;overflow:hidden;margin-bottom:.3rem;}
.skf{height:100%;background:var(--ora);border-radius:2px;transition:width 1.5s cubic-bezier(.23,1,.32,1);}
.skp{font-family:'Fira Code',monospace;font-size:.6rem;color:var(--ora2);}
.softs{display:flex;flex-wrap:wrap;gap:.5rem;margin-top:1.4rem;justify-content:center;}
.sp{padding:.28rem .85rem;background:var(--oraL);border:1px solid var(--oraB);border-radius:20px;font-size:.72rem;color:var(--ora2);font-family:'Fira Code',monospace;}
.pg{display:grid;grid-template-columns:repeat(auto-fit,minmax(280px,1fr));gap:1.2rem;}
.pc{background:var(--card);border:1px solid var(--border);border-radius:14px;padding:1.6rem;position:relative;overflow:hidden;transition:border-color .25s,transform .25s;}
.pc::after{content:'';position:absolute;bottom:0;left:0;right:0;height:2px;background:var(--ora);transform:scaleX(0);transform-origin:left;transition:transform .35s;}
.pc:hover{border-color:var(--ora);transform:translateY(-5px);}
.pc:hover::after{transform:scaleX(1);}
.pch{display:flex;align-items:center;justify-content:space-between;margin-bottom:.9rem;}
.pci{font-size:1.3rem;}
.pcn{font-family:'Fira Code',monospace;font-size:.6rem;color:#333;}
.pct{font-size:.95rem;font-weight:700;color:#fff;margin-bottom:.6rem;}
.pcd{font-size:.83rem;color:var(--muted);line-height:1.65;margin-bottom:1rem;}
.ptags{display:flex;flex-wrap:wrap;gap:.35rem;}
.ptag{padding:.2rem .6rem;background:var(--oraL);border:1px solid var(--oraB);border-radius:4px;font-family:'Fira Code',monospace;font-size:.58rem;color:var(--ora2);}
.tl{display:flex;flex-direction:column;gap:1rem;}
.tli{display:flex;gap:1rem;}
.tdcol{display:flex;flex-direction:column;align-items:center;}
.td{width:11px;height:11px;background:var(--ora);border-radius:50%;flex-shrink:0;margin-top:5px;}
.tdc{width:1px;flex:1;background:var(--border);margin-top:3px;}
.tcard{background:var(--card);border:1px solid var(--border);border-radius:10px;padding:1.1rem;flex:1;transition:border-color .2s;}
.tcard:hover{border-color:var(--ora);}
.tyr{font-family:'Fira Code',monospace;font-size:.62rem;color:var(--ora2);letter-spacing:1px;margin-bottom:.25rem;}
.tdeg{font-size:.92rem;font-weight:700;color:#fff;margin-bottom:.15rem;}
.tsch{font-size:.8rem;color:var(--dim);}
.cg{display:grid;grid-template-columns:1fr 1.5fr;gap:2rem;align-items:start;}
.cinfo{display:flex;flex-direction:column;gap:.7rem;}
.ci{display:flex;align-items:center;gap:.9rem;padding:.9rem 1.1rem;background:var(--card);border:1px solid var(--border);border-radius:10px;transition:border-color .2s;}
.ci:hover{border-color:var(--ora);}
.cico{width:32px;height:32px;background:var(--oraL);border-radius:7px;display:flex;align-items:center;justify-content:center;font-size:.9rem;flex-shrink:0;}
.clbl{font-family:'Fira Code',monospace;font-size:.58rem;color:var(--ora2);letter-spacing:1px;}
.cval{font-size:.8rem;color:#bbb;margin-top:2px;word-break:break-all;}
.cf{display:flex;flex-direction:column;gap:.8rem;}
.fr{display:grid;grid-template-columns:1fr 1fr;gap:.8rem;}
.fg{display:flex;flex-direction:column;gap:.25rem;}
.flbl{font-family:'Fira Code',monospace;font-size:.58rem;color:var(--ora2);letter-spacing:1px;}
.fi,.fta{background:var(--card);border:1px solid var(--border2);border-radius:8px;padding:.65rem .85rem;color:var(--text);font-family:'Plus Jakarta Sans',sans-serif;font-size:.88rem;outline:none;transition:border-color .2s;resize:none;}
.fi:focus,.fta:focus{border-color:var(--ora);}
.fta{min-height:100px;}
.ok{padding:.6rem .9rem;background:#22c55e14;border:1px solid #22c55e35;border-radius:8px;font-family:'Fira Code',monospace;font-size:.72rem;color:#86efac;}
footer{border-top:1px solid var(--border);padding:1.4rem 4rem;display:flex;justify-content:space-between;align-items:center;}
.fc{font-family:'Fira Code',monospace;font-size:.62rem;color:#333;letter-spacing:1px;}
.fc b{color:var(--ora2);font-weight:400;}
.lps{display:flex;gap:.45rem;}
.lp{padding:.22rem .7rem;background:var(--oraL);border:1px solid var(--oraB);border-radius:20px;font-size:.65rem;color:var(--ora2);font-family:'Fira Code',monospace;}
.fi{width:100%;}
.fade{opacity:0;transform:translateY(22px);transition:opacity .7s ease,transform .7s ease;}
.fade.on{opacity:1;transform:translateY(0);}
@media(max-width:768px){
  nav{padding:1rem 1.2rem;}.nl{display:none;}
  .hero{grid-template-columns:1fr;padding:5rem 1.2rem 3rem;gap:2rem;}.hcard{display:none;}
  section{padding:2.5rem 1.2rem;}
  .cg,.fr{grid-template-columns:1fr;}
  footer{padding:1rem 1.2rem;flex-direction:column;gap:.6rem;text-align:center;}
}
`;

const skills = [
  { icon: "🐍", name: "Python", pct: 55 },
  { icon: "📊", name: "Data Analysis", pct: 60 },
  { icon: "📋", name: "MS Excel", pct: 70 },
  { icon: "🤖", name: "AI Tools", pct: 50 },
];

const projects = [
  { icon: "📊", num: "// 01", title: "Student Data Analysis", desc: "Analyzed student datasets with spreadsheet tools to identify patterns, trends, and key insights from academic data.", tags: ["Excel", "Analytics", "Patterns", "Statistics"] },
  { icon: "🐍", num: "// 02", title: "Python Practice Programs", desc: "Built Python programs using loops, conditionals, and data processing logic — building a solid coding foundation.", tags: ["Python", "Logic", "Loops", "Conditionals"] },
];

export default function App() {
  const [cur, setCur] = useState({ x: 0, y: 0 });
  const [trl, setTrl] = useState({ x: 0, y: 0 });
  const [skVis, setSkVis] = useState(false);
  const [form, setForm] = useState({ name: "", email: "", subject: "", msg: "" });
  const [sent, setSent] = useState(false);
  const skRef = useRef(null);

  useEffect(() => {
    const mv = e => { setCur({ x: e.clientX, y: e.clientY }); setTimeout(() => setTrl({ x: e.clientX, y: e.clientY }), 80); };
    window.addEventListener("mousemove", mv);
    return () => window.removeEventListener("mousemove", mv);
  }, []);

  useEffect(() => {
    const ob = new IntersectionObserver(([e]) => { if (e.isIntersecting) setSkVis(true); }, { threshold: 0.2 });
    if (skRef.current) ob.observe(skRef.current);
    return () => ob.disconnect();
  }, []);

  useEffect(() => {
    const els = document.querySelectorAll(".fade");
    const ob = new IntersectionObserver(entries => entries.forEach(e => { if (e.isIntersecting) e.target.classList.add("on"); }), { threshold: 0.1 });
    els.forEach(el => ob.observe(el));
    return () => ob.disconnect();
  }, []);

  const go = id => document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });

  const send = () => {
    if (!form.name || !form.msg) { alert("Please fill your name and message."); return; }
    const sub = encodeURIComponent(form.subject || "Message from Portfolio");
    const body = encodeURIComponent(`Name: ${form.name}\nEmail: ${form.email}\n\nMessage:\n${form.msg}`);
    window.open(`mailto:partheepanncsda2024@sankara.ac.in?subject=${sub}&body=${body}`);
    setSent(true);
    setForm({ name: "", email: "", subject: "", msg: "" });
    setTimeout(() => setSent(false), 5000);
  };

  const f = (k, v) => setForm(p => ({ ...p, [k]: v }));

  return (
    <>
      <style>{S}</style>
      <div className="cur" style={{ left: cur.x - 5, top: cur.y - 5, position: "fixed" }} />
      <div className="trl" style={{ left: trl.x - 13, top: trl.y - 13 }} />

      <nav>
        <div className="logo">partheepan<em>.</em>dev</div>
        <ul className="nl">
          {["about", "skills", "projects", "education", "contact"].map(s => (
            <li key={s}><a href={`#${s}`} onClick={e => { e.preventDefault(); go(s); }}>{s}</a></li>
          ))}
        </ul>
      </nav>

      {/* HERO */}
      <div id="about" className="hero">
        <div>
          <div className="tag"><span className="pls" /> open to internships</div>
          <h1 className="hn">PARTHEEPAN <b>N.</b></h1>
          <p className="sub">aspiring data analyst · cs student</p>
          <div className="bar" />
          <p className="desc">B.Sc Computer Science student at Sankara College, Coimbatore — specializing in Data Analytics. Passionate about Python, Excel, and turning raw data into real insights.</p>
          <div className="brow">
            <button className="b1" onClick={() => go("contact")}>contact me</button>
            <button className="b2" onClick={() => go("projects")}>projects →</button>
          </div>
        </div>
        <div className="hcard">
          <div className="hbadge">✓</div>
          <div className="hci">PN</div>
          <div className="hcn">Partheepan N</div>
          <div className="hcr">CS · DATA ANALYTICS</div>
        </div>
      </div>

      {/* SKILLS */}
      <section id="skills" ref={skRef}>
        <div className="sh fade"><span className="sl">02 — skills</span><div className="shr" /></div>
        <div className="skg fade">
          {skills.map((s, i) => (
            <div className="sk" key={s.name}>
              <div className="ski">{s.icon}</div>
              <div className="skn">{s.name}</div>
              <div className="skb"><div className="skf" style={{ width: skVis ? `${s.pct}%` : "0%", transitionDelay: `${i * 0.15}s` }} /></div>
              <div className="skp">{s.pct}%</div>
            </div>
          ))}
        </div>
        <div className="softs fade">
          {["Communication", "Teamwork", "Time Management", "Adaptability"].map(s => <span className="sp" key={s}>{s}</span>)}
        </div>
      </section>

      {/* PROJECTS */}
      <section id="projects">
        <div className="sh fade"><span className="sl">03 — projects</span><div className="shr" /></div>
        <div className="pg">
          {projects.map((p, i) => (
            <div className="pc fade" key={p.title} style={{ transitionDelay: `${i * 0.15}s` }}>
              <div className="pch"><span className="pci">{p.icon}</span><span className="pcn">{p.num}</span></div>
              <div className="pct">{p.title}</div>
              <p className="pcd">{p.desc}</p>
              <div className="ptags">{p.tags.map(t => <span className="ptag" key={t}>{t}</span>)}</div>
            </div>
          ))}
        </div>
      </section>

      {/* EDUCATION */}
      <section id="education">
        <div className="sh fade"><span className="sl">04 — education</span><div className="shr" /></div>
        <div className="tl fade">
          <div className="tli">
            <div className="tdcol"><div className="td" /><div className="tdc" /></div>
            <div className="tcard"><div className="tyr">2024 — 2027 · ongoing</div><div className="tdeg">B.Sc Computer Science with Data Analytics</div><div className="tsch">Sankara College of Science & Commerce, Coimbatore</div></div>
          </div>
          <div className="tli">
            <div className="tdcol"><div className="td" style={{ background: "#fb923c" }} /></div>
            <div className="tcard"><div className="tyr">2023 · completed</div><div className="tdeg">HSC — 73%</div><div className="tsch">R. Nadesanar Boys Higher Secondary School</div></div>
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact">
        <div className="sh fade"><span className="sl">05 — contact</span><div className="shr" /></div>
        <div className="cg fade">
          <div className="cinfo">
            {[
              { ico: "✉", lbl: "email", val: "partheepanncsda2024@sankara.ac.in" },
              { ico: "📞", lbl: "phone", val: "+91 8925346586" },
              { ico: "🎓", lbl: "college", val: "Sankara College, Coimbatore" },
            ].map(c => (
              <div className="ci" key={c.lbl}>
                <div className="cico">{c.ico}</div>
                <div><div className="clbl">{c.lbl}</div><div className="cval">{c.val}</div></div>
              </div>
            ))}
          </div>
          <div className="cf">
            <div className="fr">
              <div className="fg"><label className="flbl">your name</label><input className="fi" placeholder="John Doe" value={form.name} onChange={e => f("name", e.target.value)} /></div>
              <div className="fg"><label className="flbl">your email</label><input className="fi" placeholder="you@email.com" value={form.email} onChange={e => f("email", e.target.value)} /></div>
            </div>
            <div className="fg"><label className="flbl">subject</label><input className="fi" placeholder="Internship / Collaboration" value={form.subject} onChange={e => f("subject", e.target.value)} /></div>
            <div className="fg"><label className="flbl">message</label><textarea className="fta" placeholder="Hi Partheepan, I'd love to connect..." value={form.msg} onChange={e => f("msg", e.target.value)} /></div>
            {sent && <div className="ok">✓ Mail app opening → partheepanncsda2024@sankara.ac.in</div>}
            <button className="b1" style={{ alignSelf: "flex-start" }} onClick={send}>send message →</button>
          </div>
        </div>
      </section>

      <footer>
        <div className="fc">designed by <b>partheepan n</b> · 2025</div>
        <div className="lps"><span className="lp">Tamil</span><span className="lp">English</span></div>
      </footer>
    </>
  );
}
