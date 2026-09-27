import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="footer">

      {/* Company Info */}
      <div className="footer-company">
        <div className="footer-brand">
          THE MAKERS
        </div>

        <p>
          Building creators, designers, engineers, programmers
          and problem-solvers through hands-on technology education.
        </p>

        <div className="footer-contact">

          
          <p>
            👤{" "}
            <a href="mailto:vivek@themakers.org.in">
              MR. VIVEK GAUTAM
            </a>
          </p>
          <p>
            📧{" "}
            <a href="mailto:vivek@themakers.org.in">
              vivek@themakers.org.in
            </a>
          </p>

          <p>
            📞{" "}
            <a href="tel:+919871663267">
              +91 98716 63267
            </a>
          </p>

          <p>
            <a href="https://www.google.com/maps/place/Makers+robotics/@28.5642677,77.3480593,12.5z/data=!4m10!1m2!2m1!1smakers+robotics!3m6!1s0x390ce93dab24d765:0x54b3897f3faa88c2!8m2!3d28.514851!4d77.3902634!15sCg9tYWtlcnMgcm9ib3RpY3NaESIPbWFrZXJzIHJvYm90aWNzkgEKbWFrZXJzcGFjZeABAA!16s%2Fg%2F11vwz4d39x?entry=ttu&g_ep=EgoyMDI2MDkyMy4wIKXMDSoASAFQAw%3D%3D">
              📍A11, Sector 93B, Noida, Uttar Pradesh 201304
            </a>
          </p>
        </div>
      </div>


      {/* Quick Links */}
      <div className="footer-links">
        <h4>Explore</h4>

        <Link to="/parents">Parents</Link>
        <Link to="/schools">Schools</Link>
        <Link to="/programs">Programs</Link>
        <Link to="/about">About</Link>
        <Link to="/contact">Contact</Link>
      </div>


      {/* Follow Us */}
      <div className="footer-social">

        <p className="footer-social-label">
          FOLLOW THE JOURNEY
        </p>

        <h3>
          Let's create <em>what's next.</em>
        </h3>

        <div className="social-icons">

          <a
            href="https://www.instagram.com/themakers_ai?stkn=Y2ZvOHVzejB0ZDQ4"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram"
            className="social-icon"
          >
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.8"
            >
              <rect x="3" y="3" width="18" height="18" rx="5" />
              <circle cx="12" cy="12" r="4" />
              <circle
                cx="17.5"
                cy="6.5"
                r="1"
                fill="currentColor"
                stroke="none"
              />
            </svg>
          </a>


          <a
            href="https://www.linkedin.com/company/themakers"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="social-icon"
          >
            <svg
              viewBox="0 0 24 24"
              fill="currentColor"
            >
              <path d="M6.5 8.5H3V21h3.5V8.5ZM4.75 3A2.1 2.1 0 1 0 4.75 7.2 2.1 2.1 0 0 0 4.75 3ZM21 13.8c0-3.76-2-5.5-4.67-5.5-2.15 0-3.11 1.18-3.65 2v-1.8H9.2V21h3.48v-6.2c0-1.64.31-3.22 2.34-3.22 2 0 2.02 1.86 2.02 3.33V21H21v-7.2Z" />
            </svg>
          </a>


          <a
            href="https://www.youtube.com/@themakers"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="YouTube"
            className="social-icon"
          >
            <svg
              viewBox="0 0 24 24"
              fill="currentColor"
            >
              <path d="M23.5 6.2a3 3 0 0 0-2.1-2.1C19.5 3.5 12 3.5 12 3.5s-7.5 0-9.4.6A3 3 0 0 0 .5 6.2 31 31 0 0 0 0 12a31 31 0 0 0 .5 5.8 3 3 0 0 0 2.1 2.1c1.9.6 9.4.6 9.4.6s7.5 0 9.4-.6a3 3 0 0 0 2.1-2.1A31 31 0 0 0 24 12a31 31 0 0 0-.5-5.8ZM9.6 15.5v-7l6 3.5-6 3.5Z" />
            </svg>
          </a>


          <a
            href="https://www.facebook.com/themakers"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Facebook"
            className="social-icon"
          >
            <svg
              viewBox="0 0 24 24"
              fill="currentColor"
            >
              <path d="M13.5 21v-8h2.7l.4-3h-3.1V8.1c0-.87.24-1.46 1.5-1.46h1.7V4a22 22 0 0 0-2.47-.13c-2.45 0-4.13 1.5-4.13 4.24V10H7.5v3h2.6v8h3.4Z" />
            </svg>
          </a>

        </div>

        <p className="social-caption">
          Stay connected with our latest projects,
          student creations and innovation stories.
        </p>

      </div>


      {/* Bottom */}
      <div className="footer-bottom">

        <span>
          © {new Date().getFullYear()} The Makers.
          All rights reserved.
        </span>

        <span>
          Made for the next generation of innovators.
        </span>

      </div>

    </footer>
  );
}