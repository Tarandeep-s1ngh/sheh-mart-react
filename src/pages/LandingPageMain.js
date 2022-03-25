import { Link } from "react-router-dom";
import "../App.css";
import { useProduct } from "../context";
import { awesomeIcons } from "../utils/";
import { Card } from "../components/";

export const LandingPageMain = () => {
  const { state: products } = useProduct();

  return (
    <main className="main-wrapper">
      <section className="hero-section">
        <div className="hero-txt">
          <h1 className="h1">One Stop Shop</h1>
          <h2 className="h2 highlight-color">For All Your Chess Needs</h2>
          <Link to="/product-detail" className="btn-primary dis-inline-block">
            Shop Now
          </Link>
        </div>
      </section>

      {/* =====  Categories  ====== */}

      <section className="categories">
        <h3 className="h3 text-center">
          <Link to="/product-detail">Featured Categories</Link>
        </h3>

        <div className="category-cards">
          {/* CATEGORY CARD  */}
          {awesomeIcons.map((items, idx) => {
            return (
              <Link to="/product-detail" key={idx}>
                <div className="card-badge">
                  <i className={`fas fa-${items.icon}`}></i>

                  <div className="card-header-txt">
                    <h3 className="semibold">{items.title}</h3>
                  </div>
                </div>
              </Link>
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
          {products.slice(0, 4).map((items) => (
            <Card items={items} key={items._id} />
          ))}
        </section>
      </section>
    </main>
  );
};
