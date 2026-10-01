import { Navigate, Outlet } from 'react-router-dom';

export default function PrivateRoute() {
  const user = localStorage.getItem('user');
  
  // Nếu chưa đăng nhập, đá văng về trang /login
  if (!user) {
    return <Navigate to="/login" replace />;
  }

  // Nếu đã đăng nhập, cho phép đi tiếp vào trang con
  return <Outlet />;
}