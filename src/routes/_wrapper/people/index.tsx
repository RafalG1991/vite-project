import {createFileRoute, Link} from '@tanstack/react-router'
import {peopleLoader} from "./-loaders";

type PeopleSearch = {
  page: number,
  size: number,
}

const People = () => {
  const { data, prev, next } = Route.useLoaderData();

  return (
    <div>
      <ul>
        {data.map(person => <li key={person.id}>{person.name}</li>)}
      </ul>
      {prev ?
        <Link to='.' search={prev => ({
        page: (prev.page || 0) - 1,
      })}>Previous</Link>
        : null}
      {next ?
        <Link to='.' search={prev => ({
          page: (prev.page || 0) + 1,
        })}>Next</Link>: null}
    </div>
  )
}

export const Route = createFileRoute('/_wrapper/people/')({
  validateSearch: (search: Record<string, unknown>): PeopleSearch => ({
    page: Number(search?.page ?? 1),
    size: Number(search?.size ?? 10),
  }),
  loaderDeps: ({ search }) => ({ page: search.page, size: search.size }),
  loader: ({ deps: { page, size}}) => peopleLoader(page, size),
  component: People,
})
