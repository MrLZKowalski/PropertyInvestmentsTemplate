import { Component, Input } from '@angular/core';
import { PropertyCardComponent } from './property-card.component';

@Component({
  selector: 'property-list',
  standalone: true,
  imports: [PropertyCardComponent],
  template: `
    <section class="property-list">
      <h2>Lista lokali</h2>
      <div class="properties">
        <property-card *ngFor="let property of properties" [property]="property"></property-card>
      </div>
    </section>
  `,
  styles: [`
    .property-list { margin-bottom: 2rem; }
    .properties { display: flex; flex-wrap: wrap; gap: 2rem; justify-content: flex-start; }
  `]
})
export class PropertyListComponent {
  @Input() properties: any[] = [];
}
