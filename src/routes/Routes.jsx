import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layout/MainLayout";
import Homepage from "../pages/homepage/Homepage";
import Books from "../pages/books/Books";

export const router = createBrowserRouter([
  {
    path: '/',
    element: <MainLayout></MainLayout>,

    children: [
      {
        index: true,
        element : <Homepage> </Homepage>,

      },
      {
        path: '/books',
        element: <Books></Books>,
      },
     
    ],
    errorElement: <div>404 Not Found</div>,

  },
]);
