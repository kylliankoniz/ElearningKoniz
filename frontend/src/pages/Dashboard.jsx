export default function Dashboard() {
  const user = JSON.parse(localStorage.getItem('user'));

  return (
    <div className="pt-12 px-4 max-w-6xl mx-auto">
      <div className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100">
        <h1 className="text-3xl font-extrabold text-gray-900 mb-2">
          Tổng quan học tập
        </h1>
        <p className="text-gray-500 mb-8 font-medium">
          Chào mừng <span className="text-black font-bold">{user?.name}</span> quay trở lại. Hãy tiếp tục hành trình của bạn!
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="p-6 bg-blue-50 rounded-2xl border border-blue-100 transition-transform hover:-translate-y-1">
            <h3 className="text-blue-800 font-semibold mb-1 text-sm">Khóa học đang học</h3>
            <p className="text-4xl font-black text-blue-600">0</p>
          </div>
          <div className="p-6 bg-green-50 rounded-2xl border border-green-100 transition-transform hover:-translate-y-1">
            <h3 className="text-green-800 font-semibold mb-1 text-sm">Đã hoàn thành</h3>
            <p className="text-4xl font-black text-green-600">0</p>
          </div>
          <div className="p-6 bg-purple-50 rounded-2xl border border-purple-100 transition-transform hover:-translate-y-1">
            <h3 className="text-purple-800 font-semibold mb-1 text-sm">Chứng chỉ đạt được</h3>
            <p className="text-4xl font-black text-purple-600">0</p>
          </div>
        </div>
      </div>
    </div>
  );
}