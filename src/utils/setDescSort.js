import { finalFilter } from "./finalFilter";

export const setDescSort = (productState, sortBy) => {
  let holder = {
    ...productState,
    selectedSortBy: sortBy,
  };

  holder = finalFilter(holder);

  return holder;
};
