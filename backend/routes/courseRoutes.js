const express = require('express');
const router = express.Router();
const { getCourses, createCourse } = require('../controllers/courseController');

// GET /api/courses (Xem danh sách)
router.get('/', getCourses);

// POST /api/courses (Thêm khóa học mới)
router.post('/', createCourse);

module.exports = router;