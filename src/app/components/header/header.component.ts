import { Component, HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule],
  template: `
    <header class="site-header">
      <div class="header-container">
        <div class="logo">
          <h1>GreenInvest</h1>
        </div>
        <nav class="main-nav">
          <ul>
            <li><a href="#inwestycja" class="nav-link">O inwestycji</a></li>
            <li><a href="#mieszkania" class="nav-link">Mieszkania</a></li>
            <li><a href="#lokalizacja" class="nav-link">Lokalizacja</a></li>
            <li><a href="#kontakt" class="nav-link">Kontakt</a></li>
          </ul>
        </nav>
        <button class="contact-button" (click)="scrollToContact()">Zapytaj o ofertę</button>
      </div>
    </header>
  `,
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  constructor() {
    this.updateActiveLink();
  }

  @HostListener('window:scroll')
  onScroll(): void {
    this.updateActiveLink();
  }

  scrollToContact(): void {
    const contactSection = document.getElementById('kontakt');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  }

  private updateActiveLink(): void {
    const sections = ['inwestycja', 'mieszkania', 'lokalizacja', 'kontakt'];
    const navLinks = document.querySelectorAll('.nav-link');
    
    for (const sectionId of sections) {
      const element = document.getElementById(sectionId);
      if (element) {
        const rect = element.getBoundingClientRect();
        if (rect.top <= 150 && rect.bottom >= 150) {
          navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === '#' + sectionId) {
              link.classList.add('active');
            }
          });
          break;
        }
      }
    }
  }
}