import * as React from "react";
import { withJsonFormsControlProps } from "@jsonforms/react";
import { YesNo } from "../yes-no/YesNo";

export interface BooleanControlProps {
  data: any;
  handleChange(path: string, value: any): void;
  path: string;
  label: string;
  description?: string;
}

const BooleanControl = (props: BooleanControlProps) => {
  const { data, handleChange, path, label, description } = props;
  return (
    <YesNo
      description={description}
      label={label}
      value={data}
      onChange={(value) => handleChange(path, value)}
    />
  );
};

export default withJsonFormsControlProps(BooleanControl);
