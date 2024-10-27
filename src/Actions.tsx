import {setName, setPrice} from "./slices/productSlice.ts";
import {addProduct} from "./slices/productsSlice.ts";
import {getIpAddress} from "./slices/ipSlice.ts";
import {useAppDispatch} from "./hooks/useAppDispatch.ts";
import {ipRtkSlice, useGetIpAddressQuery} from "./slices/ipRtkSlice.ts";

export const Actions = () => {
  const dispatch = useAppDispatch();

  const { refetch } = useGetIpAddressQuery();

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

  const handleFirstRefetch = () => {
    refetch();
  }

  const handleSecondRefetch = () => {
    dispatch(ipRtkSlice.endpoints.getIpAddress.initiate(undefined, {
      forceRefetch: true,
    }));
  }

  return <div>
    <button onClick={setProductName}>Set product name</button>
    <button onClick={setProductPrice}>Set product price</button>
    <button onClick={addNewProduct}>Add new product</button>
    <button onClick={loadIpAddress}>Get IP address now!</button>
    <button onClick={handleFirstRefetch}>Refetch #1</button>
    <button onClick={handleSecondRefetch}>Refetch #2</button>
  </div>
}