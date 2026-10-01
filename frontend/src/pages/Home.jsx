export default function Home() {
  return (
    <div className="min-h-screen bg-[#F8F9FA]">
      <Navbar />
      
      <main className="flex flex-col items-center justify-center pt-32 px-4 text-center">
        <h1 className="text-5xl md:text-6xl font-extrabold tracking-tight text-gray-900 mb-6">
          Không gian học tập <span className="text-blue-600">tối giản</span>
        </h1>
        <p className="text-lg text-gray-500 max-w-2xl mb-10 font-medium">
          Khám phá các khóa học chất lượng cao được thiết kế dành riêng cho bạn. Nâng cấp bản thân mỗi ngày với ElearningKoniz.
        </p>
        <button className="px-8 py-4 text-lg font-bold text-white bg-blue-600 rounded-full hover:bg-blue-700 transition-colors shadow-lg hover:shadow-xl transform hover:-translate-y-1">
          Khám phá khóa học
        </button>
      </main>
    </div>
  );
}