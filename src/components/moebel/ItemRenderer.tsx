import React from "react";
import { useItemColli } from "../../hooks/useItemColli";
import { Item } from "../../types";
import { NumberInput } from "../commons/number-input";

interface Props {
  item: Item;
  onChange: (value: number) => void;
  categorie: string;
}

export const ItemRenderer: React.FC<Props> = ({ item, onChange, categorie }) => {
  const colli = useItemColli(item.id, categorie);
  return <NumberInput label={item.name} onChange={onChange} value={colli} />;
};
