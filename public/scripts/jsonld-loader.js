// Load JSON-LD structured data from static file and inject into head
fetch('/jsonld.json').then(function(r){return r.json()}).then(function(schemas){
  schemas.forEach(function(schema){
    var s = document.createElement('script');
    s.type = 'application/ld+json';
    s.textContent = JSON.stringify(schema);
    document.head.appendChild(s);
  });
}).catch(function(){});
