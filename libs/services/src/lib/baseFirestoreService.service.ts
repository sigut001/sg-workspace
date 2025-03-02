import { Injectable } from '@angular/core';
import { Firestore, collection, addDoc } from '@angular/fire/firestore';
import { PersonalData } from '@sg-shared-librarys/models';

// Interface für Order-Daten
export interface Order {
  technology: string;
  material: string;
  finishing: string;
  amount: string;
  createdAt: Date;
}

export interface CustomerRequest {
  orders: Order[];
  personalData: PersonalData;
}

@Injectable({
  providedIn: 'root',
})
export class OrdersService {
  private collectionName = 'Kundenanfragen';

  constructor(private firestore: Firestore) {}

  async add(data: CustomerRequest): Promise<string> {
    const collectionRef = collection(this.firestore, this.collectionName);

    // Speichert das Order-Objekt in Firestore
    const docRef = await addDoc(collectionRef, data);
    return docRef.id;
  }

  /**
   * Aktualisiert ein bestehendes Dokument in der Collection `orders`.
   * @param id Die ID des Dokuments.
   * @param data Die aktualisierten Daten des `Order`.
   * @returns Promise<void>.
   */
}
