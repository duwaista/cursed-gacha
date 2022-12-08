import React from "react";
import { render } from "@testing-library/react";

import FormButton from "../common/FormButton";

test("common/FormButton", () => {
  const callback = jest.fn();
  const children = "Test";

  render(<FormButton disabled onClick={callback}>{children}</FormButton>);
});
