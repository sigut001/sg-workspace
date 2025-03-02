export interface JobPositions {
  Geschäftsführer: Employee[];
  Logistiker: Employee[];
  Prokurist: Employee[];
  Entwickler: Employee[];
  Designer: Employee[];
  [key: string]: Employee[]; // Ermöglicht flexible Erweiterung um neue Berufe
}

export interface Employee {
  id: number;
  name: string;
  department?: string;
  position: string;
  profilePictureURL?: string;
  email?: string;
  phone?: string;
  bio?: string; // max. 60 Zeichen
  age?: number;
  motto?: string;
  socialLinks?: Record<
    string,
    {
      url: string; // URL des Social Media Profils
      icon?: string; // URL des Icons (optional)
    }
  >;
}
