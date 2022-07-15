import styled from "@emotion/styled";
import { Typography } from "@mui/material";
import React from "react";

const Root = styled.div`
  display: flex;
  justify-content: end;
  padding: 1.2rem 0.6rem;
  border-bottom: 1px solid rgba(0, 0, 0, 0.42); ;
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
