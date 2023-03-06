import React from "react";
import { Route, Routes } from "react-router";
import { Dashboard } from "./components/pages/dashboard/Dashboard";

export const Router = () => {
  return (
    <Routes>
      <Route path={"dashboard"} element={<Dashboard />} />
    </Routes>
  );
};
