import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./component/App"
import Kurumsal from './component/Kurumsal';
import BozyaziYolYardim from './component/BozyaziYolYardim';
import Hizmetlerimiz from './component/Hizmetlerimiz';
import FotoGaleri from './component/FotoGaleri';
import Blog from './component/Blog';
import Iletisim from './component/Iletisim';
import NotFound from './component/NotFound';
import HomePage from './component/HomePage';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <NotFound />,
    children: [
      {
        path: "",
        element: <HomePage />
      },
      {
        path: "kurumsal",
        element: <Kurumsal />
      },
      {
        path: "bozyazi-yol-yardim",
        element: <BozyaziYolYardim />
      },
      {
        path: "hizmetlerimiz",
        element: <Hizmetlerimiz />
      },
      {
        path: "foto-galeri",
        element: <FotoGaleri />
      },
      {
        path: "blog",
        element: <Blog />
      },
      {
        path: "iletişim",
        element: <Iletisim />
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
);
