/**
 * Netlify Scheduled Function — triggers email queue processing every 5 minutes.
 * Calls the Next.js API route /api/cron/send-emails with CRON_SECRET auth.
 */
export default async () => {
  const siteUrl = process.env.URL || process.env.DEPLOY_PRIME_URL || "https://autoflowvn.net";
  const cronSecret = process.env.CRON_SECRET;

  if (!cronSecret) {
    console.warn("[send-emails] CRON_SECRET not configured");
    return new Response("CRON_SECRET missing", { status: 500 });
  }

  try {
    const res = await fetch(`${siteUrl}/api/cron/send-emails`, {
      method: "GET",
      headers: {
        Authorization: `Bearer ${cronSecret}`,
      },
    });

    const data = await res.json();
    console.log("[send-emails] Result:", JSON.stringify(data));
    return new Response(JSON.stringify(data), { status: res.status });
  } catch (err) {
    console.error("[send-emails] Error:", err);
    return new Response("Error", { status: 500 });
  }
};

export const config = {
  schedule: "*/5 * * * *",
};
