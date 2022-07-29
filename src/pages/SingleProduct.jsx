import { Link, useNavigate, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { getProduct } from "../utils";
import { useAuth, useFilter } from "../context";

export const SingleProduct = () => {
  const [currProduct, setCurrProduct] = useState({});
  const { itemId } = useParams();
  const { isLogedIn } = useAuth();
  const { productState, dispatchProduct } = useFilter();

  const navigate = useNavigate();

  const currCartProduct = productState?.cartProductsList?.find(
    (cartProduct) => cartProduct._id === currProduct._id
  );

  const isInCart = currCartProduct?.inCart;

  const currWishlistProduct = productState?.wishlistProductsList?.find(
    (wishlistProduct) => wishlistProduct._id === currProduct._id
  );

  const isInWishlist = currWishlistProduct?.inWishlist;

  const wishlistHandler = () => {
    isLogedIn()
      ? isInWishlist
        ? dispatchProduct({
            type: "REMOVE_FROM_WISHLIST",
            payload: { itemId: currProduct._id },
          })
        : dispatchProduct({
            type: "ADD_TO_WISHLIST",
            payload: { itemId: currProduct._id },
          })
      : navigate("/login");
  };

  const addToCartHandler = () => {
    isLogedIn()
      ? dispatchProduct({
          type: "ADD_TO_CART",
          payload: { itemId: currProduct._id },
        })
      : navigate("/login");
  };

  useEffect(() => {
    (async () => {
      const resProduct = await getProduct(itemId);
      setCurrProduct(resProduct);
    })();
  }, [itemId]);

  return (
    <main className="main-wrapper single-product-wrapper">
      <section className="product-image">
        <img
          className="img-responsive"
          src={currProduct.image}
          alt={currProduct.title}
        />
      </section>

      <section className="product-details">
        <div className="card-header-txt">
          <h1 className="semibold">{currProduct.title}</h1>
          <small className="gray-color">{currProduct.categoryName}</small>

          <div className="card-price">
            <span className="final-price t1p5 lightbold">
              {currProduct.price}{" "}
            </span>
            <span className="initial-price t-strike">
              {currProduct.initialPrice}
            </span>
            <span className="discount gray-color">
              {" "}
              {currProduct.discountPrice}
            </span>
          </div>

          <div className="product-description mt-1">
            {currProduct.description}
          </div>
        </div>
        {isInCart ? (
          <Link to="/cart" className="btn-primary card-btn">
            Go to Cart
          </Link>
        ) : (
          <button onClick={addToCartHandler} className="btn-primary card-btn">
            Add to Cart
          </button>
        )}
        <button
          onClick={wishlistHandler}
          className="btn-primary btn-outline card-btn dis-inline-block mt-1"
        >
          {isInWishlist ? "Remove From Wishlist" : "Add to Wishlist"}
        </button>
      </section>
    </main>
  );
};
