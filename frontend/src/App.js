import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Home from "./pages/Home";
import { Provider } from "react-redux";
import store from "./store";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Provider store={store}>
          <ToastContainer position="top-center" />
          <Routes>
            <Route path="/" element={<Home />} />
          </Routes>
        </Provider>
      </div>
    </BrowserRouter>
  );
}

export default App;
