import React from "react";
import "./App.css";
import { Header } from "./components/header/Header";
import { Body } from "./components/body/Body";
import { Footer } from "./components/footer/Footer";
import { Dashboard } from "./components/pages/dashboard/Dashboard";
import {
  createBrowserRouter,
  Navigate,
  RouterProvider,
} from "react-router-dom";

function App() {
  const routes = {
    root: "/",
    dashboard: "/dashboard",
  };

  const router = createBrowserRouter([
    {
      path: routes.dashboard,
      element: <Dashboard />,
    },
    {
      path: routes.root,
      element: <Navigate to={routes.dashboard} />,
      errorElement: <p>Not found</p>,
    },
  ]);

  return (
    <div className="App">
      <Header />
      <Body>
        <RouterProvider router={router} />
      </Body>
      <Footer />
    </div>
  );
}

export default App;
