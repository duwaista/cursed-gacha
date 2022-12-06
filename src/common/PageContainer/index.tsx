import React, { FC, ReactNode } from "react";

import "./style.scss";

type Props = {
  children: ReactNode;
};

const PageContainer: FC<Props> = ({ children }) => {
  return (
    <div className="application-page-wrapper">
      <div className="application-page-content">
        {children}
      </div>
    </div>
  );
};

export default PageContainer;
