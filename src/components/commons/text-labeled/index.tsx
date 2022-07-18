import { TextField } from "@mui/material";
import React from "react";

interface Props {
  value: any;
  label: string;
  onValue: (value: any) => void;
  required?: boolean;
}

export const TextLabeled: React.FC<Props> = ({ label, onValue, value, required }) => {
  const handleChange = (ev: React.ChangeEvent<HTMLInputElement>) => {
    onValue(ev.target.value);
  };

  return (
    <TextField
      required={required}
      onChange={handleChange}
      multiline
      fullWidth
      minRows={3}
      maxRows={10}
      label={label}
      value={value}
    />
  );
};
