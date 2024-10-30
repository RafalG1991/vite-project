import {createRootRouteWithContext, Outlet} from '@tanstack/react-router'
import {Container} from "../components/Container";
import {MainHeader} from "../components/MainHeader";

const RootComponent = () => {

  return (
    <Container>
      <MainHeader>Order App</MainHeader>
      <Outlet />
    </Container>
  )
}

export const Route = createRootRouteWithContext<{ value: number }>()({
  component: RootComponent,
})