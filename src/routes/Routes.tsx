import { Navigate, createBrowserRouter } from "react-router-dom";
import PreAuthLayout from "../views/layout/PreAuthLayout";
import Login from "../views/pages/login/Login";
import Grid from "@/views/pages/grid/Grid";
const router = createBrowserRouter([
  {
    path: "/",
    element: <PreAuthLayout />,
    children: [


      {
        path:"/grid",
        element:<Grid/>
      }
    ],
  },
]);

export default router;
