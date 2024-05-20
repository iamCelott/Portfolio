import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Index from "./pages/index";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Index />,
  },
  {
    path: "/project",
    element: <Index />,
  },
  {
    path: "/mastery",
    element: <Index />,
  },
]);

function App() {
  return (
    <>
      <React.StrictMode>
        <RouterProvider router={router} />
      </React.StrictMode>
    </>
  );
}

export default App;
