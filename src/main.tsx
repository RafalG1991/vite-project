import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

import {Container} from "./Container.tsx";

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Container title='Dolor sit amet'>Lorem Ipsum</Container>
  </React.StrictMode>
)
