import {useSearchParams} from "react-router-dom";

export const Payment = () => {
  const [params] = useSearchParams();
  const [id, status] = [...params.entries()];
  return (
    <div>
      {/*<p>Payment ID: {params.get('paymentId')}</p>*/}
      {/*<p>Payment status: {params.get('paymentStatus')}</p>*/}
      <p>Payment ID: {id[1]}</p>
      <p>Payment status: {status[1]}</p>
    </div>
  )
}