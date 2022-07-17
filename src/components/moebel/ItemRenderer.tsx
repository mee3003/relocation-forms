import React from "react";
import { useItemColli } from "../../hooks/useItemColli";
import { Item } from "../../types";
import { NumberInput } from "../commons/number-input";

interface Props {
  item: Item;
  onChange: (value: number) => void;
}

export const ItemRenderer: React.FC<Props> = ({ item, onChange }) => {
  const colli = useItemColli(item.id);
  console.log(colli);
  return <NumberInput label={item.name} onChange={onChange} value={colli} />;
};
