import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { login as loginAPI, signup as signupAPI } from "../../services/apiAuth";
import {
  editAddress as editAddressAPI,
  editUser as editUserAPI,
} from "../../services/apiUser";
import { getCurrentUser } from "../../services/apiAuth";
import {
  getAccessToken,
  setAccessToken,
  removeAccessToken,
} from "../../utils/token";
import toast from "react-hot-toast";

const initialState = {
  user: undefined,
  loading: false,
  error: {
    loginError: "",
    signupError: "",
    getUserError: "",
    editAddressError: "",
    editUserError: "",
  },
  address: undefined,
  editUser: null,
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

export const signup = createAsyncThunk(
  "user/signup",
  async (payload, thunkApi) => {
    try {
      const data = await signupAPI(payload);
      setAccessToken(data.accessToken);
      toast.success("Signup successfully.");
      return data.user;
    } catch (_) {
      toast.error("Please try again");
      return thunkApi.rejectWithValue("Invalid Credential.");
    }
  }
);

export const getMe = createAsyncThunk("user/getMe", async (_, thunkApi) => {
  const token = getAccessToken();
  try {
    if (token) {
      const data = await getCurrentUser();
      return data.user;
    } else {
      return thunkApi.rejectWithValue("No user login.");
    }
  } catch (_) {
    return thunkApi.rejectWithValue("Something wrong with get user data.");
  }
});

export const editAddress = createAsyncThunk(
  "user/editAddress",
  async (payload, thunkApi) => {
    try {
      const data = await editAddressAPI(payload);
      toast.success("Success <3");
      console.log(data);
      return data;
    } catch {
      toast.error("Please try again");
      return thunkApi.rejectWithValue("Cannot edit address");
    }
  }
);

export const handleEditUser = createAsyncThunk(
  "user/editUser",
  async (payload, thunkApi) => {
    try {
      console.log(payload);
      const data = await editUserAPI(payload);
      toast.success("Success <3");
      return data;
    } catch {
      toast.error("Please try again");
      return thunkApi.rejectWithValue("Cannot edit username");
    }
  }
);

export const logout = createAsyncThunk("user/logout", () => {
  removeAccessToken();
  toast.success("You are logged out.");
});

export const handleChangeUser = (state, action) => {
  const { name, value } = action.payload;
  state.editUser[name] = value;
};

export const handleChangeAddress = (state, action) => {
  const { name, value } = action.payload;
  state.address[name] = value;
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    onChangeUser: handleChangeUser,
    onChangeAddress: handleChangeAddress,
  },
  extraReducers: (builder) => {
    // login
    builder
      .addCase(login.fulfilled, (state, action) => {
        state.user = action.payload;
        state.address = action.payload.address;
        state.loading = false;
        state.error.loginError = "";
      })
      .addCase(login.pending, (state) => {
        state.user = undefined;
        state.address = undefined;
        state.loading = true;
        state.error.loginError = "";
      })
      .addCase(login.rejected, (state, action) => {
        state.user = undefined;
        state.address = undefined;
        state.loading = false;
        state.error.loginError = action.payload;
      });
    // signup
    builder
      .addCase(signup.fulfilled, (state, action) => {
        state.user = action.payload;
        state.address = action.payload.address;
        state.address = undefined;
        state.loading = false;
        state.error.signupError = "";
      })
      .addCase(signup.pending, (state) => {
        state.user = undefined;
        state.loading = true;
        state.address = undefined;
        state.error.signupError = "";
      })
      .addCase(signup.rejected, (state, action) => {
        state.user = undefined;
        state.address = undefined;
        state.loading = false;
        state.error.signupError = action.payload;
      });

    builder.addCase(logout.fulfilled, (state) => {
      state.user = undefined;
      state.loading = false;
      state.error.getUserError = "";
      state.error.signupError = "";
      state.error.loginError = "";
    });

    // getMe
    builder
      .addCase(getMe.fulfilled, (state, action) => {
        state.user = action.payload;
        state.address = action.payload.address;
        state.loading = false;
        state.error.getUserError = "";
        state.editUser = {
          firstName: action.payload.firstName,
          lastName: action.payload.lastName,
        };
      })
      .addCase(getMe.pending, (state) => {
        state.user = undefined;
        state.loading = true;
        state.error.getUserError = "";
      })
      .addCase(getMe.rejected, (state, action) => {
        state.user = undefined;
        state.loading = false;
        state.error.getUserError = action.payload;
      });
    // editAddress
    builder
      .addCase(editAddress.fulfilled, (state, action) => {
        // state.user = action.payload.user;
        // state.address = action.payload.address;
        state.loading = false;
        state.error.editAddressError = "";
      })
      .addCase(editAddress.pending, (state) => {
        state.loading = true;
        state.error.editAddressError = "";
      })
      .addCase(editAddress.rejected, (state, action) => {
        state.loading = false;
        state.error.editAddressError = action.payload;
      });

    // editUser
    builder
      .addCase(handleEditUser.fulfilled, (state, action) => {
        state.user.firstName = action.payload.userData.firstName;
        state.user.lastName = action.payload.userData.lastName;
        // state.address = action.payload.address;
        state.loading = false;
        state.error.editUserError = "";
      })
      .addCase(handleEditUser.pending, (state) => {
        state.loading = true;
        state.error.editUserError = "";
      })
      .addCase(handleEditUser.rejected, (state, action) => {
        state.loading = false;
        state.error.editUserError = action.payload;
      });
  },
});

export const { onChangeUser, onChangeAddress } = userSlice.actions;

export const userReducer = userSlice.reducer;
