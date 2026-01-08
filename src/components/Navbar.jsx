import "./Navbar.css";

const Navbar = () => {
  return (
    <nav className="navbar">

      <div className="nav-logo">
        RITZIO
      </div>


      <ul className="nav-menu">
        <li>Home</li>
        <li>Our Story</li>
        <li>Room</li>
        <li>Blog</li>
        <li>Contact</li>
      </ul>

  
      <button className="nav-btn">Booking Now</button>
    </nav>
  );
};

export default Navbar;
