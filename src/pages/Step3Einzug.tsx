import React from "react";
import { AddressRenderer } from "../components/address-renderer/AddressRender";
import { Heading } from "../components/commons/heading";
import { useOrderContext } from "../context/OrderContext";

export const Step3Einzug: React.FC = () => {
  const { state, dispatch } = useOrderContext();

  const onData = (data: any) => {
    dispatch({ type: "SET_ORDER_PROP", payload: { prop: "to", value: data } });
  };

  return (
    <>
      <Heading label="Einzugsadresse" />
      <AddressRenderer data={state.to} onData={onData} config={{ movementLabel: "Einzug in" }} />
    </>
  );
};
