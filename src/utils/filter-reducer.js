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

    case "ADD_TO_CART":
      return {
        ...productState,
        totalCartItems:
          productState.totalCartItems === 0
            ? 1
            : productState.totalCartItems + 1,
        cartProductsList: [
          ...productState.cartProductsList.map((prod) => {
            if (prod._id === action.payload.itemId) {
              return {
                ...prod,
                inCart: true,
                cartItemCount: prod.cartItemCount || 1,
              };
            }
            return prod;
          }),
        ],
        productsList: [
          ...productState.productsList.map((prod) => {
            if (prod._id === action.payload.itemId) {
              return {
                ...prod,
                inCart: true,
              };
            }
            return prod;
          }),
        ],
      };

    case "REMOVE_FROM_CART":
      return {
        ...productState,
        totalCartItems:
          productState.totalCartItems === 1
            ? 0
            : productState.totalCartItems - 1,
        cartProductsList: [
          ...productState.cartProductsList.map((prod) => {
            if (prod._id === action.payload.itemId) {
              return {
                ...prod,
                inCart: false,
                cartItemCount: 0,
              };
            }
            return prod;
          }),
        ],
        productsList: [
          ...productState.productsList.map((prod) => {
            if (prod._id === action.payload.itemId) {
              return {
                ...prod,
                inCart: false,
              };
            }
            return prod;
          }),
        ],
      };

    case "INCREMENT_CART_ITEM":
      return {
        ...productState,
        totalCartItems: productState.totalCartItems + 1,
        cartProductsList: [
          ...productState.cartProductsList.map((prod) => {
            if (prod._id === action.payload.itemId) {
              return {
                ...prod,
                cartItemCount: prod.cartItemCount + 1,
              };
            }
            return prod;
          }),
        ],
        productsList: [
          ...productState.productsList.map((prod) => {
            if (prod._id === action.payload.itemId) {
              return {
                ...prod,
                cartItemCount: prod.cartItemCount + 1,
              };
            }
            return prod;
          }),
        ],
      };

    case "DECREMENT_CART_ITEM":
      return {
        ...productState,
        totalCartItems:
          productState.totalCartItems === 1
            ? 0
            : productState.totalCartItems - 1,
        cartProductsList: [
          ...productState.cartProductsList.map((prod) => {
            if (prod._id === action.payload.itemId) {
              return {
                ...prod,
                inCart: prod.cartItemCount === 1 ? false : prod.inCart,
                cartItemCount:
                  prod.cartItemCount === 1 ? 0 : prod.cartItemCount - 1,
              };
            }
            return prod;
          }),
        ],
        productsList: [
          ...productState.productsList.map((prod) => {
            if (prod._id === action.payload.itemId) {
              return {
                ...prod,
                inCart: prod.cartItemCount === 1 ? false : prod.inCart,
                cartItemCount:
                  prod.cartItemCount === 1 ? 0 : prod.cartItemCount - 1,
              };
            }
            return prod;
          }),
        ],
      };

    case "ADD_TO_WISHLIST":
      return {
        ...productState,
        wishlistProductsList: [
          ...productState.wishlistProductsList.map((prod) => {
            if (prod._id === action.payload.itemId) {
              return {
                ...prod,
                inWishlist: true,
              };
            }
            return prod;
          }),
        ],
      };

    case "REMOVE_FROM_WISHLIST":
      return {
        ...productState,
        wishlistProductsList: [
          ...productState.wishlistProductsList.map((prod) => {
            if (prod._id === action.payload.itemId) {
              return {
                ...prod,
                inWishlist: false,
              };
            }
            return prod;
          }),
        ],
      };

    case "CLEAR_CART":
      return {
        ...productState,
        totalCartItems: 0,
        cartProductsList: [
          ...productState.cartProductsList.map((prod) => {
            return {
              ...prod,
              inCart: false,
              cartItemCount: 0,
            };
          }),
        ],
        productsList: [
          ...productState.productsList.map((prod) => {
            return {
              ...prod,
              inCart: false,
            };
          }),
        ],
      };

    case "CLEAR_FILTER":
      return {
        selectedSortBy: "",
        rangeValue: 0,
        selectedMaxPrice: 1000,
        selectedRating: 0,
        selectedCategories: [],
        productsList: [...products],
        cartProductsList: productState.cartProductsList,
        wishlistProductsList: productState.wishlistProductsList,
      };
    default:
      return productState;
  }
};
