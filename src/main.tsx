import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

import {MemoParent} from "./MemoParent.tsx";

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <MemoParent />
  </React.StrictMode>
)
