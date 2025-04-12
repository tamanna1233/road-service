import  {SitemapStream, streamToPromise } from "sitemap"
import { createWriteStream } from 'fs';
import path from "path";
import { fileURLToPath } from 'url'
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const sitemap = new SitemapStream({ hostname: 'https://road-service-omega.vercel.app/' });

const writeStream = createWriteStream(path.join(__dirname, 'public', 'sitemap.xml'));

// List all your static routes here
const routes = [
    '/',
    '/services',
    '/about-us',
    '/testimonial',
    '/contact',
    '/blogs',
  ];
  

routes.forEach(route => {
  sitemap.write({ url: route, changefreq: 'monthly', priority: 0.8 });
});

sitemap.end();

streamToPromise(sitemap).then(data => {
  writeStream.write(data.toString());
  console.log('✅ Sitemap generated at /public/sitemap.xml');
});
