import type { Plugin } from 'vite';

export function preloadPlugin(): Plugin {
  return {
    name: 'preload-critical-chunks',
    transformIndexHtml(html) {
      const preloadTags = `
    <!-- Preload critical chunks -->
    <link rel="modulepreload" href="/assets/react-vendor.js" crossorigin>
    <link rel="preload" href="/assets/index.css" as="style" crossorigin>
      `.trim();

      return html.replace('</head>', `${preloadTags}\n  </head>`);
    },
  };
}
