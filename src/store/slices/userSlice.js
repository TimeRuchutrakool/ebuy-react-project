import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { login as loginAPI } from "../../services/apiAuth";
import { getCurrentUser } from "../../services/apiAuth";
import { getAccessToken, setAccessToken } from "../../utils/token";
import toast from "react-hot-toast";

const initialState = {
  user: undefined,
  loading: {
    loginLoading: false,
    getUserLoading: false,
  },
  error: {
    loginError: "",
    getUserError: "",
  },
};

export const login = createAsyncThunk(
  "user/login",
  async (payload, thunkApi) => {
    try {
      const data = await loginAPI(payload);
      setAccessToken(data.accessToken);
      toast.success("Login successfully.");
      return data.user;
    } catch (_) {
      toast.error("Invalid Credential.");
      return thunkApi.rejectWithValue("Invalid Credential.");
    }
  }
);

export const getMe = createAsyncThunk("user/getMe", async (_, thunkApi) => {
  const token = getAccessToken();
  try {
    if (token) {
      const data = await getCurrentUser();
      console.log(data);
      return data.user;
    } else {
      return thunkApi.rejectWithValue("No user login.");
    }
  } catch (_) {
    return thunkApi.rejectWithValue("Something wrong with get user data.");
  }
});

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    // login
    builder
      .addCase(login.fulfilled, (state, action) => {
        state.user = action.payload;
        state.loading.loginLoading = false;
        state.error.loginError = "";
      })
      .addCase(login.pending, (state) => {
        state.user = undefined;
        state.loading.loginLoading = true;
        state.error.loginError = "";
      })
      .addCase(login.rejected, (state, action) => {
        state.user = undefined;
        state.loading.loginLoading = false;
        state.error.loginError = action.payload;
      });
    // getMe
    builder
      .addCase(getMe.fulfilled, (state, action) => {
        state.user = action.payload;
        state.loading.getUserLoading = false;
        state.error.getUserError = "";
      })
      .addCase(getMe.pending, (state) => {
        state.user = undefined;
        state.loading.getUserLoading = true;
        state.error.getUserError = "";
      })
      .addCase(getMe.rejected, (state, action) => {
        state.user = undefined;
        state.loading.getUserLoading = false;
        state.error.getUserError = action.payload;
      });
  },
});

export const userReducer = userSlice.reducer;
