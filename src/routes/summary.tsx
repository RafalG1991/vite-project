import { createFileRoute } from '@tanstack/react-router'
import {Summary} from "../Pages/Summary.tsx";

export const Route = createFileRoute('/summary')({
  component: Summary,
})
