import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { LanguageProvider } from './contexts/LanguageContext';
import MainLayout from './layouts/MainLayout';
import Home from './pages/Home';
import Courses from './pages/Courses';
import CourseDetail from './pages/CourseDetail';
import Login from './pages/Login';
import Register from './pages/Register';
import Dashboard from './pages/Dashboard';
import Learning from './pages/Learning';
import CreateCourse from './pages/CreateCourse';
import AdminDashboard from './pages/AdminDashboard';
import Checkout from './pages/Checkout';
import Instructors from './pages/Instructors';
import Blog from './pages/Blog';
import About from './pages/About';

function App() {
  return (
    <LanguageProvider>
      <BrowserRouter>
      <Routes>
        {/* Các trang Full-screen (KHÔNG CÓ NAVBAR) */}
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/learning" element={<Learning />} />

        {/* Các trang nằm trong MainLayout (CÓ TỰ ĐỘNG GẮN NAVBAR) */}
        <Route element={<MainLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/courses" element={<Courses />} />
          <Route path="/courses/:id" element={<CourseDetail />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/create-course" element={<CreateCourse />} />
          <Route path="/admin" element={<AdminDashboard />} />
          
          {/* 3 trang mới đã được đưa vào trong MainLayout */}
          <Route path="/instructors" element={<Instructors />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/about" element={<About />} />
        </Route>
      </Routes>
    </BrowserRouter>
    </LanguageProvider>
    
  );
}

export default App;