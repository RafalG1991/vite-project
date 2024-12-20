import {PageHeader} from "../components/PageHeader";
import {Link} from "@tanstack/react-router";
import {useEffect} from "react";
import {useOrderStore} from "../store/useOrderStore.ts";
import {useOrderAccess} from "../hooks/useOrderAccess.tsx";

export const Success = () => {
  useOrderAccess('success');
  const placeOrder = useOrderStore(state => state.placeOrder);

  useEffect(() => {
    placeOrder();
  }, []);
  return (
    <>
      <PageHeader>Transaction successful!</PageHeader>
      <p>Your order was placed!</p>
      <Link to="/">Go back to homepage</Link>
    </>
  )
}

//12:22