import { CartHeader } from "./CartHeader";
import {CartSummary} from "./CartSummary.tsx";
import {CartElements} from "./CartElements.tsx";
import {CartItem} from "./types.ts";

const Cart = () => {
  const elements: CartItem[] = [
    {id: 1, name: 'Jabłko', quantity: 4, price: 1},
    {id: 2, name: 'Gruszka', quantity: 2, price: 2},
    {id: 3, name: 'Kiwi', quantity: 1, price: 3},
  ]

  return (
    <table>
      <CartHeader />
      <CartElements elements={elements} />
      <CartSummary elements={elements}/>
    </table>
  )
}

export { Cart };