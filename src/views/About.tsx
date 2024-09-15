import {Link, Outlet} from "react-router-dom";

const About = () => {
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

export default About;