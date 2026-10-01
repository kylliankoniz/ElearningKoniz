import { Outlet } from 'react-router-dom';
import Navbar from '../components/Navbar';

export default function MainLayout() {
  return (
    <div className="min-h-screen bg-[#F8F9FA]">
      <Navbar />
      {/* Outlet chính là nơi các trang con (Home, Dashboard...) sẽ hiển thị */}
      <main>
        <Outlet />
      </main>
    </div>
  );
}