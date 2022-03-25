// import { Link } from "react-router-dom";

export const HorizontalCard = ({ items }) => {
  return (
    <div className="card-horizontal">
      <div className="img-in-horizontal flex-row">
        <img className="img-responsive" src={items.image} alt="chessKit" />
      </div>
      <div className="card-header">
        <div className="card-header-txt">
          <h3 className="semibold">{items.title}</h3>
          <small className="gray-color">{items.categoryName}</small>
          <div className="card-price">
            <span className="final-price t1p5 lightbold">{items.price} </span>
            <span className="initial-price t-strike">{items.initialPrice}</span>
            <span className="discount gray-color"> {items.discountPrice}</span>
            <div className="product-counter bold">
              <span className="change-number">-</span>
              <span className="display-counter">2</span>
              <span className="change-number">+</span>
            </div>
          </div>
        </div>
        <button className="btn-primary card-btn">Move To Wishlist</button>
        <button className="btn-primary card-btn btn-outline">
          Remove From Cart
        </button>
      </div>
    </div>
  );
};
