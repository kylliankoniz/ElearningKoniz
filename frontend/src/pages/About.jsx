import { Target, Zap, ShieldCheck } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

export default function About() {
  const { t } = useLanguage();

  return (
    <div className="bg-slate-50 min-h-screen pb-24">
      <div className="max-w-7xl mx-auto px-6 pt-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-24">
          <div>
            <h1 className="text-4xl md:text-5xl font-extrabold text-slate-900 tracking-tight mb-6 leading-tight">
              {t.about_title} <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-blue-500">ElearningKoniz</span>
            </h1>
            <p className="text-lg text-slate-500 font-medium mb-8 leading-relaxed">
              {t.about_desc}
            </p>
            <div className="grid grid-cols-2 gap-8">
              <div>
                <p className="text-4xl font-black text-slate-900 mb-2">150K+</p>
                <p className="text-sm font-bold text-slate-400 uppercase">{t.about_stat1}</p>
              </div>
              <div>
                <p className="text-4xl font-black text-slate-900 mb-2">1,200+</p>
                <p className="text-sm font-bold text-slate-400 uppercase">{t.about_stat2}</p>
              </div>
            </div>
          </div>
          {/* ... phần ảnh giữ nguyên ... */}
          <div className="relative">
            <div className="aspect-square rounded-[40px] overflow-hidden shadow-2xl relative z-10">
              <img src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=800&auto=format&fit=crop" alt="Team" className="w-full h-full object-cover" />
            </div>
            <div className="absolute -bottom-6 -left-6 w-full h-full rounded-[40px] border-2 border-indigo-200/50 bg-indigo-50/50 z-0"></div>
          </div>
        </div>

        {/* Core Values */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white p-8 rounded-[32px] border border-slate-200/60 shadow-sm">
            <div className="w-14 h-14 bg-blue-50 rounded-2xl flex items-center justify-center mb-6"><Target className="w-7 h-7 text-blue-600" /></div>
            <h3 className="text-xl font-bold text-slate-900 mb-4">{t.about_val1_title}</h3>
            <p className="text-slate-500 font-medium">{t.about_val1_desc}</p>
          </div>
          <div className="bg-white p-8 rounded-[32px] border border-slate-200/60 shadow-sm">
            <div className="w-14 h-14 bg-indigo-50 rounded-2xl flex items-center justify-center mb-6"><Zap className="w-7 h-7 text-indigo-600" /></div>
            <h3 className="text-xl font-bold text-slate-900 mb-4">{t.about_val2_title}</h3>
            <p className="text-slate-500 font-medium">{t.about_val2_desc}</p>
          </div>
          <div className="bg-white p-8 rounded-[32px] border border-slate-200/60 shadow-sm">
            <div className="w-14 h-14 bg-emerald-50 rounded-2xl flex items-center justify-center mb-6"><ShieldCheck className="w-7 h-7 text-emerald-600" /></div>
            <h3 className="text-xl font-bold text-slate-900 mb-4">{t.about_val3_title}</h3>
            <p className="text-slate-500 font-medium">{t.about_val3_desc}</p>
          </div>
        </div>
      </div>
    </div>
  );
}