import { Link, useNavigate } from 'react-router-dom';

export default function Navbar() {
  const navigate = useNavigate();
  // Lấy thông tin user từ localStorage (nếu có)
  const user = JSON.parse(localStorage.getItem('user'));

  const handleLogout = () => {
    localStorage.removeItem('user'); // Xóa phiên đăng nhập
    navigate('/login'); // Đẩy về trang đăng nhập
  };

  return (
    <nav className="flex items-center justify-between px-8 py-5 bg-white border-b border-gray-100">
      <Link to="/" className="text-2xl font-extrabold tracking-tight">
        Elearning<span className="text-blue-600">Koniz</span>
      </Link>
      <Link to="/courses" className="text-sm font-semibold text-gray-600 hover:text-black transition-colors">
    Khóa học
  </Link>
      <div>
        {user ? (
          <div className="flex items-center space-x-6">
            <span className="text-sm font-medium text-gray-600">
              Chào, <span className="text-black font-bold">{user.name}</span>
            </span>
            <button 
              onClick={handleLogout} 
              className="px-5 py-2.5 text-sm font-semibold text-white bg-[#111111] rounded-full hover:bg-gray-800 transition-all"
            >
              Đăng xuất
            </button>
          </div>
        ) : (
          <div className="flex items-center space-x-4">
            <Link to="/login" className="px-4 py-2 text-sm font-semibold text-gray-600 hover:text-black transition-colors">
              Đăng nhập
            </Link>
            <Link to="/register" className="px-5 py-2.5 text-sm font-semibold text-white bg-[#111111] rounded-full hover:bg-gray-800 transition-all">
              Đăng ký
            </Link>
          </div>
        )}
      </div>
    </nav>
  );
}