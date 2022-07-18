import styled from "@emotion/styled";
import { JsonSchema } from "@jsonforms/core";
import React from "react";
import { Address } from "../../types";
import { MyJsonForms } from "../my-forms";
import { hausStockwerke, liftSchema, part1, part2, stockwerkSchema } from "./addressSchema";

interface Props {
  data: Address;
  onData: (data: Address) => void;
  config: any;
}

const Root = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
`;

export const AddressRenderer: React.FC<Props> = ({ data, onData, config }) => {
  const FormsPart = (schema: JsonSchema) => {
    return <MyJsonForms schema={schema} data={data} onData={onData} />;
  };

  return (
    <Root>
      {FormsPart(part1(config.movementLabel))}
      {data.movementObject !== "Haus" && FormsPart(stockwerkSchema)}
      {data.movementObject !== "Haus" && FormsPart(liftSchema)}
      {data.movementObject === "Haus" && FormsPart(hausStockwerke)}
      {FormsPart(part2)}
    </Root>
  );
};
