import { useOrderContext } from "../context/OrderContext";

export function useItemColli(itemId: string, cat: string): number | string {
  const { state } = useOrderContext();

  return state.items?.find((item) => item.id === itemId && item.categories[0] === cat)?.colli || "";
}
