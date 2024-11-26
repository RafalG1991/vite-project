import { createFileRoute } from '@tanstack/react-router'
import {Success} from "../Pages/Success.tsx";

export const Route = createFileRoute('/success')({
  component: Success,
})
