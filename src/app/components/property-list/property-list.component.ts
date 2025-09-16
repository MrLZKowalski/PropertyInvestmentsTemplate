import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Property } from '../../models/investment.models';

@Component({
  selector: 'property-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './property-list.component.html',
  styleUrls: ['./property-list.component.css']
})
export class PropertyListComponent {
  @Input() properties: Property[] = [];

  expandedPropertyId: string | null = null;
  filter: 'all' | 'available' | 'reserved' = 'all';

  get filteredProperties(): Property[] {
    if (this.filter === 'all') return this.properties;
    return this.properties.filter(p => p.status === this.filter);
  }

  getStatusLabel(status: 'available' | 'sold' | 'reserved'): string {
    const statusMap = {
      available: 'Dostępne',
      reserved: 'Zarezerwowane',
      sold: 'Sprzedane'
    };
    return statusMap[status];
  }

  trackById(index: number, property: Property) {
    return property.id;
  }

  toggleDetails(propertyId: string) {
    this.expandedPropertyId = this.expandedPropertyId === propertyId ? null : propertyId;
  }

  setFilter(filter: 'all' | 'available' | 'reserved') {
    this.filter = filter;
    this.expandedPropertyId = null;
  }
}