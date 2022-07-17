import React, { useContext, useReducer } from "react";
import { Address, Customer, Item, Order } from "../types";

type CustomerAction = {
  type: "SET_CUSTOMER";
  payload: {
    customer: Customer;
  };
};

type OrderPropAction = {
  type: "SET_ORDER_PROP";
  payload: {
    value: any;
    prop: keyof Order;
  };
};

type ItemAction = {
  type: "SET_ORDER_ITEM";
  payload: {
    item: Item;
    value: number;
  };
};

type Action = CustomerAction | OrderPropAction | ItemAction;

const reducer = (state: Order, action: Action): Order => {
  switch (action.type) {
    case "SET_CUSTOMER": {
      return { ...state, customer: action.payload.customer };
    }
    case "SET_ORDER_PROP": {
      let a = { ...state, [action.payload.prop]: action.payload.value };
      return a;
    }
    case "SET_ORDER_ITEM": {
      const { item, value } = action.payload;

      let newItems = state.items;
      if (value === 0) {
        newItems = newItems.filter((i) => i.id !== item.id);
        return { ...state, items: newItems };
      }

      const itemIndex = newItems.findIndex((i) => i.id == item.id);

      if (itemIndex > -1) {
        newItems[itemIndex].colli = value;
      } else {
        newItems.push({ ...item, colli: value });
      }
      return { ...state, items: newItems };
    }

    default:
      return state;
  }
};

type OrderDispatch = (action: Action) => void;

const OrderContext = React.createContext<{ state: Order; dispatch: OrderDispatch } | undefined>(
  undefined
);

const initialState: Order = {
  customer: {
    costsAssumption: false,
  },
  items: new Array<Item>(),
  isDateFix: false,
  from: {
    address: "",
    parkingSlot: false,
    packservice: false,
    garage: false,
    hasLoft: false,
    keller: false,
    isAltbau: false,
  },
  to: {
    address: "",
    parkingSlot: false,
    packservice: false,
    garage: false,
    hasLoft: false,
    keller: false,
    isAltbau: false,
  },
} as Order;

const OrderContextProvider: React.FC<React.PropsWithChildren> = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return <OrderContext.Provider value={{ state, dispatch }}>{children}</OrderContext.Provider>;
};

const useOrderContext = () => {
  const context = useContext(OrderContext);
  if (context === undefined) {
    throw new Error("context must be used within a OrderContextProvider");
  }
  return context;
};

export { OrderContextProvider, useOrderContext };
