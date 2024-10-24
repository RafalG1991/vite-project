import {setName, setPrice} from "./slices/productSlice.ts";
import {addProduct} from "./slices/productsSlice.ts";
import {getIpAddress} from "./slices/ipSlice.ts";
import {useAppDispatch} from "./hooks/useAppDispatch.ts";

export const Actions = () => {
  const dispatch = useAppDispatch();

  const setProductName = () => {
    dispatch(setName('Product #1234'));
  }

  const setProductPrice = () => {
    dispatch(setPrice(123));
  }

  const addNewProduct = () => {
    dispatch(addProduct('Product #777'));
  }

  const loadIpAddress = () => {
    dispatch(getIpAddress());
  }

  return <div>
    <button onClick={setProductName}>Set product name</button>
    <button onClick={setProductPrice}>Set product price</button>
    <button onClick={addNewProduct}>Add new product</button>
    <button onClick={loadIpAddress}>Get IP address now!</button>
  </div>
}