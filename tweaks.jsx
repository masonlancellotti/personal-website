const { useState: useStateT, useEffect: useEffectT } = React;

function Tweaks({ onChange }) {
  const [open, setOpen] = useStateT(true);
  const [palette, setPalette] = useStateT(window.__TWEAKS__.palette);
  const [pathStyle, setPathStyle] = useStateT(window.__TWEAKS__.pathStyle);
  const [showGrain, setShowGrain] = useStateT(window.__TWEAKS__.showGrain);
  const [fontPair, setFontPair] = useStateT(window.__TWEAKS__.fontPair || 'editorial');
  const [layout, setLayout] = useStateT(window.__TWEAKS__.layout || 'winding');

  useEffectT(() => {
    document.documentElement.setAttribute('data-palette', palette);
    document.documentElement.setAttribute('data-fontpair', fontPair);
    document.documentElement.setAttribute('data-layout', layout);
    document.body.setAttribute('data-grain', String(showGrain));
    Object.assign(window.__TWEAKS__, { palette, pathStyle, showGrain, fontPair, layout });
    onChange && onChange({ palette, pathStyle, showGrain, fontPair, layout });
    window.parent.postMessage({
      type: '__edit_mode_set_keys',
      edits: { palette, pathStyle, showGrain, fontPair, layout }
    }, '*');
  }, [palette, pathStyle, showGrain, fontPair, layout]);

  if (!open) {
    return (
      <button className="tweaks-panel" style={{width:'auto', padding:'10px 16px'}} onClick={() => setOpen(true)}>
        <span className="mono" style={{fontSize:11, letterSpacing:'0.2em', textTransform:'uppercase'}}>Tweaks ✦</span>
      </button>
    );
  }

  const palettes = [
    { id: 'warm', label: 'Warm', swatches: ['#f5efe6', '#382d24', '#c86a3e'] },
    { id: 'ink', label: 'Ink', swatches: ['#f2f3f7', '#1a1e2e', '#2563a8'] },
    { id: 'forest', label: 'Forest', swatches: ['#eef2ea', '#23302a', '#4a7057'] },
  ];

  const fonts = [
    { id: 'editorial', label: 'Editorial', sample: 'Aa', family: "'Instrument Serif', serif" },
    { id: 'classic',   label: 'Classic',   sample: 'Aa', family: "'EB Garamond', serif" },
    { id: 'modern',    label: 'Modern',    sample: 'Aa', family: "'Space Grotesk', sans-serif" },
    { id: 'magazine',  label: 'Magazine',  sample: 'Aa', family: "'Playfair Display', serif" },
  ];

  const layouts = [
    { id: 'winding', label: 'Winding' },
    { id: 'spine',   label: 'Spine' },
    { id: 'index',   label: 'Index' },
  ];

  return (
    <div className="tweaks-panel">
      <h4 className="serif">Tweaks <button className="close" onClick={() => setOpen(false)}>×</button></h4>
      <div className="hint mono">palette · type · layout</div>

      <div className="group">
        <label className="label">Layout</label>
        <div className="opts">
          {layouts.map(l => (
            <button key={l.id} className={layout === l.id ? 'active' : ''} onClick={() => setLayout(l.id)}>{l.label}</button>
          ))}
        </div>
      </div>

      <div className="group">
        <label className="label">Typography</label>
        <div className="opts opts-4">
          {fonts.map(f => (
            <button key={f.id} className={fontPair === f.id ? 'active' : ''} onClick={() => setFontPair(f.id)}>
              <span style={{fontFamily: f.family, fontSize: 20, display:'block', lineHeight:1, marginBottom:4}}>{f.sample}</span>
              <span style={{fontSize:10}}>{f.label}</span>
            </button>
          ))}
        </div>
      </div>

      <div className="group">
        <label className="label">Palette</label>
        <div className="opts">
          {palettes.map(p => (
            <button key={p.id} className={palette === p.id ? 'active' : ''} onClick={() => setPalette(p.id)}>
              <div className="swatch-row">
                {p.swatches.map((s, i) => <div key={i} className="sw" style={{background: s}}></div>)}
              </div>
              {p.label}
            </button>
          ))}
        </div>
      </div>

      <div className="group">
        <label className="label">Path style {layout !== 'winding' && <span style={{opacity:0.5}}>(winding only)</span>}</label>
        <div className="opts" style={{opacity: layout === 'winding' ? 1 : 0.4}}>
          {['dashed', 'solid', 'dotted'].map(s => (
            <button key={s} className={pathStyle === s ? 'active' : ''} onClick={() => setPathStyle(s)}>{s}</button>
          ))}
        </div>
      </div>

      <div className="group">
        <label className="label">Paper grain</label>
        <div className={`toggle ${showGrain ? 'on' : ''}`} onClick={() => setShowGrain(!showGrain)}>
          <span style={{fontSize:12}}>{showGrain ? 'on' : 'off'}</span>
          <span className="sw"></span>
        </div>
      </div>
    </div>
  );
}

window.Tweaks = Tweaks;
