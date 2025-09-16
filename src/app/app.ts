import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InvestmentInfoComponent } from './components/investment-info/investment-info.component';
import { PropertyListComponent } from './components/property-list/property-list.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { Investment, Property, Developer } from './models/investment.models';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    HeaderComponent,
    InvestmentInfoComponent,
    PropertyListComponent,
    FooterComponent
  ],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  developer: Developer = {
    name: 'GreenInvest Development Sp. z o.o.',
    email: 'kontakt@greeninvest.pl',
    phone: '+48 22 123 45 67',
    address: 'ul. Konstrukcyjna 12, 02-673 Warszawa',
    nip: '5252887766',
    regon: '386454237',
    krs: '0000123456'
  };

  investment: Investment = {
    name: 'Zielona Dolina Residence',
    address: 'ul. Zielona 123, 00-001 Warszawa',
    description: 'Luksusowy, ekologiczny kompleks mieszkaniowy w sercu Warszawy. ' +
      'Projekt łączy nowoczesną architekturę z troską o środowisko naturalne. ' +
      'Budynek wyposażony w panele fotowoltaiczne, system rekuperacji oraz stacje ładowania pojazdów elektrycznych. ' +
      'Oferujemy przestronne mieszkania z balkonami lub tarasami, zaprojektowane z myślą o komforcie przyszłych mieszkańców.',
    totalUnits: 48,
    developer: this.developer,
    features: [
      'Panele fotowoltaiczne',
      'System rekuperacji',
      'Stacje ładowania pojazdów elektrycznych',
      'Podziemny parking',
      'Całodobowy monitoring',
      'Plac zabaw dla dzieci',
      'Zielony taras na dachu'
    ],
    status: 'under_construction',
    completionDate: '2026-06-30',
    contactEmail: 'sprzedaz@greeninvest.pl'
  };

  properties: Property[] = [
    {
      id: 'A1',
      name: 'Apartament A1',
      currentPrice: 750000,
      area: 75,
      floor: 1,
      rooms: 3,
      type: 'apartment',
      status: 'available',
  imageUrl: 'assets/images/apartment-a1.jpg',
      priceHistory: [
        {
          price: 720000,
          pricePerSquareMeter: 9600,
          date: '2025-06-01'
        },
        {
          price: 750000,
          pricePerSquareMeter: 10000,
          date: '2025-09-01'
        }
      ],
      additionalCosts: [
        {
          name: 'Miejsce parkingowe',
          price: 50000,
          description: 'Miejsce w garażu podziemnym',
          isOptional: true
        },
        {
          name: 'Komórka lokatorska',
          price: 20000,
          description: '5m² powierzchni składowej',
          isOptional: true
        }
      ],
      assignedParking: {
        type: 'underground',
        price: 50000,
        included: false
      },
      assignedStorage: {
        area: 5,
        price: 20000,
        included: false
      }
    },
    {
      id: 'B2',
      name: 'Apartament B2',
      currentPrice: 850000,
      area: 85,
      floor: 2,
      rooms: 4,
      type: 'apartment',
      status: 'reserved',
  imageUrl: 'assets/images/apartment-b2.jpg',
      priceHistory: [
        {
          price: 800000,
          pricePerSquareMeter: 9411,
          date: '2025-06-01'
        },
        {
          price: 850000,
          pricePerSquareMeter: 10000,
          date: '2025-09-01'
        }
      ],
      additionalCosts: [
        {
          name: 'Miejsce parkingowe',
          price: 50000,
          description: 'Miejsce w garażu podziemnym',
          isOptional: false
        },
        {
          name: 'Komórka lokatorska',
          price: 25000,
          description: '6m² powierzchni składowej',
          isOptional: true
        }
      ],
      assignedParking: {
        type: 'underground',
        price: 50000,
        included: true
      },
      assignedStorage: {
        area: 6,
        price: 25000,
        included: false
      }
    },
    {
      id: 'C1',
      name: 'Apartament C1',
      currentPrice: 650000,
      area: 65,
      floor: 1,
      rooms: 2,
      type: 'apartment',
      status: 'available',
  imageUrl: 'assets/images/apartment-c1.jpg',
      priceHistory: [
        {
          price: 630000,
          pricePerSquareMeter: 9692,
          date: '2025-06-01'
        },
        {
          price: 650000,
          pricePerSquareMeter: 10000,
          date: '2025-09-01'
        }
      ],
      additionalCosts: [
        {
          name: 'Miejsce parkingowe',
          price: 45000,
          description: 'Miejsce parkingowe zewnętrzne',
          isOptional: true
        },
        {
          name: 'Komórka lokatorska',
          price: 15000,
          description: '4m² powierzchni składowej',
          isOptional: true
        }
      ],
      assignedParking: {
        type: 'outdoor',
        price: 45000,
        included: false
      },
      assignedStorage: {
        area: 4,
        price: 15000,
        included: false
      }
    }
  ];
}
