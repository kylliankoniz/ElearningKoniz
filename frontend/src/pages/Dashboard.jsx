import { PlayCircle } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../contexts/LanguageContext';

export default function Dashboard() {
  const { t } = useLanguage();

  return (
    <div className="bg-slate-50 min-h-screen pb-24 font-sans">
      <div className="max-w-7xl mx-auto px-6 pt-16">
        
        <div className="mb-12">
          <h1 className="text-3xl font-extrabold text-slate-900 mb-2 tracking-tight">{t.dashboard}</h1>
          <p className="text-slate-500 font-medium">{t.dash_welcome}</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          <div className="bg-white p-6 rounded-[32px] border border-slate-200/60 shadow-[0_8px_30px_rgb(0,0,0,0.03)] flex items-center justify-between">
            <div>
              <p className="text-[13px] font-bold text-slate-400 mb-1 uppercase tracking-wider">{t.stat_learning}</p>
              <p className="text-[32px] font-black text-slate-900 leading-none">2 <span className="text-[15px] font-bold text-slate-400">{t.course_count}</span></p>
            </div>
            <div className="w-16 h-16 rounded-[24px] bg-indigo-50 flex items-center justify-center text-[24px]">📚</div>
          </div>
          <div className="bg-white p-6 rounded-[32px] border border-slate-200/60 shadow-[0_8px_30px_rgb(0,0,0,0.03)] flex items-center justify-between">
            <div>
              <p className="text-[13px] font-bold text-slate-400 mb-1 uppercase tracking-wider">{t.stat_completed}</p>
              <p className="text-[32px] font-black text-slate-900 leading-none">1 <span className="text-[15px] font-bold text-slate-400">{t.course_count}</span></p>
            </div>
            <div className="w-16 h-16 rounded-[24px] bg-emerald-50 flex items-center justify-center text-[24px]">🏆</div>
          </div>
          <div className="bg-white p-6 rounded-[32px] border border-slate-200/60 shadow-[0_8px_30px_rgb(0,0,0,0.03)] flex items-center justify-between">
            <div>
              <p className="text-[13px] font-bold text-slate-400 mb-1 uppercase tracking-wider">{t.stat_cert}</p>
              <p className="text-[32px] font-black text-slate-900 leading-none">1 <span className="text-[15px] font-bold text-slate-400">{t.cert_count}</span></p>
            </div>
            <div className="w-16 h-16 rounded-[24px] bg-purple-50 flex items-center justify-center text-[24px]">🎓</div>
          </div>
        </div>

        <div>
          <h2 className="text-2xl font-extrabold text-slate-900 mb-8">{t.my_courses}</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white rounded-[32px] border border-slate-200/60 p-6 shadow-[0_8px_30px_rgb(0,0,0,0.03)] hover:shadow-xl transition-all duration-300">
              <div className="aspect-[16/10] bg-slate-100 rounded-[20px] overflow-hidden mb-6 relative group">
                <img src="https://images.unsplash.com/photo-1633356122544-f134324a6cee?q=80&w=800&auto=format&fit=crop" alt="React" className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-slate-900/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity backdrop-blur-[2px]">
                  <PlayCircle className="w-16 h-16 text-white drop-shadow-md" />
                </div>
              </div>
              <h3 className="font-bold text-slate-900 text-[18px] leading-snug mb-6 line-clamp-2">Khóa học React.js từ cơ bản đến nâng cao</h3>
              
              <div className="mb-8">
                <div className="flex justify-between text-[13px] font-bold text-slate-500 mb-2.5">
                  <span>{t.progress}</span>
                  <span className="text-indigo-600">45%</span>
                </div>
                <div className="w-full bg-slate-100 rounded-full h-3">
                  <div className="bg-indigo-500 h-3 rounded-full transition-all duration-1000 ease-out w-[45%]"></div>
                </div>
              </div>

              <Link to="/learning" className="block w-full py-4 text-center text-[14px] font-bold text-slate-700 bg-slate-50 border border-slate-200 rounded-full hover:bg-slate-900 hover:text-white hover:border-slate-900 transition-colors">
                {t.continue_learning}
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}