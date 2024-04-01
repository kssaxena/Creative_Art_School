import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import Header from "./utils/Header";
import Footer from "./utils/Footer";
import Gallery from "./components/Gallery";
import Home from "./components/Home";
import Activities from "./components/Activities";
import RegistrationPage from "./components/RegistrationPage";
import ContactPage from "./components/Contact";

const AppLayout = () => {
  return (
    <div className="container w-[100%] overflow-hidden ">
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
};

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    errorElement: "",
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/gallery",
        element: <Gallery />,
      },
      {
        path: "/activities",
        element: <Activities />,
      },
      {
        path: "/registration_&_admissions",
        element: <RegistrationPage />,
      },
      {
        path: "/contact",
        element: <ContactPage/>,
      },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />);