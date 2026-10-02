import { Link } from 'react-router-dom';
import { BookOpen, Mail, Lock } from 'lucide-react';

export default function Login() {
  return (
    <div className="min-h-screen flex">
      {/* Cột Form */}
      <div className="w-full lg:w-1/2 flex items-center justify-center bg-white p-8">
        <div className="w-full max-w-md">
          <Link to="/" className="flex items-center gap-2 text-2xl font-extrabold text-gray-900 mb-12">
            <BookOpen className="w-8 h-8 text-blue-600" />
            Elearning<span className="text-blue-600">Koniz</span>
          </Link>
          
          <h2 className="text-3xl font-extrabold text-gray-900 mb-2">Chào mừng trở lại!</h2>
          <p className="text-gray-500 font-medium mb-8">Đăng nhập để tiếp tục hành trình học tập của bạn.</p>

          <form className="space-y-5">
            <div>
              <label className="block text-sm font-bold text-gray-700 mb-2">Email</label>
              <div className="relative">
                <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                <input 
                  type="email" 
                  placeholder="name@example.com" 
                  className="w-full pl-12 pr-4 py-3.5 bg-gray-50 border border-gray-200 focus:bg-white focus:border-blue-500 focus:ring-4 focus:ring-blue-100 rounded-2xl font-medium transition-all outline-none"
                />
              </div>
            </div>
            
            <div>
              <div className="flex justify-between items-center mb-2">
                <label className="block text-sm font-bold text-gray-700">Mật khẩu</label>
                <a href="#" className="text-sm font-semibold text-blue-600 hover:text-blue-700">Quên mật khẩu?</a>
              </div>
              <div className="relative">
                <Lock className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                <input 
                  type="password" 
                  placeholder="••••••••" 
                  className="w-full pl-12 pr-4 py-3.5 bg-gray-50 border border-gray-200 focus:bg-white focus:border-blue-500 focus:ring-4 focus:ring-blue-100 rounded-2xl font-medium transition-all outline-none"
                />
              </div>
            </div>

            <Link to="/dashboard" className="block w-full py-4 text-center text-white bg-gray-900 rounded-full font-bold hover:bg-gray-800 transition-all shadow-md hover:shadow-lg hover:-translate-y-0.5 mt-4">
              Đăng nhập
            </Link>
          </form>

          <p className="text-center text-sm font-medium text-gray-500 mt-8">
            Chưa có tài khoản? <Link to="/register" className="text-blue-600 font-bold hover:underline">Đăng ký ngay</Link>
          </p>
        </div>
      </div>

      {/* Cột Hình ảnh (Ẩn trên mobile) */}
      <div className="hidden lg:block lg:w-1/2 bg-blue-50 relative overflow-hidden">
        <img 
          src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=1600&auto=format&fit=crop" 
          alt="Học tập" 
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-blue-900/20 mix-blend-multiply"></div>
      </div>
    </div>
  );
}