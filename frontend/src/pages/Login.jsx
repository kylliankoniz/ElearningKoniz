import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';

export default function Login() {
  const [formData, setFormData] = useState({ email: '', password: '' });
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setLoading(true);

    try {
      const response = await axios.post('http://localhost:5000/api/auth/login', formData);
      
      if (response.data.token) {
        // Lưu thông tin user và token vào localStorage để giữ phiên đăng nhập
        localStorage.setItem('user', JSON.stringify(response.data));
        
        alert('Đăng nhập thành công!');
        // Tạm thời chuyển hướng về trang chủ hoặc dashboard (sẽ tạo sau)
        navigate('/dashboard'); 
      }
    } catch (err) {
      setError(err.response?.data?.message || 'Có lỗi xảy ra, vui lòng thử lại.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex h-screen items-center justify-center px-4 bg-[#F8F9FA]">
      <div className="w-full max-w-md p-10 bg-white rounded-[2rem] shadow-[0_8px_30px_rgb(0,0,0,0.04)]">
        <h2 className="text-4xl font-extrabold tracking-tight mb-2">Đăng nhập</h2>
        <p className="text-gray-500 text-sm mb-6 font-medium">Chào mừng bạn quay trở lại không gian học tập.</p>

        {error && (
          <div className="mb-4 p-3 text-sm text-red-600 bg-red-50 border border-red-200 rounded-xl">
            {error}
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-4">
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
              className="w-full px-5 py-4 bg-gray-50 border border-gray-100 rounded-2xl focus:outline-none focus:ring-2 focus:ring-black focus:bg-white transition-all text-sm" 
              placeholder="Mật khẩu" 
            />
          </div>
          <button 
            type="submit" 
            disabled={loading}
            className="w-full py-4 mt-2 text-white bg-[#111111] rounded-full font-semibold hover:bg-gray-800 transition-colors disabled:bg-gray-400"
          >
            {loading ? 'Đang kiểm tra...' : 'Start Now'}
          </button>
        </form>

        <p className="text-sm text-center text-gray-400 mt-8 font-medium">
          Chưa có tài khoản? <Link to="/register" className="text-black hover:underline">Khám phá ngay</Link>
        </p>
      </div>
    </div>
  );
}