import { Component, Input } from '@angular/core';
import { CurrencyPipe, DatePipe, CommonModule } from '@angular/common';

@Component({
  selector: 'price-history',
  standalone: true,
  imports: [CurrencyPipe, DatePipe, CommonModule],
  template: `
    <div class="price-history" *ngIf="history?.length">
      <span>Historia cen:</span>
      <ul>
        <li *ngFor="let h of history">
          {{ h.date | date:'yyyy-MM-dd' }}: {{ h.price | currency:'PLN':'symbol':'1.0-0' }}
        </li>
      </ul>
    </div>
  `,
  styles: [`
    .price-history { font-size: 0.98rem; color: #666; margin-top: 0.5rem; }
    ul { margin: 0.2rem 0 0.5rem 1.2rem; padding: 0; }
    li { font-size: 0.98rem; }
  `]
})
export class PriceHistoryComponent {
  @Input() history: { date: string, price: number }[] = [];
}
