import {CartSingleElement} from "./CartSingleElement.tsx";
import {CartItem} from "./types.ts";

type Props = {
  elements: CartItem[];
}

const CartElements = ({elements}: Props) => {
  return (
    <tbody>
    {elements.map(el => <CartSingleElement key={el.id} element={el}/>)}
    </tbody>
  )
}

export {CartElements};