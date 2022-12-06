import React, { FC, ReactNode } from "react";

import "./style.scss";

type Props = {
  children: ReactNode;
};

const Col: FC<Props> = ({ children }) => {
  return (
    <div className="col-container">
      {children}
    </div>
  );
};

export default Col;
