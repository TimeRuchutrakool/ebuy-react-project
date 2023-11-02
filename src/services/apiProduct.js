import axios from "../config/axios";

export const getProduct = async (productId) => {
  const res = await axios.get(`/product/productId/${productId}`);
  return res.data;
};
