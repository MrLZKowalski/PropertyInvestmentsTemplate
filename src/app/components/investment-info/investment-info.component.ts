import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'investment-info',
  standalone: true,
  imports: [CommonModule],
  template: `
    <section class="investment-hero">
      <div class="hero-background"></div>
      <div class="hero-content">
        <h1 class="investment-name">{{name}}</h1>
        <p class="investment-address">
          <span class="icon">📍</span> {{address}}
        </p>
      </div>
    </section>
    <section class="investment-details">
      <div class="details-container">
        <div class="description-section">
          <h2>O inwestycji</h2>
          <p>{{description}}</p>
          <div class="contact-info">
            <h3>Dane kontaktowe</h3>
            <a [href]="'mailto:' + contactEmail" class="email-link">
              <span class="icon">✉️</span> {{contactEmail}}
            </a>
          </div>
        </div>
        <div class="key-features">
          <h3>Najważniejsze cechy</h3>
          <ul>
            <li><span class="icon">🏗️</span> Nowoczesna architektura</li>
            <li><span class="icon">🌳</span> Ekologiczne rozwiązania</li>
            <li><span class="icon">🚗</span> Podziemny parking</li>
            <li><span class="icon">🏊</span> Basen dla mieszkańców</li>
          </ul>
        </div>
      </div>
    </section>
  `,
  styles: [`
    .investment-hero {
      position: relative;
      height: 60vh;
      min-height: 400px;
      color: white;
      overflow: hidden;
    }

    .hero-background {
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      background-image: linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.7)), url('/assets/images/hero-background.jpg');
      background-size: cover;
      background-position: center;
      z-index: 1;
    }

    .hero-content {
      position: relative;
      z-index: 2;
      max-width: 1200px;
      margin: 0 auto;
      padding: 4rem 2rem;
      height: 100%;
      display: flex;
      flex-direction: column;
      justify-content: flex-end;
    }

    .investment-name {
      font-size: 3.5rem;
      font-weight: 700;
      margin: 0 0 1rem;
      text-shadow: 2px 2px 4px rgba(0,0,0,0.3);
    }

    .investment-address {
      font-size: 1.25rem;
      margin: 0;
      display: flex;
      align-items: center;
      gap: 0.5rem;
    }

    .investment-details {
      background: #f8fafc;
      padding: 4rem 0;
    }

    .details-container {
      max-width: 1200px;
      margin: 0 auto;
      padding: 0 2rem;
      display: grid;
      grid-template-columns: 2fr 1fr;
      gap: 4rem;
    }

    .description-section h2 {
      color: var(--primary-color, #2c3e50);
      font-size: 2rem;
      margin: 0 0 1.5rem;
    }

    .description-section p {
      font-size: 1.125rem;
      line-height: 1.8;
      color: var(--text-color, #4a5568);
      margin-bottom: 2rem;
    }

    .contact-info {
      background: white;
      padding: 2rem;
      border-radius: 0.5rem;
      box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    }

    .contact-info h3 {
      color: var(--primary-color, #2c3e50);
      margin: 0 0 1rem;
    }

    .email-link {
      display: flex;
      align-items: center;
      gap: 0.5rem;
      color: var(--primary-color, #2c3e50);
      text-decoration: none;
      font-weight: 500;
    }

    .email-link:hover {
      text-decoration: underline;
    }

    .key-features {
      background: white;
      padding: 2rem;
      border-radius: 0.5rem;
      box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);
    }

    .key-features h3 {
      color: var(--primary-color, #2c3e50);
      margin: 0 0 1.5rem;
    }

    .key-features ul {
      list-style: none;
      padding: 0;
      margin: 0;
    }

    .key-features li {
      display: flex;
      align-items: center;
      gap: 0.75rem;
      padding: 0.75rem 0;
      border-bottom: 1px solid #e2e8f0;
      color: var(--text-color, #4a5568);
    }

    .key-features li:last-child {
      border-bottom: none;
    }

    .icon {
      font-size: 1.25rem;
    }

    @media (max-width: 768px) {
      .investment-hero {
        height: 50vh;
      }

      .investment-name {
        font-size: 2.5rem;
      }

      .details-container {
        grid-template-columns: 1fr;
        gap: 2rem;
        padding: 0 1rem;
      }
    }
      box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);
    }
    h1 {
      margin: 0 0 1rem;
      color: var(--gray-900);
    }
    .address {
      color: var(--gray-700);
      margin-bottom: 1rem;
    }
    .description {
      line-height: 1.6;
      margin-bottom: 1rem;
    }
    .contact {
      color: var(--gray-700);
    }
    a {
      color: var(--bright-blue);
      text-decoration: none;
    }
    a:hover {
      text-decoration: underline;
    }
  `]
})
export class InvestmentInfoComponent {
  @Input() name: string = '';
  @Input() address: string = '';
  @Input() description: string = '';
  @Input() contactEmail: string = '';
}