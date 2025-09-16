
import { Component, Input } from '@angular/core';
import { PropertyGalleryComponent } from './property-gallery.component';
import { PriceHistoryComponent } from './price-history.component';
import { CurrencyPipe, CommonModule } from '@angular/common';

@Component({
  selector: 'property-card',
  standalone: true,
  imports: [PropertyGalleryComponent, PriceHistoryComponent, CurrencyPipe, CommonModule],
  template: `
    <article class="property-card">
      <property-gallery [images]="property.images"></property-gallery>
      <div class="property-details">
        <h3>{{ property.name }}</h3>
        <div class="meta">
          <span>Powierzchnia: {{ property.area }} m²</span>
          <span>Cena: {{ property.price | currency:'PLN':'symbol':'1.0-0' }}</span>
          <span>Cena za m²: {{ property.pricePerM2 | currency:'PLN':'symbol':'1.0-0' }}</span>
        </div>
        <div *ngIf="property.additionalRooms?.length">
          <span>Dodatkowe pomieszczenia:</span>
          <ul>
            <li *ngFor="let room of property.additionalRooms">{{ room.name }}: {{ room.price | currency:'PLN':'symbol':'1.0-0' }}</li>
          </ul>
        </div>
        <div *ngIf="property.fees?.length">
          <span>Opłaty dodatkowe:</span>
          <ul>
            <li *ngFor="let fee of property.fees">{{ fee.name }}: {{ fee.amount | currency:'PLN':'symbol':'1.0-0' }}</li>
          </ul>
        </div>
        <price-history [history]="property.priceHistory"></price-history>
      </div>
    </article>
  `,
  styles: [`
    .property-card { background: #fff; border-radius: 1rem; box-shadow: 0 2px 8px #0001; padding: 1.5rem; max-width: 420px; min-width: 320px; display: flex; flex-direction: column; gap: 1.2rem; }
    .property-details h3 { margin: 0 0 0.5rem 0; font-size: 1.3rem; }
    .meta { display: flex; flex-wrap: wrap; gap: 1.2rem; font-size: 1.1rem; color: #444; margin-bottom: 0.5rem; }
    ul { margin: 0.2rem 0 0.5rem 1.2rem; padding: 0; }
    li { font-size: 1rem; }
  `]
})
export class PropertyCardComponent {
  @Input() property: any;
}
