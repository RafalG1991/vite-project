import {useLocation, useParams} from "react-router-dom";

export const DynamicProductView = () => {
  const { productId, additionalParam} = useParams<{productId: string, additionalParam: string}>();
  const { pathname } = useLocation();
  return (
    <div>
      <h1>Product</h1>
      <p>Product - ID: {productId} - {additionalParam}</p>
      <p>Pathname: {pathname}</p>
    </div>
  )
}