import {Outlet} from "react-router-dom";
import {AppLink} from "../AppLink.tsx";

export const MainLayout = () => {
  return (
    <main>
      <header>
        <nav>
          <ul>
            <li>
              <AppLink to="about/us">About us</AppLink>
            </li>
            <li>
              <AppLink to="about/company">About company</AppLink>
            </li>
            <li>
              <AppLink to="product">Product</AppLink>
            </li>
            <li>
              <AppLink to="product/details">Product details</AppLink>
            </li>
            <li>
              <AppLink to="/path-with-loader/:id?">Loader</AppLink>
            </li>
          </ul>
        </nav>
      </header>
      <Outlet/>
    </main>
  )
}