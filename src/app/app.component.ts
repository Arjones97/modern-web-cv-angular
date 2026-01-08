import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import { NgxParticlesModule } from '@tsparticles/angular';
import type { Container, Engine } from '@tsparticles/engine';
import { loadSlim } from '@tsparticles/slim';
import * as AOS from 'aos';

import { NavbarComponent } from './components/navbar/navbar.component';
import { HeroComponent } from './components/hero/hero.component';
import { AboutComponent } from './components/about/about.component';
import { SkillsComponent } from './components/skills/skills.component';
import { ExperienceComponent } from './components/experience/experience.component';
import { FooterComponent } from './components/footer/footer.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    CommonModule,
    NgxParticlesModule,
    NavbarComponent,
    HeroComponent,
    AboutComponent,
    SkillsComponent,
    ExperienceComponent,
    FooterComponent
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {
  title = 'MiCVApp';
  id = 'tsparticles';
  isMobile = false;

  particlesOptions = {
    background: {
      color: {
        value: 'transparent',
      },
    },
    fpsLimit: 120,
    interactivity: {
      events: {
        onClick: {
          enable: true,
          mode: 'push',
        },
        onHover: {
          enable: true,
          mode: 'repulse',
        },
      },
      modes: {
        push: {
          quantity: 4,
        },
        repulse: {
          distance: 200,
          duration: 0.4,
        },
      },
    },
    particles: {
      color: {
        value: '#ffffff',
      },
      links: {
        color: '#ffffff',
        distance: 150,
        enable: true,
        opacity: 0.3,
        width: 1,
      },
      move: {
        direction: 'none' as const,
        enable: true,
        outModes: {
          default: 'bounce' as const,
        },
        random: false,
        speed: 2,
        straight: false,
      },
      number: {
        density: {
          enable: true,
        },
        value: 80,
      },
      opacity: {
        value: 0.5,
      },
      shape: {
        type: 'circle',
      },
      size: {
        value: { min: 1, max: 5 },
      },
    },
    detectRetina: true,
  };

  constructor() {
    this.isMobile = window.innerWidth <= 768;
    this.updateParticlesForDevice();
  }

  ngOnInit(): void {
    AOS.init({
      duration: 1000,
      once: true,
      offset: 100
    });

    window.addEventListener('resize', () => {
      const wasMobile = this.isMobile;
      this.isMobile = window.innerWidth <= 768;
      if (wasMobile !== this.isMobile) {
        this.updateParticlesForDevice();
      }
    });
  }

  updateParticlesForDevice(): void {
    if (this.isMobile) {
      this.particlesOptions.particles.number.value = 30;
      this.particlesOptions.particles.links.distance = 100;
      this.particlesOptions.particles.move.speed = 1;
      this.particlesOptions.interactivity.events.onHover.enable = false;
      this.particlesOptions.fpsLimit = 60;
    } else {
      this.particlesOptions.particles.number.value = 80;
      this.particlesOptions.particles.links.distance = 150;
      this.particlesOptions.particles.move.speed = 2;
      this.particlesOptions.interactivity.events.onHover.enable = true;
      this.particlesOptions.fpsLimit = 120;
    }
  }

  async particlesInit(engine: Engine): Promise<void> {
    // Cargar el bundle slim de tsparticles (más ligero)
    await loadSlim(engine);
    console.log('Particles engine initialized', engine);
  }

  particlesLoaded(container: Container): void {
    console.log('Particles loaded successfully', container);
  }
}
