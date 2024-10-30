import {createFileRoute} from '@tanstack/react-router'
import {Home} from "../Pages/Home.tsx";

export const Route = createFileRoute('/')({
  component: Home,
})
