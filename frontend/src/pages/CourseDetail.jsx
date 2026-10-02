import { useParams, Link } from 'react-router-dom';
import { PlayCircle, CheckCircle, Clock, Star, Users, ShieldCheck } from 'lucide-react';

export default function CourseDetail() {
  const { id } = useParams();

  const course = {
    id,
    title: 'Khóa học React.js từ cơ bản đến nâng cao - Build 5 dự án thực tế',
    instructor: 'Nguyễn Văn A',
    category: 'Lập trình Web',
    price: 1299000,
    rating: 4.8,
    students: 1250,
    duration: '32 giờ',
    thumbnail: 'https://images.unsplash.com/photo-1633356122544-f134324a6cee?q=80&w=1200&auto=format&fit=crop',
    description: 'Nắm vững toàn bộ hệ sinh thái React.js thông qua việc xây dựng các dự án thực tế. Khóa học dành cho người mới bắt đầu đến khi có thể tự tin apply vị trí Fresher/Junior.',
    benefits: [
      'Hiểu rõ bản chất Component, State, Props',
      'Làm chủ React Hooks (useState, useEffect, custom hooks)',
      'Quản lý state toàn cục với Redux Toolkit',
      'Xây dựng 5 dự án thực tế đưa vào Portfolio'
    ],
    curriculum: [
      { title: 'Chương 1: Khởi động với React', lessons: 4, time: '2 giờ 15 phút' },
      { title: 'Chương 2: Hooks chuyên sâu', lessons: 8, time: '5 giờ 30 phút' },
      { title: 'Chương 3: React Router & API', lessons: 6, time: '4 giờ' },
    ]
  };

  return (
    <div className="bg-slate-50 min-h-screen pb-24 font-sans">
      {/* Banner / Hero Section */}
      <div className="bg-slate-900 text-white py-20 px-6 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-indigo-900/20 to-purple-900/20"></div>
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-12 relative z-10">
          <div className="lg:col-span-2 space-y-6">
            <div className="inline-block px-3 py-1 bg-indigo-500/20 border border-indigo-400/30 rounded-full text-[13px] font-bold text-indigo-300">
              {course.category}
            </div>
            <h1 className="text-4xl md:text-[42px] font-extrabold leading-tight tracking-tight">
              {course.title}
            </h1>
            <p className="text-slate-400 text-lg leading-relaxed">{course.description}</p>
            
            <div className="flex flex-wrap items-center gap-6 text-[15px] font-medium text-slate-300">
              <span className="flex items-center gap-1.5"><Star className="w-5 h-5 text-amber-400 fill-amber-400" /> {course.rating} đánh giá</span>
              <span className="flex items-center gap-1.5"><Users className="w-5 h-5 text-slate-400" /> {course.students} học viên</span>
              <span className="flex items-center gap-1.5"><Clock className="w-5 h-5 text-slate-400" /> {course.duration}</span>
            </div>
            <p className="text-slate-400">Giảng viên: <span className="text-white font-bold">{course.instructor}</span></p>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 mt-12 grid grid-cols-1 lg:grid-cols-3 gap-12">
        {/* Cột trái */}
        <div className="lg:col-span-2 space-y-10">
          <div className="bg-white p-8 md:p-10 rounded-[32px] border border-slate-200/60 shadow-[0_8px_30px_rgb(0,0,0,0.04)]">
            <h2 className="text-2xl font-extrabold text-slate-900 mb-8">Bạn sẽ học được gì?</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              {course.benefits.map((item, idx) => (
                <div key={idx} className="flex items-start gap-3.5">
                  <CheckCircle className="w-6 h-6 text-emerald-500 shrink-0" />
                  <span className="text-slate-600 font-medium leading-relaxed">{item}</span>
                </div>
              ))}
            </div>
          </div>

          <div>
            <h2 className="text-2xl font-extrabold text-slate-900 mb-6">Nội dung khóa học</h2>
            <div className="space-y-4">
              {course.curriculum.map((ch, idx) => (
                <div key={idx} className="bg-white p-6 rounded-[24px] border border-slate-200/60 shadow-sm flex items-center justify-between hover:border-indigo-200 hover:shadow-md transition-all cursor-pointer group">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-full bg-slate-50 flex items-center justify-center group-hover:bg-indigo-50 transition-colors">
                      <PlayCircle className="w-6 h-6 text-slate-400 group-hover:text-indigo-600" />
                    </div>
                    <div>
                      <h3 className="font-bold text-slate-900 text-lg">{ch.title}</h3>
                      <p className="text-[13px] font-medium text-slate-500 mt-0.5">{ch.lessons} bài học</p>
                    </div>
                  </div>
                  <span className="text-[15px] font-bold text-slate-400">{ch.time}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Cột phải: Khung đặt mua */}
        <div className="lg:col-span-1">
          <div className="bg-white p-6 rounded-[32px] border border-slate-200/80 shadow-[0_20px_40px_-15px_rgba(0,0,0,0.1)] sticky top-28 -mt-40 relative z-20">
            <div className="aspect-[16/10] bg-slate-100 rounded-[20px] overflow-hidden mb-8 relative group cursor-pointer border border-slate-100">
              <img src={course.thumbnail} alt={course.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
              <div className="absolute inset-0 bg-slate-900/20 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 backdrop-blur-sm">
                <PlayCircle className="w-16 h-16 text-white drop-shadow-lg" />
              </div>
            </div>
            
            <div className="text-[34px] font-black text-slate-900 mb-6 tracking-tight">
              {course.price === 0 ? 'Miễn phí' : `${course.price.toLocaleString()}đ`}
            </div>
            
            <Link to="/checkout" className="block w-full py-4 text-center text-[15px] text-white bg-indigo-600 rounded-full font-bold hover:bg-indigo-700 transition-all shadow-[0_8px_20px_rgba(79,70,229,0.25)] hover:shadow-[0_10px_25px_rgba(79,70,229,0.35)] hover:-translate-y-0.5 mb-4">
              Đăng ký học ngay
            </Link>
            
            <p className="text-center text-[13px] font-medium text-slate-500 mb-6">Đảm bảo hoàn tiền trong 30 ngày</p>
            
            <div className="space-y-4 text-[14px] font-semibold text-slate-700 pt-6 border-t border-slate-100">
              <p className="flex items-center gap-3"><ShieldCheck className="w-5 h-5 text-indigo-500" /> Truy cập trọn đời</p>
              <p className="flex items-center gap-3"><ShieldCheck className="w-5 h-5 text-indigo-500" /> Học trên mọi thiết bị</p>
              <p className="flex items-center gap-3"><ShieldCheck className="w-5 h-5 text-indigo-500" /> Chứng chỉ hoàn thành</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}