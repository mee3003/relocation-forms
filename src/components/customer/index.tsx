import React from "react";

import styled from "@emotion/styled";
import { useDispatch, useSelector } from "react-redux";
import { AppState } from "../../store";
import { setOrderProps } from "../../store/orderReducer";
import { Order } from "../../types";
import { MyJsonForms } from "../my-forms";
import { customerSchema, ui } from "./customerSchema";

const Root = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
`;

export const Customer: React.FC = () => {
  const order = useSelector<AppState, Order>((state) => state.order);

  const dispatch = useDispatch();

  const setCustomer = (data: any) => {
    dispatch(setOrderProps({ prop: "customer", value: data }));
  };

  return (
    <Root>
      <MyJsonForms
        uischema={ui}
        schema={customerSchema}
        data={order.customer}
        onData={setCustomer}
      />
    </Root>
  );
};
