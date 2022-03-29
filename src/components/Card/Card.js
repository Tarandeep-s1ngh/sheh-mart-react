import { Link } from "react-router-dom";
import { useState } from "react";

export const Card = ({ items }) => {
  const [cartProducts, setCartProducts] = useState({ cartProducts: [] });
  console.log(cartProducts);
  return (
    <div className="card-badge card-badge-ecom">
      <div className="card-header card-header-ecom">
        <div className="card-image-container">
          <img
            className="img-responsive img-responsive-ecom"
            src={items.image}
            alt={items.alt}
          />
        </div>
        <div className="badge-in-card">TRENDING</div>
        <Link to="/wishlist" className="card-floating-icon">
          <i className="fas fa-heart"></i>
        </Link>
        <div className="card-header-txt">
          <div className="flex-row-wrap align-items-center justify-sb">
            <Link to="/single-product">
              <h3 className="semibold t1p125">{items.title}</h3>
            </Link>

            <span className="rating-badge rating-badge-ecom">
              3.5{" "}
              <span className="rating-fill rating-fill-ecom">
                <i className="fa-solid fa-star"></i>
              </span>
            </span>
          </div>
          <small className="gray-color">{items.categoryName}</small>
          <div className="card-price">
            <span className="final-price t1p125 semibold">{items.price}</span>
            &nbsp; &nbsp;
            <span className="initial-price t-strike gray-color">
              {items.initialPrice}
            </span>
            &nbsp; &nbsp;
            <span className="discount lightbold t0p938">
              {" "}
              {items.discountPrice}
            </span>
          </div>
        </div>
      </div>
      <button
        onClick={() => setCartProducts((curr) => [...curr, items])}
        className="btn-primary card-btn"
      >
        Add to Cart
      </button>
    </div>
  );
};

// export { cartProducts };