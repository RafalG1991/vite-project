import {createFileRoute} from '@tanstack/react-router'
import {Foo} from "../Foo.tsx";

export const Route = createFileRoute('/')({
  component: Foo,
})
