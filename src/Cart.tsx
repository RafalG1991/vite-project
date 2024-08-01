import { CartHeader } from "./CartHeader";
import {CartSummary} from "./CartSummary.tsx";

const Cart = () => {
  return (
    <table>
      <CartHeader />

      <CartSummary />
    </table>
  )
}

export { Cart };