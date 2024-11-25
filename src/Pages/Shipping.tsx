import {PageHeader} from "../components/PageHeader";
import {useInput} from "../hooks/useInput.ts";
import {FormEvent} from "react";
import {useOrderStore} from "../store/useOrderStore.ts";
import {useShallow} from "zustand/react/shallow";

export const Shipping = () => {
  const { shipping, setShippingData } = useOrderStore(useShallow(state => ({ shipping: state.shipping, setShippingData: state.setShippingData})));
  const cityInput = useInput(shipping.city);
  const streetInput = useInput(shipping.street);
  const postalCodeInput = useInput(shipping.postalCode);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setShippingData({
      city: cityInput.value,
      street: streetInput.value,
      postalCode: postalCodeInput.value,
    });
  }

  return (
    <>
      <PageHeader>Shipping</PageHeader>
      <p>Please fill your shipping address</p>
      <form onSubmit={handleSubmit}>
        <div>
          <input type="text" name="city" placeholder="City" {...cityInput} />
        </div>
        <div>
          <input type="text" name="street" placeholder="Street" {...streetInput} />
        </div>
        <div>
          <input type="text" name="postalCode" placeholder="Postal code" {...postalCodeInput} />
        </div>
        <button type="submit" disabled={!cityInput.value || !streetInput.value || !postalCodeInput}>Proceed to next step...</button>
      </form>
    </>
  )
}