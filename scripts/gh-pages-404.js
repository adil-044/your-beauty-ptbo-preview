const fs = require("fs");
const path = require("path");

const out404 = path.join(__dirname, "../out/404.html");
if (!fs.existsSync(out404)) process.exit(0);

const redirect = `<script>(function(){var b="/your-beauty-ptbo-preview",p=location.pathname;if(!p.startsWith(b))return;if(p.endsWith("/"))p=p.slice(0,-1);if(p===b)return;var r=p.slice(b.length+1);if(r&&!r.includes(".")){location.replace(b+"/"+r+"/"+location.search+location.hash)}})();</script>`;

let html = fs.readFileSync(out404, "utf8");
if (!html.includes("your-beauty-ptbo-preview")) {
  html = html.replace("<head>", `<head>${redirect}`);
  fs.writeFileSync(out404, html);
}
