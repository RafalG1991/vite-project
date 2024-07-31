import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import {Hello} from "./Hello.tsx";
import {ManyValues} from "./ManyValues.tsx";

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Hello name='Marcin' />
    <ManyValues first={1} second={2} third={3} fourth={4} fifth={5} sixth={6}/>
  </React.StrictMode>
)
