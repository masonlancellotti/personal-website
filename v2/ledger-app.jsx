const { useState, useEffect } = React;

// Strip any leftover [fn:N] tokens from bullet text
function renderWithFns(text) {
  return String(text).replace(/\s*\[fn:\d+\]/g, '');
}

// ---------- Tweaks ----------
function Tweaks({ onChange }) {
  const [open, setOpen] = useState(true);
  const [palette, setPalette] = useState(window.__TWEAKS__.palette);
  const [showGrain, setShowGrain] = useState(window.__TWEAKS__.showGrain);
  const [density, setDensity] = useState(window.__TWEAKS__.density || 'regular');
  const [typeface, setTypeface] = useState(window.__TWEAKS__.typeface || 'helvetica');
  const [rules, setRules] = useState(window.__TWEAKS__.rules || 'clean');
  const [barEdges, setBarEdges] = useState(window.__TWEAKS__.barEdges || 'aligned');

  useEffect(() => {
    document.documentElement.setAttribute('data-palette', palette);
    document.documentElement.setAttribute('data-density', density);
    document.documentElement.setAttribute('data-typeface', typeface);
    document.documentElement.setAttribute('data-rules', rules);
    document.documentElement.setAttribute('data-edges', barEdges);
    document.body.setAttribute('data-grain', String(showGrain));
    Object.assign(window.__TWEAKS__, { palette, showGrain, density, typeface, rules, barEdges });
    window.parent.postMessage({ type: '__edit_mode_set_keys', edits: { palette, showGrain, density, typeface, rules, barEdges } }, '*');
  }, [palette, showGrain, density, typeface, rules, barEdges]);

  if (!open) return (
    <button className="tweaks-panel" style={{ width: 'auto', padding: '8px 14px' }} onClick={() => setOpen(true)}>
      <span className="mono" style={{ fontSize: 10, letterSpacing: '0.2em', textTransform: 'uppercase' }}>Tweaks</span>
    </button>);


  const palettes = [
  { id: 'ink', label: 'ink', sw: ['#f2f3f7', '#1a1e2e', '#2563a8'] },
  { id: 'warm', label: 'warm', sw: ['#f5efe6', '#382d24', '#c86a3e'] },
  { id: 'forest', label: 'forest', sw: ['#eef2ea', '#23302a', '#4a7057'] }];


  return (
    <div className="tweaks-panel">
      <h4>Tweaks<button className="close" onClick={() => setOpen(false)}>×</button></h4>
      <div className="hint">palette · density · grain</div>
      <div className="group">
        <label className="label">Palette</label>
        <div className="opts">
          {palettes.map((p) =>
          <button key={p.id} className={palette === p.id ? 'active' : ''} onClick={() => setPalette(p.id)}>
              <div className="swatch-row">{p.sw.map((s, i) => <div key={i} className="sw" style={{ background: s }}></div>)}</div>
              {p.label}
            </button>
          )}
        </div>
      </div>
      <div className="group">
        <label className="label">Density</label>
        <div className="opts">
          {['dense', 'regular', 'loose'].map((d) =>
          <button key={d} className={density === d ? 'active' : ''} onClick={() => setDensity(d)}>{d}</button>
          )}
        </div>
      </div>
      <div className="group">
        <label className="label">Typeface</label>
        <div className="opts">
          {[
          { id: 'plain', label: 'arial' },
          { id: 'helvetica', label: 'helvetica' },
          { id: 'aptos', label: 'aptos' }].
          map((t) =>
          <button key={t.id} className={typeface === t.id ? 'active' : ''} onClick={() => setTypeface(t.id)} style={{ fontFamily: t.id === 'plain' ? 'Arial, sans-serif' : t.id === 'helvetica' ? '"Helvetica Neue", Arial, sans-serif' : 'Aptos, "Segoe UI", Arial, sans-serif' }}>{t.label}</button>
          )}
        </div>
      </div>
      <div className="group">
        <label className="label">Section rules</label>
        <div className="opts">
          {['editorial', 'clean', 'panel'].map((r) =>
          <button key={r} className={rules === r ? 'active' : ''} onClick={() => setRules(r)}>{r}</button>
          )}
        </div>
      </div>
      <div className="group">
        <label className="label">Bar edges</label>
        <div className="opts">
          {['aligned', 'extended'].map((e) =>
          <button key={e} className={barEdges === e ? 'active' : ''} onClick={() => setBarEdges(e)}>{e}</button>
          )}
        </div>
      </div>
      <div className="group">
        <label className="label">Paper grain</label>
        <div className={`toggle ${showGrain ? 'on' : ''}`} onClick={() => setShowGrain(!showGrain)}>
          <span>{showGrain ? 'on' : 'off'}</span>
          <span className="sw"></span>
        </div>
      </div>
    </div>);

}

// ---------- Masthead ----------
function Masthead({ active, setActive }) {
  const today = new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' });
  const tabs = [
  { id: 'filing', label: 'Experience', roman: 'I' },
  { id: 'repos', label: 'Project Repositories', roman: 'II' },
  { id: 'blog', label: 'Market Opinions', roman: 'III' }];

  return (
    <header className="masthead">
      <div className="masthead-strip">
        <span style={{ fontSize: "13px" }}>Expanded resume</span>
        <span style={{ textAlign: 'center', fontSize: "13px" }}>Personal portfolio</span>
        <span style={{ textAlign: 'right', fontSize: "13px" }}>Last updated: 5/21/2026</span>
      </div>
      <div className="name-row">
        <h1 className="name">Mason Lancellotti</h1>
        <div className="filing-id">
          <div><b>Emory University</b> · Atlanta, GA</div>
          <div>Econ + CS · Business minor · <b>GPA 3.93</b></div>
          <div><a href="mailto:mason.angelo.lancellotti@gmail.com" style={{ color: 'inherit', textDecoration: 'none' }}>mason.angelo.lancellotti@gmail.com</a> · (703) 919-3319</div>
        </div>
      </div>
      <nav className="tabstrip">
        {tabs.map((t) =>
        <button key={t.id} className={active === t.id ? 'active' : ''} onClick={() => setActive(t.id)} style={{ fontSize: "13px" }}>
            <span className="roman">{t.roman}.</span>{t.label}
          </button>
        )}
        <span className="spacer"></span>
        <span className="as-of">New blog every Thursday at 6:00 P.M. EST</span>
      </nav>
    </header>);

}

// ---------- Filing (the main page) ----------
function Filing() {
  const [openRow, setOpenRow] = useState(null);

  // stats
  const totalRoles = REGISTER.filter((r) => !r.future).length;
  const states = new Set(REGISTER.map((r) => r.place.split(', ')[1])).size;
  const skills = SKILLS.length;
  const active = REGISTER.filter((r) => r.end === null && !r.future).length;

  return (
    <div>
      <section className="summary">
        <div>
          <p className="lede">
            Undergraduate at <em>Emory University</em> studying economics and computer science, with a business minor and a master's in economics expected in 2028.
            <small style={{ width: "400px" }}>Below you can find a running archive of my work, experience, and skillset. Some entries can be expanded to provide more detail, with links, notes, or context where useful. I created this page with the goal of painting a fuller picture of my background than a static resume alone can accomplish.


            </small>
          </p>
        </div>
        <div className="statblock">
          <div><span className="k">Positions held</span><span className="v num">{totalRoles}</span></div>
          <div><span className="k">Active projects</span><span className="v num">{active}</span></div>
          <div><span className="k">Courses taken</span><span className="v num">31</span></div>
          <div><span className="k">Tools & skills</span><span className="v num">{skills}</span></div>
        </div>
      </section>

      <div className="section-head">
        <span className="title"><span className="numeral">I</span><span className="dot">·</span>Roadmap of Experience</span>
        <span className="rule"></span>
        <span className="note" style={{ fontSize: "13px" }}>High school + college</span>
      </div>

      <div className="register">
        <div className="register-head">
          <span className="col-period">Period</span>
          <span className="col-org">Organization</span>
          <span className="col-role">Role</span>
          <span className="col-locus">Location</span>
          <span></span>
        </div>
        {REGISTER.map((r, i) =>
        <React.Fragment key={r.n}>
            <div
            className={`row ${openRow === r.n ? 'open' : ''} ${r.future ? 'future' : ''}`}
            onClick={() => setOpenRow(openRow === r.n ? null : r.n)}>
            
              <span className="period">{r.period}</span>
              <span className="org">{r.org}</span>
              <span className="role">{r.role}</span>
              <span className="locus">{r.place}</span>
              <span className="chev">›</span>
            </div>
            {openRow === r.n &&
          <div className="row-detail">
                <div className="inner">
                  <div className="body">
                    <div className="duration">{r.duration}</div>
                    <p className="note">{r.note}</p>
                    <ul>{r.bullets.map((b, j) => <li key={j}>{renderWithFns(b)}</li>)}</ul>
                    {r.link &&
                <a className="row-link" href={r.link.href} target="_blank" rel="noopener" onClick={(e) => {e.stopPropagation();}}>
                        {r.link.label} <span aria-hidden="true">↗</span>
                      </a>
                }
                    {r.photos &&
                <div className="row-collage">
                        {r.photos.map((src, k) => <img key={k} src={src} alt="" />)}
                      </div>
                }
                  </div>
                  {r.photo &&
              <div className="aside-col">
                      <img src={r.photo} alt="" className="row-photo" />
                    </div>
              }
                </div>
              </div>
          }
          </React.Fragment>
        )}
      </div>

      <div className="involvement">
        <a className="involvement-fn" href="#fn-2" aria-label="Footnote 2">2</a>
        {INVOLVEMENT.map((it, i) =>
        <div key={i} className={`inv-card${it.aside ? ' inv-card-aside' : ''}`}>
            {it.letters && <div className="inv-letters" aria-hidden="true">{it.letters}</div>}
            {it.kicker && <div className="inv-kicker">{it.kicker}</div>}
            <div className="inv-head">
              <span className="inv-org">{it.org}</span>
              {!it.aside && <span className="inv-role">{it.role}</span>}
            </div>
            <p className="inv-desc">{it.desc}</p>
            {it.article &&
          <a className="inv-article" href={it.article.href} target="_blank" rel="noopener">
                <span className="inv-article-label">Featured article</span>
                <span className="inv-article-title">{it.article.title}</span>
                <span className="inv-article-meta">
                  {it.article.author && <span className="inv-article-byline">By {it.article.author}</span>}
                  <span className="inv-article-date">{it.article.date} <span className="inv-article-arrow" aria-hidden="true">↗</span></span>
                </span>
              </a>
          }
            {(it.meta || it.since) &&
          <div className="inv-meta">
                {it.meta && <div className="inv-meta-tag">{it.meta}</div>}
                {it.since && <div className="inv-meta-since">{it.since}</div>}
              </div>
          }
          </div>
        )}
      </div>

      <div className="section-head">
        <span className="title"><span className="numeral">II</span><span className="dot">·</span>Skills Index</span>
        <span className="rule"></span>
        <span className="note" style={{ fontSize: "13px" }}>Self-assessed<span className="dot"> ·</span>Based on use frequency, duration, and applied experience</span>
      </div>

      <table className="skills-table">
        <thead>
          <tr><th>Skill</th><th>Level</th><th>Prior applications</th></tr>
        </thead>
        <tbody>
          {SKILLS.map((s, i) =>
          <tr key={i}>
              <td className="skill">{s.skill}</td>
              <td className="level">
                <span className="level-text">{s.level}</span>
                <span className="barwrap">
                  {[1, 2, 3, 4, 5].map((k) => <span key={k} className={k <= s.n ? 'on' : ''}></span>)}
                </span>
              </td>
              <td className="applied">{s.applied}</td>
            </tr>
          )}
        </tbody>
      </table>

      <div className="section-head">
        <span className="title">
          <span className="numeral">III</span><span className="dot">·</span>Undergrad Transcript
          <a className="section-head-link" href="files/mason-transcript.pdf" target="_blank" rel="noopener noreferrer" style={{ fontSize: "12px" }}>
            Open PDF <span aria-hidden="true">↗</span>
          </a>
        </span>
        <span className="rule"></span>
        <span className="note" style={{ fontSize: "13px" }}>Emory University<span className="dot"> ·</span>BA Econ + CS <span className="dot">·</span>May 2027</span>
      </div>

      <div className="transcript">
        {TRANSCRIPT.map((t, i) =>
        <div key={i} className={`term ${t.current ? 'current' : ''}`}>
            <div className="term-head">
              <div className="term-stat"><span className="k">Term</span><span className="v">{t.term}{t.current ? ' · in progress' : ''}</span></div>
              {t.termGpa != null &&
            <div className="term-stat"><span className="k">Term GPA</span><span className="v num">{t.termGpa.toFixed(3)}</span></div>
            }
              <div className="term-stat">
                <span className="k">Credits</span>
                <span className="v num">{t.credits}{t.creditsFn && <a className="fn-ref" href={`#fn-${t.creditsFn}`}>{t.creditsFn}</a>}</span>
              </div>
            </div>
            <div className="courses">
              {t.courses.map((c, j) =>
            <div key={j} className={`course ${c.grade === 'S' || c.grade === 'T' ? 'pass' : ''}`}>
                  <div className="course-row">
                    <span className="course-code">{c.code}</span>
                    <span className="course-name">{c.name}</span>
                    <span className="course-cr">{c.credits.toFixed(2)}</span>
                    <span className={`course-grade grade-${c.grade.replace('-', 'm').replace('+', 'p')}`}>
                      <span className="g-letter">{c.grade.charAt(0)}</span>
                      {c.grade.length > 1 && <span className="g-mod">{c.grade.slice(1)}</span>}
                    </span>
                  </div>
                  <div className="course-note">{c.placeholder}</div>
                </div>
            )}
            </div>
          </div>
        )}
      </div>

      {typeof FOOTNOTES !== 'undefined' && FOOTNOTES.length > 0 &&
      <>
          <div className="section-head">
            <span className="title"><span className="numeral">IV</span><span className="dot">·</span>Footnotes</span>
            <span className="rule"></span>
            <span className="note" style={{ fontSize: "13px" }}>Extra context + clarification</span>
          </div>
          <div className="footnotes">
            {FOOTNOTES.map((f) =>
          <div key={f.n} id={`fn-${f.n}`} className="fn-item">
                <span className="fn-n">[{f.n}]</span>
                <span className="fn-text">{f.text}</span>
              </div>
          )}
          </div>
        </>
      }
    </div>);

}

// ---------- Repos ----------
function Repos() {
  const [openRepo, setOpenRepo] = useState(null);
  return (
    <div>
      <div className="section-head" style={{ marginTop: 0 }}>
        <span className="title"><span className="numeral">I</span><span className="dot">·</span>Active Builds</span>
        <span className="rule"></span>
        <span className="note" style={{ fontSize: "13px" }}>Currently in progress</span>
      </div>
      <div style={{ borderTop: '1px solid var(--ink)', borderBottom: '1px solid var(--ink)' }}>
        <div className="repo-row" style={{ fontFamily: 'var(--font-mono)', fontSize: 10, color: 'var(--muted)', letterSpacing: '0.16em', textTransform: 'uppercase', cursor: 'default', background: 'transparent', padding: '10px 0 9px', borderBottom: '1px solid var(--rule)' }}>
          <span style={{ fontSize: "12px" }}>Title</span><span style={{ fontSize: "12px" }}>Description</span><span style={{ fontSize: "12px" }}>Language</span><span style={{ fontSize: "12px" }}>Status</span><span></span>
        </div>
        {REPOS.map((r, i) =>
        <React.Fragment key={i}>
            <div
            className={`repo-row${openRepo === i ? ' open' : ''}`}
            onClick={() => setOpenRepo(openRepo === i ? null : i)}
            style={{ cursor: 'pointer' }}>
              <span className="name">
                <span className="repo-title">{r.title}</span>
                <span className="repo-handle">{r.name}</span>
              </span>
              <span className="desc">{r.desc}</span>
              <span className="lang" style={{ fontSize: "13px" }}><span className="sq"></span>{r.lang}</span>
              <span className="status" style={{ width: "100px", fontSize: "12px" }}>{r.status}</span>
              <span className="chev">›</span>
            </div>
            {openRepo === i &&
          <div className="repo-detail">
              <div className="repo-detail-inner">
                <p className="repo-detail-note" style={{ width: "1100px" }}>{r.longDesc}</p>
                {r.link &&
              <a className="row-link" href={r.link.href} target="_blank" rel="noopener" onClick={(e) => e.stopPropagation()}>
                  {r.link.label} <span aria-hidden="true">↗</span>
                </a>
              }
              </div>
            </div>
          }
          </React.Fragment>
        )}
      </div>

      <div className="section-head">
        <span className="title"><span className="numeral">II</span><span className="dot">·</span>Coming Soon</span>
        <span className="rule"></span>
        <span className="note" style={{ fontSize: "13px" }}><span className="dot"></span>Tentative future projects<span className="dot"> ·</span>Subject to change</span>
      </div>
      <div className="goal-grid">
        {GOAL_REPOS.map((r, i) =>
        <div key={i} className="goal-card">
            <span className="goal-card-num" style={{ fontSize: "11px" }}>
              {String(i + 1).padStart(2, '0')}
              <span className="goal-card-dot" aria-hidden="true"></span>
            </span>
            <h3 className="goal-card-title">{r.title}</h3>
            <p className="goal-card-desc">{r.desc}</p>
            {r.why &&
          <div className="goal-card-why">
              <span className="goal-card-why-label">WHY</span>
              <p className="goal-card-why-text">{r.why}</p>
            </div>
          }
          </div>
        )}
      </div>
    </div>);

}

// ---------- Blog ----------
function Blog() {
  return (
    <div>
      <div className="section-head" style={{ marginTop: 0 }}>
        <span className="title"><span className="numeral">I</span><span className="dot">·</span>Articles</span>
        <span className="rule"></span>
        <span className="note" style={{ fontSize: "13px" }}>Long-form<span className="dot"> ·</span>Sources provided</span>
      </div>
      <div style={{ borderTop: '1px solid var(--ink)', borderBottom: '1px solid var(--ink)' }}>
        {POSTS.map((p, i) => {
          const clickable = !!p.href;
          const go = () => { if (clickable) window.location.href = p.href; };
          return (
            <div
              key={i}
              className={`blog-entry${p.upcoming ? ' upcoming' : ''}`}
              onClick={go}
              style={{ cursor: clickable ? 'pointer' : 'default' }}
              role={clickable ? 'link' : undefined}
              tabIndex={clickable ? 0 : undefined}
              onKeyDown={(e) => { if (clickable && (e.key === 'Enter' || e.key === ' ')) { e.preventDefault(); go(); } }}>
              <span className="date" style={{ fontSize: "12px" }}>{p.date}</span>
              <div>
                <h3 className="title">{p.title}</h3>
                <p className="excerpt" style={{ width: "435px" }}>{p.excerpt}</p>
                <div className="tags">
                  {p.tags.map((t, j) => <span key={j} style={{ fontSize: "12px" }}>{t}</span>)}
                  {p.upcoming && <span style={{ fontSize: "12px", color: 'var(--accent)' }}>· Coming Thursday</span>}
                </div>
              </div>
              <span className="len" style={{ fontSize: "13px" }}>
                {p.len}
                {clickable && <span style={{ display: 'block', marginTop: 4, fontSize: 11, color: 'var(--accent)' }}>Read →</span>}
              </span>
            </div>
          );
        })}
      </div>
      <a className="featured-article" href="/why-you-shouldve-watched-nvidia-earnings-even-if-you-dont-own-the-stock">
        <div className="featured-article-side">
          <span className="featured-article-label" style={{ fontSize: "12px", fontFamily: "Arial" }}>Featured article</span>
          <span className="featured-article-meta" style={{ fontSize: "12px" }}>May 21, 2026</span>
        </div>
        <div className="featured-article-main">
          <h3 className="featured-article-title">Why you should watch Nvidia earnings even if you don't own the stock</h3>
          <p className="featured-article-excerpt">The market always has bellwether stocks. This piece looks at why Nvidia has become one of the clearest examples in the modern day.</p>
          <span className="featured-article-cta" style={{ fontSize: "12px" }}>Read article <span aria-hidden="true" style={{ fontSize: "12px" }}>↗</span></span>
        </div>
      </a>
    </div>);

}

// ---------- Colophon ----------
function Colophon() {
  return (
    <footer className="colophon" style={{ textTransform: 'none', letterSpacing: '0', fontSize: '12px', fontFamily: 'var(--font-body)' }}>
      <span style={{ color: 'var(--ink-2)' }}>© 2026 Mason Lancellotti</span>
      <span style={{ textAlign: 'center', color: 'var(--ink-2)' }}>
        <a href="mailto:mason.angelo.lancellotti@gmail.com" style={{ color: 'inherit', textDecoration: 'none' }}>mason.angelo.lancellotti@gmail.com</a>
      </span>
      <span style={{ textAlign: 'right', display: 'flex', gap: '18px', justifyContent: 'flex-end', flexWrap: 'wrap' }}>
        <a href="https://www.linkedin.com/in/masonlancellotti/" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--ink-2)', textDecoration: 'none' }}>LinkedIn</a>
        <a href="https://github.com/masonlancellotti" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--ink-2)', textDecoration: 'none' }}>GitHub</a>
        <a href="files/mason-resume.pdf" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--ink-2)', textDecoration: 'none' }}>Resume</a>
        <a href="files/mason-transcript.pdf" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--ink-2)', textDecoration: 'none' }}>Transcript</a>
        <a href="files/mason-sat.pdf" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--ink-2)', textDecoration: 'none' }}>SAT</a>
      </span>
    </footer>);

}

// ---------- App ----------
function initialPortfolioTab() {
  const validTabs = new Set(['filing', 'repos', 'blog']);
  const normalize = (value) => {
    const tab = String(value || '').toLowerCase();
    if (validTabs.has(tab)) return tab;
    if (tab === 'iii' || tab === '3' || tab === 'articles' || tab === 'writing' || tab === 'opinions') return 'blog';
    if (tab === 'ii' || tab === '2' || tab === 'projects') return 'repos';
    if (tab === 'i' || tab === '1' || tab === 'experience') return 'filing';
    return null;
  };

  const params = new URLSearchParams(window.location.search);
  return normalize(params.get('tab') || params.get('page')) ||
    normalize(window.location.hash.replace(/^#/, '')) ||
    normalize(localStorage.getItem('portfolioV2.tab')) ||
    'filing';
}

function App() {
  const [active, setActive] = useState(initialPortfolioTab);
  const [tweaksOn, setTweaksOn] = useState(false);
  useEffect(() => {localStorage.setItem('portfolioV2.tab', active);window.scrollTo({ top: 0 });}, [active]);
  useEffect(() => {
    const onMsg = (e) => {
      const d = e.data || {};
      if (d.type === '__activate_edit_mode') setTweaksOn(true);
      if (d.type === '__deactivate_edit_mode') setTweaksOn(false);
    };
    window.addEventListener('message', onMsg);
    window.parent.postMessage({ type: '__edit_mode_available' }, '*');
    document.documentElement.setAttribute('data-palette', window.__TWEAKS__.palette);
    document.documentElement.setAttribute('data-density', window.__TWEAKS__.density || 'regular');
    document.documentElement.setAttribute('data-typeface', window.__TWEAKS__.typeface || 'helvetica');
    document.documentElement.setAttribute('data-rules', window.__TWEAKS__.rules || 'clean');
    document.body.setAttribute('data-grain', String(window.__TWEAKS__.showGrain));
    return () => window.removeEventListener('message', onMsg);
  }, []);

  return (
    <>
      <div className="desktop-only">
        <div className="doc" data-screen-label={active}>
          <Masthead active={active} setActive={setActive} />
          {active === 'filing' && <Filing />}
          {active === 'repos' && <Repos />}
          {active === 'blog' && <Blog />}
          <Colophon />
        </div>
      </div>
      <div className="mobile-tablet-only">
        {typeof MobileTabletApp !== 'undefined' && <MobileTabletApp active={active} setActive={setActive} />}
      </div>
      {tweaksOn && <Tweaks />}
    </>);

}

ReactDOM.createRoot(document.getElementById('root')).render(<App />);
