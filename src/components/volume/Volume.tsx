import styled from "@emotion/styled";
import { InputAdornment, InputLabel, OutlinedInput } from "@mui/material";
import React from "react";
import { useOrderContext } from "../../context/OrderContext";

const Root = styled.div`
  display: flex;
  gap: 30px;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
`;
export const Volume: React.FC = () => {
  const { state } = useOrderContext();
  return (
    <Root>
      <InputLabel>Umzugsvolumen</InputLabel>
      <OutlinedInput
        size="small"
        endAdornment={<InputAdornment position="end">m³</InputAdornment>}
        disabled
        value={state.volume}
      />
    </Root>
  );
};
