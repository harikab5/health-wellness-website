import { Routes, Route } from "react-router-dom";
import LoginPage from './welcome';
import Home from './home';
import AdminDashboard from './admin-dashboard';

function App() {
  return (
    <Routes>
      <Route path="/" element={<LoginPage />} />
      <Route path="/home" element={<Home />} />
      <Route path="/admin-dashboard" element={<AdminDashboard />} />
    </Routes>
  );
}
export default App; 