import {PageHeader} from "../components/PageHeader";
import {Link} from "@tanstack/react-router";
import {useOrderRedirect} from "../hooks/useOrderRedirect.tsx";

export const Home = () => {
  useOrderRedirect();

  return (
    <>
      <PageHeader>Begin your process</PageHeader>
      <p>You can start your order by clicking this button</p>
      <Link to='/order'>Start order</Link>
    </>
  )
}