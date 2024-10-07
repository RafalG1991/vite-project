import { createFileRoute } from '@tanstack/react-router'
import {peopleLoader} from "./-loaders";

type PeopleSearch = {
  page: number,
}

const People = () => {
  const { data } = Route.useLoaderData();

  return (
    <div>
      <ul>
        {data.map(person => <li key={person.id}>{person.name}</li>)}
      </ul>
    </div>

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
