import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { AddressRenderer } from "../components/address-renderer/AddressRender";
import { Heading } from "../components/commons/heading";
import { AppState } from "../store";
import { setOrderProps } from "../store/orderReducer";
import { Address } from "../types";

export const Step3Einzug: React.FC = () => {
  const data = useSelector<AppState, Address>((state) => state.order.to);

  const dispatch = useDispatch();

  const onData = (data: any) => {
    dispatch(setOrderProps({ prop: "to", value: data }));
  };

  return (
    <>
      <Heading label="Einzugsadresse" />
      <AddressRenderer data={data} onData={onData} config={{ movementLabel: "Einzug in" }} />
    </>
  );
};
