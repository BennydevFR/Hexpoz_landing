import { resend, SENDER_EMAIL } from './resend';

interface SendConfirmationEmailParams {
  email: string;
  interestLevel: string;
}

export async function sendConfirmationEmail({ email, interestLevel }: SendConfirmationEmailParams) {
  try {
    console.log('Attempting to send confirmation email to:', email);
    
    const htmlContent = `
      <!DOCTYPE html>
      <html>
        <head>
          <meta charset="utf-8">
          <meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />
          <title>Bienvenue dans la bêta d'Hexpoz !</title>
          <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600&display=swap" rel="stylesheet">
        </head>
        <body style="
          font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
          line-height: 1.6;
          color: #ffffff;
          background: rgb(10, 10, 10);
          margin: 0;
          padding: 0;
        ">
          <div style="
            max-width: 600px;
            margin: 0 auto;
            padding: 40px 20px;
            background: linear-gradient(to bottom, rgb(10, 10, 10), rgb(17, 17, 17));
          ">
            <!-- Logo -->
            <div style="text-align: center; margin-bottom: 40px;">
              <img src="https://ysvbxtkeeelcldaarwmz.supabase.co/storage/v1/object/public/landing//HEXPOZ.png" 
                   alt="Hexpoz" 
                   width="1000" 
                   height="1000"
                   style="display: inline-block !important; width: 100px !important; height: auto !important; max-width: 100px !important;"
              />
            </div>

            <!-- Badge Beta -->
            <div style="
              text-align: center;
              margin-bottom: 32px;
            ">
              <span style="
                display: inline-block;
                padding: 8px 16px;
                background: rgba(255, 255, 255, 0.1);
                border-radius: 9999px;
                font-size: 14px;
                color: #9ca3af;
                border: 1px solid rgba(255, 255, 255, 0.1);
              ">
                🎯 Phase 1: Bêta Fermée
              </span>
            </div>

            <!-- Titre -->
            <h1 style="
              font-size: 36px;
              font-weight: 300;
              color: #ffffff;
              text-align: center;
              margin-bottom: 24px;
              line-height: 1.2;
            ">
              Bienvenue dans la<br>
              <span style="color: #9ca3af;">bêta fermée</span>
            </h1>

            <!-- Contenu -->
            <div style="
              background: rgba(255, 255, 255, 0.05);
              border: 1px solid rgba(255, 255, 255, 0.1);
              border-radius: 16px;
              padding: 32px;
              margin-bottom: 32px;
            ">
              <p style="margin: 0 0 16px 0; color: #9ca3af;">
                Nous sommes ravis de vous compter parmi nos premiers utilisateurs. Votre participation à la bêta fermée vous donne un accès exclusif à Hexpoz.
              </p>

              <div style="
                background: rgba(255, 255, 255, 0.05);
                border-radius: 12px;
                padding: 20px;
                margin: 24px 0;
              ">
                <h3 style="
                  font-size: 14px;
                  color: #9ca3af;
                  margin: 0 0 8px 0;
                  font-weight: 400;
                ">Détails de votre inscription</h3>
                <p style="
                  font-size: 16px;
                  color: #ffffff;
                  margin: 4px 0;
                ">Email : ${email}</p>
                <p style="
                  font-size: 16px;
                  color: #ffffff;
                  margin: 4px 0;
                ">Niveau d'intérêt : ${getInterestText(interestLevel)}</p>
              </div>

              <p style="margin: 16px 0; color: #9ca3af;">
                Nous vous tiendrons informé des prochaines étapes. En attendant, préparez-vous à découvrir une nouvelle façon de gérer vos projets.
              </p>
            </div>

            <!-- Badge Urgence -->
            <div style="text-align: center;">
              <span style="
                display: inline-block;
                padding: 8px 16px;
                background: rgba(239, 68, 68, 0.1);
                border: 1px solid rgba(239, 68, 68, 0.2);
                border-radius: 9999px;
                font-size: 14px;
                color: #ef4444;
              ">
                <span style="
                  display: inline-block;
                  width: 8px;
                  height: 8px;
                  background: #ef4444;
                  border-radius: 50%;
                  margin-right: 8px;
                "></span>
                59 places restantes
              </span>
            </div>

            <!-- Footer -->
            <div style="
              text-align: center;
              margin-top: 40px;
              padding-top: 32px;
              border-top: 1px solid rgba(255, 255, 255, 0.1);
            ">
              <p style="
                color: #6b7280;
                font-size: 14px;
                margin: 0;
              ">
                © 2024 Hexpoz. Tous droits réservés.
              </p>
            </div>
          </div>
        </body>
      </html>
    `;

    const data = await resend.emails.send({
      from: SENDER_EMAIL,
      to: email,
      subject: 'Bienvenue dans la bêta d\'Hexpoz ! 🎯',
      html: htmlContent,
    });

    console.log('Email sent successfully:', data);
    return { success: true, data };
  } catch (error) {
    console.error('Detailed error sending confirmation email:', error);
    return { success: false, error };
  }
}

function getInterestText(level: string): string {
  switch (level) {
    case 'curious':
      return 'Curieux(se) d\'en savoir plus';
    case 'excited':
      return 'Très intéressé(e) par le concept';
    case 'needToKnowMore':
      return 'Besoin de plus d\'informations';
    default:
      return 'Non spécifié';
  }
} 