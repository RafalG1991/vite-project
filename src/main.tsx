import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import {Hello} from "./Hello.tsx";

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
   <Hello name='Marcin' />
  </React.StrictMode>
)
