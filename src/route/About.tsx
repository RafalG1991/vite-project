import {Link, Outlet} from "react-router-dom";

export const Component = () => {
  return (
    <div>
      <h1>About page</h1>
      <ul>
        <li>
          <Link to="us">About us</Link>
        </li>
        <li>
          <Link to="company">About company</Link>
        </li>
      </ul>
      <Outlet/>
    </div>
  )
}