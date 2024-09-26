import {Outlet, createRootRoute, Link, useNavigate} from '@tanstack/react-router'
// import { TanStackRouterDevtools } from '@tanstack/router-devtools'
import { Route as postsRoute} from './_wrapper.posts.tsx'
import React, {Suspense} from "react";
// import {useEffect} from "react";

const TanStackRouterDevtools = import.meta.env.DEV ?
  React.lazy(() => import('@tanstack/router-devtools').then((res) => ({
    default: res.TanStackRouterDevtools
  }))) : () => null;

const RootComponent = () => {
  // const navigate = useNavigate();

  // useEffect(() => {
  //   navigate({ to: '/posts'});
  // }, []);

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
      <Suspense>
        <TanStackRouterDevtools />
      </Suspense>
    </div>
  )
}

export const Route = createRootRoute({
  component: RootComponent,
})