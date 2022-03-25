import { useProduct } from "../context";
import { Card } from "../components";

export const ProductDetail = () => {
  const { state: products } = useProduct();

  return (
    <div>
      <main className="main-wrapper">
        <div className="products-wrapper">
          {/********** SideBar Filter **********/}

          <aside className="filter">
            <div className="filter-header">
              <h2 className="h2">Filters</h2>
              <a href="">Clear</a>
            </div>

            <div className="divider"></div>

            <h3 className="h3">Price</h3>
            <label htmlFor="range" className="lightbold">
              <div className="filter-price">
                <span>50</span>
                <span>1000</span>
              </div>
            </label>
            <label htmlFor="range" className="lightbold"></label>
            <input
              className="slider"
              list="blaze-range"
              type="range"
              name="range"
              id="range"
              min="50"
              max="1000"
              defaultValue="1000"
            />

            <h3 className="h3">Categories</h3>
            <div className="flex-row gap0p2">
              <input type="checkbox" />
              <label>Boards</label>
            </div>
            <div className="flex-row gap0p2">
              <input type="checkbox" />
              <label>Books</label>
            </div>
            <div className="flex-row gap0p2">
              <input type="checkbox" />
              <label>Pieces</label>
            </div>

            <h3 className="h3">Rating</h3>
            <div className="flex-row gap0p2">
              <input type="radio" name="rating" />
              <label>4 stars & above</label>
            </div>

            <div className="flex-row gap0p2">
              <input type="radio" name="rating" />
              <label>3 stars & above</label>
            </div>

            <div className="flex-row gap0p2">
              <input type="radio" name="rating" />
              <label>2 stars & above</label>
            </div>

            <div className="flex-row gap0p2">
              <input type="radio" name="rating" />
              <label>1 star & above</label>
            </div>

            <h3 className="h3">Sort by</h3>

            <div className="flex-row gap0p2">
              <input type="radio" name="sort" />
              <label>Price - High to low</label>
            </div>
            <div className="flex-row gap0p2">
              <input type="radio" name="sort" />
              <label>Price - Low to High</label>
            </div>
          </aside>

          {/********** Product Cards **********/}
          <div>
            <section className="products-section">
              {products.map((items) => (
                <Card items={items} key={items._id} />
              ))}
            </section>

            <div className="pagination">
              <div className="semibold text-center">
                <span>&lt; | 1 | 2 | 3. . . 10 &gt;</span>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};
