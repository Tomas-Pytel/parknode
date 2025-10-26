import { createBrowserRouter } from "react-router-dom";
import Layout from "./Layout";
import Home from "./Home/HomePage";
import MonitoringPage from "./Monitoring/MonitoringPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/monitoring", element: <MonitoringPage /> },
      { path: "/analyze", element: <div>Contact</div> },
      { path: "*", element: <div>404 Not Found</div> },
    ],
  },
]);

export { router };
