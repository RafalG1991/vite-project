import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

import {ParentForCallback} from "./ParentForCallback.tsx";

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ParentForCallback />
  </React.StrictMode>
)
