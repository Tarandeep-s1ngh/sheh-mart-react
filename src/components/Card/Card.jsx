import { Link } from "react-router-dom";
import { useFilter } from "../../context";

export const Card = ({ item }) => {
  const { dispatchProduct } = useFilter();

  return (
    <div className="card-badge card-badge-ecom">
      <div className="card-header card-header-ecom">
        <div className="card-image-container">
          <img
            className="img-responsive img-responsive-ecom"
            src={item.image}
            alt={item.alt}
          />
        </div>
        {item.isTrending && <div className="badge-in-card">TRENDING</div>}
        <span
          onClick={() => {
            dispatchProduct({
              type: "ADD_TO_WISHLIST",
              payload: { itemId: item._id },
            });
          }}
          className="card-floating-icon"
        >
          <i class="far fa-heart"></i>
        </span>
        <div className="card-header-txt">
          <div className="flex-row-wrap align-items-center justify-sb">
            <Link to={`/single-product/${item._id}`}>
              <h3 className="semibold t1p125">{item.title}</h3>
            </Link>

            <span className="rating-badge rating-badge-ecom">
              {item.rating}
              <span className="rating-fill rating-fill-ecom">
                <i className="fa-solid fa-star"></i>
              </span>
            </span>
          </div>
          <small className="gray-color lightbold">{item.categoryName}</small>
          <div className="card-price">
            <span className="final-price t1p125 semibold">₹{item.price}</span>
            &nbsp; &nbsp;
            <span className="initial-price t-strike gray-color">
              ₹{item.initialPrice}
            </span>
            &nbsp; &nbsp;
            <span className="discount lightbold t0p938">
              {" "}
              {item.discountPrice}
            </span>
          </div>
        </div>
      </div>
      {item.inCart ? (
        <Link to="/cart" className="btn-primary card-btn">
          Go to Cart
        </Link>
      ) : (
        <button
          onClick={() => {
            dispatchProduct({
              type: "ADD_TO_CART",
              payload: { itemId: item._id },
            });
          }}
          className="btn-primary card-btn"
        >
          Add to Cart
        </button>
      )}

      {item.outOfStock && (
        <div className="overlay-msg t2 lightbold">Out of Stock</div>
      )}
    </div>
  );
};
