import { createFileRoute } from '@tanstack/react-router'

const Posts = () => {
  return (
    <div>
      <h2>Posts:</h2>
      <p>Post1</p>
      <p>Post2</p>
    </div>
  )
}

export const Route = createFileRoute('/posts')({
  component: Posts,
})
