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
  currentUser: null,
});

export const SignUp = createAsyncThunk(
  "auth/signUp",
  async ({ username, password, email }) => {
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
  }
);

export const ConfirmSignUp = createAsyncThunk(
  "auth/confirmSignUp",
  async ({ username, code }) => {
    const response = await Auth.confirmSignUp(username, code);
    console.log("response", response);
    return response;
  }
);

export const SignOut = createAsyncThunk("auth/signOut", async () => {
  await Auth.signOut();
});

export const ResendConfirmationCode = createAsyncThunk(
  "auth/resendConfirmationCode",
  async ({ username }) => {
    await Auth.resendSignUp(username);
    console.log("code resent successfully");
  }
);

export const FetchCurrentUser = createAsyncThunk(
  "auth/fetchCurrentUser",
  async () => {
    const user = await Auth.currentAuthenticatedUser();
    return user;
  }
);

export const SignIn = createAsyncThunk(
  "auth/signIn",
  async ({ username, password }) => {
    const user = await Auth.signIn(username, password);
    console.log("user", user);
    return user;
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
        authAdapter.addOne(state, action.payload.user);
        state.signUpError = null;
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
        state.currentUser = state.ids[0];
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
        authAdapter.addOne(state, action.payload);
        state.currentUser = action.payload.username;
        console.log("sign in successfully");
      })
      .addCase(SignIn.rejected, (state, action) => {
        state.signInStatus = "failed";
        state.signInError = action.error.message;
      })
      // Cases for SignOut

      .addCase(SignOut.pending, (state) => {
        state.signOutStatus = "loading";
      })
      .addCase(SignOut.fulfilled, (state) => {
        state.signOutStatus = "succeeded";
        authAdapter.removeAll(state);
        state.currentUser = null;
        console.log("sign out successfully");
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
        authAdapter.addOne(state, action.payload);
        state.currentUser = action.payload.username;
        console.log("fetch user successfully");
      })
      .addCase(FetchCurrentUser.rejected, (state, action) => {
        state.fetchCurrentUserStatus = "failed";
        state.fetchCurrentUserError = action.error.message;
        state.currentUser = null;
      });
  },
});

export default authSlice.reducer;
