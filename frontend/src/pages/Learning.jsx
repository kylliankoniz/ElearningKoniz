import { useState } from 'react';
import { Link } from 'react-router-dom';
import { ChevronLeft, PlayCircle, CheckCircle, Circle, MonitorPlay, FileText } from 'lucide-react';

export default function Learning() {
  const curriculum = [
    {
      id: 1, title: 'Chương 1: Khởi động với React',
      lessons: [
        { id: 101, title: 'Giới thiệu khóa học', type: 'video', duration: '05:20', completed: true },
        { id: 102, title: 'Cài đặt môi trường (Node.js & Vite)', type: 'video', duration: '12:45', completed: true },
        { id: 103, title: 'Tài liệu tham khảo', type: 'document', duration: '5 trang', completed: false },
      ]
    },
    {
      id: 2, title: 'Chương 2: Hooks chuyên sâu',
      lessons: [
        { id: 201, title: 'Hiểu rõ useState', type: 'video', duration: '18:30', completed: false },
        { id: 202, title: 'useEffect và vòng đời Component', type: 'video', duration: '24:15', completed: false },
      ]
    }
  ];

  const [activeLesson, setActiveLesson] = useState(curriculum[0].lessons[1]);

  return (
    <div className="flex flex-col h-screen bg-white font-sans text-slate-900">
      {/* Header */}
      <header className="h-[72px] bg-slate-900 text-white flex items-center justify-between px-6 shrink-0 z-10 shadow-md">
        <div className="flex items-center gap-4">
          <Link to="/dashboard" className="text-slate-400 hover:text-white transition-colors bg-slate-800 p-2 rounded-full">
            <ChevronLeft className="w-5 h-5" />
          </Link>
          <h1 className="font-bold text-[15px] line-clamp-1 tracking-wide">
            Khóa học React.js từ cơ bản đến nâng cao
          </h1>
        </div>
        <div className="flex items-center gap-4 text-[13px] font-semibold">
          <span className="hidden md:inline text-slate-400">Tiến độ:</span>
          <div className="flex items-center gap-3">
            <div className="w-32 h-2 bg-slate-700 rounded-full overflow-hidden">
              <div className="bg-indigo-500 h-full rounded-full w-[40%]"></div>
            </div>
            <span className="text-indigo-400">40%</span>
          </div>
        </div>
      </header>

      {/* Workspace */}
      <div className="flex flex-1 overflow-hidden flex-col lg:flex-row">
        
        {/* Cột Video */}
        <div className="flex-1 flex flex-col overflow-y-auto bg-slate-50">
          <div className="w-full bg-slate-950 aspect-video flex items-center justify-center relative shadow-inner">
            <MonitorPlay className="w-16 h-16 text-slate-800" />
            <div className="absolute bottom-6 left-6 text-white font-semibold text-[13px] bg-black/40 px-4 py-2 rounded-xl backdrop-blur-md border border-white/10">
              Đang phát: {activeLesson.title}
            </div>
          </div>

          <div className="p-8 md:p-12 max-w-4xl">
            <h2 className="text-2xl font-extrabold text-slate-900 mb-6">{activeLesson.title}</h2>
            
            <div className="flex gap-8 border-b border-slate-200 mb-8">
              <button className="pb-4 font-bold text-[15px] text-indigo-600 border-b-2 border-indigo-600">Tổng quan</button>
              <button className="pb-4 font-bold text-[15px] text-slate-500 hover:text-slate-900 transition-colors">Hỏi đáp</button>
              <button className="pb-4 font-bold text-[15px] text-slate-500 hover:text-slate-900 transition-colors">Tài liệu đính kèm</button>
            </div>

            <p className="text-slate-600 leading-relaxed text-[15px] font-medium">
              Trong bài học này, chúng ta sẽ tìm hiểu cách thiết lập một dự án React hoàn toàn mới sử dụng Vite. 
              Vite mang lại tốc độ build cực kỳ nhanh, giúp quá trình phát triển trở nên mượt mà hơn rất nhiều so với Create React App truyền thống.
            </p>
          </div>
        </div>

        {/* Sidebar */}
        <div className="w-full lg:w-[400px] bg-white border-l border-slate-200 flex flex-col shrink-0 shadow-[-10px_0_30px_rgba(0,0,0,0.02)]">
          <div className="p-6 border-b border-slate-100 shrink-0">
            <h3 className="font-extrabold text-slate-900 text-[17px]">Nội dung khóa học</h3>
          </div>
          
          <div className="flex-1 overflow-y-auto">
            {curriculum.map((chapter) => (
              <div key={chapter.id} className="border-b border-slate-100">
                <div className="p-5 bg-slate-50/50">
                  <h4 className="font-bold text-slate-900 text-[14px]">{chapter.title}</h4>
                  <p className="text-[12px] text-slate-500 mt-1 font-semibold">0 / {chapter.lessons.length} bài đã hoàn thành</p>
                </div>
                
                <div className="p-2 space-y-1">
                  {chapter.lessons.map((lesson) => (
                    <button 
                      key={lesson.id}
                      onClick={() => setActiveLesson(lesson)}
                      className={`w-full text-left p-3 flex items-start gap-3.5 rounded-xl transition-all ${
                        activeLesson.id === lesson.id ? 'bg-indigo-50/80 border border-indigo-100/50' : 'hover:bg-slate-50 border border-transparent'
                      }`}
                    >
                      <div className="mt-0.5 shrink-0">
                        {lesson.completed ? (
                          <CheckCircle className="w-5 h-5 text-emerald-500" />
                        ) : (
                          <Circle className="w-5 h-5 text-slate-300" />
                        )}
                      </div>
                      
                      <div className="flex-1">
                        <p className={`text-[14px] font-semibold line-clamp-2 ${activeLesson.id === lesson.id ? 'text-indigo-700' : 'text-slate-700'}`}>
                          {lesson.title}
                        </p>
                        <div className="flex items-center gap-1.5 mt-1.5 text-[12px] text-slate-400 font-bold">
                          {lesson.type === 'video' ? <PlayCircle className="w-3.5 h-3.5" /> : <FileText className="w-3.5 h-3.5" />}
                          {lesson.duration}
                        </div>
                      </div>
                    </button>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}