/* ------------------------------------------------------------------ */
/*  Integration brand icons — real SVG logos                          */
/*  Sources:                                                          */
/*    Shopee, Zalo, Google Sheets, Facebook, TikTok, Telegram         */
/*      → Simple Icons (https://simpleicons.org), viewBox 0 0 24 24   */
/*    MISA → Official brand SVG (uploaded)                            */
/*    KiotViet → Official brand icon mark (uploaded, text removed)    */
/* ------------------------------------------------------------------ */

type Integration = {
  name: string;
  color: string;
  icon: React.ReactNode;
};

/* Shopee — Simple Icons */
const ShopeeIcon = () => (
  <svg viewBox="0 0 24 24" fill="#EE4D2D" className="w-5 h-5">
    <path d="M15.9414 17.9633c.229-1.879-.981-3.077-4.1758-4.0969-1.548-.528-2.277-1.22-2.26-2.1719.065-1.056 1.048-1.825 2.352-1.85a5.2898 5.2898 0 0 1 2.8838.89c.116.072.197.06.263-.039.09-.145.315-.494.39-.62.051-.081.061-.187-.068-.281-.185-.1369-.704-.4149-.983-.5319a6.4697 6.4697 0 0 0-2.5118-.514c-1.909.008-3.4129 1.215-3.5389 2.826-.082 1.1629.494 2.1078 1.73 2.8278.262.152 1.6799.716 2.2438.892 1.774.552 2.695 1.5419 2.478 2.6969-.197 1.047-1.299 1.7239-2.818 1.7439-1.2039-.046-2.2878-.537-3.1278-1.19l-.141-.11c-.104-.08-.218-.075-.287.03-.05.077-.376.547-.458.67-.077.108-.035.168.045.234.35.293.817.613 1.134.775a6.7097 6.7097 0 0 0 2.8289.727 4.9048 4.9048 0 0 0 2.0759-.354c1.095-.465 1.8029-1.394 1.9449-2.554zM11.9986 1.4009c-2.068 0-3.7539 1.95-3.8329 4.3899h7.6657c-.08-2.44-1.765-4.3899-3.8328-4.3899zm7.8516 22.5981-.08.001-15.7843-.002c-1.074-.04-1.863-.91-1.971-1.991l-.01-.195L1.298 6.2858a.459.459 0 0 1 .45-.494h4.9748C6.8448 2.568 9.1607 0 11.9996 0c2.8388 0 5.1537 2.5689 5.2757 5.7898h4.9678a.459.459 0 0 1 .458.483l-.773 15.5883-.007.131c-.094 1.094-.979 1.9769-2.0709 2.0059z" />
  </svg>
);

/* MISA — Official logo: red swoosh "S" + M, I, A letters */
const MISAIcon = () => (
  <svg viewBox="0 0 147 60" fill="none" className="w-5 h-5">
    <g transform="translate(-6895.38 1258.927)" clipPath="url(#misa_web_clip)">
      <defs>
        <clipPath id="misa_web_clip">
          <rect width="147" height="60" transform="translate(6895.38 -1258.927)" fill="#fff" />
        </clipPath>
      </defs>
      <g transform="translate(6898.524 -1257.568)">
        <path d="M989.078,439.043c.76-1.443-20.279,7.961-27.256,13.226-2.467,1.855-2.371,4.081.553,5.828l9.275,5.521c4.125,2.011,2.674,3.732,1.881,4.622a133.918,133.918,0,0,1-20.646,14.22.15.15,0,0,0-.052.126c-.037,1.64,34.187-9.049,35.987-16.034.8-3.169-10.229-7.42-13.382-9.546-1.855-1.232-1.575-3.3.071-4.886Z" transform="translate(-884.14 -438.895)" fill="#e82127" fillRule="evenodd" />
        <g transform="translate(0 7.038)">
          <path d="M725.225,483.153l8.6,15.318,8.581-15.318,7.227,12.743h11.056l-18.279-31.805-8.585,14.955-8.588-14.955-18.294,31.846h11.048Z" transform="translate(-706.938 -464.091)" fill="#221f1f" fillRule="evenodd" />
          <rect width="10.373" height="31.579" transform="translate(57.079 0.152)" fill="#221f1f" />
          <path d="M1099.213,483.108l7.212,12.725h11.025l-18.235-31.742-18.234,31.742h11.025Z" transform="translate(-976.5 -464.091)" fill="#221f1f" fillRule="evenodd" />
          <rect width="67.425" height="1.414" transform="translate(0.027 35.411)" fill="#221f1f" />
          <rect width="53.78" height="1.414" transform="translate(87.125 35.411)" fill="#221f1f" />
        </g>
      </g>
    </g>
  </svg>
);

/* KiotViet — Official icon mark (teardrop + arrow, radial gradients) */
const KiotVietIcon = () => (
  <svg viewBox="0 0 93 92" fill="none" className="w-5 h-5">
    <path fillRule="evenodd" clipRule="evenodd" d="M28.2727 2.988C11.8294 10.339 0.371 26.834 0.371 46.003c0 19.166 11.459 35.659 27.902 43.011 4.091 1.797 6.625 2.244 8.788 2.244 8.194 0 11.947-26.237 11.947-45.256C49.008 26.98 45.257.742 37.061.742c-2.163 0-4.697.449-8.788 2.243z" fill="url(#kv_web_g1)" />
    <path fillRule="evenodd" clipRule="evenodd" d="M76.542 20.354L55.165 41.713c-1.392 1.391-2.305 2.749-2.305 4.343 0 1.596.913 2.95 2.305 4.342l21.377 21.36c1.336 1.338 2.533 1.911 4.156 1.911 5.736 0 11.697-14.244 11.697-27.613 0-13.37-5.959-27.611-11.697-27.611-1.625 0-2.82.573-4.156 1.91z" fill="url(#kv_web_g2)" />
    <defs>
      <radialGradient id="kv_web_g1" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(-11.303 46.014) scale(66.031 95.596)">
        <stop stopColor="#3AE3FF" /><stop offset="1" stopColor="#0070F4" />
      </radialGradient>
      <radialGradient id="kv_web_g2" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(51.303 45.794) scale(41.259 67.941)">
        <stop stopColor="#5BE92A" /><stop offset="0.392" stopColor="#2DCF34" /><stop offset="1" stopColor="#00B63E" />
      </radialGradient>
    </defs>
  </svg>
);

/* Zalo OA — Simple Icons */
const ZaloIcon = () => (
  <svg viewBox="0 0 24 24" fill="#0068FF" className="w-5 h-5">
    <path d="M12.49 10.2722v-.4496h1.3467v6.3218h-.7704a.576.576 0 01-.5763-.5729l-.0006.0005a3.273 3.273 0 01-1.9372.6321c-1.8138 0-3.2844-1.4697-3.2844-3.2823 0-1.8125 1.4706-3.2822 3.2844-3.2822a3.273 3.273 0 011.9372.6321l.0006.0005zM6.9188 7.7896v.205c0 .3823-.051.6944-.2995 1.0605l-.03.0343c-.0542.0615-.1815.206-.2421.2843L2.024 14.8h4.8948v.7682a.5764.5764 0 01-.5767.5761H0v-.3622c0-.4436.1102-.6414.2495-.8476L4.8582 9.23H.1922V7.7896h6.7266zm8.5513 8.3548a.4805.4805 0 01-.4803-.4798v-7.875h1.4416v8.3548H15.47zM20.6934 9.6C22.52 9.6 24 11.0807 24 12.9044c0 1.8252-1.4801 3.306-3.3066 3.306-1.8264 0-3.3066-1.4808-3.3066-3.306 0-1.8237 1.4802-3.3044 3.3066-3.3044zm-10.1412 5.253c1.0675 0 1.9324-.8645 1.9324-1.9312 0-1.065-.865-1.9295-1.9324-1.9295s-1.9324.8644-1.9324 1.9295c0 1.0667.865 1.9312 1.9324 1.9312zm10.1412-.0033c1.0737 0 1.945-.8707 1.945-1.9453 0-1.073-.8713-1.9436-1.945-1.9436-1.0753 0-1.945.8706-1.945 1.9436 0 1.0746.8697 1.9453 1.945 1.9453z" />
  </svg>
);

/* TikTok — Simple Icons */
const TikTokIcon = () => (
  <svg viewBox="0 0 24 24" fill="#000000" className="w-5 h-5">
    <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z" />
  </svg>
);

/* Google Sheets — Simple Icons */
const GoogleSheetsIcon = () => (
  <svg viewBox="0 0 24 24" fill="#0F9D58" className="w-5 h-5">
    <path d="M11.318 12.545H7.91v-1.909h3.41v1.91zM14.728 0v6h6l-6-6zm1.363 10.636h-3.41v1.91h3.41v-1.91zm0 3.273h-3.41v1.91h3.41v-1.91zM20.727 6.5v15.864c0 .904-.732 1.636-1.636 1.636H4.909a1.636 1.636 0 0 1-1.636-1.636V1.636C3.273.732 4.005 0 4.909 0h9.318v6.5h6.5zm-3.273 2.773H6.545v7.909h10.91v-7.91zm-6.136 4.636H7.91v1.91h3.41v-1.91z" />
  </svg>
);

/* Facebook — Simple Icons */
const FacebookIcon = () => (
  <svg viewBox="0 0 24 24" fill="#1877F2" className="w-5 h-5">
    <path d="M9.101 23.691v-7.98H6.627v-3.667h2.474v-1.58c0-4.085 1.848-5.978 5.858-5.978.401 0 .955.042 1.468.103a8.68 8.68 0 0 1 1.141.195v3.325a8.623 8.623 0 0 0-.653-.036 26.805 26.805 0 0 0-.733-.009c-.707 0-1.259.096-1.675.309a1.686 1.686 0 0 0-.679.622c-.258.42-.374.995-.374 1.752v1.297h3.919l-.386 2.103-.287 1.564h-3.246v8.245C19.396 23.238 24 18.179 24 12.044c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.628 3.874 10.35 9.101 11.647Z" />
  </svg>
);

/* Telegram — Simple Icons */
const TelegramIcon = () => (
  <svg viewBox="0 0 24 24" fill="#26A5E4" className="w-5 h-5">
    <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z" />
  </svg>
);

/* ------------------------------------------------------------------ */

const integrations: Integration[] = [
  { name: "Zalo OA",       color: "#0068FF", icon: <ZaloIcon /> },
  { name: "MISA",          color: "#E82127", icon: <MISAIcon /> },
  { name: "Shopee",        color: "#EE4D2D", icon: <ShopeeIcon /> },
  { name: "KiotViet",      color: "#00A651", icon: <KiotVietIcon /> },
  { name: "TikTok Shop",   color: "#000000", icon: <TikTokIcon /> },
  { name: "Google Sheets",  color: "#0F9D58", icon: <GoogleSheetsIcon /> },
  { name: "Facebook",      color: "#1877F2", icon: <FacebookIcon /> },
  { name: "Telegram",      color: "#26A5E4", icon: <TelegramIcon /> },
];

export default function Integrations() {
  return (
    <section className="py-12 border-y border-slate-100 bg-slate-50/50">
      <div className="max-w-6xl mx-auto px-6">
        <p className="text-center text-sm font-medium text-slate-500 mb-8">
          Tích hợp trực tiếp với hệ sinh thái Việt Nam
        </p>
        <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-6 justify-items-center">
          {integrations.map((item) => (
            <div
              key={item.name}
              className="flex items-center gap-2.5 group cursor-default"
            >
              <div className="w-9 h-9 rounded-lg flex items-center justify-center bg-white border border-slate-200 shadow-sm transition-transform group-hover:scale-110 group-hover:shadow-md">
                {item.icon}
              </div>
              <span className="text-sm font-medium text-slate-500 group-hover:text-slate-700 transition-colors">
                {item.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
