import { products } from "../backend/db/products";

export const finalFilter = (productState) => {
  return {
    ...productState,
    productsList: [
      ...[...products]
        .filter((item) => {
          return (
            Number(item.price) <= productState.selectedMaxPrice &&
            (productState.selectedCategories.length === 0
              ? true
              : productState.selectedCategories.some((i) => {
                  return i === item.categoryName;
                })) &&
            item.rating >= productState.selectedRating
          );
        })
        .sort((item1, item2) => {
          if (productState.selectedSortBy === "high-to-low") {
            return item2.price - item1.price;
          }
          if (productState.selectedSortBy === "low-to-high") {
            return item1.price - item2.price;
          }
          return "";
        }),
    ],
  };
};
