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
  setOrderData: (payload: SetOrderDataAction) => void;
  setShippingData: (payload: SetShippingDataAction) => void;
  setSummaryData: (payload: SetSummaryDataAction) => void;
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

export const useOrderStore = create<OrderState>()(
  persist(
    set => ({
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
      setShippingData: (payload: SetShippingDataAction) => set({
        shipping: payload,
      }),
      setSummaryData: (payload: SetSummaryDataAction) => set({
        summary: payload,
      }),
    }), {
      name: "order",
      version: 1,
    }
  )
)