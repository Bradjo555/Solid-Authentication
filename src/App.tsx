import { Route, Routes } from "@solidjs/router";
import {createSignal, type Component, onMount } from "solid-js";
import { auth } from "../config";

import Home from "./pages/Home";
import Register from "./pages/Register";
import Login from "./pages/Login";
import Posts from "./pages/Posts";
import Navbar from "./components/Navbar";
import { onAuthStateChanged } from "firebase/auth";


const App: Component = () => {


  return(
    <div>
        <Navbar />
        <Routes>
          <Route path="/"         element={<Home />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login"    element={<Login />} />
          <Route  path="/posts"    element={<Posts />} />
        </Routes>
    </div>
  )
};

export default App;
