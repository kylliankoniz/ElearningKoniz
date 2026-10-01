const Course = require('../models/Course');

// @desc    Lấy tất cả khóa học trên hệ thống
// @route   GET /api/courses
// @access  Public
const getCourses = async (req, res) => {
  try {
    const courses = await Course.find({}).populate('instructor', 'name email');
    res.json(courses);
  } catch (error) {
    res.status(500).json({ message: 'Lỗi server', error: error.message });
  }
};

// @desc    Tạo khóa học mới (Dành cho Giảng viên/Admin)
// @route   POST /api/courses
// @access  Private
const createCourse = async (req, res) => {
  try {
    const { title, description, price, category, thumbnail } = req.body;

    const course = await Course.create({
      title,
      description,
      price,
      category,
      thumbnail,
      instructor: req.body.instructorId || "60d0fe4f5311236168a109ca", // Tạm thời gán cứng hoặc lấy từ user đăng nhập sau
    });

    res.status(201).json({
      message: 'Tạo khóa học thành công!',
      course,
    });
  } catch (error) {
    res.status(500).json({ message: 'Lỗi server', error: error.message });
  }
};

module.exports = { getCourses, createCourse };