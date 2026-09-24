import { createBrowserRouter } from "react-router-dom";
import Layout from "../layout/Layout";
import Home from "../pages/Home/Home";
import About from "../pages/About/About";
import Blogs from "../pages/Blogs/Blogs";
import BlogDetails from "../pages/Blogs/BlogDetails";
import Privacy from "../pages/Privacy/Privacy";
import Contact from "../pages/Contact/Contact";
import Terms from "../pages/Terms/Terms";
import Error404 from "../pages/Error404/Error404";

export const routes = createBrowserRouter([
    {
      path: "",
      element: <Layout />,
      children: [
        {
          index: true,
          element: <Home />
        },
        {
          path: "/blogs",
          element: <Blogs />
        },
        {
          path: "/blogs/:slug",
          element: <BlogDetails />
        },
        {
          path: "/about",
          element: <About />
        },
        {
          path: "/privacy",
          element: <Privacy />
        },
        {
          path: "/terms",
          element: <Terms />
        },
        {
          path: "*",
          element: <Error404 />
        }
      ]
    }
  ])