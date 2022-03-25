import { useProduct } from "../context";
import { HorizontalCard } from "../components";
import { Link } from "react-router-dom";

export const Cart = () => {
  const { state: products } = useProduct();

  return (
    <main className="main-wrapper">
      <h2 className="h2 text-center">My Cart</h2>

      <div className="divider divider-b"></div>

      <div className="text-center">
        <a className="clear" href="">
          Clear cart
        </a>
      </div>

      <div className="cart-wrapper">
        <section className="cart-products">
          {products.slice(0, 2).map((items) => (
            <HorizontalCard items={items} key={items._id} />
          ))}
        </section>

        <section className="price-details">
          <div className="price-card subtotal-card text-center">
            <p className="text-center">Subtotal ( 2 items ): ₹698</p>

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
      </div>
    </main>
  );
};
