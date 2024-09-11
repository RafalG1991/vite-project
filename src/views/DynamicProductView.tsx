import {useParams} from "react-router-dom";

export const DynamicProductView = () => {
  const { productId, additionalParam} = useParams<{productId: string, additionalParam: string}>();
  return (
    <div>
      <h1>Product</h1>
      <p>Product - ID: {productId} - {additionalParam}</p>
    </div>
  )
}