window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
// GA ID is read from the gtag.js script URL that's already loaded
var scripts = document.querySelectorAll('script[src*="googletagmanager.com/gtag/js"]');
if (scripts.length > 0) {
  var src = scripts[0].getAttribute('src');
  var match = src && src.match(/[?&]id=([^&]+)/);
  if (match) gtag('config', match[1]);
}
