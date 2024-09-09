import {Link, Outlet} from "react-router-dom";

export const MainLayout = () => {
  return (
    <main>
      <header>
        <nav>
          <ul>
            <li>
              <Link to="about/us">About us</Link>
            </li>
            <li>
              <Link to="about/company">About company</Link>
            </li>
            <li>
              <Link to="product">Product</Link>
            </li>
            <li>
              <Link to="product/details">Product details</Link>
            </li>
          </ul>
        </nav>
      </header>
      <Outlet />
    </main>
  )
}