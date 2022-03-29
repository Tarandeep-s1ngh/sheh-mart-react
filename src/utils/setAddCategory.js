import { finalFilter } from "./finalFilter";

export const setAddCategory = (productState, newCategories) => {
  let holder = {
    ...productState,
    selectedCategories: [...newCategories],
  };

  holder = finalFilter(holder);

  return holder;
};
