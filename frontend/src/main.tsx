import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App.tsx";
import CustomeRoot from "./components/RootComponent.tsx";
import "./index.css";

const router = createBrowserRouter([
  {
    path: "/",
    element: <CustomeRoot />,
    children: [
      {
        path: "/",
        element: <App />,
      },
      {
        path: "/custom",
        element: <div>Custom</div>,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
