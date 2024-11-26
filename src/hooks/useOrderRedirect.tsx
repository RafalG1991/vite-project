import {useOrderStore} from "../store/useOrderStore.ts";
import {useNavigate} from "@tanstack/react-router";
import {useEffect} from "react";

export const useOrderRedirect = () => {
  const { order, shipping} = useOrderStore(state => ({ order: state.order, shipping: state.shipping}));
  const navigate = useNavigate();

  const isOrderStepFullyFilled = () => {
    return !!order.configuration && !!order.title;
  }

  const isOrderStepPartiallyFilled = () => {
    return !!order.configuration || !!order.title;
  }

  const isOrderShippingFullyFilled = () => {
    return !!shipping.city && !!shipping.street && !!shipping.postalCode;
  }

  const isOrderShippingPartiallyFilled = () => {
    return !!shipping.city || !!shipping.street || !!shipping.postalCode;
  }

  useEffect(() => {
    if(isOrderShippingFullyFilled()) {
      navigate({to: '/summary'});
      return;
    }
    if(isOrderShippingPartiallyFilled()) {
      navigate({to: '/shipping'});
      return;
    }
    if(isOrderStepPartiallyFilled()) {
      navigate({to: '/order'});
      return;
    }
    if(isOrderStepFullyFilled()) {
      navigate({to: '/shipping'});
      return;
    }
  }, []);
}