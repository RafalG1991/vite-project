import {createRootRouteWithContext, Outlet} from '@tanstack/react-router'
import {Container} from "../components/Container";

const RootComponent = () => {

  return (
    <Container>
      <h1>Tanstack Router App</h1>
      <Outlet />
    </Container>
  )
}

export const Route = createRootRouteWithContext<{ value: number }>()({
  component: RootComponent,
})