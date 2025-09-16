import { Component, Input } from '@angular/core';

@Component({
  selector: 'investment-info',
  standalone: true,
  template: `
    <section class="investment-info">
      <h1>{{ name }}</h1>
      <p class="address">{{ address }}</p>
      <p class="description">{{ description }}</p>
      <div class="contact">
        <span>Kontakt: </span><a [href]="'mailto:'+contactEmail">{{ contactEmail }}</a>
      </div>
    </section>
  `,
  styles: [`
    .investment-info { margin-bottom: 2rem; }
    .address { color: #888; font-size: 1.1rem; }
    .description { margin: 1rem 0; }
    .contact { font-size: 1rem; }
    .contact a { color: #2a4d8f; text-decoration: underline; }
  `]
})
export class InvestmentInfoComponent {
  @Input() name = '';
  @Input() address = '';
  @Input() description = '';
  @Input() contactEmail = '';
}
