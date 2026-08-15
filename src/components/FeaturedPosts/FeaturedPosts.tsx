import "./FeaturedPosts.css";

const POSTS = [
  { id: 1, image: "/feature-post-1.png" },
  { id: 2, image: "/feature-post-3.png" },
  { id: 3, image: "/feature-post-2.png" },
];

export default function FeaturedPosts() {
  return (
    <section className="featured-posts container" id="blog">
      <p className="featured-posts__eyebrow">Practice Advice</p>
      <h2 className="featured-posts__title">Featured Posts</h2>

      <div className="featured-posts__grid">
        {POSTS.map((post) => (
          <article key={post.id} className="post-card">
            <div className="post-card__media" style={{ backgroundImage: `url(${post.image})` }}>
              <span className="post-card__badge">New</span>
            </div>
            <div className="post-card__body">
              <p className="post-card__tags"><span>Google</span> Trending New</p>
              <h3 className="post-card__title">Loudest à la Madison #1 (L'integral)</h3>
              <p className="post-card__excerpt">
                We focus on ergonomics and meeting you where you work. It's only a keystroke away.
              </p>
              <div className="post-card__meta">

                <div className="post-card__meta-item">
                  <img src="/icon-alarm.png" alt="Alarm" /> <span>22 April 2021</span>
                </div>

                <div className="post-card__meta-item">
                  <img src="/icon-graph.png" alt="Graph" /><span>10 comments</span>
                </div>

              </div>
              <div className="post-card__footer">
                <a className="post-card__link">Learn More</a>
                <img src="/icon-arrow.png" alt="Arrow" />
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
