import styled from "@emotion/styled";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import { FormControl, FormLabel } from "@mui/material";
import IconButton from "@mui/material/IconButton";
import TextField from "@mui/material/TextField";
import React, { useId } from "react";

interface Props {
  label: string;
  value?: any;
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

export const NumberInput: React.FC<Props> = ({ value, label, onChange, step = 1 }) => {
  const labelId = useId();

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    onChange(Number(event.target.value));
  };

  const onMinus = () => {
    if (value && value > 0) {
      onChange(value - 1);
    }
  };

  const onPlus = () => {
    if (value) {
      return onChange(value + 1);
    }
    onChange(1);
  };

  return (
    <Root>
      <FormControl>
        <LabelWrapper>
          <FormLabel id={labelId}>{label}</FormLabel>
        </LabelWrapper>
        <Input>
          <IconButton onClick={onMinus}>
            <RemoveIcon />
          </IconButton>
          <TextField
            aria-labelledby={labelId}
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
