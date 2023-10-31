import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: {
    firstName: "Time",
    lastName: "Ruchutrakool",
    email: "time@gmail.com",
    profileImage: "",
    point: 0,
    address: null,
  },
};

const authSlice = createSlice({
  name: "user",
  initialState,
  reducers: {},
});

export const authReducer = authSlice.reducer;
