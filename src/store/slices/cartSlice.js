import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { addCart, getCart as getCartAPI } from "../../services/apiCart";

const initialState = {
  cart: [],
  loading: false,
  err: "",
};

export const getCart = createAsyncThunk("cart/getCart", async (_, thunkApi) => {
  try {
    const data = await getCartAPI();
    return data.cartItem;
  } catch {
    return thunkApi.rejectWithValue("Cannot get cart informations");
  }
});

export const addProductToCart = createAsyncThunk(
  "cart/addProductToCart",
  async (payload, thunkApi) => {
    try {
      await addCart(payload);
      const data = await getCartAPI();
      return data.cartItem;
    } catch {
      return thunkApi.rejectWithValue("Cannot add this product to your cart");
    }
  }
);

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    makeCartEmpty(state) {
      state.cart = [];
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getCart.pending, (state) => {
        state.cart = [];
        state.loading = true;
        state.err = "";
      })
      .addCase(getCart.fulfilled, (state, action) => {
        state.cart = action.payload;
        state.loading = false;
        state.err = "";
      })
      .addCase(getCart.rejected, (state, action) => {
        state.cart = [];
        state.loading = false;
        state.err = action.payload;
      });

    //   add product to cart
    builder
      .addCase(addProductToCart.pending, (state) => {
        state.cart = [];
        state.loading = true;
        state.err = "";
      })
      .addCase(addProductToCart.fulfilled, (state, action) => {
        state.cart = action.payload;
        state.loading = false;
        state.err = "";
      })
      .addCase(addProductToCart.rejected, (state, action) => {
        state.cart = [];
        state.loading = false;
        state.err = action.payload;
      });
  },
});

export const { makeCartEmpty } = cartSlice.actions;
export const cartReducer = cartSlice.reducer;
