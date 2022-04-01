import { useFilter } from "../context";
import { HorizontalCard } from "../components";
import { Link } from "react-router-dom";
import { emptyCart } from "../assets";

export const Cart = () => {
  const { dispatchProduct, productState } = useFilter();

  return (
    <main className="main-wrapper">
      <h2 className="h2 text-center">My Cart</h2>

      <div className="divider divider-b"></div>

      {productState.cartProductsList.some((items) => items.inCart) && (
        <div className="text-center">
          <span
            onClick={() => {
              dispatchProduct({
                type: "CLEAR_CART",
              });
            }}
            className="clear span-hover"
          >
            Clear cart
          </span>
        </div>
      )}

      <div className="cart-wrapper">
        <section className="cart-products">
          {productState.cartProductsList.some((items) => items.inCart) ===
          true ? (
            productState.cartProductsList
              .filter((items) => items.inCart)
              .map((items) => <HorizontalCard items={items} key={items._id} />)
          ) : (
            <div className="text-center">
              <div className="gif-wrapper">
                <img
                  src={emptyCart}
                  className="img-responsive"
                  alt="empty-cart"
                />
              </div>
              <h3>Hey, it feels so light!</h3>
              <p className="gif-subline">
                There is nothing in your cart, let's add some items.
              </p>
              <Link
                to="/product-detail"
                className="btn-primary card-btn dis-inline-block"
              >
                Continue Shopping
              </Link>
            </div>
          )}
        </section>

        {productState.cartProductsList.some((items) => items.inCart) && (
          <section className="price-details">
            <div className="price-card subtotal-card text-center">
              <p className="text-center">
                Cart Quantity : {productState.totalCartItems}{" "}
                {productState.totalCartItems > 1 ? "items" : "item"}
              </p>

              <Link
                to="checkout"
                className="btn-primary card-btn dis-inline-block"
              >
                Proceed to Checkout
              </Link>

              <Link
                to=""
                className="btn-primary card-btn btn-outline dis-inline-block"
              >
                <i className="fas fa-share"></i> Share Your Cart
              </Link>
            </div>
          </section>
        )}
      </div>
    </main>
  );
};
