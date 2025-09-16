import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [CommonModule],
  template: `
    <footer class="site-footer">
      <div class="footer-content">
        <div class="footer-section">
          <h3>GreenInvest</h3>
          <p>Twój zaufany partner w ekologicznych inwestycjach mieszkaniowych. Budujemy zrównoważoną przyszłość razem.</p>
          <div class="social-links">
            <a href="#" aria-label="Facebook">
              <i class="fab fa-facebook"></i>
            </a>
            <a href="#" aria-label="Twitter">
              <i class="fab fa-twitter"></i>
            </a>
            <a href="#" aria-label="LinkedIn">
              <i class="fab fa-linkedin"></i>
            </a>
            <a href="#" aria-label="Instagram">
              <i class="fab fa-instagram"></i>
            </a>
          </div>
        </div>
        
        <div class="footer-section">
          <h4>Szybkie linki</h4>
          <ul>
            <li><a href="#inwestycja">O inwestycji</a></li>
            <li><a href="#mieszkania">Mieszkania</a></li>
            <li><a href="#lokalizacja">Lokalizacja</a></li>
            <li><a href="#kontakt">Kontakt</a></li>
          </ul>
        </div>
        
        <div class="footer-section">
          <h4>Dane kontaktowe</h4>
          <ul class="contact-info">
            <li>
              <span class="icon">📍</span>
              ul. Zielona 123, 00-001 Warszawa
            </li>
            <li>
              <span class="icon">📞</span>
              +48 123 456 789
            </li>
            <li>
              <span class="icon">✉️</span>
              kontakt@greeninvest.pl
            </li>
          </ul>
        </div>
        
        <div class="footer-section">
          <h4>Newsletter</h4>
          <p>Zapisz się do newslettera, aby otrzymywać najnowsze informacje i oferty inwestycyjne.</p>
          <form class="newsletter-form">
            <input type="email" placeholder="Twój adres e-mail">
            <button type="submit">Zapisz się</button>
          </form>
        </div>
      </div>
      
      <div class="footer-bottom">
        <div class="footer-container">
          <p>&copy; 2025 GreenInvest. Wszelkie prawa zastrzeżone.</p>
          <div class="footer-links">
            <a href="#">Polityka prywatności</a>
            <a href="#">Regulamin</a>
            <a href="#">Polityka cookies</a>
          </div>
        </div>
      </div>
    </footer>
  `,
  styles: [`
    .site-footer {
      background: var(--primary-color, #2c3e50);
      color: white;
      padding: 4rem 0 0;
      margin-top: 4rem;
    }

    .footer-content {
      max-width: 1200px;
      margin: 0 auto;
      padding: 0 2rem;
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
      gap: 3rem;
    }

    .footer-section h3 {
      font-size: 1.5rem;
      margin: 0 0 1rem;
    }

    .footer-section h4 {
      font-size: 1.125rem;
      margin: 0 0 1rem;
      color: #e2e8f0;
    }

    .footer-section p {
      color: #cbd5e1;
      line-height: 1.6;
      margin-bottom: 1.5rem;
    }

    .social-links {
      display: flex;
      gap: 1rem;
    }

    .social-links a {
      color: white;
      font-size: 1.25rem;
      transition: color 0.3s ease;
    }

    .social-links a:hover {
      color: #60a5fa;
    }

    .footer-section ul {
      list-style: none;
      padding: 0;
      margin: 0;
    }

    .footer-section ul li {
      margin-bottom: 0.75rem;
    }

    .footer-section ul a {
      color: #cbd5e1;
      text-decoration: none;
      transition: color 0.3s ease;
    }

    .footer-section ul a:hover {
      color: white;
    }

    .contact-info li {
      display: flex;
      align-items: center;
      gap: 0.75rem;
      color: #cbd5e1;
    }

    .newsletter-form {
      display: flex;
      gap: 0.5rem;
    }

    .newsletter-form input {
      flex: 1;
      padding: 0.75rem;
      border: 1px solid #475569;
      border-radius: 0.375rem;
      background: #334155;
      color: white;
    }

    .newsletter-form input::placeholder {
      color: #94a3b8;
    }

    .newsletter-form button {
      padding: 0.75rem 1.5rem;
      background: #60a5fa;
      color: white;
      border: none;
      border-radius: 0.375rem;
      cursor: pointer;
      transition: background-color 0.3s ease;
    }

    .newsletter-form button:hover {
      background: #3b82f6;
    }

    .footer-bottom {
      margin-top: 4rem;
      padding: 1.5rem 0;
      background: rgba(0, 0, 0, 0.1);
    }

    .footer-container {
      max-width: 1200px;
      margin: 0 auto;
      padding: 0 2rem;
      display: flex;
      justify-content: space-between;
      align-items: center;
    }

    .footer-bottom p {
      margin: 0;
      color: #cbd5e1;
    }

    .footer-links {
      display: flex;
      gap: 2rem;
    }

    .footer-links a {
      color: #cbd5e1;
      text-decoration: none;
      transition: color 0.3s ease;
    }

    .footer-links a:hover {
      color: white;
    }

    @media (max-width: 768px) {
      .footer-content {
        grid-template-columns: 1fr;
        gap: 2rem;
      }

      .footer-container {
        flex-direction: column;
        gap: 1rem;
        text-align: center;
      }

      .footer-links {
        flex-direction: column;
        gap: 0.5rem;
      }
    }
  `]
})
export class FooterComponent {}