# Modern Web CV - Angular 🚀

Una plantilla moderna y atractiva de portafolio/CV web desarrollada con Angular 17. Perfecta para desarrolladores, diseñadores y profesionales que quieren destacar en línea con un CV interactivo y visualmente impactante.

![Angular](https://img.shields.io/badge/Angular-17.3-DD0031?style=flat&logo=angular)
![TypeScript](https://img.shields.io/badge/TypeScript-5.4-3178C6?style=flat&logo=typescript)
![License](https://img.shields.io/badge/License-MIT-green.svg)

## ✨ Características

- ✨ **Fondo animado con partículas** - Efectos visuales interactivos usando tsparticles
- 🎭 **Animaciones suaves al scroll** - Transiciones elegantes con AOS (Animate On Scroll)
- 🎨 **Diseño moderno** - Gradientes vibrantes y efectos glassmorphism
- 📱 **100% Responsive** - Se adapta perfectamente a móviles, tablets y escritorio
- 🔗 **Integración con redes sociales** - Enlaces a LinkedIn, GitHub, email y más
- 🎯 **Navegación fluida** - Scroll suave entre secciones
- 🌈 **Tipografías modernas** - Google Fonts (Poppins y Montserrat)
- ⚡ **Componentes standalone** - Arquitectura Angular 17 moderna
- 🎨 **Totalmente personalizable** - Todos los datos son fáciles de modificar
- 📝 **Bien documentado** - Comentarios claros en el código

## 📸 Vista Previa

### 🖥️ Vista Desktop
![Vista Desktop](screenshots/full-screen.png)

### 📱 Vista Móvil
![Vista Móvil](screenshots/mobile-view.png)

---

## 🛠️ Tecnologías Utilizadas

### Core
- **Angular 17.3** - Framework principal con standalone components
- **TypeScript 5.4** - Tipado estático para mayor robustez
- **RxJS 7.8** - Programación reactiva

### Animaciones & UI
- **tsparticles 3.0** - Sistema de partículas para efectos visuales
- **AOS 2.3.4** - Animate On Scroll library
- **Font Awesome 7.1.0** - Biblioteca de iconos
- **Angular Material 17.3** - Componentes UI de Google

### Estilos
- **CSS3 moderno** - Variables CSS, Grid, Flexbox
- **Google Fonts** - Poppins & Montserrat

## 📋 Requisitos Previos

Asegúrate de tener instalado:

- **Node.js** v18.16.0 o superior ([Descargar aquí](https://nodejs.org/))
- **npm** 9.6.6 o superior (se incluye con Node.js)
- **Angular CLI** 17.3.17 o superior

Para instalar Angular CLI globalmente:
```bash
npm install -g @angular/cli@17.3.17
```

## 🚀 Instalación Rápida

### 1. Clonar el repositorio
```bash
git clone https://github.com/Arjones97/modern-web-cv-angular.git
cd modern-web-cv-angular
```

### 2. Instalar dependencias
```bash
npm install
```

### 3. Ejecutar en desarrollo
```bash
ng serve
```

### 4. Abrir en el navegador
Abre tu navegador y ve a: **http://localhost:4200**

## ⚙️ Personalización

### 🎯 Guía Paso a Paso

#### 1. **Información Personal (Hero Section)**

Edita: `src/app/components/hero/hero.component.ts`

```typescript
// Cambia estos valores con tu información
fullName = 'Tu Nombre Completo';
subtitle = 'Tu Título Profesional';
profileImage = 'assets/profile.jpeg';

socialLinks = {
  linkedin: 'https://www.linkedin.com/in/tu-perfil/',
  github: 'https://github.com/tu-usuario',
  email: 'mailto:tu-email@ejemplo.com',
  // Añade más redes si lo deseas
};
```

#### 2. **Sección Acerca de Mí**

Edita: `src/app/components/about/about.component.html`

```html
<!-- Personaliza los párrafos con tu propia historia -->
<p class="about-text">
  Tu descripción personal aquí...
</p>
```

**Fotos**: Coloca tus imágenes personales en `/assets/`:
- `photo1.jpeg`, `photo2.jpeg`, `photo3.jpeg`
- Recomendado: 800x600px o similar

#### 3. **Experiencia Laboral**

Edita: `src/app/components/experience/experience.component.html`

El componente incluye ejemplos completos de:
- Graduación/Formación académica
- Experiencias laborales con múltiples proyectos
- Tech stack de cada proyecto
- Fechas y descripciones

Simplemente reemplaza los datos de ejemplo con tu propia experiencia.

#### 4. **Habilidades**

Edita: `src/app/components/skills/skills.component.html`

Personaliza las tarjetas de habilidades y ajusta las valoraciones con estrellas:
- ⭐⭐⭐⭐⭐ - Experto
- ⭐⭐⭐⭐ - Avanzado
- ⭐⭐⭐ - Intermedio
- ⭐⭐ - Básico

#### 5. **Imágenes y Fotos**

**⚠️ IMPORTANTE**: El template incluye imágenes de demostración para que veas cómo funciona al instalar:

**Imágenes incluidas (DEBES REEMPLAZARLAS):**
- `profile.jpeg` - Foto de perfil en el hero
- `img1.jpg` - Foto 1 de la galería en "Acerca de Mí"
- `img2.jpg` - Foto 2 de la galería en "Acerca de Mí"
- `img3.jpg` - Foto 3 de la galería en "Acerca de Mí"
- `cv.pdf` - PDF de ejemplo para el botón "Mi CV"

**Para personalizarlas:**

1. **Foto de perfil** (`src/assets/profile.jpeg`):
   - Tamaño: 500x500px (cuadrada)
   - Formato: JPG, PNG o WEBP
   - Debe verse bien en círculo

2. **Galería de fotos** (`src/assets/img1.jpg`, `img2.jpg`, `img3.jpg`):
   - Tamaño recomendado: 800x600px o ratio 4:3
   - Pueden ser fotos de: hobbies, eventos, viajes, actividades, etc.
   - Mantén los mismos nombres o actualiza las rutas en `about.component.html`

3. **CV en PDF** (`src/assets/cv.pdf`):
   - Reemplaza con tu CV real
   - Tamaño recomendado: menos de 5MB

#### 6. **Colores y Tema**

Para cambiar la paleta de colores, edita las variables CSS en cada archivo `.component.css`:
- Color primario (actualmente: `#2c3e50`)
- Color secundario (actualmente: `#3498db`)
- Gradientes de fondo

---

## 📦 Compilar para Producción

```bash
ng build --configuration production
```

Los archivos compilados estarán en `dist/`

---

## 🌐 Despliegue

Puedes desplegar fácilmente en:

### GitHub Pages
```bash
npm install -g angular-cli-ghpages
ng build --configuration production --base-href=/nombre-repo/
ngh --dir=dist/modern-web-cv-angular/browser
```

### Netlify
1. Arrastra la carpeta `dist/modern-web-cv-angular/browser` a Netlify
2. O conecta tu repositorio de GitHub

### Vercel
```bash
npm install -g vercel
vercel
```

### Firebase Hosting
```bash
npm install -g firebase-tools
firebase login
firebase init hosting
firebase deploy
```

---

## 📝 Scripts Disponibles

```bash
npm start           # Servidor de desarrollo
ng serve           # Igual que npm start
ng build           # Compilar para producción
ng test            # Ejecutar tests unitarios
```

---

## 🎯 Estructura del Proyecto

```
src/
├── app/
│   ├── components/
│   │   ├── navbar/          # Barra de navegación
│   │   ├── hero/            # Sección principal con foto
│   │   ├── about/           # Acerca de mí + galería fotos
│   │   ├── skills/          # Habilidades técnicas
│   │   ├── experience/      # Timeline de experiencia
│   │   ├── contact/         # Sección de contacto (opcional)
│   │   └── footer/          # Pie de página
│   ├── app.component.*      # Componente raíz con partículas
│   ├── app.config.ts        # Configuración de la app
│   └── app.routes.ts        # Rutas (si las necesitas)
├── assets/                  # Imágenes y recursos
├── styles.css              # Estilos globales
└── index.html              # HTML principal
```

---

## 🎨 Personalización Avanzada

### Configuración de Partículas

Edita en `src/app/app.component.ts`:

```typescript
particlesOptions = {
  particles: {
    number: {
      value: 80, // Número de partículas
    },
    color: {
      value: "#ffffff", // Color de partículas
    },
    links: {
      distance: 150,
      color: "#ffffff",
    },
    // ...más opciones
  }
}
```

### Animaciones AOS

Personaliza delays y efectos en los archivos HTML:
```html
<div data-aos="fade-up" data-aos-delay="200">
  <!-- Tu contenido -->
</div>
```

Efectos disponibles: `fade-up`, `fade-down`, `fade-right`, `fade-left`, `zoom-in`, `flip-up`, etc.

---

## 💡 Mejores Prácticas

1. **Optimiza tus imágenes** antes de subirlas (usa TinyPNG o similar)
2. **Mantén el código limpio** - Los comentarios te guían en cada sección
3. **Actualiza meta tags** en `index.html` para mejor SEO
4. **Usa Git** para versionar tus cambios
5. **Testea en múltiples dispositivos** para asegurar responsividad

---

## 🐛 Solución de Problemas

### Las partículas no se muestran
- Verifica que `NgxParticlesModule` esté importado en `app.config.ts`
- Asegúrate de que la función `loadSlim` se llama correctamente

### Las animaciones no funcionan
- Verifica que AOS se inicialice en `app.component.ts`
- Comprueba que los atributos `data-aos` estén correctamente escritos

### Errores al compilar
```bash
# Limpia caché y reinstala
rm -rf node_modules package-lock.json
npm install
```

---

## 🤝 Contribuciones

¡Las contribuciones son bienvenidas! Si encuentras algún bug o tienes ideas para mejorar:

1. Fork el proyecto
2. Crea una rama (`git checkout -b feature/AmazingFeature`)
3. Commit tus cambios (`git commit -m 'Add: AmazingFeature'`)
4. Push a la rama (`git push origin feature/AmazingFeature`)
5. Abre un Pull Request

---

## 📄 Licencia

Este proyecto está bajo la Licencia MIT. Ver el archivo [LICENSE](LICENSE) para más detalles.

Esto significa que puedes usar, copiar, modificar, fusionar, publicar, distribuir, sublicenciar y/o vender copias del software libremente.

---

## 👨‍💻 Autor

**Template creado por Antonio Arjones Sánchez**

Si usas esta plantilla, ¡me encantaría ver tu CV! No olvides darle una ⭐ al repositorio si te resultó útil.

---

## 🙏 Agradecimientos

- [Angular](https://angular.io/) - Framework
- [tsparticles](https://particles.js.org/) - Partículas animadas
- [AOS](https://michalsnik.github.io/aos/) - Animaciones al scroll
- [Font Awesome](https://fontawesome.com/) - Iconos
- [Google Fonts](https://fonts.google.com/) - Tipografías

---

## 📧 Contacto y Soporte

¿Tienes preguntas o necesitas ayuda? 

- Abre un [Issue](https://github.com/Arjones97/modern-web-cv-angular/issues)
- Revisa la [documentación de Angular](https://angular.io/docs)

---

**¡Disfruta creando tu CV web! 🚀**
