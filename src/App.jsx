import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";

import Home from "./pages/Home";
import Compare from "./pages/Compare";
import Basket from "./pages/Basket";
import Explore from "./pages/Explore";
import DealDetails from "./pages/DealDetails";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import ProtectedRoute from "./components/auth/ProtectedRoute";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/explore" element={<Explore />} />
        <Route path="/compare/:id" element={<Compare />} />
        <Route path="/deal/:id" element={<DealDetails />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route
          path="/basket"
          element={
            <ProtectedRoute>
              <Basket />
            </ProtectedRoute>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}