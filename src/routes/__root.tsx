import {createRootRouteWithContext, Outlet} from '@tanstack/react-router'

const RootComponent = () => {

  return (
    <div>
      <h1>Tanstack Router App</h1>
      <Outlet />
    </div>
  )
}

export const Route = createRootRouteWithContext<{ value: number }>()({
  component: RootComponent,
})