import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getAllBidProductByUserId } from "../../services/apiBid";

const initialState = {
  bidProducts: [],
  loading: false,
  err: "",
};

export const getBid = createAsyncThunk(
  "/bid/getBidProduct",
  async (_, thunkApi) => {
    try {
        const data = await getAllBidProductByUserId();
        return data.bidProduct
    } catch (error) {
        return thunkApi.rejectWithValue("")
    }
  }
);

const bidProductSlice = createSlice({
    name : "bidProduct",
    initialState,
    reducers : {
        makeBidProduct(state){
            state.bidProducts = []
        }
    },
    extraReducers : (builder)=>{
        builder
        .addCase(getBid.pending, (state) => {
            state.bidProducts = [];
            state.loading = true;
            state.err = "";
          })
          .addCase(getBid.fulfilled, (state, action) => {
            state.bidProducts = action.payload;
            state.loading = false;
            state.err = "";
          })
          .addCase(getBid.rejected, (state, action) => {
            state.bidProducts = [];
            state.loading = false;
            state.err = action.payload;
          });
    }
})

export const {makeBidProduct}= bidProductSlice.action;

