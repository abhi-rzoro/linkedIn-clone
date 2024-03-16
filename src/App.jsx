import "./App.css";
import Login from "./Pages/Login";
import {
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
  Route,
} from "react-router-dom";
import React from "react";
import { app } from "./firebaseConfig";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Register from "./Pages/Register";
import Home from "./Pages/Home";
import Spinner from "./commonComp/loader";
import Profile from "./Pages/Profile";

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/home" element={<Home />} />
      <Route path="/profile" element={<Profile />} />
      {/* <Route path="/spinner" element={<Spinner />} /> */}
    </>
  )
);

function App() {
  return (
    <React.StrictMode>
      <RouterProvider router={router} />
      <ToastContainer />
    </React.StrictMode>
  );
}

export default App;
