import {PageHeader} from "../components/PageHeader";
import {useInput} from "../hooks/useInput.ts";

export const Order = () => {
  const titleInput = useInput('');
  const descriptionInput = useInput('');

  return (
    <>
      <PageHeader>Order</PageHeader>
      <p>Please fill your order configuration</p>
      <form>
        <div>
          <input type="text" name="title" placeholder="Title" {...titleInput} />
        </div>
        <div>
          <textarea placeholder="Configuration" {...descriptionInput} />
        </div>
      </form>
    </>
  )
}