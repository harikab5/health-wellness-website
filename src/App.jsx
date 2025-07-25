import { Routes, Route } from "react-router-dom";
import LoginPage from './welcome';
import Home from './home';
import AdminDashboard from './admin-dashboard';
import Footer from "./footer";
import DetailedHome from './detailedhome';

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/home" element={<Home />} />
        <Route path="/admin-dashboard" element={<AdminDashboard />} />
        <Route path="/detailedhome" element={<DetailedHome />} />
      </Routes>
      <Footer />
    </>
  );
}
export default App; 