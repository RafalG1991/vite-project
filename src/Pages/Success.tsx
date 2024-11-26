import {PageHeader} from "../components/PageHeader";
import {Link} from "@tanstack/react-router";

export const Success = () => {
  return (
    <>
      <PageHeader>Transaction successful!</PageHeader>
      <p>Your order was placed!</p>
      <Link to="/">Go back to homepage</Link>
    </>
  )
}

//12:22