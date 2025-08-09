# BabyLog — Registro del bebé (PWA)

App web instalable (PWA) para iPhone/Android: registro de **tomas**, **pañales**, **sueño** y **mediciones** (peso/temperatura), con **historial**, **dashboard** diario/semanal/mensual y **exportar/importar** JSON. Todo queda **local** (localStorage).

## 🚀 Deploy en GitHub Pages
1. Crea un repositorio nuevo en GitHub (por ejemplo, `babylog-pwa`).
2. Sube el contenido de esta carpeta a la **raíz** del repo.
3. En **Settings → Pages**, en **Source** elige **Deploy from a branch** y selecciona `main` y la carpeta **/** (root). Guarda.
4. Espera ~1 minuto y abre la URL pública que te muestra GitHub Pages.

> La app se sirve desde `index.html`. El modo **offline** y la instalación requieren HTTPS (Pages ya lo da).

## 📱 Instalar en iPhone
1. Abre la URL pública del repo en **Safari**.
2. Toca **Compartir → Añadir a pantalla de inicio**.
3. Abre la app desde el icono; a partir de la segunda apertura funciona **offline**.

## 🔐 Privacidad
- Los datos se guardan en **tu dispositivo** con `localStorage`.
- Puedes **Exportar/Importar** desde **Ajustes** para tener copias.

## 🛠️ Estructura
- `index.html` — App principal.
- `manifest.webmanifest` — Metadatos PWA (nombre, iconos, colores).
- `service-worker.js` — Caché para **offline**.
- `icons/` — Iconos 192 y 512 px.

## ✅ Esenciales incluidos
- Tomas (pecho/biberón, lado, duración, ml, notas)
- Pañales (caca/pis/mixto, cantidad, observaciones)
- Sueño (inicio/fin, despertares, calidad)
- Mediciones opcionales (peso, temperatura, notas)
- Historial con filtros + borrado por entrada
- Dashboard: hoy / 7 días / 30 días con gráficas

---
Sugerencias futuras: multi-perfil (gemelos), recordatorios, exportar a CSV y iCloud Drive.
