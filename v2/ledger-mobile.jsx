// Mobile / tablet layout for Portfolio v2.
// Reuses the same data globals (REGISTER, SKILLS, TRANSCRIPT, REPOS,
// GOAL_REPOS, POSTS, INVOLVEMENT, FOOTNOTES) — no content duplication.
// Active tab is shared with the desktop App via window.__mtTab.

const { useState: useStateMT, useEffect: useEffectMT } = React;

function MTMasthead({ active, setActive }) {
  const tabs = [
    { id: 'filing', label: 'Experience',  roman: 'I' },
    { id: 'repos',  label: 'Repos',       roman: 'II' },
    { id: 'blog',   label: 'Blogs',       roman: 'III' }
  ];
  return (
    <header className="mt-masthead">
      <div className="mt-mast-strip">
        <span>Expanded resume</span>
        <span>Last modified: 5/25/2026</span>
      </div>
      <h1 className="mt-name">Mason Lancellotti</h1>
      <div className="mt-mast-meta">
        <div><b>Emory University</b> · Atlanta, GA</div>
        <div>Econ + CS · Business minor · <b>GPA 3.93</b></div>
        <div>
          <a href="mailto:mason.angelo.lancellotti@gmail.com">mason.angelo.lancellotti@gmail.com</a>
        </div>
        <div>(703) 919-3319</div>
      </div>
      <nav className="mt-tabstrip">
        {tabs.map((t) =>
          <button
            key={t.id}
            className={active === t.id ? 'active' : ''}
            onClick={() => setActive(t.id)}>
            <span className="roman">{t.roman}.</span> {t.label}
          </button>
        )}
      </nav>
    </header>
  );
}

function MTSectionHead({ numeral, title, note, link }) {
  return (
    <div className="mt-section-head">
      <div className="mt-section-title">
        <span className="numeral">{numeral}</span>
        <span className="dot">·</span>
        <span>{title}</span>
        {link && (
          <a className="mt-section-link" href={link.href} target="_blank" rel="noopener noreferrer">
            {link.label} <span aria-hidden="true">↗</span>
          </a>
        )}
      </div>
      {note && <div className="mt-section-note">{note}</div>}
    </div>
  );
}

function MTFiling() {
  const [openRow, setOpenRow] = useStateMT(null);

  const totalRoles = REGISTER.filter((r) => !r.future).length;
  const active = REGISTER.filter((r) => r.end === null && !r.future).length;
  const skills = SKILLS.length;

  return (
    <div>
      {/* Summary */}
      <section className="mt-summary">
        <p className="mt-lede">
          Undergraduate at <em>Emory University</em> studying economics and computer science,
          with a business minor and a master's in economics expected in 2028.
        </p>
        <p className="mt-lede-small">
          Below you can find a running archive of my experience, skills, and coursework.
          Some entries can be expanded to provide more detail. I created this page with the
          goal of painting a clearer picture of my background than a static resume alone can accomplish.
        </p>
        <div className="mt-statblock">
          <div><span className="k">Positions held</span><span className="v">{totalRoles}</span></div>
          <div><span className="k">Active projects</span><span className="v">{active}</span></div>
          <div><span className="k">Courses taken</span><span className="v">31</span></div>
          <div><span className="k">Tools & skills</span><span className="v">{skills}</span></div>
        </div>
      </section>

      {/* Experience */}
      <MTSectionHead numeral="I" title="Roadmap of Experience" note="Work, leadership, and campus roles" />
      <div className="mt-register">
        {REGISTER.map((r) => (
          <React.Fragment key={r.n}>
            <button
              className={`mt-row${openRow === r.n ? ' open' : ''}${r.future ? ' future' : ''}`}
              onClick={() => setOpenRow(openRow === r.n ? null : r.n)}>
              <div className="mt-row-top">
                <span className="mt-row-period">{r.period}</span>
                <span className="mt-row-chev" aria-hidden="true">›</span>
              </div>
              <div className="mt-row-org">{r.org}</div>
              <div className="mt-row-meta">
                <span>{r.role}</span>
                <span className="dot">·</span>
                <span>{r.place}</span>
              </div>
            </button>
            {openRow === r.n && (
              <div className="mt-row-detail">
                <div className="mt-row-duration">{r.duration}</div>
                <p className="mt-row-note">{r.note}</p>
                <ul>
                  {r.bullets.map((b, j) => <li key={j}>{String(b).replace(/\s*\[fn:\d+\]/g, '')}</li>)}
                </ul>
                {r.link && (
                  <a className="mt-row-link" href={r.link.href} target="_blank" rel="noopener noreferrer">
                    {r.link.label} <span aria-hidden="true">↗</span>
                  </a>
                )}
                {r.photos && (
                  <div className="mt-row-collage">
                    {r.photos.map((src, k) => <img key={k} src={src} alt="" loading="lazy" />)}
                  </div>
                )}
                {r.photo && <img className="mt-row-photo" src={r.photo} alt="" loading="lazy" />}
              </div>
            )}
          </React.Fragment>
        ))}
      </div>

      {/* Involvement */}
      <div className="mt-involvement">
        {INVOLVEMENT.map((it, i) => (
          <div key={i} className={`mt-inv-card${it.aside ? ' aside' : ''}`}>
            {it.letters && <div className="mt-inv-letters">{it.letters}</div>}
            <div className="mt-inv-head">
              <span className="mt-inv-org">{it.org}</span>
              {!it.aside && <span className="mt-inv-role">{it.role}</span>}
            </div>
            <p className="mt-inv-desc">{it.desc}</p>
            {it.article && (
              <a className="mt-inv-article" href={it.article.href} target="_blank" rel="noopener noreferrer">
                <span className="label">Featured article</span>
                <span className="title">{it.article.title}</span>
                <span className="meta">
                  {it.article.author && <span>By {it.article.author}</span>}
                  <span>{it.article.date} ↗</span>
                </span>
              </a>
            )}
            {(it.meta || it.since) && (
              <div className="mt-inv-meta">
                {it.meta && <div>{it.meta}</div>}
                {it.since && <div>{it.since}</div>}
              </div>
            )}
          </div>
        ))}
      </div>

      {/* Skills */}
      <MTSectionHead numeral="II" title="Skills Index" note="Self-assessed · Use frequency + applied experience" />
      <div className="mt-skills">
        {SKILLS.map((s, i) => (
          <div key={i} className="mt-skill">
            <div className="mt-skill-head">
              <span className="mt-skill-name">{s.skill}</span>
              <span className="mt-skill-level">{s.level}</span>
            </div>
            <div className="mt-skill-bars">
              {[1, 2, 3, 4, 5].map((k) => <span key={k} className={k <= s.n ? 'on' : ''}></span>)}
            </div>
            <div className="mt-skill-applied">{s.applied}</div>
          </div>
        ))}
      </div>

      {/* Transcript */}
      <MTSectionHead
        numeral="III"
        title="Undergrad Transcript"
        note="Emory University · Econ + CS BA · May 2027"
        link={{ href: 'files/Transcript_Mason_Lancellotti.pdf', label: 'Open PDF' }} />
      <div className="mt-transcript">
        {TRANSCRIPT.map((t, i) => (
          <div key={i} className={`mt-term${t.current ? ' current' : ''}`}>
            <div className="mt-term-head">
              <div><span className="k">Term</span><span className="v">{t.term}{t.current ? ' · in progress' : ''}</span></div>
              {t.termGpa != null && <div><span className="k">Term GPA</span><span className="v">{t.termGpa.toFixed(3)}</span></div>}
              <div><span className="k">Credits</span><span className="v">{t.credits}</span></div>
            </div>
            <div className="mt-courses">
              {t.courses.map((c, j) => (
                <div key={j} className="mt-course">
                  <div className="mt-course-row">
                    <span className="mt-course-code">{c.code}</span>
                    <span className="mt-course-grade">{c.grade}</span>
                  </div>
                  <div className="mt-course-name">{c.name}</div>
                  <div className="mt-course-note">{c.placeholder}</div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* Footnotes */}
      {typeof FOOTNOTES !== 'undefined' && FOOTNOTES.length > 0 && (
        <>
          <MTSectionHead numeral="IV" title="Footnotes" note="Extra context + clarification" />
          <div className="mt-footnotes">
            {FOOTNOTES.map((f) => (
              <div key={f.n} id={`mt-fn-${f.n}`} className="mt-fn-item">
                <span className="n">[{f.n}]</span>
                <span>{f.text}</span>
              </div>
            ))}
          </div>
        </>
      )}
    </div>
  );
}

function MTRepos() {
  const [openRepo, setOpenRepo] = useStateMT(null);
  return (
    <div>
      <MTSectionHead numeral="I" title="Active Builds" note="Currently in progress" />
      <div className="mt-register">
        {REPOS.map((r, i) => (
          <React.Fragment key={i}>
            <button
              className={`mt-row mt-repo${openRepo === i ? ' open' : ''}`}
              onClick={() => setOpenRepo(openRepo === i ? null : i)}>
              <div className="mt-row-top">
                <span className="mt-repo-lang"><span className="sq"></span>{r.lang}</span>
                <span className="mt-row-chev" aria-hidden="true">›</span>
              </div>
              <div className="mt-row-org">{r.title}</div>
              <div className="mt-row-meta">
                <span>{r.name}</span>
                <span className="dot">·</span>
                <span>{r.status}</span>
              </div>
              <div className="mt-repo-desc">{r.desc}</div>
            </button>
            {openRepo === i && (
              <div className="mt-row-detail">
                <p className="mt-row-note">{r.longDesc}</p>
                {r.link && (
                  <a className="mt-row-link" href={r.link.href} target="_blank" rel="noopener noreferrer">
                    {r.link.label} <span aria-hidden="true">↗</span>
                  </a>
                )}
              </div>
            )}
          </React.Fragment>
        ))}
      </div>

      <MTSectionHead numeral="II" title="Coming Soon" note="Tentative future projects · Subject to change" />
      <div className="mt-goal-grid">
        {GOAL_REPOS.map((r, i) => (
          <div key={i} className="mt-goal-card">
            <div className="mt-goal-num">
              {String(i + 1).padStart(2, '0')}
              <span className="mt-goal-dot"></span>
            </div>
            <h3 className="mt-goal-title">{r.title}</h3>
            <p className="mt-goal-desc">{r.desc}</p>
            {r.why && (
              <div className="mt-goal-why">
                <span className="label">WHY</span>
                <p>{r.why}</p>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

function MTBlog() {
  return (
    <div>
      <MTSectionHead numeral="I" title="Articles" note="Research-backed commentary" />
      <div className="mt-register">
        {POSTS.map((p, i) => {
          const clickable = !!p.href;
          const go = () => { if (clickable) window.location.href = p.href; };
          return (
            <button
              key={i}
              className={`mt-row mt-post${p.upcoming ? ' upcoming' : ''}`}
              onClick={go}
              disabled={!clickable && !p.upcoming}>
              <div className="mt-row-top">
                <span className="mt-post-date">{p.date}</span>
                <span className="mt-post-len">{p.len}</span>
              </div>
              <div className="mt-row-org">{p.title}</div>
              <p className="mt-post-excerpt">{p.excerpt}</p>
              <div className="mt-post-tags">
                {p.tags.map((t, j) => <span key={j}>{t}</span>)}
                {p.upcoming && <span className="upcoming">· Coming Thursday</span>}
              </div>
              {clickable && <div className="mt-post-cta">Read article →</div>}
            </button>
          );
        })}
      </div>

      <a className="mt-featured" href="/why-you-should-watch-nvidia-earnings-even-if-you-dont-own-the-stock/">
        <span className="label">Featured article</span>
        <span className="date">May 21, 2026</span>
        <h3 className="title">Why you should watch Nvidia earnings even if you don't own the stock</h3>
        <p className="excerpt">The market always has bellwether stocks. This piece looks at why Nvidia has become one of the clearest examples in the modern day.</p>
        <span className="cta">Read article ↗</span>
      </a>
    </div>
  );
}

function MTColophon() {
  return (
    <footer className="mt-colophon">
      <span>© 2026 Mason Lancellotti</span>
      <a href="mailto:mason.angelo.lancellotti@gmail.com">mason.angelo.lancellotti@gmail.com</a>
      <span className="mt-colo-links">
        <a href="https://www.linkedin.com/in/masonlancellotti/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
        <a href="https://github.com/masonlancellotti" target="_blank" rel="noopener noreferrer">GitHub</a>
        <a href="files/mason-resume.pdf" target="_blank" rel="noopener noreferrer">Resume</a>
        <a href="files/Transcript_Mason_Lancellotti.pdf" target="_blank" rel="noopener noreferrer">Transcript</a>
        <a href="files/mason-sat.pdf" target="_blank" rel="noopener noreferrer">SAT</a>
      </span>
    </footer>
  );
}

function MobileTabletApp({ active, setActive }) {
  useEffectMT(() => { window.scrollTo({ top: 0 }); }, [active]);
  return (
    <div className="mt-doc" data-screen-label={`mt-${active}`}>
      <MTMasthead active={active} setActive={setActive} />
      {active === 'filing' && <MTFiling />}
      {active === 'repos'  && <MTRepos />}
      {active === 'blog'   && <MTBlog />}
      <MTColophon />
    </div>
  );
}

window.MobileTabletApp = MobileTabletApp;
