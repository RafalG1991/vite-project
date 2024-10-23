import {useSelector} from "react-redux";
import {RootState} from "./store";

export const Products = () => {
  const {list,count} = useSelector((state: RootState) => state.products);

  return (
    <div>
      <strong>Number of elements: {count}</strong>
      <ul>
        {list.map((element, index) => <li key={index}>{element}</li>)}
      </ul>
    </div>
  )
}