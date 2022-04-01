import { useFilter } from "../../context";

export const HorizontalCard = ({ item }) => {
  const { dispatchProduct } = useFilter();

  return (
    <div className="card-horizontal">
      <div className="img-in-horizontal flex-row">
        <img className="img-responsive" src={item.image} alt="chessKit" />
      </div>
      <div className="card-header">
        <div className="card-header-txt">
          <h3 className="semibold">{item.title}</h3>
          <small className="gray-color">{item.categoryName}</small>
          <div className="card-price">
            <span className="final-price t1p5 lightbold">{item.price} </span>
            <span className="initial-price t-strike">{item.initialPrice}</span>
            <span className="discount gray-color">{item.discountPrice}</span>
            {item.inCart && (
              <div className="product-counter bold">
                <span
                  onClick={() => {
                    dispatchProduct({
                      type: "DECREMENT_CART_ITEM",
                      payload: { itemId: item._id },
                    });
                  }}
                  className="change-number"
                >
                  -
                </span>
                <span className="display-counter">{item.cartItemCount}</span>
                <span
                  onClick={() => {
                    dispatchProduct({
                      type: "INCREMENT_CART_ITEM",
                      payload: { itemId: item._id },
                    });
                  }}
                  className="change-number"
                >
                  +
                </span>
              </div>
            )}
          </div>
        </div>
        {item.inCart ? (
          <>
            <button
              onClick={() => {
                dispatchProduct({
                  type: "ADD_TO_WISHLIST",
                  payload: { itemId: item._id },
                });
              }}
              className="btn-primary card-btn"
            >
              Add To Wishlist
            </button>

            <button
              onClick={() => {
                dispatchProduct({
                  type: "REMOVE_FROM_CART",
                  payload: { itemId: item._id },
                });
              }}
              className="btn-primary card-btn btn-outline"
            >
              Remove From Cart
            </button>
          </>
        ) : (
          <>
            <button
              onClick={() => {
                dispatchProduct({
                  type: "ADD_TO_CART",
                  payload: { itemId: item._id },
                });
                dispatchProduct({
                  type: "REMOVE_FROM_WISHLIST",
                  payload: { itemId: item._id },
                });
              }}
              className="btn-primary card-btn"
            >
              Move To Cart
            </button>

            <button
              onClick={() => {
                dispatchProduct({
                  type: "REMOVE_FROM_WISHLIST",
                  payload: { itemId: item._id },
                });
              }}
              className="btn-primary card-btn btn-outline"
            >
              Remove From Wishlist
            </button>
          </>
        )}
      </div>
    </div>
  );
};
