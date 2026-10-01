import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';

export default function Register() {
  // Quản lý state của form
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: ''
  });
  
  // Quản lý trạng thái lỗi và loading
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  
  const navigate = useNavigate();

  // Hàm cập nhật dữ liệu khi người dùng gõ phím
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  // Hàm xử lý khi bấm nút "Tạo tài khoản"
  const handleSubmit = async (e) => {
    e.preventDefault(); // Ngăn trình duyệt reload lại trang
    setError('');
    setLoading(true);

    try {
      // Gọi API xuống backend
      const response = await axios.post('http://localhost:5000/api/auth/register', formData);
      
      if (response.status === 201) {
        alert('Đăng ký thành công! Xin mời đăng nhập.');
        navigate('/login'); // Chuyển hướng sang trang đăng nhập
      }
    } catch (err) {
      // Bắt lỗi từ backend (ví dụ: Trùng email)
      setError(err.response?.data?.message || 'Có lỗi xảy ra, vui lòng thử lại sau.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex h-screen items-center justify-center px-4 bg-[#F8F9FA]">
      <div className="w-full max-w-md p-10 bg-white rounded-[2rem] shadow-[0_8px_30px_rgb(0,0,0,0.04)]">
        <h2 className="text-4xl font-extrabold tracking-tight mb-2">Đăng ký</h2>
        <p className="text-gray-500 text-sm mb-6 font-medium">Bắt đầu hành trình nâng cấp bản thân.</p>

        {/* Hiển thị thông báo lỗi nếu có */}
        {error && (
          <div className="mb-4 p-3 text-sm text-red-600 bg-red-50 border border-red-200 rounded-xl">
            {error}
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <input 
              type="text" 
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full px-5 py-4 bg-gray-50 border border-gray-100 rounded-2xl focus:outline-none focus:ring-2 focus:ring-black focus:bg-white transition-all text-sm" 
              placeholder="Họ và tên" 
            />
          </div>
          <div>
            <input 
              type="email" 
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full px-5 py-4 bg-gray-50 border border-gray-100 rounded-2xl focus:outline-none focus:ring-2 focus:ring-black focus:bg-white transition-all text-sm" 
              placeholder="Email của bạn" 
            />
          </div>
          <div>
            <input 
              type="password" 
              name="password"
              value={formData.password}
              onChange={handleChange}
              required
              minLength="6"
              className="w-full px-5 py-4 bg-gray-50 border border-gray-100 rounded-2xl focus:outline-none focus:ring-2 focus:ring-black focus:bg-white transition-all text-sm" 
              placeholder="Mật khẩu (ít nhất 6 ký tự)" 
            />
          </div>
          <button 
            type="submit" 
            disabled={loading}
            className="w-full py-4 mt-2 text-white bg-[#111111] rounded-full font-semibold hover:bg-gray-800 transition-colors disabled:bg-gray-400"
          >
            {loading ? 'Đang xử lý...' : 'Tạo tài khoản'}
          </button>
        </form>

        <p className="text-sm text-center text-gray-400 mt-8 font-medium">
          Đã là thành viên? <Link to="/login" className="text-black hover:underline">Đăng nhập</Link>
        </p>
      </div>
    </div>
  );
}