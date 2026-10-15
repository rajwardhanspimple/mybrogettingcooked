import fs from 'fs';

let html = fs.readFileSync('D:/workspace1/saifullahsec.html', 'utf8');

// 1. Replace obfuscated Cloudflare email links with direct working mailto links
html = html.replace(/href="\/cdn-cgi\/l\/email-protection#[^"]*"/g, 'href="mailto:contact@saifullahsec.com"');

// 2. Replace Cloudflare email placeholder spans with real email address
html = html.replace(/<span class="__cf_email__"[^>]*>\[email&#160;protected\]<\/span>/g, 'contact@saifullahsec.com');

// 3. Remove Cloudflare CDN email decode script tag
html = html.replace(/<script data-cfasync="false" src="\/cdn-cgi\/scripts\/[^"]+"><\/script>/g, '');

// 4. Save to both index.html (root entry point) and saifullahsec.html
fs.writeFileSync('D:/workspace1/index.html', html, 'utf8');
fs.writeFileSync('D:/workspace1/saifullahsec.html', html, 'utf8');

console.log('Successfully written index.html and saifullahsec.html! Total length:', html.length);
