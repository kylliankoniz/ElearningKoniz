import { Link } from 'react-router-dom';
import { useLanguage } from '../contexts/LanguageContext'; // Import hook

export default function Home() {
  const { t } = useLanguage(); // Lấy từ điển ra dùng

  return (
    <div className="relative min-h-[calc(100vh-80px)] flex items-center justify-center overflow-hidden bg-slate-50">
      
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-3xl h-[500px] opacity-30 pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-r from-indigo-400 to-purple-400 blur-[100px] rounded-full mix-blend-multiply"></div>
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-6 py-20 text-center">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-slate-200 shadow-sm text-sm font-bold text-slate-600 mb-8">
          <span className="flex h-2.5 w-2.5 rounded-full bg-indigo-600"></span>
          {t.home_badge}
        </div>

        <h1 className="text-5xl md:text-7xl font-extrabold text-slate-900 tracking-tight mb-8 leading-[1.1]">
          {t.home_title} <br className="hidden md:block" />{t.home_subtitle} <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-blue-500">ElearningKoniz</span>
        </h1>
        
        <p className="text-xl text-slate-500 font-medium max-w-2xl mx-auto mb-12 leading-relaxed">
          {t.home_desc}
        </p>
        
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link to="/courses" className="w-full sm:w-auto px-10 py-4 text-base font-bold text-white bg-indigo-600 rounded-full hover:bg-indigo-700 transition-all shadow-[0_8px_20px_rgba(79,70,229,0.3)] hover:shadow-[0_10px_25px_rgba(79,70,229,0.4)] hover:-translate-y-1">
            {t.home_btn_explore}
          </Link>
          <Link to="/register" className="w-full sm:w-auto px-10 py-4 text-base font-bold text-slate-700 bg-white border border-slate-200 rounded-full hover:bg-slate-50 transition-all shadow-sm hover:shadow-md hover:-translate-y-1">
            {t.home_btn_become}
          </Link>
        </div>
      </div>
    </div>
  );
}