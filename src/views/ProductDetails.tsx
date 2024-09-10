import {Link, useNavigate} from "react-router-dom";
import {useEffect} from "react";

export const ProductDetails = () => {
  const navigate = useNavigate();

  useEffect(() => {
    navigate('..', {
      relative: 'path',
    });
  }, []);

  return (
    <div>
      <h5>Product details</h5>
      <h6>Specification:</h6>
      <p>Great display</p>
      <Link relative="path" to="..">Go back to product</Link>
    </div>
  )
}