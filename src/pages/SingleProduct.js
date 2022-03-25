import { Link } from "react-router-dom";
import { product1 } from "../assets";

export const SingleProduct = () => {
  return (
    <main className="main-wrapper single-product-wrapper">
      <section className="product-image">
        <img className="img-responsive" src={product1} alt="chessKit" />
      </section>

      <section className="product-details">
        <div className="card-header-txt">
          <h1 className="semibold">Chess Kit</h1>
          <small className="gray-color">Pieces</small>

          <div className="card-price">
            <span className="final-price t1p5 lightbold">₹499 </span>
            <span className="initial-price t-strike">₹699</span>
            <span className="discount gray-color"> Save ₹200 (44%)</span>
          </div>

          <div className="product-description mt-1">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta,
            possimus beatae. Ipsa assumenda magni dolorem, omnis dolor aut, ea,
            voluptatibus rerum maxime excepturi reprehenderit! Hic sed corrupti
            nisi rerum autem.
          </div>
        </div>
        <Link to="/" className="btn-primary card-btn dis-inline-block mt-1">
          Add to Cart
        </Link>
        <Link
          to=""
          className="btn-primary btn-outline card-btn dis-inline-block mt-1"
        >
          Add to Wishlist
        </Link>
      </section>
    </main>
  );
};
