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
}

type SetOrderDataAction = {
  title: string;
  configuration: string;
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
    }), {
      name: "order",
      version: 1,
    }
  )
)