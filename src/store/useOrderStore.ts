import {create} from "zustand";
import {persist} from "zustand/middleware";

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
}

type OrderActions = {
  setOrderData: (payload: SetOrderDataAction) => void;
  setShippingData: (payload: SetShippingDataAction) => void;
  setSummaryData: (payload: SetSummaryDataAction) => void;
  placeOrder: () => void;
}

type SetOrderDataAction = {
  title: string;
  configuration: string;
}

type SetShippingDataAction = {
  city: string;
  street: string;
  postalCode: string;
}

type SetSummaryDataAction = {
  comment: string;
}

const initialState: OrderState = {
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
}

export const useOrderStore = create<OrderState & OrderActions>()(
  persist(
    set => ({
      ...initialState,
      setOrderData: (payload: SetOrderDataAction) => set({
        order: payload,
      }),
      setShippingData: (payload: SetShippingDataAction) => set({
        shipping: payload,
      }),
      setSummaryData: (payload: SetSummaryDataAction) => set({
        summary: payload,
      }),
      placeOrder: () => set(initialState),
    }), {
      name: "order",
      version: 1,
    }
  )
)