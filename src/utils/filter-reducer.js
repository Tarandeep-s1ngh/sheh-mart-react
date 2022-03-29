import { products } from "../backend/db/products";
import {
  setAscSort,
  setDescSort,
  setAddCategory,
  setRemoveCategory,
  setRange,
  setRating,
} from "./index";

export const filterReducer = (productState, action) => {
  switch (action.type) {
    case "HIGH_TO_LOW":
      return setDescSort(productState, action.payload.selectedSortBy);
    case "LOW_TO_HIGH":
      return setAscSort(productState, action.payload.selectedSortBy);
    case "RANGE_VALUE_UPDATE":
      return {
        ...productState,
        selectedMaxPrice: action.payload.rangeValueUpdate,
      };

    case "RANGE_FILTER":
      return setRange(productState, action.payload.selectedMaxPrice);

    case "RATING_FILTER":
      return setRating(productState, action.payload.selectedRating);

    case "ADD_CATEGORY_FILTER":
      const newCategories = [
        ...productState.selectedCategories,
        action.payload.categories,
      ];
      return setAddCategory(productState, newCategories);

    case "REMOVE_CATEGORY_FILTER": {
      const newCategories = productState.selectedCategories.filter(
        (item) => item !== action.payload.categories
      );
      return setRemoveCategory(productState, newCategories);
    }
    case "CLEAR_FILTER":
      return {
        selectedSortBy: "",
        rangeValue: 0,
        selectedMaxPrice: 1000,
        selectedRating: 0,
        selectedCategories: [],
        productsList: [...products],
      };
    default:
      return productState;
  }
};
