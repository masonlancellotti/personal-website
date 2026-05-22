const { useState, useEffect } = React;

function Nav({ active, setActive }) {
  const tabs = [
    { id: 'journey', label: 'Journey' },
    { id: 'repos', label: 'Repos' },
    { id: 'blog', label: 'Market Blog' },
  ];
  return (
    <header className="nav">
      <div className="brand">
        <div className="mark">M</div>
        <div>
          <div className="name serif">Mason Lancellotti</div>
          <div className="sub mono">Econ · CS · Business — Emory '27</div>
        </div>
      </div>
      <nav className="tabs">
        {tabs.map((t, i) => (
          <button
            key={t.id}
            className={`tab ${active === t.id ? 'active' : ''}`}
            onClick={() => setActive(t.id)}
          >
            {t.label}
          </button>
        ))}
      </nav>
      <div className="meta">
        <span className="dot"></span>Atlanta, GA
      </div>
    </header>
  );
}

window.Nav = Nav;
