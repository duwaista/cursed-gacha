import { PayloadAction } from "@reduxjs/toolkit";

import { IAuthState } from "./types";

export const setAuthToken = (state: IAuthState, action: PayloadAction<string>) => {
  state.token = action.payload;
};
