"use client";

import { useState } from "react";

const questions = [
  {
    q: "Đội ngũ bạn quản lý dữ liệu khách hàng bằng gì?",
    options: [
      { text: "Sổ tay / giấy", score: 1 },
      { text: "Excel / Google Sheet thủ công", score: 2 },
      { text: "CRM cơ bản (KiotViet, Sapo...)", score: 3 },
      { text: "CRM + tích hợp tự động nhiều nguồn", score: 4 },
      { text: "Hệ thống AI tự phân loại & nurture", score: 5 },
    ],
  },
  {
    q: "Khi có đơn hàng mới, đội ngũ xử lý như thế nào?",
    options: [
      { text: "Ghi tay / nhập lại từ đầu", score: 1 },
      { text: "Copy-paste giữa các hệ thống", score: 2 },
      { text: "Một số bước đã tự động (cơ bản)", score: 3 },
      { text: "Hầu hết tự động, chỉ kiểm tra cuối", score: 4 },
      { text: "100% tự động kể cả xử lý ngoại lệ", score: 5 },
    ],
  },
  {
    q: "Báo cáo doanh thu / KPI được tạo như thế nào?",
    options: [
      { text: "Không có báo cáo định kỳ", score: 1 },
      { text: "Tự tạo bằng Excel cuối tháng", score: 2 },
      { text: "Google Sheet với vài công thức", score: 3 },
      { text: "Dashboard tự động, gửi qua Telegram", score: 4 },
      { text: "AI phân tích + alert bất thường real-time", score: 5 },
    ],
  },
  {
    q: "Chăm sóc khách hàng sau mua?",
    options: [
      { text: "Hầu như không có", score: 1 },
      { text: "Gọi / nhắn thủ công khi nhớ", score: 2 },
      { text: "Zalo OA broadcast theo lịch", score: 3 },
      { text: "Workflow tự động: nhắc, upsell, feedback", score: 4 },
      { text: "AI chatbot + cá nhân hóa theo hành vi", score: 5 },
    ],
  },
  {
    q: "Khi cần tích hợp tool mới (ví dụ: sàn TMĐT mới), mất bao lâu?",
    options: [
      { text: "Không biết cách tích hợp", score: 1 },
      { text: "Vài tuần, cần dev hoặc nhờ IT", score: 2 },
      { text: "1-2 ngày, tự setup cơ bản", score: 3 },
      { text: "Vài giờ, đã có quy trình chuẩn", score: 4 },
      { text: "Tự động detect + suggest workflow", score: 5 },
    ],
  },
];

const stages = [
  { range: [5, 8], stage: 1, title: "Thủ Công", color: "#EF4444", desc: "Hầu hết quy trình đang làm bằng tay. Bạn có thể tiết kiệm 60-80% thời gian bằng automation cơ bản." },
  { range: [9, 12], stage: 2, title: "Cơ Bản", color: "#F59E0B", desc: "Đã có một số tool nhưng chưa kết nối. Bước tiếp theo: kết nối các hệ thống lại với nhau bằng n8n." },
  { range: [13, 17], stage: 3, title: "Kết Nối", color: "#3B82F6", desc: "Các hệ thống đã bắt đầu nói chuyện với nhau. Tiếp tục: mở rộng workflow và thêm tự động hóa phức tạp." },
  { range: [18, 21], stage: 4, title: "Thông Minh", color: "#8B5CF6", desc: "Automation đã chạy tốt. Bước tiếp: tích hợp AI để tự động ra quyết định và xử lý ngoại lệ." },
  { range: [22, 25], stage: 5, title: "AI Agent", color: "#10B981", desc: "Bạn đang ở top 5% doanh nghiệp Việt Nam về automation. Mục tiêu: AI Agent tự vận hành toàn bộ." },
];

export default function MaturityQuiz() {
  const [answers, setAnswers] = useState<number[]>(Array(questions.length).fill(-1));
  const [showResult, setShowResult] = useState(false);

  const allAnswered = answers.every((a) => a >= 0);
  const totalScore = answers.reduce((sum, a, i) => sum + (a >= 0 ? questions[i].options[a].score : 0), 0);
  const result = stages.find((s) => totalScore >= s.range[0] && totalScore <= s.range[1]) || stages[0];

  const handleSelect = (qIndex: number, oIndex: number) => {
    const next = [...answers];
    next[qIndex] = oIndex;
    setAnswers(next);
  };

  if (showResult) {
    return (
      <div className="my-10 not-prose">
        <div className="rounded-2xl border-2 overflow-hidden" style={{ borderColor: result.color }}>
          <div className="px-6 py-5 text-white" style={{ background: result.color }}>
            <div className="text-sm font-medium opacity-80">Kết quả đánh giá</div>
            <div className="font-display font-extrabold text-2xl mt-1">
              Giai đoạn {result.stage}: {result.title}
            </div>
            <div className="text-sm opacity-90 mt-1">Điểm: {totalScore}/25</div>
          </div>
          <div className="px-6 py-5 bg-white">
            <p className="text-slate-700 mb-4">{result.desc}</p>

            {/* Stage bar */}
            <div className="flex gap-1 mb-4">
              {stages.map((s, i) => (
                <div key={i} className="flex-1">
                  <div
                    className="h-2 rounded-full transition-all"
                    style={{
                      background: s.stage <= result.stage ? s.color : "#E2E8F0",
                    }}
                  />
                  <div className="text-[9px] text-center mt-1 text-slate-500">{s.title}</div>
                </div>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row gap-3 mt-5">
              <a
                href="/audit"
                className="flex-1 text-center px-4 py-2.5 rounded-xl bg-primary text-white text-sm font-semibold hover:bg-primary-dark transition-colors"
              >
                Nhận lộ trình chi tiết (miễn phí)
              </a>
              <button
                onClick={() => { setShowResult(false); setAnswers(Array(questions.length).fill(-1)); }}
                className="flex-1 text-center px-4 py-2.5 rounded-xl border border-slate-200 text-slate-600 text-sm font-semibold hover:bg-slate-50 transition-colors"
              >
                Làm lại
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="my-10 not-prose bg-white rounded-2xl border border-slate-200 p-6 md:p-8">
      <div className="flex items-center gap-3 mb-6">
        <div className="w-10 h-10 rounded-xl bg-violet-100 text-violet-600 flex items-center justify-center">
          <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
            <path d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
          </svg>
        </div>
        <div>
          <h4 className="font-display font-bold text-slate-900">Đánh giá Automation Maturity</h4>
          <p className="text-xs text-slate-500">5 câu hỏi · 2 phút · Biết ngay doanh nghiệp bạn ở giai đoạn nào</p>
        </div>
      </div>

      <div className="space-y-6">
        {questions.map((q, qi) => (
          <div key={qi}>
            <p className="text-sm font-semibold text-slate-800 mb-2">
              <span className="text-primary mr-1">{qi + 1}.</span> {q.q}
            </p>
            <div className="space-y-1.5">
              {q.options.map((opt, oi) => (
                <button
                  key={oi}
                  onClick={() => handleSelect(qi, oi)}
                  className={`w-full text-left px-4 py-2.5 rounded-xl text-sm transition-all border ${
                    answers[qi] === oi
                      ? "border-primary bg-primary/5 text-primary font-medium"
                      : "border-slate-200 text-slate-600 hover:border-slate-300 hover:bg-slate-50"
                  }`}
                >
                  {opt.text}
                </button>
              ))}
            </div>
          </div>
        ))}
      </div>

      <button
        onClick={() => setShowResult(true)}
        disabled={!allAnswered}
        className="w-full mt-6 px-6 py-3 rounded-xl bg-primary text-white font-semibold text-sm disabled:opacity-40 disabled:cursor-not-allowed hover:bg-primary-dark transition-colors"
      >
        Xem kết quả ({answers.filter((a) => a >= 0).length}/{questions.length} câu đã trả lời)
      </button>
    </div>
  );
}
