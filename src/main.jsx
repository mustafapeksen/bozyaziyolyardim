import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./component/App";
import Kurumsal from './component/Kurumsal';
import BozyaziYolYardim from './component/BozyaziYolYardim';
import Hizmetlerimiz from './component/Hizmetlerimiz';
import FotoGaleri from './component/FotoGaleri';
import Blog from './component/Blog';
import Iletisim from './component/Iletisim';
import NotFound from './component/NotFound';
import HomePage from './component/HomePage';

// Define the routes for the application using createBrowserRouter
const router = createBrowserRouter([
  {
    path: "/", // Root path
    element: <App />, // Main application component
    errorElement: <NotFound />, // Component to show when route is not found
    children: [ // Nested routes
      {
        path: "", // Default route (home page)
        element: <HomePage /> // HomePage component
      },
      {
        path: "kurumsal", // Path for 'Kurumsal' page
        element: <Kurumsal /> // Kurumsal component
      },
      {
        path: "bozyazi-yol-yardim", // Path for 'Bozyazi Yol Yardim' page
        element: <BozyaziYolYardim /> // BozyaziYolYardim component
      },
      {
        path: "hizmetlerimiz", // Path for 'Hizmetlerimiz' page
        element: <Hizmetlerimiz /> // Hizmetlerimiz component
      },
      {
        path: "foto-galeri", // Path for 'Foto Galeri' page
        element: <FotoGaleri /> // FotoGaleri component
      },
      {
        path: "blog", // Path for 'Blog' page
        element: <Blog /> // Blog component
      },
      {
        path: "iletişim", // Path for 'Iletisim' page
        element: <Iletisim /> // Iletisim component
      },
    ],
  },
]);

// Render the application to the DOM
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} /> {/* Provide the router to the application */}
  </React.StrictMode>,
);
