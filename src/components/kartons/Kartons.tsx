import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { AppState } from "../../store";
import { Options } from "../../store/optionsReducer";
import { setBox, setKleiderBox } from "../../store/orderReducer";
import { Order } from "../../types";
import { NumberInput } from "../commons/number-input";
import { Items } from "../moebel/CategorieRenderer";

export const Kartons: React.FC = () => {
  const dispatch = useDispatch();
  const order = useSelector<AppState, Order>((state) => state.order);

  const options = useSelector<AppState, Options>((state) => state.appOptions.options);

  const onBoxChange = (value: number) => {
    dispatch(setBox({ value, options }));
  };

  const onKleiderboxChange = (value: number) => {
    dispatch(setKleiderBox({ value, options }));
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
