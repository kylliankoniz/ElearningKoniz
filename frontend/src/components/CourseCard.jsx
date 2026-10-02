import { Link } from 'react-router-dom';
import { Clock, Star } from 'lucide-react';

export default function CourseCard({ course }) {
  return (
    <Link to={`/courses/${course.id}`} className="group flex flex-col bg-white rounded-[24px] border border-slate-100 overflow-hidden hover:shadow-[0_20px_40px_-15px_rgba(0,0,0,0.05)] transition-all duration-500 hover:-translate-y-1.5 h-full relative">
      
      {/* Thumbnail */}
      <div className="aspect-[16/10] bg-slate-100 relative overflow-hidden shrink-0">
        <img 
          src={course.thumbnail} 
          alt={course.title} 
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
        />
        <div className="absolute top-4 left-4 bg-white/80 backdrop-blur-md px-3.5 py-1.5 rounded-full text-[11px] font-bold tracking-wide text-slate-900 uppercase shadow-sm border border-white/50">
          {course.category}
        </div>
      </div>

      {/* Nội dung */}
      <div className="p-6 flex flex-col flex-1">
        <h3 className="font-extrabold text-slate-900 text-[17px] leading-snug mb-2 line-clamp-2 group-hover:text-indigo-600 transition-colors">
          {course.title}
        </h3>
        <p className="text-[13px] text-slate-500 font-semibold mb-6">{course.instructor}</p>
        
        {/* Khu vực giá & Meta đẩy xuống đáy bằng mt-auto */}
        <div className="mt-auto pt-5 border-t border-slate-100/80 flex items-center justify-between">
          <div className="flex items-center gap-3 text-[13px] font-bold text-slate-400">
            <span className="flex items-center gap-1"><Star className="w-4 h-4 text-amber-400 fill-amber-400" /> {course.rating}</span>
            <span className="flex items-center gap-1"><Clock className="w-4 h-4" /> {course.duration}</span>
          </div>
          <span className="text-[17px] font-black text-indigo-600">
            {course.price === 0 ? 'Miễn phí' : `${course.price.toLocaleString()}đ`}
          </span>
        </div>
      </div>
    </Link>
  );
}