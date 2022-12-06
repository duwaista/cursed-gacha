import React, { useEffect } from "react";
import { Route, Routes, useNavigate } from "react-router-dom";

import useAppSelector from "../hooks/useAppSelector";
import useAppDispatch from "../hooks/useAppDispatch";
import { setAuthToken } from "../store/auth";
import AuthPage from "../pages/Auth";
import HomePage from "../pages/Home";
import getLocalToken from "../utils/getLocalToken";

const AppRouter = (): JSX.Element => {
  const token = useAppSelector((state) => state.auth.token);
  const localToken = getLocalToken();

  const navigation = useNavigate();
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (localToken === null) navigation("/auth");
    else if (!token) {
      dispatch(setAuthToken(localToken));
    }
  }, [navigation, dispatch, token, localToken]);

  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/auth" element={<AuthPage />} />
    </Routes>
  );
};

export default AppRouter;
