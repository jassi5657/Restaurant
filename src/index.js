import React from "react";
import { createRoot } from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Outlet,
  createRoutesFromElements,
} from "react-router-dom";
import Home from "./routes/Home";
import Pizza from "./routes/pizza/pizza-index";
import Burger from "./routes/burger/Burger-index";
import Momo from "./routes/momo/Momo-index";
import Navbar from "./components/Navbar";
import Contact from "./routes/Contact";

import "./App.css";
const AppLayout = () => (
  <>

    <Navbar />
    <Outlet />
  </>
);

 const router = createBrowserRouter(
   createRoutesFromElements(
     <Route element={<AppLayout />}>
       <Route path="/" element={<Home />} />
       <Route path="/pizza-index" element={<Pizza />} />
       <Route path="/burger-index" element={<Burger />} />
       <Route path="/momo-index" element={<Momo />} />
       <Route path="/contact" element={<Contact />} />

    </Route>
  )
  );

 createRoot(document.getElementById("root")).render(
   <RouterProvider router={router} />
);

