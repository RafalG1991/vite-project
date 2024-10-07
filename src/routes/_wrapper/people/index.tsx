import { createFileRoute } from '@tanstack/react-router'
import {peopleLoader} from "./-loaders";

type PeopleSearch = {
  page: number,
}

const People = () => {
  const {} = Route.useLoaderData();

  return (

  )
}

export const Route = createFileRoute('/_wrapper/people/')({
  validateSearch: (search: Record<string, unknown>): PeopleSearch => ({
    page: Number(search?.page ?? 1),
  }),
  loaderDeps: ({ search }) => ({ page: search.page }),
  loader: ({ deps: { page}}) => peopleLoader(page),
  component: People,
})
