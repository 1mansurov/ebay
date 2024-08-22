import "./App.css";
import Nav from "./components/navigation/Nav.jsx";
import { Routes, Route, useLocation } from "react-router-dom";
import Home from "./routes/home/Home.jsx";
import Single from "./routes/sinle/Single.jsx";
import Footer from "./components/footer/Footer.jsx";
import Refurbished from "./routes/refurbished/Refurbished.jsx";
import Login from "./routes/login/Login.jsx";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  const {pathname} = useLocation();
  return (
    <>
      {pathname.includes("login") ? null : <Nav />}
      <ToastContainer />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/single" element={<Single />} />
        <Route path="/login" element={<Login />} />
        <Route path="/refurbished" element={<Refurbished />} />
        <Route path="/single-product/:id" element={<Single />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
