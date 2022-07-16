import styled from "@emotion/styled";
import React from "react";
import TextField from "@mui/material/TextField";
import IconButton from "@mui/material/IconButton";
import RemoveIcon from "@mui/icons-material/Remove";
import AddIcon from "@mui/icons-material/Add";
import { InputLabel } from "@mui/material";

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

export const NumberInput: React.FC<Props> = ({ value = 0, label, onChange, step = 1 }) => {
  return (
    <Root>
      <LabelWrapper>
        <InputLabel>{label}</InputLabel>
      </LabelWrapper>
      <Input>
        <IconButton>
          <RemoveIcon />
        </IconButton>
        <TextField inputProps={{ min: 0, style: { textAlign: "center" } }} value={value} size="small" type={"number"} />
        <IconButton>
          <AddIcon />
        </IconButton>
      </Input>
    </Root>
  );
};
