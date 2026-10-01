import { Routes, Route } from 'react-router-dom';
import MainLayout from './layouts/MainLayout';
import PrivateRoute from './components/PrivateRoute';
import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';
import Dashboard from './pages/Dashboard';
import Courses from './pages/Courses';

function App() {
  return (
    <Routes>
      {/* Route không có Navbar (Giao diện sạch cho đăng nhập/đăng ký) */}
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />

      {/* Group các trang có sử dụng chung Navbar */}
      <Route element={<MainLayout />}>
        {/* Trang chủ - Ai cũng vào được */}
        <Route path="/" element={<Home />} />
        <Route path="/courses" element={<Courses />} />
        
        {/* Cụm trang BẢO MẬT - Bắt buộc đăng nhập */}
        <Route element={<PrivateRoute />}>
          <Route path="/dashboard" element={<Dashboard />} />
          {/* Về sau bạn có thể thêm các route như /profile, /learning ở đây */}
        </Route>
      </Route>
    </Routes>
  );
}

export default App;