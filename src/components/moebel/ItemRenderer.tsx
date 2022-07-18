import React from "react";
import { useDispatch } from "react-redux";
import { useItemColli } from "../../hooks/useItemColli";
import { setItem } from "../../store/orderReducer";
import { Item } from "../../types";
import { NumberInput } from "../commons/number-input";

interface Props {
  item: Item;
  categorie: string;
}

export const ItemRenderer: React.FC<Props> = ({ item, categorie }) => {
  const colli = useItemColli(item.id, categorie);
  const dispatch = useDispatch();
  const handleChange = (value: number) => {
    dispatch(setItem({ categorie, item, value }));
  };

  return <NumberInput step={item.step} label={item.name} onChange={handleChange} value={colli} />;
};
