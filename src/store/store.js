import { configureStore } from "@reduxjs/toolkit";
import { userReducer } from "./slices/userSlice";
import { cartReducer } from "./slices/cartSlice";
import { productReducer } from "./slices/productSlice";
import { myOrderReducer } from "./slices/orderSlice";
import { mySaleReducer } from "./slices/saleSlice";
import { bidProductReducer } from "./slices/bidSlice";

const store = configureStore({
  reducer: { user: userReducer, 
    cart: cartReducer,
     product: productReducer, 
     myOrder :myOrderReducer, 
     mySale:mySaleReducer,
     bidProduct:bidProductReducer },
    
});

export default store;
