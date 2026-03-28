import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Tự động nhắc lịch học viên qua Zalo OA — Giảm 80% miss lịch — AutoFlow VN",
  description:
    "Hướng dẫn setup nhắc lịch tự động qua Zalo OA cho trung tâm đào tạo bằng n8n. Miss lịch giảm từ 15% xuống 3%, tiết kiệm 3 giờ gọi điện/ngày.",
};

export default function NhacLichZaloOAPage() {
  return (
    <>
      <Navbar />
      <main className="pt-24 pb-20">
        <article className="max-w-3xl mx-auto px-6">
          {/* Header */}
          <div className="mb-10">
            <a
              href="/blog"
              className="text-sm text-primary hover:text-primary-dark font-medium mb-4 inline-block"
            >
              &larr; Blog
            </a>
            <div className="flex items-center gap-3 mb-4">
              <span className="text-xs font-semibold text-primary bg-primary-light px-2.5 py-1 rounded-full">
                Hướng dẫn
              </span>
              <span className="text-xs text-slate-400">8 phút đọc</span>
              <span className="text-xs text-slate-400">29/03/2026</span>
            </div>
            <h1 className="font-display font-extrabold text-3xl md:text-4xl text-slate-900 tracking-tight leading-tight mb-4">
              Tự động nhắc lịch học viên qua Zalo OA — Giảm 80% miss lịch
            </h1>
            <p className="text-lg text-slate-500 leading-relaxed">
              Hướng dẫn setup nhắc lịch tự động qua Zalo OA cho trung tâm đào
              tạo bằng n8n. Miss lịch giảm từ 15% xuống 3%, tiết kiệm 3 giờ gọi
              điện/ngày.
            </p>
          </div>

          {/* Content */}
          <div className="prose prose-slate max-w-none prose-headings:font-display prose-headings:font-bold prose-headings:tracking-tight prose-h2:text-2xl prose-h2:mt-12 prose-h2:mb-4 prose-h3:text-lg prose-h3:mt-8 prose-p:text-slate-600 prose-p:leading-relaxed prose-li:text-slate-600 prose-strong:text-slate-900">
            <h2>Vấn đề: Nhắc lịch bằng tay không xuể</h2>

            <p>
              Trung tâm đào tạo trung bình có 100+ học viên đang học. Mỗi ngày,
              nhân viên phải gọi điện hoặc nhắn tin nhắc lịch cho từng người —
              mất ít nhất 3 giờ/ngày chỉ riêng việc này.
            </p>

            <p>Và kết quả vẫn không khả quan:</p>

            <ul>
              <li>
                <strong>15% học viên miss lịch:</strong> Gọi không nghe, nhắn tin
                không đọc — học viên quên lịch, bỏ buổi học. Trung tâm mất doanh
                thu trực tiếp.
              </li>
              <li>
                <strong>3 giờ/ngày cho việc gọi điện:</strong> 1 nhân viên
                full-time chỉ để nhắc lịch. Chi phí nhân sự 8–10 triệu/tháng
                cho một công việc lặp đi lặp lại.
              </li>
              <li>
                <strong>Mất doanh thu khi miss lịch:</strong> Mỗi buổi học bị bỏ
                = mất 200–500k. 15% miss trên 100 học viên = hàng chục triệu
                đồng/tháng bay hơi.
              </li>
            </ul>

            <p>
              Bài toán rõ ràng: cần một hệ thống nhắc lịch tự động, đáng tin
              cậy, và học viên thực sự đọc được tin nhắn.
            </p>

            <h2>Tại sao Zalo OA là kênh tốt nhất?</h2>

            <p>
              Không phải SMS. Không phải email. Zalo OA là kênh nhắc lịch hiệu
              quả nhất cho thị trường Việt Nam vì 3 lý do:
            </p>

            <ul>
              <li>
                <strong>75 triệu user Việt Nam:</strong> Hơn 95% học viên đã có
                Zalo. Không cần cài thêm app, không cần tạo tài khoản — nhắn là
                nhận.
              </li>
              <li>
                <strong>Open rate cao hơn SMS:</strong> Tin nhắn Zalo OA có tỉ lệ
                đọc 85–95%, trong khi SMS chỉ 20–30%. Học viên đọc Zalo như đọc
                tin nhắn bạn bè — không bị lọc spam.
              </li>
              <li>
                <strong>Miễn phí gửi tin:</strong> Với Zalo OA, gửi tin nhắn cho
                follower hoàn toàn miễn phí (trong quota). So với SMS mất
                350–500đ/tin, tiết kiệm hàng triệu đồng/tháng.
              </li>
            </ul>

            <h2>Workflow nhắc lịch tự động</h2>

            <p>
              Đây là workflow mà AutoFlow triển khai cho các trung tâm đào tạo,
              sử dụng n8n kết nối với Zalo OA:
            </p>

            <h3>Bước 1: Calendar trigger</h3>
            <p>
              Lịch học được quản lý trên Google Calendar hoặc Google Sheet. n8n
              tự động check calendar mỗi ngày, lọc ra các buổi học trong 24 giờ
              tới.
            </p>

            <h3>Bước 2: n8n check 24h trước</h3>
            <p>
              n8n so sánh thời gian buổi học với thời gian hiện tại. Nếu buổi
              học trong vòng 24 giờ tới → trigger gửi tin nhắn nhắc lịch. Tin
              nhắn được cá nhân hóa: tên học viên, tên khóa học, giờ học, phòng
              học.
            </p>

            <h3>Bước 3: Zalo OA gửi tin nhắn</h3>
            <p>
              Zalo OA gửi tin nhắn nhắc lịch đến học viên qua Zalo. Ví dụ:
              &quot;Chào Minh, bạn có buổi học IELTS Writing lúc 14:00 ngày mai
              tại phòng 302. Reply &apos;OK&apos; để xác nhận tham gia
              nhé!&quot;
            </p>

            <h3>Bước 4: Xác nhận tham gia</h3>
            <p>
              Học viên reply &quot;OK&quot; → hệ thống ghi nhận xác nhận. Nếu
              học viên không reply trong 4 giờ → n8n tự động gửi tin nhắn nhắc
              lại lần 2 với nội dung khác.
            </p>

            <h3>Bước 5: Nhắc lại nếu không reply</h3>
            <p>
              Sau 2 lần nhắc mà vẫn không reply → hệ thống tự động thông báo
              cho nhân viên để gọi điện trực tiếp. Chỉ cần gọi 5–10% học viên
              thay vì 100%.
            </p>

            <h2>Mở rộng: Điểm danh + thông báo phụ huynh</h2>

            <p>
              Workflow nhắc lịch chỉ là bước đầu. Nhiều trung tâm mở rộng thêm
              2 tính năng quan trọng:
            </p>

            <h3>Điểm danh tự động</h3>
            <p>
              Giáo viên check-in học viên qua Google Form đơn giản. Khi submit →
              n8n tự động cập nhật attendance record. Cuối tháng có báo cáo
              chuyên cần tự động, không cần tổng hợp thủ công.
            </p>

            <h3>Thông báo phụ huynh</h3>
            <p>
              Sau khi điểm danh xong → Zalo OA tự gửi tin nhắn cho phụ huynh:
              &quot;Con bạn đã tham gia buổi học IELTS Writing hôm nay. Điểm
              bài tập: 7.5/10.&quot; Phụ huynh yên tâm, trung tâm tạo được
              trust — giảm tỉ lệ dropout.
            </p>

            <h2>Kết quả thực tế</h2>

            <p>
              Dựa trên các project AutoFlow đã triển khai cho trung tâm đào tạo
              tại Việt Nam:
            </p>

            <ul>
              <li>
                <strong>Miss lịch giảm từ 15% xuống 3%:</strong> Giảm 80% tỉ lệ
                học viên bỏ buổi. Mỗi tháng giữ lại hàng chục triệu đồng doanh
                thu.
              </li>
              <li>
                <strong>Tiết kiệm 1 FTE:</strong> Không cần 1 nhân viên
                full-time chỉ để gọi điện nhắc lịch. Tiết kiệm 8–10
                triệu/tháng chi phí nhân sự.
              </li>
              <li>
                <strong>Phụ huynh yên tâm:</strong> Nhận thông báo tự động sau
                mỗi buổi học. Tỉ lệ gia hạn khóa học tăng 20% nhờ phụ huynh
                tin tưởng.
              </li>
            </ul>

            <h2>Chi phí triển khai</h2>

            <p>
              Gói Growth (nhắc lịch + điểm danh + thông báo phụ huynh): 20–35
              triệu đồng, triển khai trong 3–4 tuần. Bao gồm setup n8n, kết nối
              Zalo OA, thiết kế workflow, training nhân viên. Chi phí vận hành:
              ~125.000 đ/tháng (VPS cho n8n).
            </p>

            <p>
              ROI trung bình: hoàn vốn trong 2–3 tháng nhờ giảm miss lịch và
              tiết kiệm nhân sự.
            </p>

            <h2>Bước tiếp theo</h2>

            <p>
              Nếu trung tâm bạn đang mất 3 giờ/ngày gọi điện nhắc lịch và vẫn
              miss 10–15% buổi học — đã đến lúc tự động hóa. AutoFlow giúp bạn
              setup hệ thống nhắc lịch Zalo OA trong 3–4 tuần, với data 100%
              trong nước và giá phù hợp trung tâm đào tạo.
            </p>
          </div>

          {/* CTA */}
          <div className="mt-12 bg-primary-light/50 border border-primary/10 rounded-2xl p-8 text-center">
            <h3 className="font-display font-bold text-xl text-slate-900 mb-2">
              Muốn giảm miss lịch cho trung tâm?
            </h3>
            <p className="text-sm text-slate-500 mb-5">
              Audit miễn phí 30 phút — mình phân tích quy trình nhắc lịch hiện
              tại và chỉ ra cách giảm miss lịch xuống dưới 5%.
            </p>
            <a
              href="/audit"
              className="inline-flex items-center gap-2 bg-primary hover:bg-primary-dark text-white font-semibold px-7 py-3.5 rounded-xl transition-all hover:shadow-lg hover:shadow-primary/25"
            >
              Audit miễn phí
              <svg
                width="16"
                height="16"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
              >
                <path d="M5 8h6M8 5l3 3-3 3" />
              </svg>
            </a>
          </div>

          {/* Related */}
          <div className="mt-12 pt-8 border-t border-slate-200">
            <h3 className="font-display font-bold text-lg text-slate-900 mb-4">
              Bài viết liên quan
            </h3>
            <div className="grid sm:grid-cols-2 gap-4">
              <a
                href="/dich-vu/giao-duc"
                className="p-5 bg-white rounded-xl border border-slate-200 hover:border-primary/30 hover:shadow-md transition-all"
              >
                <span className="text-xs text-primary font-semibold">
                  Dịch vụ
                </span>
                <p className="font-semibold text-sm text-slate-900 mt-1">
                  Tự động hóa cho trung tâm đào tạo
                </p>
                <p className="text-xs text-slate-400 mt-1">
                  Nhắc lịch, điểm danh, thông báo phụ huynh tự động
                </p>
              </a>
              <a
                href="/blog/zalo-oa-automation"
                className="p-5 bg-white rounded-xl border border-slate-200 hover:border-primary/30 hover:shadow-md transition-all"
              >
                <span className="text-xs text-primary font-semibold">
                  Hướng dẫn
                </span>
                <p className="font-semibold text-sm text-slate-900 mt-1">
                  Tự động hóa Zalo OA cho doanh nghiệp — từ A đến Z
                </p>
                <p className="text-xs text-slate-400 mt-1">
                  5 workflow Zalo OA phổ biến nhất cho SME Việt Nam
                </p>
              </a>
            </div>
          </div>
        </article>
      </main>
      <Footer />
    </>
  );
}
