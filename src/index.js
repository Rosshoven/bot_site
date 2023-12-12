import * as React from "react";
import * as ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import "./index.css";
import Home from "./components/home";
import About from "./components/about";
import Navigation from "./components/navigation";
import ErrorPage from "./error-page";
import Pics from "./components/pics";
import Album from "./components/album";
import If from "./components/if";
import Guan from "./components/guan";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Navigation />,
    errorElement: <ErrorPage />,
    children: [
      {
        // the path given for index will show upon inital load
        index: 'home',
        element: <Home />
      },
      {
        path: 'home',
        element: <Home />
      },
      {
        path: 'about',
        element: <About />
      },
      {
        path: 'pics',
        element: <Pics />
      },
      {
        path: 'album',
        element: <Album />
      },
      {
        path: 'if',
        element: <If />
      },
      {
        path: 'guan',
        element: <Guan />
      },

    ]
  },
]);



ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
