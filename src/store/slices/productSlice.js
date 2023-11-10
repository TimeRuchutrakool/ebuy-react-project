import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { deleteProduct } from "../../services/apiProduct";
import { getMystore } from "../../services/apiAuth";

const initialState = {
  stores: [],
  loading: false,
  err: "",
};

export const getProduct = createAsyncThunk(
  "/user/mystore",
  async (_, thunkApi) => {
    try {
      const data = await getMystore();
      console.log(data);
      return data.myStore;
    } catch (error) {
      console.log(error);
      return thunkApi.rejectWithValue("");
    }
  }
);

export const deleteProductFromProfile = createAsyncThunk(
  "cart/deleteProduct",
  async (payload, thunkApi) => {
    try {
      const product = await deleteProduct(payload);
      const data = await getMystore();
      return data.myStore;
    } catch (error) {
      return thunkApi.rejectWithValue("Cannot delete product");
    }
  }
);

const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {
    makeProduct(state) {
      state.stores = [];
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getProduct.pending, (state) => {
        state.stores = [];
        state.loading = true;
        state.err = "";
      })
      .addCase(getProduct.fulfilled, (state, action) => {
        state.stores = action.payload;
        state.loading = false;
        state.err = "";
      })
      .addCase(getProduct.rejected, (state, action) => {
        state.stores = [];
        state.loading = false;
        state.err = action.payload;
      });

    // delete product
    builder
      .addCase(deleteProductFromProfile.pending, (state) => {
        state.stores = [];
        state.loading = true;
        state.err = "";
      })
      .addCase(deleteProductFromProfile.fulfilled, (state, action) => {
        state.stores = action.payload.filter((el) => el.id !== action.payload);
        state.loading = false;
        state.err = "";
      })
      .addCase(deleteProductFromProfile.rejected, (state, action) => {
        state.stores = [];
        state.loading = false;
        state.err = action.payload;
      });
  },
});

export const { makeProduct } = productSlice.actions;
export const productReducer = productSlice.reducer;
