import React, { createRef } from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Artists from "./routes/Artists.jsx";
import Playlist from "./routes/Playlist.jsx";
import App from "./App.jsx";
import Error from "./routes/Error.jsx";
import Register from "./routes/register.jsx";
import Login from "./routes/login.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <Error />,
    children: [
      {
        path: "Artists",
        element: <Artists />,
      },
      {
        path: "playlist",
        element: <Playlist />,
      },
      {
        path: "Register",
        element: <Register />,
      },
      {
        path: "Login",
        element: <Login />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
