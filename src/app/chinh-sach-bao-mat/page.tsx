import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function ChinhSachBaoMatPage() {
  return (
    <>
      <Navbar />
      <main className="pt-24 pb-20">
        <article className="max-w-3xl mx-auto px-6">
          <h1 className="font-display font-extrabold text-3xl md:text-4xl text-slate-900 tracking-tight mb-3">
            Chính sách bảo mật
          </h1>
          <p className="text-sm text-slate-400 mb-10">
            Cập nhật lần cuối: 28/03/2026
          </p>

          <div className="prose prose-slate max-w-none prose-headings:font-display prose-headings:font-bold prose-headings:tracking-tight prose-h2:text-xl prose-h2:mt-10 prose-h2:mb-4 prose-p:text-slate-600 prose-p:leading-relaxed prose-li:text-slate-600">
            <h2>1. Giới thiệu</h2>
            <p>
              AutoFlow VN (&quot;chúng tôi&quot;, &quot;của chúng tôi&quot;) cam kết bảo vệ
              quyền riêng tư của bạn. Chính sách bảo mật này giải thích cách
              chúng tôi thu thập, sử dụng, và bảo vệ thông tin cá nhân khi bạn
              sử dụng website autoflowvn.com và các dịch vụ liên quan.
            </p>

            <h2>2. Thông tin chúng tôi thu thập</h2>
            <p>
              Chúng tôi thu thập thông tin bạn cung cấp trực tiếp qua các form
              trên website:
            </p>
            <ul>
              <li>
                <strong>Thông tin liên hệ:</strong> Họ tên, số điện thoại/Zalo,
                tên công ty
              </li>
              <li>
                <strong>Thông tin doanh nghiệp:</strong> Ngành nghề, quy mô
                team, vấn đề đang gặp
              </li>
              <li>
                <strong>Dữ liệu sử dụng:</strong> Trang bạn truy cập, thời
                gian trên trang, hành vi tương tác (qua Google Analytics)
              </li>
            </ul>
            <p>
              Chúng tôi <strong>không</strong> thu thập thông tin tài chính, mật
              khẩu, hoặc dữ liệu nhạy cảm khác qua website.
            </p>

            <h2>3. Cách chúng tôi sử dụng thông tin</h2>
            <p>Thông tin thu thập được sử dụng để:</p>
            <ul>
              <li>Liên hệ và sắp xếp cuộc gọi audit miễn phí</li>
              <li>
                Chuẩn bị Audit Report phù hợp với ngành nghề và quy mô doanh
                nghiệp của bạn
              </li>
              <li>Gửi proposal dịch vụ nếu bạn quan tâm</li>
              <li>
                Cải thiện website và trải nghiệm người dùng qua dữ liệu analytics
                (ẩn danh)
              </li>
            </ul>
            <p>
              Chúng tôi <strong>không</strong> sử dụng thông tin của bạn cho mục
              đích marketing hàng loạt, spam, hoặc bán cho bên thứ ba.
            </p>

            <h2>4. Chia sẻ thông tin</h2>
            <p>
              Chúng tôi <strong>không</strong> bán, cho thuê, hoặc chia sẻ thông
              tin cá nhân của bạn cho bên thứ ba, ngoại trừ:
            </p>
            <ul>
              <li>
                <strong>Dịch vụ analytics:</strong> Google Analytics (dữ liệu ẩn
                danh, không chứa thông tin cá nhân trực tiếp)
              </li>
              <li>
                <strong>Yêu cầu pháp luật:</strong> Khi bắt buộc bởi luật pháp
                Việt Nam
              </li>
            </ul>

            <h2>5. Bảo mật dữ liệu</h2>
            <p>Chúng tôi bảo vệ thông tin của bạn bằng:</p>
            <ul>
              <li>Kết nối HTTPS mã hóa cho toàn bộ website</li>
              <li>
                Không lưu trữ dữ liệu nhạy cảm trên trình duyệt
                (cookies/localStorage)
              </li>
              <li>Form có cơ chế chống spam tự động</li>
              <li>
                Giới hạn truy cập: chỉ founder trực tiếp xử lý thông tin liên hệ
              </li>
            </ul>

            <h2>6. Dữ liệu dự án (cho clients)</h2>
            <p>
              Đối với khách hàng sử dụng dịch vụ automation của AutoFlow VN:
            </p>
            <ul>
              <li>
                Hệ thống n8n được self-hosted trên VPS tại Việt Nam — dữ liệu
                100% trong nước
              </li>
              <li>
                Dữ liệu dự án thuộc sở hữu hoàn toàn của khách hàng
              </li>
              <li>
                Sau khi bàn giao, AutoFlow không truy cập dữ liệu dự án trừ khi
                được client cho phép (trong gói Retainer)
              </li>
            </ul>

            <h2>7. Quyền của bạn</h2>
            <p>Bạn có quyền:</p>
            <ul>
              <li>Yêu cầu xem thông tin chúng tôi đang lưu về bạn</li>
              <li>Yêu cầu chỉnh sửa thông tin không chính xác</li>
              <li>Yêu cầu xóa toàn bộ thông tin của bạn</li>
              <li>Từ chối nhận liên hệ từ chúng tôi</li>
            </ul>
            <p>
              Để thực hiện các quyền trên, liên hệ{" "}
              <strong>hello@autoflowvn.com</strong> hoặc Zalo{" "}
              <strong>0912 345 678</strong>.
            </p>

            <h2>8. Cookies</h2>
            <p>
              Website sử dụng cookies từ Google Analytics để đo lường traffic và
              hành vi người dùng (ẩn danh). Bạn có thể tắt cookies trong trình
              duyệt nếu muốn — website vẫn hoạt động bình thường.
            </p>

            <h2>9. Thay đổi chính sách</h2>
            <p>
              Chúng tôi có thể cập nhật chính sách bảo mật này. Mọi thay đổi sẽ
              được đăng trên trang này với ngày cập nhật mới. Nếu có thay đổi
              lớn, chúng tôi sẽ thông báo qua Zalo hoặc email cho người đã đăng
              ký.
            </p>

            <h2>10. Liên hệ</h2>
            <p>
              Nếu bạn có câu hỏi về chính sách bảo mật này, vui lòng liên hệ:
            </p>
            <ul>
              <li>
                <strong>Email:</strong> hello@autoflowvn.com
              </li>
              <li>
                <strong>Zalo:</strong> 0912 345 678
              </li>
              <li>
                <strong>Địa chỉ:</strong> TP. Hồ Chí Minh, Việt Nam
              </li>
            </ul>
          </div>
        </article>
      </main>
      <Footer />
    </>
  );
}
