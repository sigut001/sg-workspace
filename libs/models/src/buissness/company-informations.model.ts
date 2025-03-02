export interface CompanyInformations {
  companyName: string;
  address: string;
  postalCode: string;
  city: string;
  country: string;
  phone: string;
  email: string;
  website: string;
  vatId?: string;
  taxNumber?: string;
  commercialRegister?: string;
  managingDirectors: string[]; // Verweis auf Geschäftsführer
  contactPerson: string; // Kontaktperson
  disclaimer?: string;
  copyrightNotice?: string;
  socialMediaLinks?: Record<string, string>;
  descriptions?: {
    title: string;
    text: string;
    imageUrl?: string;
  }[];
  companyHistorieCards?: {
    imgUrl: string;
    title: string;
    description: string;
    timePeriod?: string; // Neuer optionaler Zeitraum
  }[];
  companyValues?: {
    label: string;
    description: string;
    imgUrl: string;
  }[]; // Nur 4 Angeben !
}
