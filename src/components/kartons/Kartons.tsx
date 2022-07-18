import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { AppState } from "../../store";
import { setOrderProps } from "../../store/orderReducer";
import { Order } from "../../types";
import { NumberInput } from "../commons/number-input";
import { Items } from "../moebel/CategorieRenderer";

export const Kartons: React.FC = () => {
  const dispatch = useDispatch();
  const order = useSelector<AppState, Order>((state) => state.order);

  const onBoxChange = (value: number) => {
    dispatch(setOrderProps({ prop: "boxNumber", value }));
  };

  const onKleiderboxChange = (value: number) => {
    dispatch(setOrderProps({ prop: "kleiderbox", value }));
  };

  return (
    <KartonsRenderer
      boxNumber={order.boxNumber}
      kleiderbox={order.kleiderbox}
      onBoxChange={onBoxChange}
      onKleiderboxChange={onKleiderboxChange}
    />
  );
};

interface Props {
  kleiderbox: number;
  boxNumber: number;
  onBoxChange: (value: number) => void;
  onKleiderboxChange: (value: number) => void;
}

const KartonsRenderer: React.FC<Props> = ({
  kleiderbox,
  boxNumber,
  onBoxChange,
  onKleiderboxChange,
}) => {
  return (
    <Items>
      <NumberInput value={boxNumber} label="Umzugskartons" onChange={onBoxChange} />
      <NumberInput
        value={kleiderbox}
        label="Kleiderboxen"
        onChange={onKleiderboxChange}
      ></NumberInput>
    </Items>
  );
};
