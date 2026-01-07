import "./Navbar.css";

const Navbar = () => {
  return (
    <nav className="navbar">
      {/* Left menu */}
      <ul className="nav-menu">
        <li>Home</li>
        <li>Our Story</li>
        <li>Room</li>
        <li>Blog</li>
        <li>Contact</li>
      </ul>

      {/* Center logo */}
      <div className="nav-logo">RITZIO</div>

      {/* Right button (optional) */}
      <button className="nav-btn">Booking Now</button>
    </nav>
  );
};

export default Navbar;
