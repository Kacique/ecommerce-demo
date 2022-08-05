import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import Checkout from "./components/checkout/Checkout";
import Login from "./components/login/Login";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import { StateProvider } from "./state/StateProvider";
import reducer, { initialState } from "./state/reducer";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <StateProvider initialState={initialState} reducer={reducer}>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}></Route>
        <Route path="/checkout" element={<Checkout />}></Route>
        <Route path="/login" element={<Login />}></Route>
      </Routes>
    </BrowserRouter>
  </StateProvider>
);
