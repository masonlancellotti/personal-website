const tabs = [...document.querySelectorAll('.tabs button')];
const panels = tabs.map((t) => document.getElementById(t.dataset.panel));

function show(name, focus) {
  tabs.forEach((tab, i) => {
    const on = tab.dataset.panel === name;
    tab.setAttribute('aria-selected', String(on));
    tab.tabIndex = on ? 0 : -1;
    panels[i].hidden = !on;
    if (on && focus) tab.focus();
  });
  window.scrollTo({ top: 0 });
}

tabs.forEach((tab, i) => {
  tab.addEventListener('click', () => show(tab.dataset.panel));
  tab.addEventListener('keydown', (e) => {
    const step = e.key === 'ArrowRight' ? 1 : e.key === 'ArrowLeft' ? -1 : 0;
    if (!step) return;
    e.preventDefault();
    show(tabs[(i + step + tabs.length) % tabs.length].dataset.panel, true);
  });
});

// old ?tab=/#hash links still land on the right section
const aliases = {
  filing: 'filing', i: 'filing', 1: 'filing', experience: 'filing',
  repos: 'repos', ii: 'repos', 2: 'repos', projects: 'repos',
  blog: 'blog', iii: 'blog', 3: 'blog', articles: 'blog', writing: 'blog', opinions: 'blog',
};
const url = new URL(window.location.href);
const asked = url.searchParams.get('tab') || url.searchParams.get('page') || url.hash.slice(1);
const wanted = aliases[asked.toLowerCase()];
if (panels.some((p) => p.id === wanted)) {
  show(wanted);
  url.searchParams.delete('tab');
  url.searchParams.delete('page');
  url.hash = '';
  history.replaceState(null, '', url.pathname.replace(/index\.html$/i, '') + url.search);
}
