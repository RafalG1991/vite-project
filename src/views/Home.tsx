import {Form, useFetcher, useSubmit} from "react-router-dom";

export const Home = () => {
  const submit = useSubmit();
  const fetcher = useFetcher();

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
      <fetcher.Form method="post" action="create">
        <input type="text" name="title"/>
        <button type="submit">Submit</button>
      </fetcher.Form>
      <button type="button" onClick={handleSubmit}>Submit by hook</button>
    </div>
  )
}