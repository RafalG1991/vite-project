import {createFileRoute, Link} from '@tanstack/react-router'
import {PageHeader} from "../components/PageHeader";

export const Component = () => {
  return (
    <>
      <PageHeader>Begin your process</PageHeader>
      <p>You can start your order by clicking this button</p>
      <Link to='/order'>Start order</Link>
    </>
  )
}

export const Route = createFileRoute('/')({
  component: Component,
})
