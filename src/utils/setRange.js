import { finalFilter } from "./finalFilter";

export const setRange = (productState, maxPrice) => {
  let holder = {
    ...productState,
    selectedMaxPrice: maxPrice,
  };

  holder = finalFilter(holder);

  return holder;
};
