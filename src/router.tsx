// Pages
import PageBuild from "./pages/Page_Build";
import Home from "./pages/Home";

// Router-Dom
import { createBrowserRouter } from "react-router-dom";
  
const router = createBrowserRouter([
    {
        path: "/",
        element: <Home />,
    },
    {
        path: "/page_build",
        element: <PageBuild />,
    },
]);

export default router
