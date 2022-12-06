import { createSlice } from "@reduxjs/toolkit";

import * as reducers from "./reducers";
import { IAuthState } from "./types";

const initialState: IAuthState = {
  token: undefined,
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers,
});

export const {
  setAuthToken,
} = authSlice.actions;

export default authSlice.reducer;
