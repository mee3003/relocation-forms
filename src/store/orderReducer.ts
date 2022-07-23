import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Item, Order, Service } from "../types";
import { Options } from "./optionsReducer";

const initialState = {
  customer: {
    costsAssumption: false,
  },
  services: new Array<Service>(),
  items: new Array<Item>(),
  isDateFix: false,
  expensive: false,
  images: new Array<string>(),
  volume: "0",
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

const itemsVolume = (items: Item[]): number => {
  return items.reduce((acc, cur) => {
    return acc + cur.volume * cur.colli;
  }, 0);
};

const calcVolume = (
  items: Item[],
  boxNumber: number,
  kleiderbox: number,
  options: Options
): string => {
  return [
    itemsVolume(items),
    (kleiderbox || 0) * Number(options.kleiderboxCbm),
    (boxNumber || 0) * Number(options.boxCbm),
  ]
    .reduce((acc, cur) => acc + cur)
    .toFixed(2);
};

const orderSlice = createSlice({
  name: "order",
  initialState,
  reducers: {
    setBox(state, action: PayloadAction<{ value: number; options: Options }>) {
      state.boxNumber = action.payload.value;
      state.volume = calcVolume(
        state.items,
        state.boxNumber,
        state.kleiderbox,
        action.payload.options
      );
    },
    setKleiderBox(state, action: PayloadAction<{ value: number; options: Options }>) {
      state.kleiderbox = action.payload.value;
      state.volume = calcVolume(
        state.items,
        state.boxNumber,
        state.kleiderbox,
        action.payload.options
      );
    },
    setOrderProps(state, action: PayloadAction<{ prop: keyof Order; value: any }>) {
      const { prop, value } = action.payload;
      //@ts-ignore
      state[prop] = value;
    },

    addImage(state, action: PayloadAction<{ imageUrl: string }>) {
      const imagesSet = new Set<string>(state.images);
      imagesSet.add(action.payload.imageUrl);

      state.images = Array.from(imagesSet);
    },

    removeImage(state, action: PayloadAction<{ imageUrl: string }>) {
      state.images = state.images.filter((i) => i !== action.payload.imageUrl);
    },

    setItem(
      state,
      action: PayloadAction<{ value: number; item: Item; categorie: string; options: Options }>
    ) {
      const { item, value, categorie, options } = action.payload;
      const newItems = [...state.items];

      const itemIndex = newItems.findIndex((i) => {
        return i.id === item.id && i.categories?.[0] === categorie;
      });

      if (itemIndex > -1) {
        newItems[itemIndex].colli = value;
      } else {
        newItems.push({ ...item, colli: value, categories: [categorie] });
      }
      state.items = newItems;
      state.volume = calcVolume(newItems, state.boxNumber, state.kleiderbox, options);
    },
  },
});

export default orderSlice.reducer;

export const { setOrderProps, setItem, addImage, removeImage, setBox, setKleiderBox } =
  orderSlice.actions;
