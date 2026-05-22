const { useState: useStateR } = React;

function Repos() {
  const [filter, setFilter] = useStateR('all');
  const filters = ['all', 'python', 'javascript', 'java', 'sql'];
  const shown = filter === 'all' ? REPO_PLACEHOLDERS : REPO_PLACEHOLDERS.filter(r => r.lang.toLowerCase() === filter);

  return (
    <div className="page">
      <section className="page-head">
        <div className="eyebrow mono">02 · Repositories</div>
        <h1 className="serif">Code, notebooks,<br/>half-finished ideas.</h1>
        <p className="lede">A gallery of repos with write-ups on what each one is, what it does, and what I learned putting it together. Empty for now — filling in soon.</p>
        <div className="row">
          <div className="count mono">{shown.length} items · placeholders</div>
          <div className="filter">
            {filters.map(f => (
              <button key={f} className={filter === f ? 'active' : ''} onClick={() => setFilter(f)}>{f}</button>
            ))}
          </div>
        </div>
      </section>

      <section className="repo-grid">
        {shown.map((r, i) => (
          <article key={i} className="repo-card">
            <div className="placeholder-thumb">PROJECT SCREENSHOT</div>
            <div className="head">
              <div className="title-row">
                <div className="icon mono">{'{ }'}</div>
                <h3 className="serif">{r.name}</h3>
              </div>
              <span className="vis">{r.status}</span>
            </div>
            <p className="desc">{r.desc}</p>
            <div className="foot">
              <div className="left">
                <span className="lang"><span className="sq"></span>{r.lang}</span>
                <span>★ {r.stars}</span>
              </div>
              <span>view →</span>
            </div>
          </article>
        ))}
      </section>

      <div className="empty-state">
        <div className="box">
          <h3 className="serif">Drop a repo here.</h3>
          <p className="mono" style={{marginTop:10}}>swap the placeholder cards for real github projects when ready</p>
        </div>
      </div>
    </div>
  );
}

window.Repos = Repos;
