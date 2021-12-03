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
  confirmSignUpStatus: "idle",
  confirmSignUpError: null,
  resendConfirmationCodeStatus: "idle",
  resendConfirmationCodeError: null,
});

export const SignUp = createAsyncThunk(
  "auth/signUp",
  async ({ username, password, email }) => {
    try {
      const response = await Auth.signUp({
        username,
        password,
        attributes: {
          email, // optional
          // optional - E.164 number convention
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

export const ConfirmSignUp = createAsyncThunk(
  "auth/confirmSignUp",
  async ({ username, code }) => {
    try {
      await Auth.confirmSignUp(username, code);
    } catch (error) {
      console.log("error confirming sign up", error);
    }
  }
);

export const ResendConfirmationCode = createAsyncThunk(
  "auth/resendConfirmationCode",
  async function resendConfirmationCode({ username }) {
    try {
      await Auth.resendSignUp(username);
      console.log("code resent successfully");
    } catch (err) {
      console.log("error resending code: ", err);
    }
  }
);

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      // Cases for SignUp

      .addCase(SignUp.pending, (state) => {
        state.signUpStatus = "loading";
      })
      .addCase(SignUp.fulfilled, (state) => {
        state.signUpStatus = "succeeded";
        // authAdapter.addOne(state, action.payload);
      })
      .addCase(SignUp.rejected, (state, action) => {
        state.signUpStatus = "failed";
        state.signUpError = action.error.message;
      })
      // Cases for ConfirmSignUp

      .addCase(ConfirmSignUp.pending, (state) => {
        state.confirmSignUpStatus = "loading";
      })
      .addCase(ConfirmSignUp.fulfilled, (state) => {
        state.confirmSignUpStatus = "succeeded";
      })
      .addCase(ConfirmSignUp.rejected, (state, action) => {
        state.confirmSignUpStatus = "failed";
        state.confirmSignUpError = action.error.message;
      })
      // Cases for ResendConfirmationCode

      .addCase(ResendConfirmationCode.pending, (state) => {
        state.resendConfirmationCodeStatus = "loading";
      })
      .addCase(ResendConfirmationCode.fulfilled, (state) => {
        state.resendConfirmationCodeStatus = "succeeded";
      })
      .addCase(ResendConfirmationCode.rejected, (state, action) => {
        state.resendConfirmationCodeStatus = "failed";
        state.resendConfirmationCodeError = action.error.message;
      });
  },
});

export default authSlice.reducer;
