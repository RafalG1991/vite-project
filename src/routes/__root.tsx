import { createRootRouteWithContext} from '@tanstack/react-router'

const RootComponent = () => {

  return (
    <div>
      <h1>Tanstack Router App</h1>
    </div>
  )
}

export const Route = createRootRouteWithContext<{ value: number }>()({
  component: RootComponent,
})