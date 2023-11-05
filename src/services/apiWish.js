import axios from "../config/axios";

export const isWish = async (productId) => {
  const res = await axios.get(`/wish/isWish?productId=${productId}`);
  return res.data;
};

export const toggleWish = async (productId) => {
  const res = await axios.post(`/wish/toggleWish/${productId}`);
  return res.data;
};
