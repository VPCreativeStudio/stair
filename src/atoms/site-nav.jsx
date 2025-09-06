import { Link } from "react-router-dom";

function Nav() {
  return (
    <nav className="site-nav">
      <ul role="list" className="nav-list">
        <li role="listitem" className="nav-item">
          <Link to="/">Home</Link>
        </li>
        <li role="listitem" className="nav-item">
          <Link to="/service">Services</Link>
        </li>
        <li role="listitem" className="nav-item">
          <Link to="/visa">Visa</Link>
        </li>
        <li role="listitem" className="nav-item">
          <Link to="/aboutus">About Us</Link>
        </li>
        <li role="listitem" className="nav-item">
          <Link to="/contact">Contact</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Nav;
