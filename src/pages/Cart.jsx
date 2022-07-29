import { useFilter } from "../context";
import { HorizontalCard } from "../components";
import { Link } from "react-router-dom";
import { emptyCart } from "../assets";

export const Cart = () => {
  const { dispatchProduct, productState } = useFilter();

  const totalCartCount = productState?.cartProductsList
    ?.filter((item) => item.inCart)
    .map((obj) => obj.cartItemCount)
    .reduce((acc, curr) => curr + acc, 0);

  return (
    <main className="main-wrapper">
      <h2 className="h2 text-center">My Cart</h2>

      <div className="divider divider-b"></div>

      {productState.cartProductsList.some((item) => item.inCart) && (
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
          {productState.cartProductsList.some((item) => item.inCart) ===
          true ? (
            productState.cartProductsList
              .filter((item) => item.inCart)
              .map((item) => <HorizontalCard item={item} key={item._id} />)
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

        {productState.cartProductsList.some((item) => item.inCart) && (
          <section className="price-details">
            <div className="price-card subtotal-card text-center">
              <p className="text-center">
                Cart Quantity : {totalCartCount}{" "}
                {totalCartCount > 1 ? "items" : "item"}
              </p>

              <button className="btn-primary card-btn dis-inline-block">
                Proceed to Checkout
              </button>

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
