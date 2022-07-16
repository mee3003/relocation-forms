import { withJsonFormsControlProps } from "@jsonforms/react";
import React from "react";
import { YesNo } from "../yes-no/YesNo";
import { BooleanControlProps } from "./BooleanControl";

const BooleanControl = ({ data, handleChange, path, label }: BooleanControlProps) => {
  return (
    <YesNo
      yesLabel="vom Spediteur zu organisieren"
      noLabel="wird vom Kunden sichergestellt"
      label={label}
      renderRow={false}
      value={data}
      onChange={(value) => handleChange(path, value)}
    />
  );
};

export default withJsonFormsControlProps(BooleanControl);
