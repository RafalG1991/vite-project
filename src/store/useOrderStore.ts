import {create} from "zustand";

type OrderState = {
  order: {
    title: string;
    configuration: string;
  },
  shipping: {
    city: string;
    street: string;
    postalCode: string;
  },
  summary: {
    comment: string;
  },
  setOrderData: (payload: SetOrderDataAction) => void;
}

type SetOrderDataAction = {
  title: string;
  configuration: string;
}

export const useOrderStore = create<OrderState>()(set => ({
  order: {
    title: '',
    configuration: '',
  },
  shipping: {
    city: '',
    street: '',
    postalCode: '',
  },
  summary: {
    comment: '',
  },
  setOrderData: (payload: SetOrderDataAction) => set({
    order: payload,
  }),
}))