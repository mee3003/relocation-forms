import { withJsonFormsControlProps } from "@jsonforms/react";
import { TextLabeled } from "../text-labeled";

const ExpensiveTextControl = (props: any) => {
  const { data, required, handleChange, label, path } = props;

  return (
    <TextLabeled
      required={required}
      value={data}
      label={label}
      onValue={(value) => handleChange(path, value)}
    />
  );
};

export default withJsonFormsControlProps(ExpensiveTextControl);
