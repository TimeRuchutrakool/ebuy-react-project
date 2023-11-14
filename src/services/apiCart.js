import axios from "../config/axios";

export const getCart = async () => {
  const res = await axios.get("/cart");

  return res.data;
};

export const addCart = async (product) => {
  const res = await axios.post("/cart/addCart", product);
  return res.data;
};

export const updateAmount = async (method, cartItemId) => {
  const res = await axios.patch(
    `/cart/amount/?method=${method}&cartItemId=${cartItemId}`
  );
  return res.data;
};

export const deleteProductFromCart = async (cartItemId) => {
  const res = await axios.delete(`/cart/${cartItemId}`);
  return res.data;
};

export const checkout = async () => {
  const res = await axios.post("/cart/checkout");
  return res.data;
};
export const checkoutBid = async (productId) => {
  const res = await axios.post("/bid/checkout", {
    productId,
  });
  return res.data;
};
