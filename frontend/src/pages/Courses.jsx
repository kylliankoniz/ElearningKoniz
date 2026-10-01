import { useState, useEffect } from 'react';
import axios from 'axios';

export default function Courses() {
  const [courses, setCourses] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  // Gọi API lấy danh sách khóa học khi trang được tải
  useEffect(() => {
    const fetchCourses = async () => {
      try {
        const response = await axios.get('http://localhost:5000/api/courses');
        setCourses(response.data);
      } catch (err) {
        setError('Không thể tải danh sách khóa học từ server.');
      } finally {
        setLoading(false);
      }
    };

    fetchCourses();
  }, []);

  return (
    <div className="max-w-7xl mx-auto px-6 py-12">
      <div className="mb-10">
        <h1 className="text-4xl font-extrabold tracking-tight text-gray-900 mb-2">Khám phá khóa học</h1>
        <p className="text-gray-500 font-medium">Nâng cao kỹ năng của bạn với các chương trình đào tạo chất lượng cao.</p>
      </div>

      {/* Trạng thái Loading / Lỗi */}
      {loading && <p className="text-gray-400 font-medium">Đang tải danh sách khóa học...</p>}
      {error && <p className="text-red-500 font-medium">{error}</p>}

      {/* Danh sách khóa học */}
      {!loading && !error && courses.length === 0 && (
        <div className="p-12 text-center bg-white rounded-3xl border border-gray-100">
          <p className="text-gray-400 font-medium">Chưa có khóa học nào trên hệ thống.</p>
        </div>
      )}

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {courses.map((course) => (
          <div key={course._id} className="bg-white rounded-[2rem] p-6 border border-gray-100 shadow-[0_4px_20px_rgb(0,0,0,0.02)] hover:shadow-md transition-all flex flex-col justify-between">
            <div>
              <div className="h-48 bg-gray-100 rounded-2xl mb-6 overflow-hidden flex items-center justify-center text-gray-400 font-semibold">
                {course.thumbnail ? (
                  <img src={course.thumbnail} alt={course.title} className="w-full h-full object-cover" />
                ) : (
                  <span>ElearningKoniz</span>
                )}
              </div>
              <span className="inline-block px-3 py-1 bg-gray-100 text-gray-800 text-xs font-bold rounded-full mb-3">
                {course.category}
              </span>
              <h3 className="text-xl font-bold text-gray-900 mb-2">{course.title}</h3>
              <p className="text-gray-500 text-sm line-clamp-2 mb-6">{course.description}</p>
            </div>
            
            <div className="flex items-center justify-between pt-4 border-t border-gray-50">
              <span className="text-lg font-extrabold text-black">
                {course.price === 0 ? 'Miễn phí' : `${course.price.toLocaleString()} đ`}
              </span>
              <button className="px-5 py-2.5 text-xs font-semibold text-white bg-black rounded-full hover:bg-gray-800 transition-colors">
                Xem chi tiết
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}