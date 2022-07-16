import React from "react";
import { Item } from "../../types";
import { NumberInput } from "../commons/number-input";

interface Props {
  item: Item;
  colli: number;
}

export const ItemRenderer: React.FC<Props> = ({ item, colli }) => {
  return <NumberInput label={item.name} onChange={console.log} value={colli}></NumberInput>;
};
