import { Card } from "../components";
import { useFilter } from "../context";
import { productCategories } from "../utils";

export const ProductDetail = () => {
  const { productState, dispatchProduct } = useFilter();

  return (
    <main className="main-wrapper">
      <div className="products-wrapper">
        {/********** SideBar Filter **********/}

        <aside className="filter">
          <div className="filter-header">
            <h2 className="h2">Filters</h2>
            <span
              className="span-hover lightbold"
              onClick={() => {
                dispatchProduct({
                  type: "CLEAR_FILTER",
                });
              }}
            >
              Clear
            </span>
          </div>

          <div className="filter-divider"></div>

          <h3 className="h3">Price</h3>
          <label htmlFor="range" className="lightbold">
            <div className="filter-price">
              <span>200</span>
              <span>{productState.selectedMaxPrice}</span>
            </div>
          </label>
          <label htmlFor="range" className="lightbold"></label>
          <input
            className="slider"
            list="blaze-range"
            type="range"
            name="range"
            id="range"
            min="200"
            max="1000"
            value={productState.selectedMaxPrice}
            onChange={(e) => {
              dispatchProduct({
                type: "RANGE_VALUE_UPDATE",
                payload: { rangeValueUpdate: e.target.value },
              });
            }}
            onMouseUp={(e) => {
              dispatchProduct({
                type: "RANGE_FILTER",
                payload: { selectedMaxPrice: e.target.value },
              });
            }}
          />

          <h3 className="h3">Categories</h3>
          {productCategories.map((categ) => {
            return (
              <div className="flex-row gap0p2" key={categ}>
                <input
                  type="checkbox"
                  id={categ}
                  name="categories"
                  value={categ}
                  checked={productState.selectedCategories.includes(categ)}
                  onChange={(e) =>
                    e.target.checked
                      ? dispatchProduct({
                          type: "ADD_CATEGORY_FILTER",
                          payload: { categories: categ },
                        })
                      : dispatchProduct({
                          type: "REMOVE_CATEGORY_FILTER",
                          payload: { categories: categ },
                        })
                  }
                />
                <label htmlFor={categ}>{categ}</label>
              </div>
            );
          })}

          <h3 className="h3">Rating</h3>

          {[4, 3, 2, 1].map((num) => {
            return (
              <div className="flex-row gap0p2" key={num}>
                <input
                  type="radio"
                  id={`above ${num}`}
                  value={`${num} stars & above`}
                  name="rating"
                  checked={productState.selectedRating === num}
                  onChange={() =>
                    dispatchProduct({
                      type: "RATING_FILTER",
                      payload: { selectedRating: num },
                    })
                  }
                />
                <label htmlFor={`above ${num}`}>{`${num} ${
                  num === 1 ? "star" : "stars"
                } & above`}</label>
              </div>
            );
          })}

          <h3 className="h3">Sort by</h3>

          <div className="flex-row gap0p2">
            <input
              type="radio"
              id="high-to-low"
              value="high-to-low"
              name="price-sort"
              checked={productState.selectedSortBy === "high-to-low"}
              onChange={() =>
                dispatchProduct({
                  type: "HIGH_TO_LOW",
                  payload: { selectedSortBy: "high-to-low" },
                })
              }
            />
            <label htmlFor="high-to-low">Price - High to low</label>
          </div>
          <div className="flex-row gap0p2">
            <input
              type="radio"
              id="low-to-high"
              value="low-to-high"
              name="price-sort"
              checked={productState.selectedSortBy === "low-to-high"}
              onChange={() =>
                dispatchProduct({
                  type: "LOW_TO_HIGH",
                  payload: { selectedSortBy: "low-to-high" },
                })
              }
            />
            <label htmlFor="low-to-high">Price - Low to High</label>
          </div>
        </aside>

        {/********** Product Cards **********/}
        <div>
          <section className="products-section">
            {productState.productsList.map((item) => (
              <Card item={item} key={item._id} />
            ))}
          </section>
        </div>
      </div>
    </main>
  );
};
