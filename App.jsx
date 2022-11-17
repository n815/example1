import React, { useEffect } from "react";
import { BrowserRouter as Router,Routes,Route } from "react-router-dom";
import Homepage from "./components/Homepage";
import Login from "./components/Login";
export default function App() {
 
  return (
   
    <Router><Routes><Route path="/" element={<Homepage/>}/></Routes><Routes><Route path="/login" element={<Login/>}/></Routes></Router>
  );
}
