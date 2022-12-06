import React, { FC, useState } from "react";
import { useNavigate } from "react-router-dom";

import PageContainer from "../../common/PageContainer";
import FormInput from "../../common/FormInput";
import useAppDispatch from "../../hooks/useAppDispatch";
import { setAuthToken } from "../../store/auth";
import FormButton from "../../common/FormButton";
import Col from "../../common/Col";

const AuthPage: FC = () => {
  const [token, setToken] = useState<string>("");

  const navigation = useNavigate();
  const dispatch = useAppDispatch();

  const onSaveToken = (value: string) => {
    if (!value) return;
    try {
      window.localStorage.setItem("cocken", value);
      dispatch(setAuthToken(value));
      navigation("/");
    } catch (e) {
      console.log("lol", e);
    }
  };

  return (
    <PageContainer>
      <h2>Авторизуйся дурак</h2>
      <Col>
        <FormInput
          type="text"
          value={token}
          placeholder="Вставьте сюда ваш поганый токен"
          onChange={(val) => setToken(val)}
        />
        <FormButton
          style={{ width: "100%" }}
          onClick={() => onSaveToken(token)}
        >
          Сохранить вкусный токен
        </FormButton>
        <FormButton
          style={{ width: "100%" }}
          onClick={() => navigation("/")}
        >
          Хачу назад
        </FormButton>
      </Col>
    </PageContainer>
  );
};

export default AuthPage;
