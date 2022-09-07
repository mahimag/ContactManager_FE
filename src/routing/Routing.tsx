import { Navigate, Route, Routes } from "react-router-dom";
import ProtectedRoute from "../hoc/ProtectedRoute";
import Contact from "../pages/Contact/Contact";
import UpdateContact from "../pages/Contact/UpdateContact";
import Home from "../pages/Home/Home";
import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";
import { isUserLoggedIn } from "../utils/localStorage";

export default function Routing() {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />

      {/* higher order component (Protected route) -> Nesting the routes -- before you can access the inside route you need to pass through the protected route */}
      <Route path="/contact" element={<ProtectedRoute />}>
        <Route path="/contact" element={<Home />} />
        <Route path="/contact/add" element={<Contact />} />
        <Route path="/contact/update/:id" element={<UpdateContact />} />
      </Route>
    </Routes>
  );
}
