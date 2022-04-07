export const searchProduct = (products, searchBy) => {
  return searchBy
    ? [...products].filter((prod) =>
        prod.title.toLowerCase().includes(searchBy.toLowerCase())
      )
    : [...products];
};
