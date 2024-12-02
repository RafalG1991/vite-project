import {createFileRoute} from '@tanstack/react-router'
import {YupForm} from "../Pages/YupForm.tsx";

export const Route = createFileRoute('/')({
  component: YupForm,
})
