import { Routes, Route } from "react-router-dom";
import Register from "./Components/Auth/Register";
import Login from "./Components/Auth/Login";
import { AuthProvider } from "./context/AuthContext";
import Category from "./Pages/Category";

function App() {
  return (
    <AuthProvider>
      <Routes>
        <Route path="/" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/category" element={<Category />} />
      </Routes>
    </AuthProvider>
  );
}

export default App;
