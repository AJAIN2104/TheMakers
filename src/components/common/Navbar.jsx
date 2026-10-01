import { Link, NavLink } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { useState } from "react";

const links = [
  ["About", "/about"],
  ["Programs", "/programs"],
  ["For Parents", "/parents"],
  ["For Schools", "/schools"],
  ["Contact", "/contact"]
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="navbar">
      <Link to="/" className="brand" onClick={() => setOpen(false)}>
        <img
          src="/images/logo.png"
          alt="The Makers"
          className="brand-logo"
        />
      </Link>

      <nav className={`nav-links ${open ? "open" : ""}`}>
        {links.map(([label, path]) => (
          <NavLink key={path} to={path} onClick={() => setOpen(false)}>
            {label}
          </NavLink>
        ))}

        <Link
          className="nav-cta"
          to="/contact"
          onClick={() => setOpen(false)}
        >
          Enquire Now
        </Link>
      </nav>

      <button
        className="menu-btn"
        onClick={() => setOpen(!open)}
        aria-label="Toggle menu"
      >
        {open ? <X /> : <Menu />}
      </button>
    </header>
  );
}