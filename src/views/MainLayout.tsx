import {NavLink, Outlet} from "react-router-dom";

export const MainLayout = () => {
  return (
    <main>
      <header>
        <nav>
          <ul>
            <li>
              <NavLink to="about/us">About us</NavLink>
            </li>
            <li>
              <NavLink to="about/company">About company</NavLink>
            </li>
            <li>
              <NavLink to="product">Product</NavLink>
            </li>
            <li>
              <NavLink to="product/details">Product details</NavLink>
            </li>
          </ul>
        </nav>
      </header>
      <Outlet />
    </main>
  )
}