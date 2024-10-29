import {create} from "zustand";

type FooStore = {
  value: number;
  setValue: (newValue: number) => void;
  ip: string,
}

export const useFooStore = create<FooStore>(set => ({
  value: 0,
  ip: '',
  setValue: (newValue: number) => {
    set({
      value: newValue,
    })
  },
}));