import { NextResponse } from 'next/server';
import { sendConfirmationEmail } from '../../lib/email-service';

const AIRTABLE_API_KEY = process.env.AIRTABLE_API_KEY;
const AIRTABLE_BASE_ID = process.env.AIRTABLE_BASE_ID;
const AIRTABLE_TABLE_ID = 'tbljWwXpvtHtLiZEN';
const RECAPTCHA_SECRET_KEY = process.env.RECAPTCHA_SECRET_KEY;

async function verifyRecaptcha(token: string) {
  const response = await fetch('https://www.google.com/recaptcha/api/siteverify', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
    },
    body: `secret=${RECAPTCHA_SECRET_KEY}&response=${token}`,
  });

  const data = await response.json();
  return data.success;
}

export async function POST(request: Request) {
  try {
    const { email, interestLevel, captchaToken } = await request.json();

    // Validation du captcha
    if (!captchaToken || !await verifyRecaptcha(captchaToken)) {
      return NextResponse.json(
        { error: 'Validation du captcha échouée' },
        { status: 400 }
      );
    }

    // Validation simple
    if (!email || !email.includes('@')) {
      return NextResponse.json(
        { error: 'Email invalide' },
        { status: 400 }
      );
    }

    if (!AIRTABLE_API_KEY || !AIRTABLE_BASE_ID) {
      console.error('Missing environment variables');
      return NextResponse.json(
        { error: 'Configuration serveur manquante' },
        { status: 500 }
      );
    }

    const airtableUrl = `https://api.airtable.com/v0/${AIRTABLE_BASE_ID}/${AIRTABLE_TABLE_ID}`;

    // Création de l'enregistrement pour Airtable
    const record = {
      fields: {
        Email: email,
        Date: new Date().toISOString(),
        InterestLevel: interestLevel || 'unspecified'
      }
    };

    // Envoi à Airtable
    const response = await fetch(airtableUrl, {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${AIRTABLE_API_KEY}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        records: [record]
      })
    });

    if (!response.ok) {
      const errorData = await response.json();
      console.error('Airtable error:', errorData);
      throw new Error(`Erreur Airtable: ${JSON.stringify(errorData)}`);
    }

    const result = await response.json();

    // Envoi de l'email de confirmation
    try {
      const emailResult = await sendConfirmationEmail({ email, interestLevel });
      if (!emailResult.success) {
        console.error('Failed to send confirmation email:', emailResult.error);
      }
    } catch (emailError) {
      console.error('Error sending confirmation email:', emailError);
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Detailed error:', error);
    return NextResponse.json(
      { error: error instanceof Error ? error.message : 'Erreur serveur' },
      { status: 500 }
    );
  }
} 