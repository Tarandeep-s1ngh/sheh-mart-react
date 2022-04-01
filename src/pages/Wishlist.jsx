import { Link } from "react-router-dom";
import { useProduct } from "../context";
import { HorizontalCard } from "../components";

export const Wishlist = () => {
  const { state: products } = useProduct();

  return (
    <main className="main-wrapper">
      <h2 className="h2 text-center">Wishlist</h2>

      <div className="divider divider-b"></div>

      <div className="cart-wrapper">
        <section className="cart-products">
          {/* TO BE CHANGED LATER WITH FUNCTIONALITY*/}
          {products.slice(0, 2).map((item) => (
            <HorizontalCard item={item} key={item._id} />
          ))}
        </section>

        <section className="price-details">
          <div className="price-card subtotal-card text-center">
            <p className="text-center">Total Items: 2</p>

            <Link to="/cart" className="btn-primary card-btn dis-inline-block">
              Go To Cart
            </Link>
          </div>
        </section>
      </div>
    </main>
  );
};
