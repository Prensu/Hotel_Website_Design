import "./pages.css";

function Blog() {
  return (
    <section className="page">
      <div className="page-container">
        <h1>Blog</h1>
        <p className="page-subtitle">
          Stories, inspirations, and travel insights.
        </p>

        <div className="grid">
          {[1, 2, 3].map((post) => (
            <div className="card" key={post}>
              <h3>Luxury Travel Experience</h3>
              <p>
                Discover how thoughtful design, service, and ambiance
                redefine the meaning of luxury hospitality.
              </p>
              <span className="read-more">Read more →</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Blog;
