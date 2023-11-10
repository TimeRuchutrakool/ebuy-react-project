import axios from "../config/axios";

export const getProduct = async (productId) => {
  const res = await axios.get(`/product/productId/${productId}`);
  return res.data;
};

export const getReviews = async (productId) => {
  const res = await axios.get(`/product/review/${productId}`);
  return res.data;
};

export const createReviews = async (reviewData) => {
  const res = await axios.post("/product/review", reviewData);
  return res.data;
};

export const getbidProductById = async (bidProductId) => {
  const res = await axios.get(`/bid/bidProductId/${bidProductId}`);
  return res.data;
};
export const deleteProduct = async (productId) => {
  const res = await axios.delete(`/product/delete/${productId}`);
  return res.data;
};
