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

// Section navigation and direct links.
const aliases = {
  filing: 'filing', i: 'filing', 1: 'filing', experience: 'filing',
  repos: 'repos', ii: 'repos', 2: 'repos', projects: 'repos',
  blog: 'blog', iii: 'blog', 3: 'blog', articles: 'blog', writing: 'blog', opinions: 'blog',
};
function followLocation() {
  const url = new URL(window.location.href);
  let anchor;
  try {
    anchor = decodeURIComponent(url.hash.slice(1));
  } catch {
    return;
  }
  const target = document.getElementById(anchor);
  const panel = target?.closest('[role="tabpanel"]');
  const asked = url.searchParams.get('tab') || url.searchParams.get('page') || anchor;
  const wanted = panel?.id || aliases[asked.toLowerCase()];
  if (wanted && panels.some((p) => p.id === wanted)) show(wanted);
  else if (!anchor && !asked) show('filing');

  if (!target || !panel) return;
  for (let element = target; element && element !== panel; element = element.parentElement) {
    if (element.tagName === 'DETAILS') element.open = true;
  }
  target.setAttribute('tabindex', '-1');
  target.focus({ preventScroll: true });
  requestAnimationFrame(() => target.scrollIntoView({ block: 'start' }));
}

const exampleDialog = document.getElementById('skill-example');
const exampleTitle = document.getElementById('skill-example-title');
const exampleLabel = document.getElementById('skill-example-label');
const exampleMeta = document.getElementById('skill-example-meta');
const exampleBody = document.getElementById('skill-example-body');
let exampleOpener;
let exampleSkill;

function previewExample(link) {
  const target = document.getElementById(link.getAttribute('href').slice(1));
  if (!target || !exampleDialog) return false;
  if (!exampleDialog.open) {
    exampleOpener = link;
    exampleSkill = link.closest('tr')?.querySelector('td')?.textContent || 'Skill example';
  }
  exampleBody.replaceChildren();
  exampleMeta.textContent = '';

  if (target.id === 'repos') {
    exampleLabel.textContent = `${exampleSkill} · Projects`;
    exampleTitle.textContent = 'Personal project repositories';
    target.querySelectorAll('details').forEach((project) => {
      const card = document.createElement('div');
      card.className = 'skill-example-project';
      const title = document.createElement('h3');
      const projectLink = document.createElement('a');
      projectLink.href = `#${project.id}`;
      projectLink.textContent = project.querySelector('.repo-title').textContent;
      title.append(projectLink);
      const description = document.createElement('p');
      description.textContent = project.querySelector('.desc').textContent;
      card.append(title, description);
      exampleBody.append(card);
    });
  } else if (target.matches('details')) {
    const project = target.querySelector('.repo-title');
    exampleLabel.textContent = `${exampleSkill} · ${project ? 'Project' : 'Experience'}`;
    exampleTitle.textContent = (project || target.querySelector('summary b')).textContent;
    if (!project) {
      exampleMeta.textContent = ['.role', '.when', '.loc']
        .map((selector) => target.querySelector(selector)?.textContent).filter(Boolean).join(' · ');
    }
    exampleBody.append(target.querySelector(':scope > div').cloneNode(true));
  } else if (target.matches('.course')) {
    exampleLabel.textContent = `${exampleSkill} · Coursework`;
    exampleTitle.textContent = target.querySelector('.course-name').textContent;
    exampleMeta.textContent = target.querySelector('.course-code').textContent;
    const note = document.createElement('p');
    note.textContent = target.querySelector('.course-note').textContent;
    exampleBody.append(note);
  } else {
    return false;
  }

  // Copies in the dialog must not compete with the original section anchors.
  exampleBody.querySelectorAll('[id]').forEach((element) => element.removeAttribute('id'));
  exampleBody.scrollTop = 0;
  if (!exampleDialog.open) {
    document.documentElement.classList.add('has-skill-example');
    exampleDialog.showModal();
  }
  return true;
}

exampleDialog?.querySelector('.skill-example-close').addEventListener('click', () => exampleDialog.close());
exampleDialog?.addEventListener('click', (event) => {
  if (event.target !== exampleDialog) return;
  const bounds = exampleDialog.getBoundingClientRect();
  if (event.clientX < bounds.left || event.clientX > bounds.right ||
      event.clientY < bounds.top || event.clientY > bounds.bottom) exampleDialog.close();
});
exampleDialog?.addEventListener('close', () => {
  document.documentElement.classList.remove('has-skill-example');
  exampleOpener?.focus({ preventScroll: true });
});

document.addEventListener('click', (event) => {
  const link = event.target.closest('a[href^="#"]');
  if (!link || event.defaultPrevented || event.button !== 0 ||
      event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return;
  const anchor = link.getAttribute('href');
  if (anchor.length < 2) return;
  if (link.closest('.skills, .skill-example') && previewExample(link)) {
    event.preventDefault();
    return;
  }
  event.preventDefault();
  if (window.location.hash !== anchor) history.pushState(null, '', anchor);
  followLocation();
});

window.addEventListener('hashchange', followLocation);
followLocation();
