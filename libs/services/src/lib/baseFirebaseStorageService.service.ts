import { Injectable } from '@angular/core';
import {
  Storage,
  ref,
  uploadBytesResumable,
  StorageReference,
} from '@angular/fire/storage';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class FirebaseStorageService {
  constructor(private storage: Storage) {}

  /**
   * Uploads a file to Firebase Storage.
   * @param filePath The storage path where the file will be saved.
   * @param file The file to upload.
   * @returns An Observable of the download URL once the upload is complete.
   */
  uploadFile(filePath: string, file: File): Observable<StorageReference> {
    return new Observable<StorageReference>((observer) => {
      const storageRef = ref(this.storage, filePath);
      const uploadTask = uploadBytesResumable(storageRef, file);

      uploadTask.on(
        'state_changed',
        null, // Fortschritts-Updates werden hier ignoriert
        (error) => {
          observer.error(error); // Fehler an den Observer weitergeben
        },
        async () => {
          // Upload abgeschlossen: Download-URL abrufen
          try {
            // const downloadURL = await getDownloadURL(storageRef);
            observer.next(storageRef); // Download-URL senden
            observer.complete(); // Observable abschließen
          } catch (error) {
            observer.error(error); // Fehler melden
          }
        }
      );
    });
  }
}
