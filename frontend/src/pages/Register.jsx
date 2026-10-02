import { Link } from 'react-router-dom';
import { BookOpen, Mail, Lock, User } from 'lucide-react';

export default function Register() {
  return (
    <div className="min-h-screen flex">
      <div className="w-full lg:w-1/2 flex items-center justify-center bg-white p-8">
        <div className="w-full max-w-md">
          <Link to="/" className="flex items-center gap-2 text-2xl font-extrabold text-gray-900 mb-12">
            <BookOpen className="w-8 h-8 text-blue-600" />
            Elearning<span className="text-blue-600">Koniz</span>
          </Link>
          
          <h2 className="text-3xl font-extrabold text-gray-900 mb-2">Tạo tài khoản mới</h2>
          <p className="text-gray-500 font-medium mb-8">Bắt đầu hành trình học tập và chia sẻ kiến thức của bạn.</p>

          <form className="space-y-5">
            <div>
              <label className="block text-sm font-bold text-gray-700 mb-2">Họ và tên</label>
              <div className="relative">
                <User className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                <input type="text" placeholder="Nguyễn Văn A" className="w-full pl-12 pr-4 py-3.5 bg-gray-50 border border-gray-200 focus:bg-white focus:border-blue-500 focus:ring-4 focus:ring-blue-100 rounded-2xl font-medium transition-all outline-none" />
              </div>
            </div>

            <div>
              <label className="block text-sm font-bold text-gray-700 mb-2">Email</label>
              <div className="relative">
                <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                <input type="email" placeholder="name@example.com" className="w-full pl-12 pr-4 py-3.5 bg-gray-50 border border-gray-200 focus:bg-white focus:border-blue-500 focus:ring-4 focus:ring-blue-100 rounded-2xl font-medium transition-all outline-none" />
              </div>
            </div>
            
            <div>
              <label className="block text-sm font-bold text-gray-700 mb-2">Mật khẩu</label>
              <div className="relative">
                <Lock className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                <input type="password" placeholder="••••••••" className="w-full pl-12 pr-4 py-3.5 bg-gray-50 border border-gray-200 focus:bg-white focus:border-blue-500 focus:ring-4 focus:ring-blue-100 rounded-2xl font-medium transition-all outline-none" />
              </div>
            </div>

            <button type="button" className="block w-full py-4 text-center text-white bg-blue-600 rounded-full font-bold hover:bg-blue-700 transition-all shadow-md hover:shadow-lg hover:-translate-y-0.5 mt-4">
              Đăng ký tài khoản
            </button>
          </form>

          <p className="text-center text-sm font-medium text-gray-500 mt-8">
            Đã có tài khoản? <Link to="/login" className="text-blue-600 font-bold hover:underline">Đăng nhập</Link>
          </p>
        </div>
      </div>
      <div className="hidden lg:block lg:w-1/2 bg-blue-50 relative overflow-hidden">
        <img src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=1600&auto=format&fit=crop" alt="Học tập" className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0 bg-blue-900/20 mix-blend-multiply"></div>
      </div>
    </div>
  );
}