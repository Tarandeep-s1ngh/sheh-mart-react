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
      <div className="search-bar flex-row justify-sb align-items-center">
        <input type="text" className="search-input" />
        <i className="fas fa-search"></i>
      </div>
      <Link to="/product-detail" className="icon-in-nav tooltip">
        <i className="fas fa-gifts"></i>
        <span className="tooltiptext">Products</span>
      </Link>
      <Link to="/cart" className="icon-in-nav tooltip">
        <i className="fas fa-shopping-basket"></i>
        <span className="tooltiptext">Cart</span>
      </Link>
      <Link to="/wishlist" className="icon-in-nav tooltip">
        <i className="fas fa-heart"></i>
        <span className="tooltiptext">Wishlist</span>
      </Link>
      <Link to="/login" className="icon-in-nav tooltip">
        <i className="fas fa-user-circle"></i>
        <span className="tooltiptext">Login</span>
      </Link>
      <Link to="/" className="icon-in-nav nav-hamburger">
        <i className="fas fa-bars"></i>
      </Link>
    </nav>
  );
};
