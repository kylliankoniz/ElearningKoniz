import { Star, Users, BookOpen } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

export default function Instructors() {
  const { t } = useLanguage();
  
  // Dữ liệu mảng giữ nguyên
  const instructors = [
    { id: 1, name: 'Nguyễn Văn A', role: 'Senior Frontend Engineer', students: '12,500+', courses: 5, rating: 4.9, avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=400&auto=format&fit=crop' },
    { id: 2, name: 'Trần Thị B', role: 'UX/UI Lead Designer', students: '8,200+', courses: 3, rating: 4.8, avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=400&auto=format&fit=crop' },
    { id: 3, name: 'Lê Hoàng C', role: 'Cloud Solutions Architect', students: '15,000+', courses: 8, rating: 4.9, avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=400&auto=format&fit=crop' },
  ];

  return (
    <div className="bg-slate-50 min-h-screen pb-24 font-sans">
      <div className="relative bg-slate-950 text-white py-24 px-6 overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-4xl h-full opacity-30 pointer-events-none">
          <div className="absolute inset-0 bg-gradient-to-r from-indigo-500/40 to-purple-500/40 blur-[120px] rounded-full mix-blend-screen"></div>
        </div>
        <div className="relative z-10 max-w-7xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/5 border border-white/10 text-xs font-bold text-indigo-300 mb-6 uppercase tracking-wider">
            {t.inst_badge}
          </div>
          <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight mb-6 leading-tight">{t.inst_title}</h1>
          <p className="text-lg text-slate-400 max-w-2xl mx-auto font-medium leading-relaxed">{t.inst_desc}</p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 mt-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {instructors.map((instructor) => (
            <div key={instructor.id} className="bg-white rounded-[32px] p-8 md:p-10 border border-slate-200/60 shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-xl hover:-translate-y-1.5 transition-all duration-500 text-center flex flex-col items-center group">
              {/* ... hình ảnh avatar giữ nguyên ... */}
              <div className="relative mb-6">
                <div className="absolute inset-0 bg-indigo-500 rounded-full blur-md opacity-0 group-hover:opacity-20 transition-opacity duration-500"></div>
                <img src={instructor.avatar} alt={instructor.name} className="relative w-32 h-32 rounded-full object-cover border-4 border-white shadow-md group-hover:scale-105 transition-transform duration-500" />
              </div>
              <h3 className="text-[22px] font-bold text-slate-900 mb-1.5">{instructor.name}</h3>
              <p className="text-[14px] font-semibold text-indigo-600 mb-8">{instructor.role}</p>
              
              <div className="flex items-center justify-center gap-8 w-full pt-6 border-t border-slate-100 text-slate-500 font-medium">
                <div className="flex flex-col items-center gap-1.5"><Star className="w-5 h-5 text-amber-400 fill-amber-400" /><span className="text-[13px] font-bold text-slate-700">{instructor.rating}</span></div>
                <div className="flex flex-col items-center gap-1.5"><Users className="w-5 h-5 text-slate-400" /><span className="text-[13px] font-bold text-slate-700">{instructor.students}</span></div>
                <div className="flex flex-col items-center gap-1.5"><BookOpen className="w-5 h-5 text-slate-400" /><span className="text-[13px] font-bold text-slate-700">{instructor.courses} {t.inst_courses}</span></div>
              </div>
              <button className="mt-8 w-full py-4 bg-slate-50 border border-slate-100 text-[14px] text-slate-700 font-bold rounded-full hover:bg-slate-900 hover:text-white transition-all duration-300">
                {t.view_profile}
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}