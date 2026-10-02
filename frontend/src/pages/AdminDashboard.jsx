import { useState } from 'react';
import { Users, BookOpen, DollarSign, CheckCircle, XCircle, ShieldCheck } from 'lucide-react';

export default function AdminDashboard() {
  // Dữ liệu giả lập cho Admin
  const stats = [
    { id: 1, title: 'Tổng doanh thu', value: '145.500.000đ', icon: <DollarSign className="w-6 h-6 text-green-600" />, bg: 'bg-green-50' },
    { id: 2, title: 'Tổng người dùng', value: '2,451', icon: <Users className="w-6 h-6 text-blue-600" />, bg: 'bg-blue-50' },
    { id: 3, title: 'Tổng khóa học', value: '86', icon: <BookOpen className="w-6 h-6 text-purple-600" />, bg: 'bg-purple-50' },
  ];

  const [pendingCourses, setPendingCourses] = useState([
    { id: 101, title: 'Microservices với Node.js & RabbitMQ', instructor: 'Lê Hoàng C', price: '1.200.000đ', date: '02/10/2026' },
    { id: 102, title: 'Thiết kế UI/UX Nâng cao: Animation', instructor: 'Trần Thị B', price: '850.000đ', date: '01/10/2026' },
  ]);

  const handleApprove = (id) => {
    // Logic ẩn khóa học khỏi danh sách chờ duyệt sau khi click
    setPendingCourses(pendingCourses.filter(course => course.id !== id));
  };

  return (
    <div className="bg-gray-50 min-h-screen pb-24">
      <div className="max-w-7xl mx-auto px-6 pt-12">
        
        {/* Header */}
        <div className="flex items-center gap-3 mb-10">
          <div className="p-3 bg-gray-900 rounded-2xl">
            <ShieldCheck className="w-8 h-8 text-white" />
          </div>
          <div>
            <h1 className="text-3xl font-extrabold text-gray-900">Trung tâm Quản trị</h1>
            <p className="text-gray-500 font-medium mt-1">Kiểm soát toàn bộ hoạt động của nền tảng ElearningKoniz.</p>
          </div>
        </div>

        {/* Khối Thống kê */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {stats.map((stat) => (
            <div key={stat.id} className="bg-white p-6 rounded-3xl border border-gray-100 shadow-sm flex items-center gap-6">
              <div className={`w-16 h-16 rounded-2xl flex items-center justify-center shrink-0 ${stat.bg}`}>
                {stat.icon}
              </div>
              <div>
                <p className="text-sm font-bold text-gray-400 mb-1">{stat.title}</p>
                <p className="text-2xl font-black text-gray-900">{stat.value}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Khu vực Kiểm duyệt Khóa học */}
        <div className="bg-white rounded-3xl border border-gray-100 shadow-sm overflow-hidden">
          <div className="p-6 border-b border-gray-100 flex items-center justify-between bg-gray-50/50">
            <div>
              <h2 className="text-xl font-bold text-gray-900">Khóa học chờ duyệt</h2>
              <p className="text-sm text-gray-500 font-medium mt-1">Các khóa học giảng viên vừa xuất bản cần bạn kiểm tra.</p>
            </div>
            <span className="bg-orange-100 text-orange-700 text-sm font-bold px-4 py-1.5 rounded-full">
              {pendingCourses.length} yêu cầu
            </span>
          </div>
          
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="border-b border-gray-100 text-sm font-bold text-gray-400 uppercase tracking-wider">
                  <th className="p-6">Tên khóa học</th>
                  <th className="p-6">Giảng viên</th>
                  <th className="p-6">Giá dự kiến</th>
                  <th className="p-6">Ngày gửi</th>
                  <th className="p-6 text-right">Hành động</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-50">
                {pendingCourses.length === 0 ? (
                  <tr>
                    <td colSpan="5" className="p-10 text-center text-gray-500 font-medium">
                      Không có khóa học nào đang chờ duyệt.
                    </td>
                  </tr>
                ) : (
                  pendingCourses.map((course) => (
                    <tr key={course.id} className="hover:bg-gray-50/50 transition-colors">
                      <td className="p-6 font-bold text-gray-900">{course.title}</td>
                      <td className="p-6 font-medium text-gray-600">{course.instructor}</td>
                      <td className="p-6 font-bold text-blue-600">{course.price}</td>
                      <td className="p-6 font-medium text-gray-500">{course.date}</td>
                      <td className="p-6">
                        <div className="flex items-center justify-end gap-3">
                          <button 
                            onClick={() => handleApprove(course.id)}
                            className="flex items-center gap-1.5 px-4 py-2 bg-green-50 text-green-700 hover:bg-green-100 font-bold rounded-full transition-colors"
                          >
                            <CheckCircle className="w-4 h-4" /> Duyệt
                          </button>
                          <button className="flex items-center gap-1.5 px-4 py-2 bg-red-50 text-red-700 hover:bg-red-100 font-bold rounded-full transition-colors">
                            <XCircle className="w-4 h-4" /> Từ chối
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))
                )}
              </tbody>
            </table>
          </div>
        </div>

      </div>
    </div>
  );
}