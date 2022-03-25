import { Link } from "react-router-dom";
import "./navbar.css";

export const Navbar = () => {
  return (
    <nav className="nav-bar">
      <div className="h3 nav-txt">
        <Link to="/">
          <i className="fas fa-store"></i> Sheh Mart
        </Link>
      </div>
      <Link to="/" className="icon-in-nav">
        <i className="fas fa-search"></i>
      </Link>
      <Link to="/cart" className="icon-in-nav">
        <i className="fas fa-shopping-basket"></i>
      </Link>
      <Link to="/wishlist" className="icon-in-nav">
        <i className="far fa-heart"></i>
      </Link>
      <Link to="/login" className="icon-in-nav">
        <i className="far fa-user-circle"></i>
      </Link>
      <Link to="/" className="icon-in-nav nav-hamburger">
        <i className="fas fa-bars"></i>
      </Link>
    </nav>
  );
};
