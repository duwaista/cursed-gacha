import React, { FC, ReactNode } from "react";

import "./style.scss";

type Props = {
  children: ReactNode;
  style?: React.CSSProperties;
  disabled?: boolean;
  onClick: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
};

const FormButton: FC<Props> = ({
  children,
  disabled,
  style,
  onClick,
}) => {
  return (
    <button
      type="button"
      className="form-button"
      style={style}
      disabled={disabled}
      onClick={(e) => onClick(e)}
    >
      {children}
    </button>
  );
};

export default FormButton;
