import {PageHeader} from "../components/PageHeader";
import {useInput} from "../hooks/useInput.ts";
import {FormEvent} from "react";
import {useOrderStore} from "../store/useOrderStore.ts";
import {useShallow} from "zustand/react/shallow";
import {useNavigate} from "@tanstack/react-router";

export const Summary = () => {
  const { summary, order, shipping, setSummaryData } = useOrderStore(useShallow(state => ({
    order: state.order,
    shipping: state.shipping,
    summary: state.summary,
    setSummaryData: state.setSummaryData
  })));

  const navigate = useNavigate();

  const commentInput = useInput(summary.comment);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setSummaryData({
      comment: commentInput.value,
    });

    navigate({ to: '/success' });
  }

  return (
    <>
      <PageHeader>Summary</PageHeader>
      <p>Please review your order and add comment</p>
      <div>
        <h3>Order</h3>
        <p>{order.title}</p>
        <p>{order.configuration}</p>
        <h3>Shipping address</h3>
        <p>{shipping.street}, {shipping.city} - {shipping.postalCode}</p>
      </div>
      <form onSubmit={handleSubmit}>
        <div>
          <textarea placeholder="Comment" {...commentInput} />
        </div>
        <button type="submit" >Place your order</button>
      </form>
    </>
  )
}