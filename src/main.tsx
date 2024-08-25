import React from 'react';
import ReactDOM from 'react-dom/client';
import {QueryClient, QueryClientProvider} from "@tanstack/react-query";
import './index.css';

import {StyledWrapper} from "./StyledWrapper.tsx";
import {ThemeProvider} from "styled-components";

const queryClient = new QueryClient();
const theme = {
  colors: {
    primary: 'blue',
    secondary: 'yellow',
  }
};

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <ThemeProvider theme={theme}>
      <StyledWrapper>
        <h1>Lorem Ipsum</h1>
      </StyledWrapper>
      </ThemeProvider>
    </QueryClientProvider>
  </React.StrictMode>
)
