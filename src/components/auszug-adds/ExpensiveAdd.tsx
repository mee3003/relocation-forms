import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { AppState } from "../../store";
import { setOrderProps } from "../../store/orderReducer";
import { Order } from "../../types";
import { MyJsonForms } from "../my-forms";
import { expensiveSchema, expensiveSchemaText } from "./schemas";

export const ExpensiveAdd: React.FC = () => {
  const order = useSelector<AppState, Order>((s) => s.order);

  const dispatch = useDispatch();

  const onChange = (prop: keyof Order, value: any) => {
    dispatch(setOrderProps({ prop, value }));
  };

  return (
    <>
      <MyJsonForms
        schema={expensiveSchema}
        data={order}
        onData={(data) => {
          onChange("expensive", data.expensive);
        }}
      />
      {order.expensive === true && (
        <MyJsonForms
          schema={expensiveSchemaText}
          data={order}
          onData={(data) => {
            onChange("expensiveText", data.expensiveText);
          }}
        />
      )}
    </>
  );
};
