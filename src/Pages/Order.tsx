import {PageHeader} from "../components/PageHeader";

export const Order = () => {
  return (
    <>
      <PageHeader>Order</PageHeader>
      <p>Please fill your order configuration</p>
      <form>
        <div>
          <input type="text" name="title" placeholder="Title"/>
        </div>
        <div>
          <textarea placeholder="Configuration"/>
        </div>
      </form>
    </>
  )
}