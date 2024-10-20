import { createFileRoute } from '@tanstack/react-router'
import {Users} from "../Users.tsx";

export const Route = createFileRoute('/users')({
  component: () => <Users />,
})
