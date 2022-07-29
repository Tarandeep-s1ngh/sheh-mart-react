import { useNavigate } from "react-router-dom";
import { useFilter } from "../context";

export const Checkout = () => {
  const navigate = useNavigate();

  const { dispatchProduct, productState } = useFilter();

  const checkoutItemsList = productState?.cartProductsList?.filter(
    (item) => item.inCart
  );

  const totalCartPrice = productState?.cartProductsList
    ?.filter((item) => item.inCart)
    .reduce((acc, curr) => (acc += curr.cartItemCount * curr.price), 0);

  return (
    <main className="main-wrapper">
      <h2 className="h2 text-center">Checkout</h2>

      <div className="divider divider-b"></div>

      <section className="price-details">
        <div className="price-card">
          <h3 className="semibold text-center">Order Summary</h3>
          {/* <input type="text" placeholder="Apply Coupon" /> */}
          <div className="price-card-content">
            <span className="lightbold">item</span>
            <span className="lightbold">quantity</span>
            <span className="lightbold">price</span>
          </div>
          {checkoutItemsList.map((item) => {
            return (
              <div key={item._id} className="price-card-content">
                <span>{item.title}</span>
                <span>x{item.cartItemCount}</span>
                <span>₹{item.price}</span>
              </div>
            );
          })}
          <div className="divider divider-b-full"></div>
          <div className="price-card-content price-total">
            <p className="lightbold">Total</p>
            <p className="lightbold">₹{totalCartPrice}</p>
          </div>
          <div className="text-center">
            <button
              onClick={() => {
                dispatchProduct({
                  type: "CLEAR_CART",
                });
                navigate("/");
              }}
              className="btn-primary card-btn dis-inline-block"
            >
              Proceed to Payment
            </button>
          </div>
        </div>
      </section>
    </main>
  );
};
