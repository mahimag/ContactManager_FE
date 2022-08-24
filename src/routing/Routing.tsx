import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";
import { Route, Routes, Navigate } from "react-router-dom";
import Home from "../pages/Home/Home";
import Contact from "../pages/Contact/Contact";
import UpdateContact from "../pages/Contact/UpdateContact";

// var checkAuth = false;

export default function Routing() {
  // if (localStorage.getItem("LoggedIn") === "true") {
  //   checkAuth = true;
  // }

  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/register" element={<Register />} />
      {/* <Route
        path="/home"
        element={checkAuth ? <Home /> : <Navigate to={"/"} />}
      /> */}
      <Route path="/home" element={<Home />} />
      <Route path="/newcontact" element={<Contact />} />
      <Route path="/update/:id" element={<UpdateContact />} />
    </Routes>
  );
}
