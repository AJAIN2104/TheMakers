import { instagramPosts } from "../../data/siteData";

const instagramUrl = "https://www.instagram.com/themakers_ai?stkn=Y2ZvOHVzejB0ZDQ4";

export default function InstagramSection() {
  return (
    <section className="instagram-section">
      <div className="instagram-heading">
        <p className="eyebrow">FOLLOW OUR JOURNEY</p>
        <h2>The Makers <span>on Instagram.</span></h2>
        <p>Explore our students, robotics projects, competitions, makerspaces and innovation journeys.</p>
        <a className="outline-btn" href={instagramUrl} target="_blank" rel="noreferrer">Follow us on Instagram →</a>
      </div>
      <div className="instagram-grid">
        {instagramPosts.map((post, i) => (
          <a className="instagram-post" href={post.url} key={i} target="_blank" rel="noreferrer">
            <img src={post.image} alt={post.alt}/>
            <div className="instagram-overlay"><strong>Instagram</strong><span>View post ↗</span></div>
          </a>
        ))}
      </div>
      
    </section>
  );
}
