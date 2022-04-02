import { Link, useNavigate } from "react-router-dom";
import "../App.css";
import { useFilter, useProduct } from "../context";
import { awesomeIcons } from "../utils/";
import { Card } from "../components/";

export const LandingPageMain = () => {
  const { state: products } = useProduct();
  const { dispatchProduct } = useFilter();
  const navigate = useNavigate();

  const featuredCategoryHandler = (item) => {
    dispatchProduct({
      type: "CLEAR_FILTER",
    });
    dispatchProduct({
      type: "ADD_CATEGORY_FILTER",
      payload: { categories: item.categ },
    });
    navigate("/product-detail");
  };

  const shopNowHandler = () => {
    dispatchProduct({
      type: "CLEAR_FILTER",
    });
    navigate("/product-detail");
  };

  return (
    <main className="main-wrapper">
      <section className="hero-section">
        <div className="hero-txt">
          <h1 className="h1">One Stop Shop</h1>
          <h2 className="h2 highlight-color">For All Your Chess Needs</h2>
          <button
            onClick={() => shopNowHandler()}
            className="btn-primary dis-inline-block btn-slide"
          >
            Shop Now
          </button>
        </div>
      </section>

      {/* =====  Categories  ====== */}

      <section className="categories">
        <h3 className="h3 text-center">
          <Link to="/product-detail">Featured Categories</Link>
        </h3>

        <div className="category-cards">
          {/* CATEGORY CARD  */}
          {awesomeIcons.map((item) => {
            return (
              <div
                key={item.title}
                onClick={() => featuredCategoryHandler(item)}
                className="card-badge"
              >
                <i className={`fas fa-${item.icon}`}></i>

                <div className="card-header-txt">
                  <h3 className="semibold">{item.title}</h3>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* =====  Trending  ====== */}

      <section className="Trending mt-2">
        <h3 className="h3 text-center mb-1">
          <Link to="/product-detail">Trending</Link>
        </h3>

        <section className="products-section-home">
          {products
            .filter((item) => item.isTrending)
            .map((item) => (
              <Card item={item} key={item._id} />
            ))}
        </section>
      </section>
    </main>
  );
};
