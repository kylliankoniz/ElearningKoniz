import { Link } from 'react-router-dom';
import { BookOpen, UserCircle, Globe } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext'; // Import hook

export default function Navbar() {
  const userRole = 'guest'; 
  
  // Rút gọn toàn bộ logic phức tạp bằng 1 dòng gọi Context
  const { lang, toggleLanguage, t } = useLanguage();

  return (
    <nav className="sticky top-0 z-50 w-full bg-white/70 backdrop-blur-xl border-b border-slate-200/60 shadow-[0_8px_30px_rgb(0,0,0,0.04)] transition-all duration-300">
      <div className="max-w-7xl mx-auto px-6 h-[80px] flex items-center justify-between">
        
        <Link to="/" className="flex items-center gap-3 text-2xl font-extrabold tracking-tight text-slate-900 group">
          <div className="bg-indigo-600 p-2 rounded-xl group-hover:scale-105 transition-transform shadow-md">
            <BookOpen className="w-6 h-6 text-white" />
          </div>
          ElearningKoniz
        </Link>

        <div className="hidden md:flex items-center gap-8 font-bold text-[15px]">
          <Link to="/courses" className="text-slate-600 hover:text-indigo-600 transition-colors">{t.explore}</Link>
          <Link to="/about" className="text-slate-600 hover:text-indigo-600 transition-colors">{t.about}</Link>
          <Link to="/instructors" className="text-slate-600 hover:text-indigo-600 transition-colors">{t.instructors}</Link>
          <Link to="/blog" className="text-slate-600 hover:text-indigo-600 transition-colors">{t.blog}</Link>
          
          {userRole !== 'guest' && (
            <Link to="/dashboard" className="text-slate-600 hover:text-indigo-600 transition-colors">{t.dashboard}</Link>
          )}

          {(userRole === 'instructor' || userRole === 'admin') && (
            <Link to="/create-course" className="text-indigo-600 hover:text-indigo-700 transition-colors">{t.create}</Link>
          )}

          {userRole === 'admin' && (
            <Link to="/admin" className="text-purple-600 hover:text-purple-700 transition-colors">{t.admin}</Link>
          )}
        </div>

        <div className="flex items-center gap-5">
          <button 
            onClick={toggleLanguage}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-full border border-slate-200 bg-slate-50 text-[13px] font-bold text-slate-600 hover:text-indigo-600 hover:border-indigo-200 hover:bg-indigo-50/50 transition-all"
          >
            <Globe className="w-4 h-4" />
            <span>{lang}</span>
          </button>

          {userRole === 'guest' ? (
            <>
              <Link to="/login" className="text-[15px] font-extrabold text-slate-600 hover:text-indigo-600 transition-colors">{t.login}</Link>
              <Link to="/register" className="text-[15px] font-bold text-white bg-indigo-600 px-6 py-2.5 rounded-full hover:bg-indigo-700 transition-all shadow-md hover:shadow-lg hover:-translate-y-0.5">
                {t.register}
              </Link>
            </>
          ) : (
            <button className="flex items-center gap-2.5 text-[15px] font-bold text-slate-700 hover:text-slate-900 transition-colors bg-white border border-slate-200 px-5 py-2 rounded-full hover:shadow-sm">
              <UserCircle className="w-5 h-5 text-slate-400" />
              {t.account}
            </button>
          )}
        </div>
      </div>
    </nav>
  );
}