import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { login as loginAPI } from "../../services/apiAuth";
import { getCurrentUser } from "../../services/apiAuth";
import { setAccessToken } from "../../utils/token";

const initialState = {
  user: undefined,
  loading: false,
  error: "",
};

export const login = createAsyncThunk(
  "user/login",
  async (payload, thunkApi) => {
    try {
      const data = await loginAPI(payload);
      setAccessToken(data.accessToken);
      console.log(data);
      return data.user;
    } catch (error) {
      return thunkApi.rejectWithValue(error.message);
    }
  }
);

export const getMe = createAsyncThunk(
  "user/getMe",
  async (payload, thunkApi) => {
    try {
      const user = await getCurrentUser(payload);
      return user;
    } catch (error) {
      return thunkApi.rejectWithValue(error.message);
    }
  }
);

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    // login
    builder
      .addCase(login.fulfilled, (state, action) => {
        state.user = action.payload;
        state.loading = false;
        state.error = "";
      })
      .addCase(login.pending, (state) => {
        state.user = undefined;
        state.loading = true;
        state.error = "";
      })
      .addCase(login.rejected, (state, action) => {
        state.user = undefined;
        state.loading = false;
        state.error = action.payload;
      });
    // getMe
    builder
      .addCase(getMe.fulfilled, (state, action) => {
        state.user = action.payload;
        state.loading = false;
        state.error = "";
      })
      .addCase(getMe.pending, (state) => {
        state.user = undefined;
        state.loading = true;
        state.error = "";
      })
      .addCase(getMe.rejected, (state, action) => {
        state.user = undefined;
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export const userReducer = userSlice.reducer;
