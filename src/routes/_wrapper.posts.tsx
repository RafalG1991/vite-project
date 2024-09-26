import { createFileRoute, Outlet } from '@tanstack/react-router'

const Posts = () => {
  return (
    <div>
      <h2>Posts:</h2>
      <Outlet />
    </div>
  )
}

export const Route = createFileRoute('/_wrapper/posts')({
  component: Posts,
})
