import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { AppState } from "../../store";
import { setOrderProps } from "../../store/orderReducer";
import { TextLabeled } from "../commons/text-labeled";

export const Anmerkung: React.FC = () => {
  const text = useSelector<AppState, string>((state) => state.order.text);

  const dispatch = useDispatch();

  const onValue = (value: string) => {
    dispatch(setOrderProps({ prop: "text", value }));
  };

  return <TextLabeled label="Anmerkung" value={text} onValue={onValue} />;
};
