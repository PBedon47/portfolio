# Pedro Bedón — Portfolio

Portafolio personal de **Pedro Luis Bedón Carbajal**, Frontend Developer especializado en React, Next.js y TypeScript.

## 🚀 Stack

- **Next.js 15** — Framework React con App Router
- **TypeScript** — Tipado estático
- **Tailwind CSS** — Utilidades CSS (configurado, puedes extender)
- **Google Fonts** — Syne + DM Sans
- **Vercel** — Deploy recomendado

## 📁 Estructura

```
portfolio/
├── public/
│   ├── profile.jpg       ← Tu foto de perfil
│   ├── alta-taza.png     ← Screenshot proyecto
│   ├── hebras.png        ← Screenshot proyecto
│   └── chatbot.png       ← Screenshot proyecto
├── src/
│   ├── app/
│   │   ├── page.tsx      ← Página principal
│   │   ├── layout.tsx    ← Layout + metadata SEO
│   │   └── globals.css   ← Estilos globales + variables CSS
│   ├── components/
│   │   ├── Nav.tsx       ← Navbar sticky con scroll
│   │   ├── Hero.tsx      ← Sección hero con typewriter
│   │   ├── About.tsx     ← Sobre mí + estadísticas
│   │   ├── Skills.tsx    ← Stack técnico con barras
│   │   ├── Projects.tsx  ← Proyectos seleccionados
│   │   ├── Experience.tsx← Experiencia laboral
│   │   └── Contact.tsx   ← Contacto + footer
│   └── data/
│       └── projects.ts   ← Datos de proyectos
```

## ⚡ Instalación

```bash
# Instalar dependencias
npm install

# Servidor de desarrollo
npm run dev

# Build para producción
npm run build
```

Abre [http://localhost:3000](http://localhost:3000) en tu navegador.

## 🎨 Personalización

### Datos personales
Edita los archivos de componentes para actualizar:
- **Email / WhatsApp / LinkedIn / GitHub** → `src/components/Contact.tsx`
- **Proyectos** → `src/data/projects.ts`
- **Experiencia** → `src/components/Experience.tsx`
- **Skills y niveles** → `src/components/Skills.tsx`

### Imágenes
Coloca tus imágenes en `/public/`:
- `profile.jpg` — Tu foto
- `alta-taza.png`, `hebras.png`, `chatbot.png` — Screenshots de proyectos

### Colores
Las variables CSS están en `src/app/globals.css`:
```css
:root {
  --bg: #080808;
  --accent: #7fff5f;  ← Color principal (verde limón)
  /* ... */
}
```

## 🌐 Deploy en Vercel

```bash
# Instalar Vercel CLI
npm i -g vercel

# Deploy
vercel
```

O conecta tu repositorio de GitHub en [vercel.com](https://vercel.com) para deploy automático.

---

Diseñado con ♥ por y para Pedro Luis Bedón Carbajal
