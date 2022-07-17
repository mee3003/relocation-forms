import React from "react";
import { AddressRenderer } from "../components/address-renderer/AddressRender";
import { Heading } from "../components/commons/heading";
import { useOrderContext } from "../context/OrderContext";

export const Step2Auszug: React.FC = () => {
  const { state, dispatch } = useOrderContext();

  const onData = (data: any) => {
    dispatch({ type: "SET_ORDER_PROP", payload: { prop: "from", value: data } });
  };

  return (
    <>
      <Heading label="Auszugsadresse" />
      <AddressRenderer data={state.from} onData={onData} config={{ movementLabel: "Auszug aus" }} />
    </>
  );
};
