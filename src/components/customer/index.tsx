import React from "react";

import styled from "@emotion/styled";
import { useOrderContext } from "../../context/OrderContext";
import { MyJsonForms } from "../my-forms";
import { customerSchema, ui } from "./customerSchema";

const Root = styled.div`
  display: flex;
  flex-direction: column;
  gap: 50px;
`;

export const Customer: React.FC = () => {
  const { state, dispatch } = useOrderContext();

  const setCustomer = (data: any) => {
    dispatch({ type: "SET_CUSTOMER", payload: { customer: data } });
  };
  return (
    <Root>
      <MyJsonForms uischema={ui} schema={customerSchema} data={state.customer} onData={setCustomer} />
    </Root>
  );
};
