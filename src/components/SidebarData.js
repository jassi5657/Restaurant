import React from "react";
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import * as IoIcons from "react-icons/io";

export const SidebarData = [
  {
    title: "Home",
    path: "/",
    icon: <AiIcons.AiFillHome />,
    cName: "nav-text",
  },
  {
    title: "Pizza",
    path: "/pizza-index",
    icon: <FaIcons.FaPizzaSlice />,
    cName: "nav-text",
  },
  {
    title: "Burger",
    path: "/burger-index",
    icon: <FaIcons.FaHamburger />,
    cName: "nav-text",
  },
  {
    title: "Momo",
    path: "/momo-index",
    icon: <FaIcons.FaXing/>,
    
    cName: "nav-text",
    
  },
  {
    title: "ContactUs",
    path: "/contact",
    icon: <FaIcons.FaEnvelopeOpenText />,
    cName: "nav-text",
  },
 
];
