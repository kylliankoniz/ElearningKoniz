import { Link } from 'react-router-dom';
import { CreditCard, Wallet, ShieldCheck } from 'lucide-react';

export default function Checkout() {
  return (
    <div className="bg-slate-50 min-h-screen pb-24 font-sans">
      <div className="max-w-6xl mx-auto px-6 pt-16">
        <h1 className="text-3xl font-extrabold text-slate-900 mb-10 tracking-tight">Thanh toán an toàn</h1>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Cột trái */}
          <div className="lg:col-span-2 space-y-8">
            <div className="bg-white p-8 md:p-10 rounded-[32px] border border-slate-200/60 shadow-[0_8px_30px_rgb(0,0,0,0.04)]">
              <h2 className="text-xl font-bold text-slate-900 mb-8">Chọn phương thức thanh toán</h2>
              
              <div className="space-y-5">
                {/* Lựa chọn 1: Thẻ quốc tế */}
                <label className="flex items-start gap-4 p-6 rounded-[24px] border-2 border-indigo-600 bg-indigo-50/30 cursor-pointer transition-all shadow-sm">
                  <input type="radio" name="payment" className="mt-1 w-5 h-5 text-indigo-600 focus:ring-indigo-500 accent-indigo-600" defaultChecked />
                  <div className="flex-1">
                    <div className="flex items-center justify-between mb-4">
                      <span className="font-bold text-slate-900 text-[15px]">Thẻ Tín dụng / Ghi nợ (Stripe)</span>
                      <CreditCard className="w-7 h-7 text-indigo-600" />
                    </div>
                    <div className="space-y-4">
                      <input type="text" placeholder="Số thẻ (Card number)" className="w-full px-5 py-3.5 bg-white border border-slate-200 focus:border-indigo-500 focus:ring-4 focus:ring-indigo-100 rounded-2xl font-medium outline-none transition-all" />
                      <div className="grid grid-cols-2 gap-4">
                        <input type="text" placeholder="MM/YY" className="w-full px-5 py-3.5 bg-white border border-slate-200 focus:border-indigo-500 focus:ring-4 focus:ring-indigo-100 rounded-2xl font-medium outline-none transition-all" />
                        <input type="text" placeholder="CVC" className="w-full px-5 py-3.5 bg-white border border-slate-200 focus:border-indigo-500 focus:ring-4 focus:ring-indigo-100 rounded-2xl font-medium outline-none transition-all" />
                      </div>
                    </div>
                  </div>
                </label>

                {/* Lựa chọn 2: VNPay/MoMo */}
                <label className="flex items-center justify-between p-6 rounded-[24px] border-2 border-slate-100 hover:border-slate-200 cursor-pointer transition-all">
                  <div className="flex items-center gap-4">
                    <input type="radio" name="payment" className="w-5 h-5 text-indigo-600 focus:ring-indigo-500 accent-indigo-600" />
                    <span className="font-bold text-slate-700 text-[15px]">Thanh toán qua VNPay / MoMo</span>
                  </div>
                  <Wallet className="w-7 h-7 text-slate-400" />
                </label>
              </div>
            </div>
          </div>

          {/* Cột phải (Sticky) */}
          <div className="lg:col-span-1">
            <div className="bg-white p-8 rounded-[32px] border border-slate-200/80 shadow-[0_20px_40px_-15px_rgba(0,0,0,0.1)] sticky top-28">
              <h3 className="text-lg font-bold text-slate-900 mb-6">Tóm tắt đơn hàng</h3>
              
              <div className="flex gap-4 mb-6 pb-6 border-b border-slate-100">
                <img src="https://images.unsplash.com/photo-1633356122544-f134324a6cee?q=80&w=200&auto=format&fit=crop" alt="Thumbnail" className="w-20 h-16 object-cover rounded-xl shadow-sm" />
                <div>
                  <h4 className="font-bold text-slate-900 text-[14px] line-clamp-2 leading-snug">Khóa học React.js từ cơ bản đến nâng cao</h4>
                  <p className="text-[13px] font-medium text-slate-500 mt-1.5">Giảng viên: Nguyễn Văn A</p>
                </div>
              </div>

              <div className="space-y-4 mb-6 pb-6 border-b border-slate-100 text-[14px] font-medium">
                <div className="flex justify-between text-slate-500">
                  <span>Giá gốc:</span>
                  <span>1.299.000đ</span>
                </div>
                <div className="flex justify-between text-emerald-600">
                  <span>Giảm giá:</span>
                  <span>-0đ</span>
                </div>
              </div>

              <div className="flex justify-between items-center mb-8">
                <span className="font-bold text-slate-900">Tổng cộng:</span>
                <span className="text-[26px] font-black text-indigo-600 tracking-tight">1.299.000đ</span>
              </div>

              <Link to="/dashboard" className="block w-full py-4 text-center text-[15px] text-white bg-indigo-600 rounded-full font-bold hover:bg-indigo-700 transition-all shadow-[0_8px_20px_rgba(79,70,229,0.25)] hover:shadow-[0_10px_25px_rgba(79,70,229,0.35)] hover:-translate-y-0.5 mb-5">
                Hoàn tất thanh toán
              </Link>
              
              <div className="flex justify-center items-center gap-2 text-[13px] font-semibold text-slate-400">
                <ShieldCheck className="w-4 h-4 text-emerald-500" />
                Mã hóa bảo mật 256-bit SSL
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}