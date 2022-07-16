import styled from "@emotion/styled";
import { JsonSchema, UISchemaElement } from "@jsonforms/core";
import { materialCells, materialRenderers } from "@jsonforms/material-renderers";
import { JsonForms } from "@jsonforms/react";
import React from "react";
import { useAppContext } from "../../context/AppContext";
import AddressControl from "../commons/controls/AddressControl";
import BooleanControl from "../commons/controls/BooleanControl";
import ParkingControl from "../commons/controls/ParkingControl";
import { myAddressTester, myBooleanTester, myParkingTester } from "../schemaTester";

interface Props {
  data: any;
  onData: (data: any) => void;
  schema: JsonSchema;
  uischema?: UISchemaElement;
}

const Root = styled.div`
  & .MuiGrid-root {
    gap: 40px;
  }
`;

const renderers = [
  ...materialRenderers,
  {
    tester: myBooleanTester,
    renderer: BooleanControl,
  },
  {
    tester: myParkingTester,
    renderer: ParkingControl,
  },
  {
    tester: myAddressTester,
    renderer: AddressControl,
  },
];

export const MyJsonForms: React.FC<Props> = ({ data, onData, schema, uischema }) => {
  const {
    state: { validationMode },
  } = useAppContext();

  const { dispatch } = useAppContext();

  return (
    <Root>
      <JsonForms
        schema={schema}
        uischema={uischema}
        data={data}
        onChange={({ data, errors }) => {
          onData(data);
          dispatch({ type: "SET_ERRORS", payload: { errors } });
        }}
        config={{
          trim: false,
        }}
        validationMode={validationMode}
        renderers={renderers}
        cells={materialCells}
      />
    </Root>
  );
};
