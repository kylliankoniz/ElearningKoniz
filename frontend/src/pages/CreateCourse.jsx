import { useState } from 'react';
import { UploadCloud, Plus, Trash2, Save, PlayCircle } from 'lucide-react';

export default function CreateCourse() {
  const [curriculum, setCurriculum] = useState([
    { id: 1, title: 'Chương 1: Giới thiệu', lessons: ['Tổng quan khóa học'] }
  ]);

  const addChapter = () => {
    setCurriculum([...curriculum, { id: Date.now(), title: 'Chương mới', lessons: [] }]);
  };

  return (
    <div className="bg-gray-50 min-h-screen pb-24">
      <div className="max-w-5xl mx-auto px-6 pt-12">
        
        <div className="flex items-center justify-between mb-8">
          <div>
            <h1 className="text-3xl font-extrabold text-gray-900">Tạo khóa học mới</h1>
            <p className="text-gray-500 font-medium mt-1">Điền thông tin chi tiết và tải lên các bài giảng của bạn.</p>
          </div>
          <button className="flex items-center gap-2 px-6 py-3 bg-blue-600 text-white font-bold rounded-full hover:bg-blue-700 transition-all shadow-md">
            <Save className="w-5 h-5" />
            Lưu & Xuất bản
          </button>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Cột trái: Thông tin cơ bản */}
          <div className="lg:col-span-2 space-y-6">
            <div className="bg-white p-8 rounded-3xl border border-gray-100 shadow-sm space-y-6">
              <h2 className="text-xl font-bold text-gray-900 border-b border-gray-100 pb-4">Thông tin cơ bản</h2>
              
              <div>
                <label className="block text-sm font-bold text-gray-700 mb-2">Tên khóa học</label>
                <input type="text" placeholder="VD: Khóa học React.js thực chiến..." className="w-full px-4 py-3.5 bg-gray-50 border-transparent focus:bg-white focus:border-blue-500 focus:ring-4 focus:ring-blue-100 rounded-2xl font-medium transition-all outline-none" />
              </div>

              <div className="grid grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-bold text-gray-700 mb-2">Giá bán (VNĐ)</label>
                  <input type="number" placeholder="VD: 1299000" className="w-full px-4 py-3.5 bg-gray-50 border-transparent focus:bg-white focus:border-blue-500 focus:ring-4 focus:ring-blue-100 rounded-2xl font-medium transition-all outline-none" />
                </div>
                <div>
                  <label className="block text-sm font-bold text-gray-700 mb-2">Danh mục</label>
                  <select className="w-full px-4 py-3.5 bg-gray-50 border-transparent focus:bg-white focus:border-blue-500 focus:ring-4 focus:ring-blue-100 rounded-2xl font-medium text-gray-700 transition-all outline-none">
                    <option>Lập trình Web</option>
                    <option>Thiết kế UI/UX</option>
                    <option>Marketing</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-sm font-bold text-gray-700 mb-2">Mô tả chi tiết</label>
                <textarea rows="4" placeholder="Khóa học này cung cấp kiến thức về..." className="w-full px-4 py-3.5 bg-gray-50 border-transparent focus:bg-white focus:border-blue-500 focus:ring-4 focus:ring-blue-100 rounded-2xl font-medium transition-all outline-none"></textarea>
              </div>
            </div>

            {/* Trình quản lý nội dung (Curriculum Builder) */}
            <div className="bg-white p-8 rounded-3xl border border-gray-100 shadow-sm">
              <div className="flex items-center justify-between border-b border-gray-100 pb-4 mb-6">
                <h2 className="text-xl font-bold text-gray-900">Nội dung chương trình</h2>
                <button onClick={addChapter} className="flex items-center gap-2 text-sm font-bold text-blue-600 hover:text-blue-700 bg-blue-50 px-4 py-2 rounded-full">
                  <Plus className="w-4 h-4" /> Thêm chương
                </button>
              </div>

              <div className="space-y-6">
                {curriculum.map((chapter, index) => (
                  <div key={chapter.id} className="border border-gray-200 rounded-2xl p-5 bg-gray-50">
                    <div className="flex items-center justify-between mb-4">
                      <input type="text" defaultValue={chapter.title} className="font-bold text-gray-900 bg-transparent border-none outline-none w-full" />
                      <button className="text-gray-400 hover:text-red-500 transition-colors"><Trash2 className="w-5 h-5" /></button>
                    </div>
                    
                    <div className="space-y-3 mb-4">
                      {chapter.lessons.map((lesson, idx) => (
                        <div key={idx} className="flex items-center gap-3 bg-white p-3 rounded-xl border border-gray-100 shadow-sm">
                          <PlayCircle className="w-5 h-5 text-gray-400" />
                          <span className="text-sm font-semibold text-gray-700 flex-1">{lesson}</span>
                        </div>
                      ))}
                    </div>

                    <button className="flex items-center gap-2 text-sm font-bold text-gray-500 hover:text-black transition-colors">
                      <Plus className="w-4 h-4" /> Thêm bài giảng
                    </button>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Cột phải: Media & Cài đặt */}
          <div className="space-y-6">
            <div className="bg-white p-6 rounded-3xl border border-gray-100 shadow-sm">
              <h2 className="text-base font-bold text-gray-900 mb-4">Ảnh bìa khóa học</h2>
              <div className="border-2 border-dashed border-gray-200 rounded-2xl p-8 flex flex-col items-center justify-center text-center hover:bg-gray-50 hover:border-blue-300 transition-all cursor-pointer group">
                <UploadCloud className="w-10 h-10 text-gray-400 group-hover:text-blue-500 mb-3 transition-colors" />
                <p className="text-sm font-bold text-gray-700">Tải ảnh lên</p>
                <p className="text-xs text-gray-500 mt-1 font-medium">PNG, JPG, WEBP (Max 2MB)</p>
              </div>
            </div>
            
            <div className="bg-white p-6 rounded-3xl border border-gray-100 shadow-sm">
              <h2 className="text-base font-bold text-gray-900 mb-4">Video giới thiệu</h2>
              <div className="border-2 border-dashed border-gray-200 rounded-2xl p-8 flex flex-col items-center justify-center text-center hover:bg-gray-50 hover:border-blue-300 transition-all cursor-pointer group">
                <UploadCloud className="w-10 h-10 text-gray-400 group-hover:text-blue-500 mb-3 transition-colors" />
                <p className="text-sm font-bold text-gray-700">Tải video lên</p>
                <p className="text-xs text-gray-500 mt-1 font-medium">MP4, WebM (Max 50MB)</p>
              </div>
            </div>
          </div>
          
        </div>
      </div>
    </div>
  );
}