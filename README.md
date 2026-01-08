# 🌐 Modern Web CV - Angular 17

<div align="center">

![Angular](https://img.shields.io/badge/Angular-17.3-DD0031?style=for-the-badge&logo=angular&logoColor=white)
![TypeScript](https://img.shields.io/badge/TypeScript-5.4-3178C6?style=for-the-badge&logo=typescript&logoColor=white)
![License](https://img.shields.io/badge/License-MIT-green.svg?style=for-the-badge)

**Plantilla profesional de CV web con animaciones interactivas, diseño responsive y fácil personalización**

[Ver Demo](#-vista-previa) | [Características](#-características) | [Instalación](#-instalación-rápida)

</div>

---

<details>
<summary><h2>📸 Ver Screenshots</h2></summary>

<div align="center">

### 🖥️ Vista Desktop
![Vista Desktop](screenshots/full-screen.png)

### 📱 Vista Móvil
<img src="screenshots/mobile-view.png" alt="Vista Móvil" width="400">

</div>

</details>

---

## 📋 Descripción

Template moderno y atractivo de portafolio/CV web desarrollado con Angular 17. Incluye partículas animadas, transiciones suaves y un diseño profesional totalmente personalizable.

Perfecto para desarrolladores, diseñadores y profesionales tech que quieren destacar con un CV digital moderno, interactivo y visualmente impactante.

## ✨ Características

- ✨ **Fondo animado con partículas** - Efectos visuales interactivos usando tsparticles
- 🎭 **Animaciones suaves al scroll** - Transiciones elegantes con AOS (Animate On Scroll)
- 🎨 **Diseño moderno** - Gradientes vibrantes y efectos glassmorphism
- 📱 **100% Responsive** - Se adapta perfectamente a móviles, tablets y escritorio
- 🔗 **Integración con redes sociales** - Enlaces a LinkedIn, GitHub, email y más
- 🎯 **Navegación fluida** - Scroll suave entre secciones
- 🌈 **Tipografías modernas** - Google Fonts (Poppins y Montserrat)
- ⚡ **Componentes standalone** - Arquitectura Angular 17 moderna
- 🎨 **Totalmente personalizable** - Todos los datos son fáciles de modificar mediante placeholders
- 📝 **Bien documentado** - Comentarios explicativos en todo el código

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

```bash
# 1. Clonar el repositorio
git clone https://github.com/Arjones97/modern-web-cv-angular.git
cd modern-web-cv-angular

# 2. Instalar dependencias
npm install

# 3. Personalizar con tus datos
# Los archivos incluyen placeholders y comentarios guía

# 4. Iniciar servidor de desarrollo
npm start

# 5. Abrir en navegador
# http://localhost:4200
```

---

## 📝 Personalización

**¡Es muy fácil! Solo edita los componentes siguiendo los comentarios:**

### 🎯 Personalización Básica

| Sección | Archivo | Descripción |
|---------|---------|-------------|
| **Información Personal** | `src/app/components/hero/hero.component.ts` | Nombre, título, foto de perfil y redes sociales |
| **Acerca de Mí** | `src/app/components/about/about.component.html` | Descripción personal y galería de fotos |
| **Experiencia** | `src/app/components/experience/experience.component.html` | Trayectoria laboral, proyectos y tecnologías |
| **Habilidades** | `src/app/components/skills/skills.component.html` | Skills técnicas con valoración por estrellas |
| **Footer** | `src/app/components/footer/footer.component.html` | Copyright y enlaces a redes |

### 📸 Imágenes Incluidas

**⚠️ El template incluye imágenes de demostración. Reemplázalas con las tuyas:**

- `profile.jpeg` - Foto de perfil (500x500px recomendado)
- `img1.jpg`, `img2.jpg`, `img3.jpg` - Galería de fotos (800x600px)
- `cv.pdf` - Tu CV en PDF

Todas en: `src/assets/`

---

## 📦 Comandos Disponibles

```bash
npm start          # Servidor de desarrollo (puerto 4200)
npm run build      # Compilar para producción
npm test           # Ejecutar tests unitarios
npm run watch      # Compilar en modo watch
```

---

<details>
<summary><h2>🌐 Despliegue</h2></summary>

Puedes desplegar fácilmente en múltiples plataformas:

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

</details>

<details>
<summary><h2>🎨 Personalización Avanzada</h2></summary>

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

### Cambiar Colores del Tema

Edita las variables CSS en `src/styles.css`:

```css
:root {
  --midnight-dark: #2c3e50;    /* Color principal oscuro */
  --midnight-light: #3498db;   /* Color de acento */
}
```

</details>

<details>
<summary><h2>🎯 Estructura del Proyecto</h2></summary>

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
│   ├── profile.jpeg         # 👈 Tu foto de perfil
│   ├── img1.jpg            # 👈 Foto galería 1
│   ├── img2.jpg            # 👈 Foto galería 2
│   ├── img3.jpg            # 👈 Foto galería 3
│   └── cv.pdf              # 👈 Tu CV en PDF
├── styles.css              # Estilos globales
└── index.html              # HTML principal
```

</details>

<details>
<summary><h2>🐛 Solución de Problemas</h2></summary>

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

</details>

---

## 🛠️ Tecnologías

| Categoría | Tecnologías |
|-----------|-------------|
| **Framework** | Angular 17.3, TypeScript 5.4, RxJS 7.8 |
| **Animaciones** | tsparticles 3.0, AOS 2.3.4 |
| **UI/Iconos** | Font Awesome 7.1.0, Angular Material 17.3 |
| **Estilos** | CSS3 Variables, Grid, Flexbox, Google Fonts |

---

## 💡 Mejores Prácticas

1. ✅ **Optimiza imágenes** antes de subirlas (usa TinyPNG o similar)
2. ✅ **Sigue los comentarios** del código para personalizar correctamente
3. ✅ **Actualiza meta tags** en `index.html` para mejor SEO
4. ✅ **Usa Git** para versionar tus cambios
5. ✅ **Testea en múltiples dispositivos** para asegurar responsividad

---

## 🤝 Contribuciones

¡Las contribuciones son bienvenidas! Si encuentras algún bug o tienes ideas para mejorar:

1. Fork el proyecto
2. Crea una rama (`git checkout -b feature/AmazingFeature`)
3. Commit tus cambios (`git commit -m 'Add: AmazingFeature'`)
4. Push a la rama (`git push origin feature/AmazingFeature`)
5. Abre un Pull Request

---

## 📜 Licencia

Este proyecto está bajo la Licencia MIT. Ver el archivo [LICENSE](LICENSE) para más detalles.

Puedes:
- ✅ Usar comercialmente
- ✅ Modificar
- ✅ Distribuir
- ✅ Uso privado

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

## 📧 Contacto

¿Tienes preguntas o sugerencias?

- 📫 Abre un [Issue](https://github.com/Arjones97/modern-web-cv-angular/issues)
- 💬 Comparte tu CV creado con este template
- ⭐ Da una estrella si te fue útil

---

<div align="center">

**Hecho con ❤️ usando Angular 17**

⭐ Star this repo if you find it useful!

</div>
