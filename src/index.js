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
import Grail from '../src/components/grail';
import Schubas from "./components/schubas";
import CreateAccount from "./components/create-account";
import { AccountProvider } from "./components/account-context";

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
      {
        path: 'grail',
        element: <Grail />
      },
      {
        path: 'schubas',
        element: <Schubas />
      },
      {
        path: 'create-account',
        element: <CreateAccount />
      }

    ]
  },
]);



ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AccountProvider>
      <RouterProvider router={router} />
    </AccountProvider>
  </React.StrictMode>
);


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
