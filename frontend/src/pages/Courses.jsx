import { Search, Star, Clock } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../contexts/LanguageContext';

export default function Courses() {
  const { t } = useLanguage();

  const courses = [
    { id: 1, title: 'React.js từ cơ bản đến nâng cao', instructor: 'Nguyễn Văn A', category: 'Frontend', price: 1299000, rating: 4.8, duration: '32 giờ', thumbnail: 'https://images.unsplash.com/photo-1633356122544-f134324a6cee?q=80&w=800&auto=format&fit=crop' },
    { id: 2, title: 'Node.js & MongoDB Masterclass', instructor: 'Lê Hoàng C', category: 'Backend', price: 1499000, rating: 4.9, duration: '40 giờ', thumbnail: 'https://images.unsplash.com/photo-1555099962-4199c345e5dd?q=80&w=800&auto=format&fit=crop' },
  ];

  return (
    <div className="bg-slate-50 min-h-screen pb-24 font-sans">
      <div className="bg-slate-950 py-20 px-6 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-indigo-900/40 to-slate-900/40"></div>
        <div className="relative z-10 max-w-7xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-extrabold text-white tracking-tight mb-6">{t.courses_title}</h1>
          <p className="text-lg text-slate-400 font-medium mb-10">{t.courses_desc}</p>
          
          <div className="max-w-2xl mx-auto relative group">
            <div className="absolute inset-y-0 left-0 pl-5 flex items-center pointer-events-none">
              <Search className="h-5 w-5 text-slate-400 group-focus-within:text-indigo-500 transition-colors" />
            </div>
            <input 
              type="text" 
              className="block w-full pl-12 pr-4 py-4 bg-white/10 border border-white/20 rounded-full text-white placeholder-slate-400 focus:bg-white focus:text-slate-900 focus:placeholder-slate-500 focus:ring-4 focus:ring-indigo-500/30 outline-none transition-all backdrop-blur-md font-medium" 
              placeholder={t.search_placeholder} 
            />
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {courses.map((course) => (
          <Link key={course.id} to={`/courses/${course.id}`} className="group flex flex-col bg-white rounded-[32px] border border-slate-200/60 overflow-hidden hover:shadow-[0_20px_40px_-15px_rgba(0,0,0,0.05)] transition-all duration-500 hover:-translate-y-1.5">
            <div className="aspect-[16/10] bg-slate-100 relative overflow-hidden shrink-0">
              <img src={course.thumbnail} alt={course.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out" />
              <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-md px-4 py-1.5 rounded-full text-[12px] font-bold tracking-wide text-slate-900 uppercase shadow-sm">
                {course.category}
              </div>
            </div>
            <div className="p-8 flex flex-col flex-1">
              <h3 className="font-extrabold text-slate-900 text-[18px] leading-snug mb-2 line-clamp-2 group-hover:text-indigo-600 transition-colors">{course.title}</h3>
              <p className="text-[14px] text-slate-500 font-semibold mb-6">{course.instructor}</p>
              
              <div className="mt-auto pt-6 border-t border-slate-100 flex items-center justify-between">
                <div className="flex items-center gap-4 text-[13px] font-bold text-slate-400">
                  <span className="flex items-center gap-1.5"><Star className="w-4 h-4 text-amber-400 fill-amber-400" /> {course.rating}</span>
                  <span className="flex items-center gap-1.5"><Clock className="w-4 h-4" /> {course.duration}</span>
                </div>
                <span className="text-[18px] font-black text-indigo-600">{course.price.toLocaleString()}đ</span>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}