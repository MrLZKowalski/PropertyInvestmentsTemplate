export interface Property {
  id: number;
  name: string;
  area: number;
  price: number;
  pricePerM2: number;
  images: string[];
  additionalRooms?: { name: string; price: number }[];
  fees?: { name: string; amount: number }[];
  priceHistory: { date: string; price: number }[];
}

export const MOCK_PROPERTIES: Property[] = [
  {
    id: 1,
    name: 'Mieszkanie A1',
    area: 54.2,
    price: 620000,
    pricePerM2: 11436,
    images: [
      'assets/properties/a1-1.jpg',
      'assets/properties/a1-2.jpg',
      'assets/properties/a1-3.jpg'
    ],
    additionalRooms: [
      { name: 'Garaż', price: 40000 },
      { name: 'Komórka lokatorska', price: 12000 }
    ],
    fees: [
      { name: 'Opłata manipulacyjna', amount: 1000 }
    ],
    priceHistory: [
      { date: '2025-08-01', price: 600000 },
      { date: '2025-09-01', price: 620000 }
    ]
  },
  {
    id: 2,
    name: 'Dom B2',
    area: 120.5,
    price: 1250000,
    pricePerM2: 10373,
    images: [
      'assets/properties/b2-1.jpg',
      'assets/properties/b2-2.jpg'
    ],
    additionalRooms: [
      { name: 'Garaż', price: 60000 }
    ],
    fees: [],
    priceHistory: [
      { date: '2025-07-15', price: 1200000 },
      { date: '2025-09-01', price: 1250000 }
    ]
  }
];

export const MOCK_INVESTMENT = {
  name: 'Osiedle Zielone Wzgórza',
  address: 'ul. Słoneczna 12, 00-123 Warszawa',
  description: 'Nowoczesne osiedle mieszkaniowe zlokalizowane w spokojnej części Warszawy. Wysoki standard wykończenia, bliskość terenów zielonych, pełna infrastruktura.',
  contactEmail: 'biuro@zielone-wzgorza.pl'
};
