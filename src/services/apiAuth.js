import axios from "../config/axios"
import { removeAccessToken } from "../utils/services"

export const getCurrentUser = async (token) => {
    if (token) {
      const response = await axios.get("/auth/me");
      return response.data;
    }
    return null;
  };

export const login = async (credential) =>{
    const response = await axios.post("/auth/login",credential)
    return response.data
}

export const signup = async (info) => {
    const response = await axios.post("/auth/signup", info);
    return response.data;
};

export const logout = () => {
    removeAccessToken();
};