import { finalFilter } from "./finalFilter";

export const setAscSort = (productState, sortBy) => {
  let holder = {
    ...productState,
    selectedSortBy: sortBy,
  };

  holder = finalFilter(holder);

  return holder;
};
