import CalBookingEmbed from "@/components/CalBookingEmbed";

export const metadata = {
  title: "Đặt lịch discovery call — AutoFlow VN",
  description: "Book 30 phút miễn phí tư vấn automation với Huy.",
};

export default function BookPage() {
  return (
    <main className="min-h-screen bg-slate-50 py-12 md:py-20">
      <div className="max-w-4xl mx-auto px-6">
        <div className="text-center mb-8">
          <h1 className="font-display font-extrabold text-4xl md:text-5xl text-slate-900 mb-4">
            Đặt lịch discovery call
          </h1>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            30 phút miễn phí — discuss pain points, Huy tư vấn cách automate phù hợp với business anh/chị.
          </p>
        </div>
        <CalBookingEmbed height={700} />
        <p className="text-center text-sm text-slate-500 mt-6">
          Chưa điền audit form?{" "}
          <a href="/audit" className="text-primary font-medium underline">
            Fill audit trước
          </a>{" "}
          — Huy có context khi call.
        </p>
      </div>
    </main>
  );
}
