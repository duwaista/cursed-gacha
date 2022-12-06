import React, { FC, useEffect } from "react";

import Roulette from "../Roulette";
import api from "../../services";

type Props = {
  open: boolean;
  onReRoll: (d: any) => void;
};

const DailyRewardsRoulette: FC<Props> = ({ open, onReRoll }: Props) => {
  const [trigger, result] = api.useLazyGetAllDailyQuery();

  useEffect(() => {
    if (open) trigger();
  }, [open, trigger]);

  if (!open) return null;

  return <Roulette onSuccessReRoll={() => onReRoll(result)} />;
};

export default DailyRewardsRoulette;
