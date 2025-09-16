export interface Developer {
  name: string;
  email: string;
  phone: string;
  address: string;
  nip: string;
  regon: string;
  krs?: string;
}

export interface Investment {
  name: string;
  address: string;
  description: string;
  totalUnits: number;
  developer: Developer;
  features: string[];
  status: 'planned' | 'under_construction' | 'completed';
  completionDate: string;
  contactEmail: string;
}

export interface PriceHistory {
  price: number;
  pricePerSquareMeter: number;
  date: string;
}

export interface AdditionalCost {
  name: string;
  price: number;
  description: string;
  isOptional: boolean;
}

export interface Property {
  id: string;
  name: string;
  currentPrice: number;
  area: number;
  priceHistory: PriceHistory[];
  floor: number;
  rooms: number;
  status: 'available' | 'sold' | 'reserved';
  imageUrl: string;
  type: 'apartment' | 'house' | 'commercial';
  additionalCosts: AdditionalCost[];
  assignedParking?: {
    type: 'garage' | 'outdoor' | 'underground';
    price: number;
    included: boolean;
  };
  assignedStorage?: {
    area: number;
    price: number;
    included: boolean;
  };
}