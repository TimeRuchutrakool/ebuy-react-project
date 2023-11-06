import axios from "../config/axios";
export const editAddress = async (updatedAddress) => {
  const res = await axios.patch("/user/editAddress", updatedAddress);
  return res.data;
};
