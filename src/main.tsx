import React from 'react';
import ReactDOM from 'react-dom/client';
import {QueryClient, QueryClientProvider} from "@tanstack/react-query";
import './index.css';

import {StyledWrapper} from "./StyledWrapper.tsx";
import {ThemeProvider} from "styled-components";
import {BrowserRouter, createBrowserRouter, Route, RouterProvider, Routes} from "react-router-dom";
import {Home} from "./views/Home.tsx";
import {AboutUs} from "./views/AboutUs.tsx";
import {AboutCompany} from "./views/AboutCompany.tsx";

const queryClient = new QueryClient();
const theme = {
  colors: {
    primary: 'blue',
    secondary: 'yellow',
  }
};

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/about/us",
    element: <AboutUs />,
  },
  {
    path: "/about/company",
    element: <AboutCompany />,
  },
  ]);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    {/*<BrowserRouter>*/}
    {/*  <Routes>*/}
    {/*    <Route path="/" element={<Home />}/>*/}
    {/*    <Route path="/about" element={<AboutUs />}/>*/}
    {/*  </Routes>*/}
    {/*</BrowserRouter>*/}
    <RouterProvider router={router} />
  </React.StrictMode>
)
