import {Outlet, createRootRoute, Link} from '@tanstack/react-router'
import { Route as postsRoute} from './posts'

const RootComponent = () => {
  return (
    <div>
      <h1>Tanstack Router App</h1>
      <nav>
        <ul>
          <li>
            <Link to="..">Home</Link>
          </li>
          <li>
            <Link to="/posts">Posts</Link>
          </li>
          <li>
            <Link to={postsRoute.fullPath}>Posts</Link>
          </li>
        </ul>
      </nav>
      <Outlet/>
    </div>
  )
}

export const Route = createRootRoute({
  component: RootComponent,
})