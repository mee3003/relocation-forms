import React from "react";

import {
  materialCells,
  materialRenderers,
} from "@jsonforms/material-renderers";

import styled from "@emotion/styled";
import { JsonForms } from "@jsonforms/react";
import { customerSchema, ui } from "./customerSchema";
import { DateWidget } from "./date/DateWidget";

const Root = styled.div`
  display: flex;
  flex-direction: column;
  gap: 50px;
`;

export const Step1: React.FC = () => {
  return (
    <Root>
      <JsonForms
        uischema={ui}
        schema={customerSchema}
        data={{}}
        renderers={materialRenderers}
        cells={materialCells}
        onChange={({ data, errors }) => console.log(data)}
      />
      <DateWidget />
    </Root>
  );
};
