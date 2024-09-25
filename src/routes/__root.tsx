import {Outlet, createRootRoute, Link} from '@tanstack/react-router'

const RootComponent = () => {
  return (
    <div>
      <h1>Tanstack Router App</h1>
      <nav>
        <ul>
          <li>
            <Link to="/posts">Posts</Link>
          </li>
        </ul>
      </nav>
      <Outlet />
    </div>
  )
}

export const Route = createRootRoute({
  component: RootComponent,
})