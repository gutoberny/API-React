import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./App.css";
import Home from "./pages/Home";
import Header from "./components/Header";
import AddEdit from "./pages/AddEdit";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <ToastContainer position="top-center" />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/add" element={<AddEdit />} />
          <Route path="/update/:id" element={<AddEdit />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
