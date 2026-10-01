const mongoose = require('mongoose');

const courseSchema = new mongoose.Schema({
  title: {
    type: String,
    required: [true, 'Vui lòng nhập tên khóa học'],
    trim: true,
  },
  description: {
    type: String,
    required: [true, 'Vui lòng nhập mô tả khóa học'],
  },
  price: {
    type: Number,
    required: [true, 'Vui lòng nhập giá khóa học'],
    default: 0,
  },
  thumbnail: {
    type: String,
    default: 'https://via.placeholder.com/400x225', // Ảnh mặc định tạm thời
  },
  category: {
    type: String,
    required: [true, 'Vui lòng chọn danh mục'],
  },
  instructor: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User', // Liên kết tới bảng User (giảng viên tạo khóa học)
    required: true,
  },
  lessonsCount: {
    type: Number,
    default: 0,
  }
}, { timestamps: true });

module.exports = mongoose.model('Course', courseSchema);