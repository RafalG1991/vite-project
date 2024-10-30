import { createFileRoute } from '@tanstack/react-router'
import {Order} from "../Pages/Order.tsx";

export const Route = createFileRoute('/order')({
  component: Order,
})
