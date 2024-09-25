import { Outlet, createRootRoute } from '@tanstack/react-router'

const RootComponent = () => {
  return (
    <div>
      <h1>Tanstack Router App</h1>
      <Outlet />
    </div>
  )
}

export const Route = createRootRoute({
  component: RootComponent,
})