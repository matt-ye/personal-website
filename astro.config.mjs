// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import { readdirSync, statSync, readFileSync, writeFileSync } from 'fs';
import { join, relative } from 'path';
import { fileURLToPath } from 'url';

const __dirname = fileURLToPath(new URL('.', import.meta.url));

// GA4 tag。與 src/layouts/BaseLayout.astro（GA 注入點）保持一致。
const GA_ID = 'G-1RKL72DPPW';
const GA_SNIPPET =
  `<script async src="https://www.googletagmanager.com/gtag/js?id=${GA_ID}"></script>` +
  `<script>window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments);}` +
  `gtag('js',new Date());gtag('config','${GA_ID}');</script>`;

// public/ 底下的手刻靜態 HTML 不經過 BaseLayout，故沒有 GA tag。
// build 後掃過 dist/**/*.html，對缺 tag 者在 </head> 前補上（已有者跳過，不重複計數）。
function injectGaIntoStaticHtml() {
  return {
    name: 'inject-ga-static-html',
    hooks: {
      'astro:build:done': ({ dir, logger }) => {
        const root = fileURLToPath(dir);
        let injected = 0;
        const walk = (d) => {
          for (const entry of readdirSync(d)) {
            const p = join(d, entry);
            if (statSync(p).isDirectory()) { walk(p); continue; }
            if (!entry.endsWith('.html')) continue;
            const html = readFileSync(p, 'utf8');
            if (html.includes(GA_ID)) continue; // 已有 tag（Astro 頁 / 重跑）
            const idx = html.toLowerCase().lastIndexOf('</head>');
            if (idx === -1) continue; // 無 <head>，略過
            writeFileSync(p, html.slice(0, idx) + GA_SNIPPET + html.slice(idx));
            injected++;
          }
        };
        walk(root);
        logger.info(`injected GA tag into ${injected} static HTML page(s)`);
      },
    },
  };
}

function findPublicHtmlPages(publicDir, siteUrl) {
  const pages = [];
  function scan(dir) {
    for (const entry of readdirSync(dir)) {
      const fullPath = join(dir, entry);
      if (statSync(fullPath).isDirectory()) {
        scan(fullPath);
      } else if (entry === 'index.html') {
        const rel = relative(publicDir, dir);
        pages.push(`${siteUrl}/${rel}/`);
      }
    }
  }
  scan(publicDir);
  return pages;
}

const publicPages = findPublicHtmlPages(join(__dirname, 'public'), 'https://mattye.dev');

export default defineConfig({
  site: 'https://mattye.dev',
  output: 'static',
  integrations: [
    sitemap({
      customPages: publicPages,
      // keep unlinked prototype/lab pages out of the sitemap (also noindex'd)
      filter: (page) => !page.includes('/projects/globe-lab') && !page.includes('/dashboard'),
    }),
    injectGaIntoStaticHtml(),
  ],
});
