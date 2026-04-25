// Service Worker minimal para permitir la instalación de la PWA
self.addEventListener('fetch', (event) => {
  // Solo pasamos las peticiones, no cacheamos nada para evitar problemas con Sheets
});
