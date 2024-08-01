import { CartHeader } from "./CartHeader";
import {CartSummary} from "./CartSummary.tsx";
import {CartElements} from "./CartElements.tsx";

const Cart = () => {
  return (
    <table>
      <CartHeader />
      <CartElements />
      <CartSummary />
    </table>
  )
}

export { Cart };