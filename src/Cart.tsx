import { CartHeader } from "./CartHeader";
import {CartSummary} from "./CartSummary.tsx";

const Cart = () => {
  return (
    <table>
      <CartHeader />
      <tbody></tbody>
      <CartSummary />
    </table>
  )
}

export { Cart };