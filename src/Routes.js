import React from "react";
import { Router, Routes, Route } from "react-router";
import FormComponent from "./Components/FormComponent";
import MultiComponent from "./Components/MultiComponent";

const createRoutes = () => (
  <Router>
    <Routes>
      <Route exact path="/multiComponent" element={<MultiComponent />} />
      <Route exact path="/formComponent" element={<FormComponent />} />
    </Routes>
  </Router>
);

export default createRoutes;
