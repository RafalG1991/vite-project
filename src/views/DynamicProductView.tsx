import {useParams} from "react-router-dom";

export const DynamicProductView = () => {
  const { productId} = useParams<{productId: string}>();
  return (
    <div>
      <h1>Product</h1>
      <p>Product - ID: {productId}</p>
    </div>
  )
}