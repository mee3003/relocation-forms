import styled from "@emotion/styled";
import { JsonSchema } from "@jsonforms/core";
import React from "react";
import { useOrderContext } from "../../context/OrderContext";
import { Address } from "../../types";
import { MyJsonForms } from "../my-forms";
import { hausStockwerke, liftSchema, part1, part2, stockwerkSchema } from "./addressSchema";

interface Props {
  data: Address;
  onData: (data: Address) => void;
}

const Root = styled.div`
  display: flex;
  flex-direction: column;
  gap: 40px;
`;

export const AddressRenderer: React.FC<Props> = ({ data, onData }) => {
  const FormsPart = (schema: JsonSchema) => {
    return <MyJsonForms schema={schema} data={data} onData={onData} />;
  };

  return (
    <Root>
      {FormsPart(part1)}
      {data.movementObject !== "Haus" && FormsPart(stockwerkSchema)}
      {data.movementObject !== "Haus" && FormsPart(liftSchema)}
      {data.movementObject === "Haus" && FormsPart(hausStockwerke)}
      {FormsPart(part2)}
    </Root>
  );
};