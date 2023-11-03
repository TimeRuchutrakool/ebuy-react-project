import axios from "../config/axios";

export const getProduct = async (productId) => {
  const res = await axios.get(`/product/productId/${productId}`);
  return res.data;
};

export const getReviews = async (productId) => {
  const res = await axios.get(`/product/review/${productId}`);
  return res.data;
};
