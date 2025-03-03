import { onDocumentCreated } from 'firebase-functions/v2/firestore';
import * as admin from 'firebase-admin';
import axios from 'axios';
import * as dotenv from 'dotenv';

dotenv.config(); // Lädt Umgebungsvariablen aus der .env-Datei

// Firebase initialisieren, falls noch nicht geschehen
if (admin.apps.length === 0) {
  admin.initializeApp();
}

export const onNewCustomerRequest = onDocumentCreated(
  {
    document: 'Kundenanfragen/{anfrageId}',
    region: 'europe-west3',
  },
  async (event) => {
    try {
      if (!event.data) {
        console.error('Kein Event-Datenobjekt vorhanden.');
        return;
      }

      const anfrageData = event.data.data();
      if (!anfrageData) {
        console.error('Fehlende Daten in der Kundenanfrage.');
        return;
      }

      const anfrageId = event.params.anfrageId;
      console.log(`Neue Kundenanfrage: ${anfrageId}`, anfrageData);

      if (
        !anfrageData.personalData ||
        !Array.isArray(anfrageData.orders) ||
        anfrageData.orders.length === 0
      ) {
        throw new Error('Fehlende persönliche Daten oder Bestellungen.');
      }

      const { personalData, orders } = anfrageData;

      const BREVO_API_KEY = process.env.BREVO_API_KEY;
      if (!BREVO_API_KEY) {
        console.error('Brevo API-Key fehlt. Bitte in der .env-Datei setzen.');
        return;
      }

      // 📩 E-Mail vorbereiten
      const emailContent = {
        sender: {
          name: 'My Company',
          email: 'kaytrabandt@gmail.com',
        },
        to: [{ email: 'kaytrabandt@gmail.com', name: 'Betreiber' }],
        subject: 'Neue Kundenanfrage erhalten',
        htmlContent: `
          <div style="font-family: Arial, sans-serif; padding: 20px; background-color: #f4f4f4;">
            <div style="max-width: 600px; background: #ffffff; padding: 20px; border-radius: 8px; box-shadow: 0 0 10px rgba(0,0,0,0.1);">
              <h1 style="color: #333;">Neue Kundenanfrage</h1>
              <p><strong>Anfrage-ID:</strong> ${anfrageId}</p>
              
              <h2 style="color: #007BFF;">Persönliche Daten:</h2>
              <p><strong>Firma:</strong> ${
                personalData.companyName || 'N/A'
              }</p>
              <p><strong>Kontaktperson:</strong> ${
                personalData.contactPerson || 'N/A'
              }</p>
              <p><strong>E-Mail:</strong> ${personalData.email || 'N/A'}</p>

              <h2 style="color: #007BFF;">Bestellungen:</h2>
              ${orders
                .map(
                  (order, index) => `
                  <div style="border-bottom: 1px solid #ddd; padding: 10px 0;">
                    <p><strong>Artikel ${index + 1}:</strong></p>
                    <ul>
                      <li><strong>Technologie:</strong> ${
                        order.technology || 'N/A'
                      }</li>
                      <li><strong>Material:</strong> ${
                        order.material || 'N/A'
                      }</li>
                      <li><strong>Menge:</strong> ${order.amount || 'N/A'}</li>
                      <li><strong>Dateipfad:</strong> ${order.file}</li>
                    </ul>
                  </div>`
                )
                .join('')}
              <div style="margin-top: 20px;">
                <a href="https://console.firebase.google.com/u/0/project/trabbis3dprintservice/storage/trabbis3dprintservice.appspot.com/files" style="display: inline-block; padding: 10px 15px; background: #007BFF; color: #fff; text-decoration: none; border-radius: 5px; font-weight: bold;" target="_blank">📂 Direkt zu Firebase Storage</a>
              </div>
            </div>
          </div>
        `,
      };

      // 📬 E-Mail senden
      try {
        const response = await axios.post(
          'https://api.brevo.com/v3/smtp/email',
          emailContent,
          {
            headers: {
              'api-key': BREVO_API_KEY,
              'Content-Type': 'application/json',
            },
          }
        );
        console.log(`E-Mail erfolgreich gesendet. Status: ${response.status}`);
      } catch (emailError) {
        console.error('Fehler beim Senden der E-Mail:', emailError);
      }
    } catch (error) {
      console.error('Fehler in der Funktion:', error);
    }
  }
);
