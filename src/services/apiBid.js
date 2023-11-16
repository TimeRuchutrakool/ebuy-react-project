import axios from "../config/axios";

export const getAllBidProductByUserId = async ()=>{
  
    const res = await axios.get('/bid/getAllBidProductByUserId')
    return res.data
}