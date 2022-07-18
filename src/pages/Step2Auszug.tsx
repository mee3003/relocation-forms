import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { AddressRenderer } from "../components/address-renderer/AddressRender";
import { ExpensiveAdd } from "../components/auszug-adds/ExpensiveAdd";
import { Heading } from "../components/commons/heading";
import { AppState } from "../store";
import { setOrderProps } from "../store/orderReducer";
import { Order } from "../types";

export const Step2Auszug: React.FC = () => {
  const dispatch = useDispatch();

  const data = useSelector<AppState, Order>((state) => state.order);

  const onData = (data: any) => {
    dispatch(setOrderProps({ prop: "from", value: data }));
  };

  return (
    <>
      <Heading label="Auszugsadresse" />
      <AddressRenderer data={data.from} onData={onData} config={{ movementLabel: "Auszug aus" }} />
      <ExpensiveAdd />
    </>
  );
};
