import { createContext, useContext, useReducer } from "react";
import { filterReducer } from "../utils";
import { products } from "../backend/db/products";

const FilterContext = createContext();

const FilterProvider = ({ children }) => {
  const [productState, dispatchProduct] = useReducer(filterReducer, {
    selectedSortBy: "",
    rangeValue: 0,
    selectedMaxPrice: 1000,
    selectedRating: 0,
    selectedCategories: [],
    productsList: [...products],
    cartProductsList: [...products],
    totalCartItems: 0,
  });

  return (
    <FilterContext.Provider value={{ productState, dispatchProduct }}>
      {children}
    </FilterContext.Provider>
  );
};

const useFilter = () => useContext(FilterContext);

export { FilterProvider, useFilter };
