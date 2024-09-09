import React from 'react';
import ReactDOM from 'react-dom/client';
import {QueryClient, QueryClientProvider} from "@tanstack/react-query";
import './index.css';

import {StyledWrapper} from "./StyledWrapper.tsx";
import {ThemeProvider} from "styled-components";
import {BrowserRouter, Route, Routes} from "react-router-dom";

const queryClient = new QueryClient();
const theme = {
  colors: {
    primary: 'blue',
    secondary: 'yellow',
  }
};

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<h1>Hello world</h1>}/>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
)
