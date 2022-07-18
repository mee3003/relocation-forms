import styled from "@emotion/styled";
import { InputAdornment, InputLabel, OutlinedInput } from "@mui/material";
import React from "react";
import { useSelector } from "react-redux";
import { AppState } from "../../store";

const Root = styled.div`
  display: flex;
  gap: 2rem;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
`;
export const Volume: React.FC = () => {
  const volume = useSelector<AppState, string>((state) => state.order.volume);

  return (
    <Root>
      <InputLabel>Umzugsvolumen</InputLabel>
      <OutlinedInput
        size="small"
        endAdornment={<InputAdornment position="end">m³</InputAdornment>}
        disabled
        value={volume}
      />
    </Root>
  );
};
