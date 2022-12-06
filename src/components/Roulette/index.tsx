import React, { FC, useEffect, useState } from "react";

import "./style.scss";
import roulette from "../../../assets/roulette.png";

type Props = {
  onSuccessReRoll: () => void;
};

const Roulette: FC<Props> = ({ onSuccessReRoll }) => {
  const [isRolling, setIsRolling] = useState<boolean>(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsRolling(false);
      onSuccessReRoll();
    }, 5500);

    return () => clearTimeout(timer);
  }, [isRolling, onSuccessReRoll]);

  return (
    <div className="roulette-modal-container">
      <div className="roulette-container">
        <img
          className={`roulette-image ${isRolling ? "spin" : ""}`}
          alt="amongus"
          src={roulette}
        />
      </div>
    </div>
  );
};

export default Roulette;
