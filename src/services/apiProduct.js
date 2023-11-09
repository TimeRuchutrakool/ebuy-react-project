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

export const deleteProduct = async (productId) => {
  const response = await axios.delete(`/product/delete/${productId}`);
};
