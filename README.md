# CompanyMove 🌐

Sitio web profesional desarrollado con [Astro](https://astro.build) + React, diseñado para ofrecer una experiencia visual fluida con un video de fondo que persiste entre secciones.

## 🚀 Características

- Video de fondo persistente (no se reinicia entre páginas)
- Diseño responsive (escritorio, tablet, mobile)
- Navegación entre secciones: Inicio, Nosotros, Contacto
- Formulario de contacto listo para usar (soporte Netlify)
- Estilo limpio con foco en visibilidad y legibilidad
- Preparado para deploy en GitHub Pages, DonWeb, Netlify, etc.

---

## 🛠️ Instalación y desarrollo local

### 1. Clonar el repositorio

```bash
git clone https://github.com/TU-USUARIO/companymove.git
cd companymove
```

### 2. Instalar dependencias

```bash
npm install
```

### 3. Iniciar servidor de desarrollo

```bash
npm run dev
```

Abrí tu navegador en [http://localhost:4321](http://localhost:4321)

---

## 🏗️ Build para producción

```bash
npm run build
```

Los archivos listos para subir estarán en la carpeta `/dist`.

---

## 🌐 Subida al servidor (DonWeb u otro)

1. Ejecutá `npm run build`
2. Subí todo el contenido de la carpeta `/dist` a la raíz de tu hosting (por FTP o administrador web)

> En DonWeb, suele ser la carpeta `public_html`.

---

## 📁 Estructura del proyecto

```
companymove/
├── public/              # Archivos públicos (video, imágenes)
├── src/
│   ├── components/      # Componentes React (video de fondo)
│   ├── layouts/         # Layout persistente
│   ├── pages/           # Páginas principales (Home, Nosotros, Contacto)
│   └── styles/          # Estilos globales
├── dist/                # Build final (no incluido en el repo)
├── .gitignore
├── package.json
└── astro.config.mjs
```

---

## 🤍 Créditos

Hecho con amor por [Miranda Rodríguez](https://github.com/TU-USUARIO) ✨  
Inspirado por el movimiento, la presencia y la persistencia ;)

