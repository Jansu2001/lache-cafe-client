// import {
//     createBrowserRouter,
//     RouterProvider,
//   } from "react-router-dom";

import { createBrowserRouter } from "react-router-dom";
import Home from "../components/Home/Home";
import Main from "./Main";
import Login from "../components/Login/Login";
import Register from "../components/Register/Register";
import Header from "../components/Header/Header";
import Another from "../Another/Another";
import ChefsDetails from "../Another/ChefsDetails/ChefsDetails";
import PrivateRoutes from "../AuthProvider/PrivateRoutes/PrivateRoutes";
import ErrorPage from "../components/ErrorPage/ErrorPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    errorElement:<ErrorPage></ErrorPage>,

  },
  {
    path: '/',
    element: <Another></Another>,
    errorElement:<ErrorPage></ErrorPage>,
    children: [
      {
        path: '/login',
        element: <Login></Login>
      },
      {
        path: 'register',
        element: <Register></Register>
      },
      {
        path: '/chefs-details/:id',
        element:
          // <PrivateRoutes>
            <ChefsDetails></ChefsDetails>,
          // </PrivateRoutes>,
        loader: ({ params }) => fetch(`https://chef-recipe-server-jansu2001.vercel.app/chefs/${params.id}`)
      }
    ]

  }

]);


export default router;