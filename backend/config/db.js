const mongoose = require('mongoose');

const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGO_URI, {
      serverSelectionTimeoutMS: 5000, // Báo lỗi ngay sau 5s thay vì treo vĩnh viễn
      family: 4, // Bắt buộc dùng mạng IPv4 (sửa lỗi treo ngầm của Node.js)
    });
    console.log(`✅ MongoDB đã kết nối thành công: ${conn.connection.host}`);
  } catch (error) {
    console.error(`❌ Lỗi kết nối MongoDB: ${error.message}`);
    process.exit(1); 
  }
};

module.exports = connectDB;