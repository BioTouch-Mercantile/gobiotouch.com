import { defineConfig } from 'vite';
import { resolve, join } from 'path';
import fs from 'fs';

export default defineConfig({
  plugins: [
    {
      name: 'serve-static-assets',
      configureServer(server) {
        server.middlewares.use((req, res, next) => {
          const url = decodeURIComponent(req.url.split('?')[0]);
          if (url.startsWith('/wp-content/') || url.startsWith('/wp-includes/')) {
            const filePath = join(__dirname, url);
            if (fs.existsSync(filePath) && fs.statSync(filePath).isFile()) {
              let contentType = 'application/octet-stream';
              if (url.endsWith('.css')) contentType = 'text/css';
              else if (url.endsWith('.js')) contentType = 'application/javascript';
              else if (url.endsWith('.jpg') || url.endsWith('.jpeg')) contentType = 'image/jpeg';
              else if (url.endsWith('.png')) contentType = 'image/png';
              else if (url.endsWith('.gif')) contentType = 'image/gif';
              else if (url.endsWith('.webp')) contentType = 'image/webp';
              else if (url.endsWith('.svg')) contentType = 'image/svg+xml';
              else if (url.endsWith('.woff')) contentType = 'font/woff';
              else if (url.endsWith('.woff2')) contentType = 'font/woff2';
              else if (url.endsWith('.ttf')) contentType = 'font/ttf';
              else if (url.endsWith('.eot')) contentType = 'application/vnd.ms-fontobject';
              
              res.setHeader('Content-Type', contentType);
              fs.createReadStream(filePath).pipe(res);
              return;
            }
          }
          next();
        });
      }
    }
  ],
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        about: resolve(__dirname, 'about-us/index.html'),
        contact: resolve(__dirname, 'contact-us/index.html'),
        products: resolve(__dirname, 'products/index.html'),
        gallery: resolve(__dirname, 'gallery/index.html'),
        social: resolve(__dirname, 'social-media/index.html'),
      }
    }
  }
});
