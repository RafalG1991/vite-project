import {createFileRoute, Outlet} from '@tanstack/react-router'

const Wrapper = () => {
  return (
    <main>
      <Outlet />
    </main>
  )
}

export const Route = createFileRoute('/_wrapper')({
  component: Wrapper,
})
