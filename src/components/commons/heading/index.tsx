import styled from "@emotion/styled";
import { Typography } from "@mui/material";
import React from "react";

const Root = styled.div`
  display: flex;
  justify-content: end;
  padding: 1.2em 0.6em;
  border-bottom: 0.1rem solid rgba(0, 0, 0, 0.42); ;
`;

export const Heading: React.FunctionComponent<{
  label: string;
  subLabel?: string;
}> = ({ label, subLabel }) => {
  return (
    <Root>
      <div>
        <Typography variant="h4">{label}</Typography>
        {subLabel && <Typography variant="subtitle2">{subLabel}</Typography>}
      </div>
    </Root>
  );
};
