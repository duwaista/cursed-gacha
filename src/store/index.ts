import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { createLogger } from "redux-logger";

import api from "../services";
import authReducer from "./auth";

const isDevMode = process.env.NODE_ENV === "development";

const logger = createLogger();

const reducer = combineReducers({
  [api.reducerPath]: api.reducer,
  auth: authReducer,
});

const state = configureStore({
  reducer,
  middleware: (getDefaultMiddleware) => {
    const middleware = getDefaultMiddleware().concat(api.middleware);
    if (isDevMode) middleware.push(logger);
    return middleware;
  },
});

export type RootState = ReturnType<typeof state.getState>;
export type AppDispatch = typeof state.dispatch;

export default state;
