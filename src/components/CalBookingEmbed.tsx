"use client";

interface Props {
  eventUrl?: string;
  height?: number;
}

export default function CalBookingEmbed({ eventUrl, height = 650 }: Props) {
  const url = eventUrl ?? process.env.NEXT_PUBLIC_CAL_EVENT_URL ?? "https://cal.com/";
  return (
    <div className="w-full rounded-2xl border border-[var(--slate-200)] overflow-hidden">
      <iframe
        src={url}
        width="100%"
        height={height}
        frameBorder="0"
        title="Đặt lịch với Huy"
        allow="camera; microphone; autoplay; encrypted-media; fullscreen;"
      />
    </div>
  );
}
