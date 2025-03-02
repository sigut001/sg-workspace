export interface CustomerReview {
  title: string; // Maximale Länge 35 charakters um die UI zu standartisieren
  image: string; // Bild-URL
  name: string; // Name des Kunden Maximale Länge 35 charakters um die UI zu standartisieren
  rating: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10; // Bewertung (z. B. 1–5)
  comment: string; // Kommentartext mit maximal 120 Zeichen
}
