import {Form} from "react-router-dom";

export const Home = () => {
  return (
    <div>
      <h1>Home Page</h1>
      <h2>Welcome on home page!</h2>
      <Form method="post" action="create">
        <input type="text" name="title"/>
        <button type="submit">Submit</button>
      </Form>
    </div>
  )
}