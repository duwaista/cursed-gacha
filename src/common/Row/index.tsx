import React, { FC, ReactNode } from "react";

import "./style.scss";

type Props = {
  children: ReactNode;
};

const Row: FC<Props> = ({ children }) => {
  return (
    <div className="row-container">
      {children}
    </div>
  );
};

export default Row;
