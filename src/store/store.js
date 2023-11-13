import { configureStore } from "@reduxjs/toolkit";
import { userReducer } from "./slices/userSlice";
import { cartReducer } from "./slices/cartSlice";
import { productReducer } from "./slices/productSlice";
import { myOrderReducer } from "./slices/orderSlice";
import { mySaleReducer } from "./slices/saleSlice";

const store = configureStore({
  reducer: { user: userReducer, cart: cartReducer, product: productReducer, myOrder :myOrderReducer, mySale:mySaleReducer },
});

export default store;
