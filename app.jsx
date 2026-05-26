const { useState: useStateA, useEffect: useEffectA } = React;

function App() {
  const [active, setActive] = useStateA('journey');
  const [tweaksOn, setTweaksOn] = useStateA(false);
  const [bump, setBump] = useStateA(0);

  useEffectA(() => { window.scrollTo({ top: 0 }); }, [active]);

  // tweaks host integration
  useEffectA(() => {
    const onMsg = (e) => {
      const d = e.data || {};
      if (d.type === '__activate_edit_mode') setTweaksOn(true);
      if (d.type === '__deactivate_edit_mode') setTweaksOn(false);
    };
    window.addEventListener('message', onMsg);
    window.parent.postMessage({ type: '__edit_mode_available' }, '*');

    // apply initial palette/grain from TWEAKS defaults
    document.documentElement.setAttribute('data-palette', window.__TWEAKS__.palette);
    document.documentElement.setAttribute('data-fontpair', window.__TWEAKS__.fontPair || 'editorial');
    document.documentElement.setAttribute('data-layout', window.__TWEAKS__.layout || 'winding');
    document.body.setAttribute('data-grain', String(window.__TWEAKS__.showGrain));

    return () => window.removeEventListener('message', onMsg);
  }, []);

  return (
    <>
      <Nav active={active} setActive={setActive} />
      <main key={active}>
        {active === 'journey' && <Journey key={'j-'+bump} />}
        {active === 'repos' && <Repos />}
        {active === 'blog' && <Blog />}
      </main>
      {tweaksOn && <Tweaks onChange={() => setBump(b => b + 1)} />}
    </>
  );
}

ReactDOM.createRoot(document.getElementById('root')).render(<App />);
