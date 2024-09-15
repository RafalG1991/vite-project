import {Outlet, useNavigation} from "react-router-dom";
import {AppLink} from "../AppLink.tsx";
import {Suspense} from "react";

export const MainLayout = () => {
  // const {state} = useNavigation();

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
      <Suspense fallback="Loading...">
        <Outlet/>
      </Suspense>
      {/*{ state === 'loading' ? <p>Loading...</p> : <Outlet/>}*/}
    </main>
  )
}