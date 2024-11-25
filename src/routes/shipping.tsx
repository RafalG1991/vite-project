import { createFileRoute } from '@tanstack/react-router'
import {Shipping} from "../Pages/Shipping.tsx";

export const Route = createFileRoute('/shipping')({
  component: Shipping,
})
