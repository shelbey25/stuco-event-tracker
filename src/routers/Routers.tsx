import { Routes, Route, Navigate } from "react-router-dom";
import Home from "~/pages";
import Dressup from "~/pages/dressup";
import Tracker from "~/pages/tracker"

const Routers = () => {
    return (
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/dressup" element={<Dressup />} />
        <Route path="/dressup/:eventName" element={<Tracker />} />
      </Routes>
    );
  };
  
  export default Routers;