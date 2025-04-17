import { createBrowserRouter } from "react-router-dom";
import Home from "./layouts/Home";
import Mes from "./pages/Mes";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  { path: "/mes", element: <Mes /> },
]);
export default router;
