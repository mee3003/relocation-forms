import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Item, Order, Service } from "../types";

const initialState = {
  customer: {
    costsAssumption: false,
  },
  services: new Array<Service>(),
  items: new Array<Item>(),
  isDateFix: false,
  expensive: false,
  images: new Array<string>(),
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

const orderSlice = createSlice({
  name: "order",
  initialState,
  reducers: {
    setOrderProps(state, action: PayloadAction<{ prop: keyof Order; value: any }>) {
      const { prop, value } = action.payload;
      //@ts-ignore
      state[prop] = value;
      return;
    },

    addImage(state, action: PayloadAction<{ imageUrl: string }>) {
      const imagesSet = new Set<string>(state.images);
      imagesSet.add(action.payload.imageUrl);

      state.images = Array.from(imagesSet);
    },

    removeImage(state, action: PayloadAction<{ imageUrl: string }>) {
      state.images = state.images.filter((i) => i !== action.payload.imageUrl);
    },

    setItem(state, action: PayloadAction<{ value: number; item: Item; categorie: string }>) {
      const { item, value, categorie } = action.payload;
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
    },
  },
});

export default orderSlice.reducer;

export const { setOrderProps, setItem, addImage, removeImage } = orderSlice.actions;
