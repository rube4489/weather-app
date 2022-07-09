import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import NotFound from "./components/NotFound";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="error" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
