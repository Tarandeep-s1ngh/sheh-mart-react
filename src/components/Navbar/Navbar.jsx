import { Link, useLocation, useNavigate } from "react-router-dom";
import { useState } from "react";
import "./navbar.css";
import { useAuth, useFilter } from "../../context";

export const Navbar = () => {
  const { isLogedIn, logout } = useAuth();
  const { pathname } = useLocation();
  const navigate = useNavigate();
  const [searchInput, setsearchInput] = useState("");

  const { dispatchProduct } = useFilter();

  const searchHandler = (e) => {
    if (e.key === "Enter" || e.keyCode === 8 || e.target.value === "") {
      dispatchProduct({
        type: "SEARCH_PRODUCT",
        payload: { searchBy: e.target.value },
      });
      if (pathname !== "/product-detail") {
        navigate("/product-detail");
      }
    }
  };

  const searchClickHandler = () => {
    dispatchProduct({
      type: "SEARCH_PRODUCT",
      payload: { searchBy: searchInput },
    });
    if (pathname !== "/product-detail") {
      navigate("/product-detail");
    }
  };

  return (
    <nav className="nav-bar">
      <div className="h3 nav-txt">
        <Link to="/">
          <i className="fas fa-store"></i> Sheh Mart
        </Link>
      </div>
      <div className="search-bar flex-row justify-sb align-items-center">
        <input
          type="text"
          name="search"
          value={searchInput}
          placeholder="Search"
          className="search-input"
          onKeyDown={(e) => searchHandler(e)}
          onChange={(e) => setsearchInput(e.target.value)}
        />
        <i onClick={() => searchClickHandler()} className="fas fa-search"></i>
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
      {isLogedIn() ? (
        <button onClick={() => logout()} className="icon-in-nav tooltip">
          <i className="fas fa-sign-out-alt"></i>

          <span className="tooltiptext">Logout</span>
        </button>
      ) : (
        <Link to="/login" className="icon-in-nav tooltip">
          <i className="fas fa-user-circle"></i>
          <span className="tooltiptext">Login</span>
        </Link>
      )}
      <Link to="/" className="icon-in-nav nav-hamburger">
        <i className="fas fa-bars"></i>
      </Link>
    </nav>
  );
};
