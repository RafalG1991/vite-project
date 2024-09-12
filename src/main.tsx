import React from 'react';
import ReactDOM from 'react-dom/client';
import {QueryClient, QueryClientProvider} from "@tanstack/react-query";

import {StyledWrapper} from "./StyledWrapper.tsx";
import {ThemeProvider} from "styled-components";
import {BrowserRouter, createBrowserRouter, Navigate, Route, RouterProvider, Routes} from "react-router-dom";
import {Home} from "./views/Home.tsx";
import {AboutUs} from "./views/AboutUs.tsx";
import {About} from "./views/About.tsx";
import {AboutCompany} from "./views/AboutCompany.tsx";
import {MainLayout} from "./views/MainLayout.tsx";
import {Product} from "./views/Product.tsx";
import {ProductDetails} from "./views/ProductDetails.tsx";
import {DynamicProductView} from "./views/DynamicProductView.tsx";
import {Payment} from "./views/Payment.tsx";
import {DataView} from "./views/DataView.tsx";

const queryClient = new QueryClient();
const theme = {
  colors: {
    primary: 'blue',
    secondary: 'yellow',
  }
};

const router = createBrowserRouter([
  {
    element: <MainLayout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/about",
        element: <About />,
        children: [
          {
            path: "us",
            element: <AboutUs />,
          },
          {
            path: "company",
            element: <AboutCompany />,
          },
        ],
      },
      {
        path: "/product",
        element: <Product />,
      },
      {
        path: "/product/details",
        element: <ProductDetails />,
      },
      {
        path: "/path-with-loader/:id?",
        element: <DataView />,
        loader: async () => {
          return new Promise<string>(resolve => resolve('Lorem Ipsum'));
        },
      },
      {
        path: "*",
        element: <Navigate to="/" />,
      },
    ],
  },
  ]);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    {/*<BrowserRouter>*/}
    {/*  <Routes>*/}
    {/*    <Route element={<MainLayout />}>*/}
    {/*      <Route path="/" element={<Home />}/>*/}
    {/*      <Route path="/about" element={<About />}>*/}
    {/*        <Route path="us" element={<AboutUs />}/>*/}
    {/*        <Route path="company" element={<AboutCompany />}/>*/}
    {/*        <Route path="*" element={<Navigate to="." />} />*/}
    {/*      </Route>*/}
    {/*      <Route path="product" element={<Product />}/>*/}
    {/*      <Route path="product/details" element={<ProductDetails />}/>*/}
    {/*      <Route path="product/:productId/:additionalParam?" element={<DynamicProductView />}/>*/}
    {/*      <Route path="payment" element={<Payment />}/>*/}
    {/*    </Route>*/}
    {/*    <Route path="*" element={<Navigate to="/" />} />*/}
    {/*  </Routes>*/}
    {/*</BrowserRouter>*/}
    <RouterProvider router={router} />
  </React.StrictMode>
)
