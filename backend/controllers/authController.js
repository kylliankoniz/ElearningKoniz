const User = require('../models/User');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

// Hàm xử lý Đăng ký
const registerUser = async (req, res) => {
  try {
    const { name, email, password } = req.body;

    // 1. Kiểm tra xem người dùng đã tồn tại chưa
    const userExists = await User.findOne({ email });
    if (userExists) {
      return res.status(400).json({ message: 'Email này đã được sử dụng!' });
    }

    // 2. Mã hóa mật khẩu
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    // 3. Tạo user mới
    const user = await User.create({
      name,
      email,
      password: hashedPassword,
    });

    // 4. Trả kết quả về
    if (user) {
      res.status(201).json({
        _id: user.id,
        name: user.name,
        email: user.email,
        role: user.role,
        message: 'Đăng ký tài khoản thành công!'
      });
    }
  } catch (error) {
    console.error("Lỗi đăng ký:", error);
    res.status(500).json({ message: 'Lỗi server', error: error.message });
  }
};

// Hàm xử lý Đăng nhập
const loginUser = async (req, res) => {
  try {
    const { email, password } = req.body;

    // 1. Tìm user theo email
    const user = await User.findOne({ email });

    // 2. Kiểm tra user có tồn tại VÀ mật khẩu có khớp không
    if (user && (await bcrypt.compare(password, user.password))) {
      // 3. Tạo JWT Token
      const token = jwt.sign(
        { id: user._id, role: user.role }, 
        process.env.JWT_SECRET, 
        { expiresIn: '30d' }
      );

      res.json({
        _id: user.id,
        name: user.name,
        email: user.email,
        role: user.role,
        token: token,
        message: 'Đăng nhập thành công!'
      });
    } else {
      res.status(401).json({ message: 'Email hoặc mật khẩu không chính xác!' });
    }
  } catch (error) {
    console.error("Lỗi đăng nhập:", error);
    res.status(500).json({ message: 'Lỗi server', error: error.message });
  }
};

// BẮT BUỘC PHẢI CÓ DÒNG NÀY ĐỂ TRÁNH LỖI TYPEERROR Ở ROUTER
module.exports = { registerUser, loginUser };