import axios from "../config/axios";

export const getAllBidProductByUserId = async (bidProduct)=>{
    const res = await axios.get('/bid/getAllBidProductByUserId')
    return res.data
}