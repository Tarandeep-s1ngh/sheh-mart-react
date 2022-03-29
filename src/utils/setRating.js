import { finalFilter } from "./finalFilter";

export const setRating = (productState, rating) => {
  let holder = {
    ...productState,
    selectedRating: rating,
  };

  holder = finalFilter(holder);

  return holder;
};
