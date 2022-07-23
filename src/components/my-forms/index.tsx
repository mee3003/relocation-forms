import styled from "@emotion/styled";
import {
  JsonFormsRendererRegistryEntry,
  JsonSchema,
  UISchemaElement,
  ValidationMode,
} from "@jsonforms/core";
import { materialCells, materialRenderers } from "@jsonforms/material-renderers";
import { JsonForms } from "@jsonforms/react";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { ModuleProps } from "../../Module";
import { AppState } from "../../store";
import { setErrors } from "../../store/preferencesReducer";
import AddressControl from "../commons/controls/AddressControl";
import BooleanControl from "../commons/controls/BooleanControl";
import ExpensiveTextControl from "../commons/controls/ExpensiveTextControl";
import ParkingControl from "../commons/controls/ParkingControl";
import {
  myAddressTester,
  myBooleanTester,
  myExpensiveTester,
  myParkingTester,
} from "../schemaTester";

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

const renderers: JsonFormsRendererRegistryEntry[] = [
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
    tester: myExpensiveTester,
    renderer: ExpensiveTextControl,
  },
];

const translations = {
  required: "Eingabe erforderlich",
  format: "fehlerhafte Eingabe",
};

const translateError = (keyword: string) => {
  return (translations as any)[keyword] || keyword;
};

export const MyJsonForms: React.FC<Props> = ({ data, onData, schema, uischema }) => {
  const moduleProperties = useSelector<AppState, ModuleProps | undefined>(
    (state) => state.preferences.moduleProperties
  );

  const mode = useSelector<AppState, ValidationMode>((state) => state.preferences.validationMode);

  const dispatch = useDispatch();

  React.useEffect(() => {
    if (moduleProperties) {
      const { gapiEnabled } = moduleProperties;
      console.debug("Gapi enabled: ", gapiEnabled);
      if (gapiEnabled == "true") {
        renderers.push({
          tester: myAddressTester,
          renderer: AddressControl,
        });
      }
    }
  }, [moduleProperties]);

  return (
    <Root>
      <JsonForms
        i18n={{
          translateError: (error) => translateError(error.keyword),
        }}
        schema={schema}
        uischema={uischema}
        data={data}
        onChange={({ data, errors }) => {
          onData(data);
          dispatch(setErrors({ errors }));
        }}
        config={{
          trim: false,
        }}
        validationMode={mode}
        renderers={renderers}
        cells={materialCells}
      />
    </Root>
  );
};
