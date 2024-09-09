import {Link} from "react-router-dom";

export const ProductDetails = () => {
  return (
    <div>
      <h5>Product details</h5>
      <h6>Specification:</h6>
      <p>Great display</p>
      <Link relative="path" to="..">Go back to product</Link>
    </div>
  )
}