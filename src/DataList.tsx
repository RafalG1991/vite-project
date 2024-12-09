import {FunctionComponent, ReactNode} from "react";

export type DataListProps<T> = {
  items: T[];
  callback: (item: T) => void;
  RowComponent?: FunctionComponent;
}

export const DataList = <T extends ReactNode>({ items, callback, RowComponent }: DataListProps<T>) => {
  return (
    <ul>
      {items.map((item, index) => (
          !!RowComponent ?
            <RowComponent />
            : <li key={index}>
            {item}
            <button onClick={() => callback(item)}>Click</button>
          </li>
      ))}
    </ul>
  )
}