export interface Costs {
  priceEntry: PriceEntry[]; // Liste von Preisangaben für unterschiedliche Mengen
}

export interface PriceEntry {
  price: string; // Preis für diese Menge, z. B. "19.99"
  quantity: number; // Menge, auf die sich der Preis bezieht
  calculationType: 'perMeter' | 'perRoll' | 'perPiece'; // Art der Berechnung
  unit: '/meter' | '/Rolle' | '/Stück';
  currency: string; // Optionale Angabe der Währung, z. B. "EUR", "USD"
}

// *** Bestell- und Benutzerformulare ***
export interface userRequest {
  orders: order[];
  personalData: personalData;
  billingData: billingData;
}

export interface billingData {
  companyName?: string; // Firmenname (optional, falls für Rechnungsstellung benötigt)
  vatNumber?: string; // Umsatzsteuer-ID (falls erforderlich)
  billingAddress: Address; // Rechnungsadresse
  paymentMethod: PaymentMethod; // Zahlungsmethode
}

// Zahlungsmethoden als Typ
export type PaymentMethod = 'creditCard' | 'paypal' | 'bankTransfer' | 'cash';

export interface personalData {
  firstName: string; // Vorname des Nutzers
  lastName: string; // Nachname des Nutzers
  email: string; // E-Mail-Adresse
  phone?: string; // Telefonnummer (optional)
  address: Address; // Adresse des Nutzers
}

// Adresse als eigenes Interface
export interface Address {
  street: string; // Straße und Hausnummer
  city: string; // Stadt
  postalCode: string; // Postleitzahl
  country: string; // Land
}

export interface order {
  amount: number;
  orderDetails: orderDetails;
}

export interface orderDetails {
  createDate: Date;
}
