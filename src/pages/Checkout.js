import { Link } from "react-router-dom";

export const Checkout = () => {
  return (
    <main className="main-wrapper">
      <h2 className="h2 text-center">Checkout</h2>

      <div className="divider divider-b"></div>

      <section className="price-details">
        <div className="price-card">
          <h3 className="semibold text-center">Order Summary</h3>
          <input type="text" placeholder="Apply Coupon" />
          <div className="price-card-content">
            <span className="lightbold">item</span>
            <span className="lightbold">quantity</span>
            <span className="lightbold">price</span>
          </div>
          <div className="price-card-content">
            <span>Chess Kit Pieces</span>
            <span>x2</span>
            <span>₹499</span>
          </div>
          <div className="price-card-content">
            <span>Chess Base 16 Book</span>
            <span>x1</span>
            <span>₹249</span>
          </div>
          <div className="divider divider-b-full"></div>
          <div className="price-card-content price-total">
            <p className="lightbold">Total</p>
            <p className="lightbold">₹748</p>
          </div>
          <div className="text-center">
            <Link to="/" className="btn-primary card-btn dis-inline-block">
              Proceed to Payment
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
};
