import React, { FC, useState } from "react";
import { useNavigate } from "react-router-dom";

import PageContainer from "../../common/PageContainer";
import FormButton from "../../common/FormButton";
import Row from "../../common/Row";
import DailyRewardsRoulette from "../../components/DailyRewardsRoulette";

const HomePage: FC = () => {
  const [showRoulette, setShowRoulette] = useState<boolean>(false);

  const navigation = useNavigate();

  const changeShowRoulette = () => {
    setShowRoulette((prev) => !prev);
  };

  return (
    <PageContainer>
      <Row>
        <FormButton onClick={changeShowRoulette}>
          Hi nigga
        </FormButton>
        <FormButton onClick={() => navigation("/auth")}>
          Обновить поганый токен
        </FormButton>
      </Row>
      <DailyRewardsRoulette
        open={showRoulette}
        onReRoll={(data) => {
          changeShowRoulette();
          console.log("ddd", data);
        }}
      />
    </PageContainer>
  );
};

export default HomePage;
