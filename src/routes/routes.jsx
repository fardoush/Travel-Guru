import { createBrowserRouter } from "react-router";
import HomeLayout from "../layouts/HomeLayout";
import Home from "../pages/Home";
import BookingPage from "../pages/BookingPage";
import Blog from "../pages/Blog";
import Contact from "../pages/Contact";
import Register from "../pages/Register";
import Login from "../pages/Login";
import AuthLayout from "../layouts/AuthLayout";
import PrivateRoute from "../provider/PrivateRoute";
import Destination from "../pages/Destination";

const router = createBrowserRouter([
  {
    path: "/",
    Component: HomeLayout,
    children: [
      {
        index: true,
        Component: Home,
        loader: () => fetch('/listing.json'),
      },
      {
        path: "/booking",
        element: (
          <PrivateRoute>
            <BookingPage />
          </PrivateRoute>
        ),
        // Component: BookingPage,
      },

      {
        path: "/blog",
        Component: Blog,
      },
      {
        path: "/contact",
        Component: Contact,
      },
      {
    path: "/destination",
    Component: Destination,
    loader: () => fetch('/listing.json'),
  },
    ],
  },
  {
    path: "/auth",
    Component: AuthLayout,
    children: [
      {
        path: "/auth/register",
        Component: Register,
      },
      {
        path: "/auth/login",
        Component: Login,
      },
    ],
  },
  
]);

export default router;
