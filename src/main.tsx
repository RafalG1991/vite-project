import React, {lazy, Suspense} from 'react';
import ReactDOM from 'react-dom/client';
import {QueryClient, QueryClientProvider} from "@tanstack/react-query";

import { createRouter, RouterProvider} from "@tanstack/react-router";
import { routeTree } from "./routeTree.gen";

import {StyledWrapper} from "./StyledWrapper.tsx";
import {ThemeProvider} from "styled-components";
// import {
//   BrowserRouter,
//   createBrowserRouter,
//   createRoutesFromElements,
//   Navigate,
//   Route,
//   RouterProvider,
//   Routes
// } from "react-router-dom";
import {Home} from "./views/Home.tsx";
import {AboutUs} from "./views/AboutUs.tsx";
// import About from "./views/About.tsx";
import {AboutCompany} from "./views/AboutCompany.tsx";
import {MainLayout} from "./views/MainLayout.tsx";
import {Product} from "./views/Product.tsx";
import {ProductDetails} from "./views/ProductDetails.tsx";
import {DynamicProductView} from "./views/DynamicProductView.tsx";
import {Payment} from "./views/Payment.tsx";
import {DataView} from "./views/DataView.tsx";
import {ErrorView} from "./views/ErrorView.tsx";
import {aboutLoader} from "./route/aboutLoader.ts";
import {Create} from "./views/Create.tsx";
import {AwaitedData} from "./AwaitedData.tsx";
import {fakeLoader} from "./loaders/fakeLoader.ts";
import {TasksView} from "./views/TasksView.tsx";
import {tasksLoader} from "./loaders/tasksLoader.ts";
import {SingleTaskView} from "./views/SingleTaskView.tsx";
import {taskLoader} from "./loaders/taskLoader.ts";
import {AddTaskView} from "./views/AddTaskView.tsx";
import {AddTaskAction} from "./actions/addTask.ts";
import {deleteTaskAction} from "./actions/deleteTask.ts";

const queryClient = new QueryClient();
const theme = {
  colors: {
    primary: 'blue',
    secondary: 'yellow',
  }
};

// const router = createBrowserRouter([
//   {
//     element: <MainLayout />,
//     children: [
//       {
//         path: "/",
//         element: <Home />,
//       },
//       {
//         path: "/about",
//         element: <About />,
//         children: [
//           {
//             path: "us",
//             element: <AboutUs />,
//           },
//           {
//             path: "company",
//             element: <AboutCompany />,
//           },
//         ],
//       },
//       {
//         path: "/product",
//         element: <Product />,
//       },
//       {
//         path: "/product/details",
//         element: <ProductDetails />,
//       },
//       {
//         path: "/path-with-loader/:id?",
//         element: <DataView />,
//         loader: async ({request, params}) => {
//           return new Promise<string>((resolve, reject) => {
//             setTimeout(() => {
//               resolve(`Lorem Ipsum - params: ${params.id}`);
//               // reject('Error with resolving request');
//             }, 5000);
//           });
//         },
//         errorElement: <ErrorView />,
//       },
//       {
//         path: "*",
//         element: <Navigate to="/" />,
//       },
//     ],
//   },
//   ]);

// const About = lazy(() => import ("./views/About"));
//
// const router2 = createBrowserRouter(
//   createRoutesFromElements(
//     <Route element={<MainLayout />}>
//       <Route path="/" element={<Home />}/>
//       <Route
//         path="/create"
//         element={<Create />}
//         action={async ({request}) => {
//           const data = await request.formData();
//           console.log('Lorem ipsum', data.get('title'));
//           return data.get('title');
//         }}
//       />
//       <Route
//         path="/about"
//         loader={aboutLoader}
//         lazy={() => import('./route/About')}
//       />
//       <Route path="path-with-loader/:id?" element={<Payment />} loader={() => {
//         return 'Lorem ipsum';
//       }}/>
//       <Route
//         path="awaited"
//         element={<AwaitedData />}
//         loader={fakeLoader}
//       />
//     </Route>
//   )
// );
//
// const router3 = createBrowserRouter([
//   {
//     element: <MainLayout />,
//     children: [
//       {
//         path: "/",
//         element: <TasksView />,
//         loader: tasksLoader,
//       },{
//         path: "create",
//         element: <AddTaskView />,
//         action: AddTaskAction,
//       }, {
//         path: ":id",
//         element: <SingleTaskView />,
//         loader: taskLoader,
//         action: deleteTaskAction,
//       }
//       ],
//   }
//   ]);

const router = createRouter({
  routeTree,
  defaultStaleTime: 10000,
  context: {
    value: undefined!,
  }
});

declare module '@tanstack/react-router' {
  interface Register {
    router: typeof router,
  }
}

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} context={{ value: 10}}/>
    {/*<RouterProvider router={router3} />*/}
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
    {/*      <Route path="path-with-loader/:id?" element={<Payment />} loader={() => {*/}
    {/*        return 'Lorem ipsum';*/}
    {/*      }}/>*/}
    {/*    </Route>*/}
    {/*    <Route path="*" element={<Navigate to="/" />} />*/}
    {/*  </Routes>*/}
    {/*</BrowserRouter>*/}
    {/*<RouterProvider router={router} />*/}
  </React.StrictMode>
)
