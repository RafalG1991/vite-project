import {PageHeader} from "../components/PageHeader";
import {useInput} from "../hooks/useInput.ts";
import {FormEvent} from "react";
import {useOrderStore} from "../store/useOrderStore.ts";
import {useShallow} from "zustand/react/shallow";
import {useNavigate} from "@tanstack/react-router";

export const Order = () => {
  const { order, setOrderData } = useOrderStore(useShallow(state => ({ order: state.order, setOrderData: state.setOrderData})));

  const navigate = useNavigate();

  const titleInput = useInput(order.title);
  const descriptionInput = useInput(order.configuration);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setOrderData({
      title: titleInput.value,
      configuration: descriptionInput.value,
    });

    navigate({ to: '/shipping' });
  }

  return (
    <>
      <PageHeader>Order</PageHeader>
      <p>Please fill your order configuration</p>
      <form onSubmit={handleSubmit}>
        <div>
          <input type="text" name="title" placeholder="Title" {...titleInput} />
        </div>
        <div>
          <textarea placeholder="Configuration" {...descriptionInput} />
        </div>
        <button type="submit" disabled={!titleInput.value || !descriptionInput.value}>Proceed to next step...</button>
      </form>
    </>
  )
}