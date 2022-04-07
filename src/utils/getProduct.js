import axios from "axios";

export const getProduct = async (id) => {
  try {
    let { data } = await axios.get(`/api/products/${id}`);
    if (data.product) return data.product;
    return {};
  } catch (err) {
    if (err.response.status === 500) {
      return {};
    }
    throw new Error(err, "Failed to fetch Products");
  }
};
