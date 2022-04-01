import { Link } from "react-router-dom";
import { HorizontalCard } from "../components";
import { useFilter } from "../context";
import { emptyCart } from "../assets";

export const Wishlist = () => {
  const { productState } = useFilter();

  return (
    <main className="main-wrapper">
      <h2 className="h2 text-center">Wishlist</h2>

      <div className="divider divider-b"></div>

      <div className="cart-wrapper">
        <section className="cart-products">
          {productState.wishlistProductsList.some((item) => item.inWishlist) ===
          true ? (
            productState.wishlistProductsList
              .filter((item) => item.inWishlist)
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
                There is nothing in your wishlist, let's shop.
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

        <section className="price-details">
          <div className="price-card subtotal-card text-center">
            <p className="text-center">
              Products in cart :{" "}
              {
                productState.cartProductsList.filter((item) => item.inCart)
                  .length
              }{" "}
              {productState.cartProductsList.filter((item) => item.inCart)
                .length > 1
                ? "items"
                : "item"}
            </p>

            <Link to="/cart" className="btn-primary card-btn dis-inline-block">
              Go To Cart
            </Link>
          </div>
        </section>
      </div>
    </main>
  );
};
