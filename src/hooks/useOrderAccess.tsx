import {useOrderStore} from "../store/useOrderStore.ts";
import {useEffect} from "react";
import {useNavigate} from "@tanstack/react-router";

export const useOrderAccess = (step: 'order' | 'shipping' | 'summary' | 'success') => {
  const { order, shipping} = useOrderStore(state => ({ order: state.order, shipping: state.shipping}));
  const navigate = useNavigate();

  const isOrderStepFilled = () => {
    return !!order.configuration && !!order.title;
  }

  useEffect(() => {
    switch(step) {
      case 'shipping':
        if(!isOrderStepFilled()) {
          navigate({to: '/order'});
          break;
        }

    }

  }, [step]);
}