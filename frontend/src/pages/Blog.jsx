import { ArrowRight } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

export default function Blog() {
  const { t } = useLanguage();

  const posts = [
    { id: 1, title: 'React 19 có gì mới? Những tính năng bạn cần biết', category: 'Frontend', date: '12 Tháng 10, 2026', image: 'https://images.unsplash.com/photo-1633356122544-f134324a6cee?q=80&w=800&auto=format&fit=crop' },
    { id: 2, title: 'Hướng dẫn tối ưu hóa hiệu suất MongoDB cho dự án lớn', category: 'Backend', date: '08 Tháng 10, 2026', image: 'https://images.unsplash.com/photo-1555099962-4199c345e5dd?q=80&w=800&auto=format&fit=crop' },
    { id: 3, title: 'Lộ trình trở thành UI/UX Designer từ con số 0', category: 'Design', date: '01 Tháng 10, 2026', image: 'https://images.unsplash.com/photo-1611162617474-5b21e879e113?q=80&w=800&auto=format&fit=crop' },
  ];

  return (
    <div className="bg-slate-50 min-h-screen pb-24 font-sans">
      <div className="max-w-7xl mx-auto px-6 pt-20">
        <div className="mb-12">
          <h1 className="text-4xl md:text-5xl font-extrabold text-slate-900 tracking-tight mb-4">{t.blog_title}</h1>
          <p className="text-lg text-slate-500 font-medium">{t.blog_desc}</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {posts.map((post) => (
            <div key={post.id} className="bg-white rounded-[32px] overflow-hidden border border-slate-200/60 shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-xl transition-all duration-500 group cursor-pointer flex flex-col hover:-translate-y-1.5">
              <div className="aspect-[16/10] overflow-hidden relative">
                <img src={post.image} alt={post.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-md px-4 py-1.5 rounded-full text-xs font-bold text-slate-900 uppercase">
                  {post.category}
                </div>
              </div>
              <div className="p-8 flex flex-col flex-1">
                <p className="text-[13px] font-bold text-slate-400 mb-3">{post.date}</p>
                <h3 className="text-[20px] font-bold text-slate-900 mb-6 line-clamp-2 group-hover:text-indigo-600 transition-colors leading-snug">{post.title}</h3>
                <div className="mt-auto flex items-center gap-2 text-[14px] font-bold text-indigo-600 group-hover:gap-3 transition-all">
                  {t.read_more} <ArrowRight className="w-4 h-4" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}