import {
  createAsyncThunk,
  createEntityAdapter,
  createSlice,
} from "@reduxjs/toolkit";

import { Auth } from "aws-amplify";

const authAdapter = createEntityAdapter({
  selectId: (user) => user.username,
});

const initialState = authAdapter.getInitialState({
  signUpStatus: "idle",
  signUpError: null,
  confirmSignUpStatus: "idle",
  confirmSignUpError: null,
  resendConfirmationCodeStatus: "idle",
  resendConfirmationCodeError: null,
  signInStatus: "idle",
  signInError: null,
  signOutStatus: "idle",
  signOutError: null,
  fetchCurrentUserStatus: "idle",
  fetchCurrentUserError: null,
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

export const SignOut = createAsyncThunk("auth/signOut", async () => {
  try {
    await Auth.signOut();
  } catch (error) {
    console.log("error signing out: ", error);
  }
});

export const ResendConfirmationCode = createAsyncThunk(
  "auth/resendConfirmationCode",
  async ({ username }) => {
    try {
      await Auth.resendSignUp(username);
      console.log("code resent successfully");
    } catch (err) {
      console.log("error resending code: ", err);
    }
  }
);

export const FetchCurrentUser = createAsyncThunk(
  "auth/fetchCurrentUser",
  async () => {
    try {
      const user = await Auth.currentAuthenticatedUser();
      return user;
    } catch (err) {
      console.log("error fetch current user: ", err);
    }
  }
);

export const SignIn = createAsyncThunk(
  "auth/signIn",
  async ({ username, password }) => {
    try {
      const user = await Auth.signIn(username, password);
      console.log("user", user);
      return user;
    } catch (error) {
      console.log("error signing in", error);
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
      .addCase(SignUp.fulfilled, (state, action) => {
        state.signUpStatus = "succeeded";
        console.log("sign up successfully");
        authAdapter.addOne(state, action.payload);
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
      })
      // Cases for signIn

      .addCase(SignIn.pending, (state) => {
        state.signInStatus = "loading";
      })
      .addCase(SignIn.fulfilled, (state, action) => {
        state.signInStatus = "succeeded";
        console.log("sign in successfully");
        authAdapter.addOne(state, action.payload);
      })
      .addCase(SignIn.rejected, (state, action) => {
        state.signInStatus = "failed";
        state.signInError = action.error.message;
      })
      // Cases for SignOut

      .addCase(SignOut.pending, (state) => {
        state.signOutStatus = "loading";
      })
      .addCase(SignOut.fulfilled, (state, action) => {
        state.signOutStatus = "succeeded";
        console.log("sign out successfully");
        authAdapter.removeOne(state, action.payload);
      })
      .addCase(SignOut.rejected, (state, action) => {
        state.signOutStatus = "failed";
        state.signOutError = action.error.message;
      }) // Cases for fetchCurrentUser

      .addCase(FetchCurrentUser.pending, (state) => {
        state.fetchCurrentUserStatus = "loading";
      })
      .addCase(FetchCurrentUser.fulfilled, (state, action) => {
        state.fetchCurrentUserStatus = "succeeded";
        console.log("fetch user successfully");
        authAdapter.addOne(state, action.payload);
      })
      .addCase(FetchCurrentUser.rejected, (state, action) => {
        state.fetchCurrentUserStatus = "failed";
        state.fetchCurrentUserError = action.error.message;
      });
  },
});

export default authSlice.reducer;
