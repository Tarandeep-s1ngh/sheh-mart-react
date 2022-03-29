import { finalFilter } from "./finalFilter";

export const setRemoveCategory = (productState, newCategories) => {
  let holder = {
    ...productState,
    selectedCategories: [...newCategories],
  };

  holder = finalFilter(holder);

  return holder;
};
