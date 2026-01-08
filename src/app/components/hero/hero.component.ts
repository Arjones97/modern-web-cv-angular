import { Component } from '@angular/core';

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [],
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.css'
})
export class HeroComponent {
  // 👤 PERSONALIZA TU INFORMACIÓN AQUÍ
  // Cambia estos valores con tu información personal
  fullName = 'Tu Nombre Completo';
  subtitle = 'Tu Título o Profesión';
  profileImage = 'assets/profile.jpeg'; // Coloca tu foto en la carpeta assets/
  
  // 🔗 REDES SOCIALES
  // Añade o elimina las redes sociales que uses
  socialLinks = {
    linkedin: 'https://www.linkedin.com/in/tu-perfil/',
    github: 'https://github.com/tu-usuario',
    email: 'mailto:tu-email@ejemplo.com',
    // Puedes añadir más redes sociales como: twitter, instagram, portfolio, etc.
    // twitter: 'https://twitter.com/tu-usuario',
  };
}
