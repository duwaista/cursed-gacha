import React, { FC, HTMLInputTypeAttribute } from "react";

import "./style.scss";

type Props = {
  alt?: string;
  placeholder?: string;
  type: HTMLInputTypeAttribute;
  value: string;
  onChange: (v: string) => void;
};

const FormInput: FC<Props> = ({
  alt,
  value,
  type,
  placeholder,
  onChange,
}) => {
  return (
    <input
      type={type}
      value={value}
      alt={alt}
      placeholder={placeholder}
      className="form-input"
      onChange={(e) => onChange(e.target.value)}
    />
  );
};

export default FormInput;
