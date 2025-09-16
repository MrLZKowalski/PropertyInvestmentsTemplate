import { Component, Input } from '@angular/core';

@Component({
  selector: 'property-gallery',
  standalone: true,
  template: `
    <div class="gallery">
      <!-- TODO: Carousel implementation -->
      <img [src]="images[0]" alt="Zdjęcie nieruchomości" class="main-img" />
    </div>
  `,
  styles: [`
    .gallery { width: 100%; aspect-ratio: 4/3; background: #f5f5f5; border-radius: 0.7rem; overflow: hidden; display: flex; align-items: center; justify-content: center; }
    .main-img { width: 100%; height: 100%; object-fit: cover; }
  `]
})
export class PropertyGalleryComponent {
  @Input() images: string[] = [];
}
