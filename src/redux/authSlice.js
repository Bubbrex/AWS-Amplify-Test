import {
  createAsyncThunk,
  createEntityAdapter,
  createSlice,
} from "@reduxjs/toolkit";

import { Auth } from "aws-amplify";

const authAdapter = createEntityAdapter();

const initialState = authAdapter.getInitialState({
  signUpStatus: "idle",
  signUpError: null,
});

export const SignUp = createAsyncThunk(
  "auth/signUp",
  async ({ username, password, email, phone_number }) => {
    try {
      const response = await Auth.signUp({
        username,
        password,
        attributes: {
          email, // optional
          phone_number, // optional - E.164 number convention
          // other custom attributes
        },
      });
      console.log(response);
      return response;
    } catch (error) {
      console.log("error signing up:", error);
    }
  }
);

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(SignUp.pending, (state) => {
        state.signUpStatus = "loading";
      })
      .addCase(SignUp.fulfilled, (state, action) => {
        state.signUpStatus = "succeeded";
        authAdapter.addOne(state, action.payload);
      })
      .addCase(SignUp.rejected, (state, action) => {
        state.signUpStatus = "failed";
        state.signUpError = action.error.message;
      });
  },
});

export default authSlice.reducer;
