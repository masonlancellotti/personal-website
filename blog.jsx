function Blog() {
  return (
    <div className="page">
      <section className="page-head">
        <div className="eyebrow mono">03 · Market Blog</div>
        <h1 className="serif">Notes on markets,<br/>written slowly.</h1>
        <p className="lede">Long-form writing on what I'm watching, what I'm reading, and where I think the numbers are pointing. Empty shelf for now.</p>
      </section>

      <section className="blog-list">
        {BLOG_PLACEHOLDERS.map((p, i) => (
          <article key={i} className="blog-entry">
            <div className="date mono">{p.date}</div>
            <div>
              <h3 className="serif">{p.title}</h3>
              <p className="excerpt">{p.excerpt}</p>
              <div className="tags">
                {p.tags.map((t, j) => <span key={j}>{t}</span>)}
              </div>
            </div>
            <div className="read">{p.read}</div>
          </article>
        ))}
      </section>

      <div className="empty-state">
        <div className="box">
          <h3 className="serif">First post, pending.</h3>
          <p className="mono" style={{marginTop:10}}>swap these placeholders with real essays as they land</p>
        </div>
      </div>
    </div>
  );
}

window.Blog = Blog;
