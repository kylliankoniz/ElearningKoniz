import { createContext, useState, useContext } from 'react';

const LanguageContext = createContext();

const dictionary = {
  VI: {
    // Navbar & Chung
    explore: 'Khám phá', about: 'Về chúng tôi', instructors: 'Giảng viên', blog: 'Blog', dashboard: 'Bảng điều khiển', create: 'Tạo khóa học', admin: 'Quản trị viên', login: 'Đăng nhập', register: 'Đăng ký', account: 'Tài khoản', view_profile: 'Xem hồ sơ', read_more: 'Đọc bài viết',
    
    // Trang chủ (Home)
    home_badge: 'Nền tảng học tập thế hệ mới', home_title: 'Học tập không giới hạn', home_subtitle: 'cùng', home_desc: 'Trải nghiệm không gian giáo dục tối giản, bứt phá giới hạn bản thân với các khóa học chất lượng cao từ những chuyên gia hàng đầu.', home_btn_explore: 'Khám phá khóa học ngay', home_btn_become: 'Trở thành giảng viên',

    // Về chúng tôi (About)
    about_title: 'Sứ mệnh của', about_desc: 'Chúng tôi tin rằng giáo dục chất lượng cao phải có thể tiếp cận được bởi tất cả mọi người. ElearningKoniz được xây dựng để phá vỡ mọi rào cản về không gian và thời gian, mang kiến thức từ các chuyên gia hàng đầu đến thẳng màn hình của bạn.',
    about_stat1: 'Học viên tin dùng', about_stat2: 'Khóa học chất lượng',
    about_val1_title: 'Chất lượng hàng đầu', about_val1_desc: 'Mọi khóa học đều trải qua quy trình kiểm duyệt khắt khe để đảm bảo nội dung chuẩn xác và thực tế nhất.',
    about_val2_title: 'Học tập tốc độ cao', about_val2_desc: 'Trải nghiệm nền tảng mượt mà, video stream không độ trễ, tập trung 100% vào việc tiếp thu kiến thức.',
    about_val3_title: 'Uy tín & Bảo mật', about_val3_desc: 'Cam kết hoàn tiền trong 30 ngày và bảo mật thông tin học tập, thanh toán bằng tiêu chuẩn mã hóa quốc tế.',

    // Giảng viên (Instructors)
    inst_badge: 'Chuyên gia hàng đầu', inst_title: 'Đội ngũ giảng viên thực chiến', inst_desc: 'Học hỏi trực tiếp từ những kỹ sư, nhà thiết kế đang làm việc tại các tập đoàn công nghệ lớn nhất thế giới.',
    inst_courses: 'khóa',

    // Blog
    blog_title: 'Blog & Kiến thức', blog_desc: 'Cập nhật tin tức công nghệ và kỹ năng phát triển bản thân.',

    // Khóa học
    courses_title: 'Khám phá khóa học', 
    courses_desc: 'Lựa chọn lộ trình phù hợp để bứt phá kỹ năng của bạn.', 
    search_placeholder: 'Bạn muốn học gì hôm nay?', 
    dash_welcome: 'Chào mừng trở lại, tiếp tục việc học của bạn nhé!', 
    stat_learning: 'Đang học', 
    stat_completed: 'Hoàn thành', 
    stat_cert: 'Chứng chỉ', 
    my_courses: 'Khóa học của tôi', 
    progress: 'Tiến độ', 
    continue_learning: 'Tiếp tục học', 
    course_count: 'khóa', 
    cert_count: 'cái',
  },
  EN: {
    // Navbar & General
    explore: 'Explore', about: 'About Us', instructors: 'Instructors', blog: 'Blog', dashboard: 'Dashboard', create: 'Create Course', admin: 'Admin', login: 'Login', register: 'Sign Up', account: 'Account', view_profile: 'View Profile', read_more: 'Read Article',
    
    // Home
    home_badge: 'Next-gen learning platform', home_title: 'Limitless Learning', home_subtitle: 'with', home_desc: 'Experience a minimalist educational space, push your limits with high-quality courses from top industry experts.', home_btn_explore: 'Explore courses now', home_btn_become: 'Become an instructor',

    // About
    about_title: 'The Mission of', about_desc: 'We believe high-quality education should be accessible to everyone. ElearningKoniz is built to break all barriers of space and time, bringing knowledge from top experts directly to your screen.',
    about_stat1: 'Trusted Learners', about_stat2: 'Quality Courses',
    about_val1_title: 'Top Quality', about_val1_desc: 'Every course undergoes a rigorous review process to ensure accurate and practical content.',
    about_val2_title: 'High-speed Learning', about_val2_desc: 'Experience a smooth platform, zero-latency video streaming, focus 100% on absorbing knowledge.',
    about_val3_title: 'Trust & Security', about_val3_desc: '30-day money-back guarantee and secure learning information, encrypted payment standards.',

    // Instructors
    inst_badge: 'Top Experts', inst_title: 'Practical Teaching Team', inst_desc: 'Learn directly from engineers and designers working at the world\'s largest tech corporations.',
    inst_courses: 'courses',

    // Blog
    blog_title: 'Blog & Knowledge', blog_desc: 'Update tech news and personal development skills.',
    // Courses
    courses_title: 'Explore Courses', 
    courses_desc: 'Choose the right path to breakthrough your skills.', 
    search_placeholder: 'What do you want to learn today?', 
    dash_welcome: 'Welcome back, let\'s continue your learning journey!', 
    stat_learning: 'Learning', 
    stat_completed: 'Completed', 
    stat_cert: 'Certificates', 
    my_courses: 'My Courses', 
    progress: 'Progress', 
    continue_learning: 'Continue Learning', 
    course_count: 'courses', cert_count: 'certs',
  }
};

export function LanguageProvider({ children }) {
  const [lang, setLang] = useState('VI');
  const toggleLanguage = () => setLang((prev) => (prev === 'VI' ? 'EN' : 'VI'));
  const t = dictionary[lang];

  return (
    <LanguageContext.Provider value={{ lang, toggleLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export const useLanguage = () => useContext(LanguageContext);