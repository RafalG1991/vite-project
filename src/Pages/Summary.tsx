import {PageHeader} from "../components/PageHeader";
import {useInput} from "../hooks/useInput.ts";
import {FormEvent} from "react";
import {useOrderStore} from "../store/useOrderStore.ts";
import {useShallow} from "zustand/react/shallow";
import {useNavigate} from "@tanstack/react-router";

export const Summary = () => {
  const { summary, setSummaryData } = useOrderStore(useShallow(state => ({ summary: state.summary, setSummaryData: state.setSummaryData})));

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
      <form onSubmit={handleSubmit}>
        <div>
          <textarea placeholder="Comment" {...commentInput} />
        </div>
        <button type="submit" >Place your order</button>
      </form>
    </>
  )
}