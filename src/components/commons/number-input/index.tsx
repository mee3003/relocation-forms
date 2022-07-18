import styled from "@emotion/styled";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import { FormControl, FormLabel } from "@mui/material";
import IconButton from "@mui/material/IconButton";
import TextField from "@mui/material/TextField";
import React, { useId } from "react";

interface Props {
  label: string;
  value?: number;
  onChange: (value: number) => void;
  step?: number;
}

const Root = styled.div`
  margin: auto;
`;

const Input = styled.div`
  display: flex;
  gap: 0.3rem;
`;

const LabelWrapper = styled.div`
  padding-left: 10px;
  margin-bottom: 0.5rem;
`;

export const NumberInput: React.FC<Props> = ({ value = "", label, onChange, step = 1 }) => {
  const inputId = useId();

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    onChange(Number(event.target.value));
  };

  const focusInput = () => {
    document.getElementById(inputId)?.focus();
  };

  const onMinus = () => {
    focusInput();
    if (typeof value === "number" && value > 0) {
      onChange(value - step);
    }
  };

  const onPlus = () => {
    focusInput();
    if (typeof value === "number") {
      return onChange(value + step);
    }
    onChange(1);
  };

  return (
    <Root>
      <FormControl>
        <LabelWrapper>
          <FormLabel>{label}</FormLabel>
        </LabelWrapper>
        <Input>
          <IconButton onClick={onMinus}>
            <RemoveIcon />
          </IconButton>
          <TextField
            //@ts-ignore
            step={step}
            id={inputId}
            placeholder={"0"}
            inputProps={{ min: 0, style: { textAlign: "center" } }}
            value={value}
            size="small"
            type={"number"}
            onChange={handleInputChange}
          />
          <IconButton onClick={onPlus}>
            <AddIcon />
          </IconButton>
        </Input>
      </FormControl>
    </Root>
  );
};
