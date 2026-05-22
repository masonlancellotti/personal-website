const { useEffect: useEffectJ, useRef: useRefJ, useState: useStateJ } = React;

function Journey() {
  const stopsRef = useRefJ(null);
  const svgRef = useRefJ(null);
  const [pathLen, setPathLen] = useStateJ(0);
  const pathStyle = (window.__TWEAKS__ && window.__TWEAKS__.pathStyle) || 'dashed';

  useEffectJ(() => {
    if (!stopsRef.current) return;
    const els = stopsRef.current.querySelectorAll('.stop');
    const io = new IntersectionObserver((entries) => {
      entries.forEach((e) => {
        if (e.isIntersecting) e.target.classList.add('in-view');
      });
    }, { threshold: 0.15, rootMargin: '0px 0px -8% 0px' });
    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);

  useEffectJ(() => {
    const build = () => {
      if (!stopsRef.current || !svgRef.current) return;
      const stops = [...stopsRef.current.querySelectorAll('.stop-marker .dot')];
      const containerRect = stopsRef.current.getBoundingClientRect();
      const w = containerRect.width;
      const h = stopsRef.current.scrollHeight;
      svgRef.current.setAttribute('viewBox', `0 0 ${w} ${h}`);
      svgRef.current.setAttribute('width', w);
      svgRef.current.setAttribute('height', h);

      const pts = stops.map((el) => {
        const r = el.getBoundingClientRect();
        const cRect = stopsRef.current.getBoundingClientRect();
        return {
          x: r.left - cRect.left + r.width / 2,
          y: r.top - cRect.top + r.height / 2,
        };
      });
      if (pts.length < 2) return;

      let d = `M ${pts[0].x} ${pts[0].y}`;
      for (let i = 0; i < pts.length - 1; i++) {
        const p0 = pts[i];
        const p1 = pts[i + 1];
        const dx = p1.x - p0.x;
        const dy = p1.y - p0.y;
        // slightly jittered control points for a less perfect curve
        const jitter = (i % 2 === 0 ? 1 : -1) * 18;
        const c1x = p0.x + dx * 0.15 + jitter;
        const c1y = p0.y + dy * 0.5;
        const c2x = p1.x - dx * 0.15 - jitter;
        const c2y = p1.y - dy * 0.5;
        d += ` C ${c1x} ${c1y}, ${c2x} ${c2y}, ${p1.x} ${p1.y}`;
      }

      const path = svgRef.current.querySelector('path.main');
      const shadow = svgRef.current.querySelector('path.shadow');
      path.setAttribute('d', d);
      shadow.setAttribute('d', d);
      const len = path.getTotalLength();
      setPathLen(len);
      path.style.strokeDasharray = pathStyle === 'dashed' ? '5 9' : (pathStyle === 'solid' ? `${len} ${len}` : '1 12');
      if (pathStyle === 'solid') path.style.strokeDashoffset = len;
    };
    build();
    window.addEventListener('resize', build);
    const t = setTimeout(build, 400);
    const t2 = setTimeout(build, 1200);
    return () => { window.removeEventListener('resize', build); clearTimeout(t); clearTimeout(t2); };
  }, [pathStyle]);

  useEffectJ(() => {
    const onScroll = () => {
      if (!stopsRef.current || !svgRef.current) return;
      const rect = stopsRef.current.getBoundingClientRect();
      const vh = window.innerHeight;
      const total = rect.height;
      const scrolled = Math.max(0, vh * 0.5 - rect.top);
      const progress = Math.max(0, Math.min(1, scrolled / total));
      if (pathStyle === 'solid') {
        const path = svgRef.current.querySelector('path.main');
        path.style.strokeDashoffset = pathLen * (1 - progress);
      }
    };
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, [pathLen, pathStyle]);

  return (
    <div className="page journey">
      <section className="hero-v2">
        <div className="hero-main">
          <div className="hello mono">Hi — I'm</div>
          <h1 className="serif">Mason<br/>Lancellotti.</h1>
          <p className="intro">
            Economics &amp; CS at Emory, with a business minor and an <em>MS in Econ</em> coming in '28.
            Below is a rough map of how I got here — the jobs, the school, a couple things still ahead. Scroll through it.
          </p>
          <div className="hero-meta">
            <span>Atlanta, GA</span>
            <span className="sep">/</span>
            <span>mason.angelo.lancellotti@gmail.com</span>
            <span className="sep">/</span>
            <span>(703) 919-3319</span>
          </div>
        </div>
        <aside className="hero-margin">
          <div className="margin-note mono">
            <span className="arrow">↳</span> last updated April 2026.
            Still a work in progress.
          </div>
          <div className="margin-stats">
            <div><b className="serif">6</b><span>roles so far</span></div>
            <div><b className="serif">2</b><span>states I've worked in</span></div>
            <div><b className="serif">~4 yrs</b><span>on the swim team board</span></div>
          </div>
        </aside>
      </section>

      <div className="roadmap">
        <svg className="map-canvas" ref={svgRef} xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
          <path className="shadow" fill="none" stroke="var(--rule)" strokeWidth="12" strokeLinecap="round" style={{opacity: 0.35}} />
          <path className="main" fill="none" stroke="var(--accent)" strokeWidth="2" strokeLinecap="round" />
        </svg>

        <div className="stops" ref={stopsRef}>
          {JOURNEY.map((s, i) => (
            <article key={i} className={`stop layout-${s.layout} ${s.future ? 'is-future' : ''}`}>
              <div className="stop-marker">
                <div className="dot"></div>
                <div className="marker-text">
                  <div className="place serif">{s.place}</div>
                  <div className="year mono">{s.year}</div>
                </div>
              </div>

              <div className="stop-card">
                <div className="card-head">
                  <div>
                    <div className="role-row mono">{s.note}</div>
                    <h3 className="serif">{s.org}</h3>
                    <div className="role">{s.role}</div>
                  </div>
                  <div className="date mono">{s.dateRange}</div>
                </div>

                <p className="summary">{s.summary}</p>

                {s.stat && (
                  <div className="stat">
                    <b className="serif">{s.stat.big}</b>
                    <span>{s.stat.label}</span>
                  </div>
                )}

                <ul>
                  {s.bullets.map((b, j) => <li key={j}>{b}</li>)}
                </ul>

                {s.aside && (
                  <div className="aside mono">{s.aside}</div>
                )}

                {s.showPhoto && (
                  <div className="placeholder">{s.placeholder}</div>
                )}
              </div>
            </article>
          ))}
        </div>
      </div>

      <footer className="journey-foot">
        <p className="serif big">That's where I'm at.</p>
        <p className="mono sub">mason.angelo.lancellotti@gmail.com · (703) 919-3319 · Atlanta, GA</p>
        <p className="mono sub faint">— end of page —</p>
      </footer>
    </div>
  );
}

window.Journey = Journey;
