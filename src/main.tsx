import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import {Hello} from "./Hello.tsx";
import {ManyValues} from "./ManyValues.tsx";
import {Foo} from "./Foo.tsx";

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Hello name='Marcin' />
    <ManyValues first={1} second={2} third={3} fourth={4} fifth={5} sixth={6} seventh={8}/>
    <Foo elements={[{id: 1, value: 10}, {id: 2, value: 5}, {id: 3, value: 11}]} />
  </React.StrictMode>
)
