import {Form, useSubmit} from "react-router-dom";

export const Home = () => {
  const submit = useSubmit();

  const handleSubmit = () => {
    submit({
      title: 'Lorem ipsum',
    }, {
      action: 'create',
      method: 'post',
    });
  };

  return (
    <div>
      <h1>Home Page</h1>
      <h2>Welcome on home page!</h2>
      <Form method="post" action="create">
        <input type="text" name="title"/>
        <button type="submit">Submit</button>
      </Form>
      <button type="button" onClick={handleSubmit}>Submit by hook</button>
    </div>
  )
}