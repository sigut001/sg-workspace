// *** Grundlegende Interfaces und Typen ***
export interface Image {
  url: string; // URL des Bildes
  altText: string; // Alternativtext für Barrierefreiheit
  caption?: string; // Bildunterschrift (optional)
}

export interface Video {
  url: string; // URL des Videsos
  altText: string; // Alternativtext für Barrierefreiheit
  caption?: string; // Videsounterschrift (optional)
}
