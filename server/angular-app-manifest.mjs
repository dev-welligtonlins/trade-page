
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: 'https://github.com',
  locale: undefined,
  routes: undefined,
  entryPointToBrowserMapping: {},
  assets: {
    'index.csr.html': {size: 673, hash: '6cc3ec62b1ab77bfb202ad742ba9d3987938282407ab0a1cd990e4b6d2442634', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1046, hash: '0758196e17f4323bd31882ac3ad6fae2f454695a69dded766dcd32df8d8dd1ae', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'styles-TAZMSP2Z.css': {size: 15, hash: 'sJ5RzYgp5+o', text: () => import('./assets-chunks/styles-TAZMSP2Z_css.mjs').then(m => m.default)}
  },
};
