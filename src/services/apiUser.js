import axios from "../config/axios";
export const editAddress = async (updatedAddress) => {
  const res = await axios.patch("/user/editAddress", updatedAddress);
  return res.data;
};

export const myOrder = async () =>{
  const res = await axios.get("/user/myOrder")
  return res.data
}

export const mySale = async () =>{
  const res = await axios.get("/user/mySale")
  return res.data
}

export const confirmTrack = async (input)=>{
  const res = await axios.patch("/user/track",input)
  return res.data
}

export const confirmReceipt = async (input) =>{
  const res = await axios.patch("/user/confirmReceipt",input)
  return res.data
}