import "./index.css";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from "./pages/page_home";
import SignIn from "./pages/page_login";
import SignUp from "./pages/page_register";
import { AuthProvider } from "./context/AuthContext";
import PageCart from "./pages/page_cart";
function App() {

  return (
    <Router>
      <AuthProvider>
        <Routes>

          <Route path="/" element={<Home />} />
          <Route path="/signin" element={<SignIn />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/cart" element={<PageCart />} />

        </Routes>
      </AuthProvider>
    </Router>

  );
}

export default App;
