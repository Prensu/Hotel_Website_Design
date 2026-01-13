import { useState, useEffect } from "react";
import "../../styles/Navbar.css";
import { Menu } from "lucide-react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 80);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className={`navbar ${scrolled ? "navbar--scrolled" : "navbar--transparent"}`}>
      {/* LEFT */}
      <div className="nav-left">
        <div className="nav-logo">RITZIO</div>
      </div>

      {/* CENTER MENU */}
      <ul className={`nav-menu ${open ? "open" : ""}`}>
        <li>
          <NavLink to="/" end>Home</NavLink>
        </li>
        <li>
          <NavLink to="/our-story">Our Story</NavLink>
        </li>
        <li>
          <NavLink to="/rooms">Room</NavLink>
        </li>
        <li>
          <NavLink to="/blog">Blog</NavLink>
        </li>
        <li>
          <NavLink to="/contact">Contact</NavLink>
        </li>

        <li className="mobile-btn">
          <button className="nav-btn">Booking Now</button>
        </li>
      </ul>

      {/* RIGHT */}
      <div className="nav-right">
        <button className="nav-btn desktop-btn">Booking Now</button>

        <div className="hamburger" onClick={() => setOpen(!open)}>
          <Menu size={26} />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
