import { useSelector } from "react-redux";
import { AppState } from "../store";
import { Item } from "../types";

export function useItemColli(itemId: string, cat: string): number | undefined {
  const items = useSelector<AppState, Item[]>((state) => state.order.items);

  return items?.find((item) => item.id === itemId && item.categories[0] === cat)?.colli;
}
