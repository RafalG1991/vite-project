import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

import {RefParent} from "./RefParent.tsx";

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RefParent />
  </React.StrictMode>
)
