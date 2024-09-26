import { createFileRoute, Outlet } from '@tanstack/react-router'

const Posts = () => {
  return (
    <div>
      <h2>Posts:</h2>
      <Outlet />
    </div>
  )
}

const PostNotFound = () => {
  return (
    <div>
      <h1>Post not found</h1>
      <p>Post you are looking for is not here</p>
    </div>
  )
}

export const Route = createFileRoute('/_wrapper/posts')({
  component: Posts,
  notFoundComponent: PostNotFound,
})
