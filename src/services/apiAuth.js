import axios from "../config/axios";
import { removeAccessToken } from "../utils/token";

export const getCurrentUser = async () => {
  const response = await axios.get("/auth/me");
  return response.data;
};

export const login = async (credential) => {
  const response = await axios.post("/auth/login", credential);
  return response.data;
};

export const signup = async (info) => {
  const response = await axios.post("/auth/register", info);
  return response.data;
};

export const getMystore = async () => {
  const response = await axios.get("/user/mystore");
  return response.data;
};
export const logout = () => {
  removeAccessToken();
};
