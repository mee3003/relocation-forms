import { useOrderContext } from "../context/OrderContext";

export function useItemColli(itemId: string): number | string {
  const { state } = useOrderContext();

  return state.items?.find((item) => item.id === itemId)?.colli || "";
}
