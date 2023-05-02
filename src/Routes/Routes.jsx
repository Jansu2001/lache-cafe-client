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

  const router = createBrowserRouter([
    {
      path: "/",
      element:<Main></Main>,
      
    },
    {
      path:'/',
      element:<Another></Another>,
      children:[
        {
          path:'/login',
          element:<Login></Login>
        },
        {
          path:'register',
          element:<Register></Register>
        }
      ]

    }

  ]);


  export default router;