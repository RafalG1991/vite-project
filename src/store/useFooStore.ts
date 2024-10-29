import {create} from "zustand";

type FooStore = {
  value: number;
  setValue: (newValue: number) => void;
  ip: string;
  fetchMyIp: () => Promise<void>;
}

export const useFooStore = create<FooStore>(set => ({
  value: 0,
  ip: '',
  setValue: (newValue: number) => {
    set({
      value: newValue,
    })
  },
  fetchMyIp: async () => {
    const response = await fetch('https://api.ipify.org?format=json');
    const data: {ip: string} = await response.json();

    set({
      ip: data.ip,
    });
  },
}));