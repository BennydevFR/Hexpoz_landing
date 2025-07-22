import { NextResponse } from 'next/server';

const AIRTABLE_API_KEY = process.env.AIRTABLE_API_KEY;
const AIRTABLE_BASE_ID = process.env.AIRTABLE_BASE_ID;
const AIRTABLE_TABLE_ID = 'tbljWwXpvtHtLiZEN';

export async function POST(request: Request) {
  try {
    // Debug des variables d'environnement
    console.log('Checking environment variables:');
    console.log('Base ID exists:', !!AIRTABLE_BASE_ID);
    console.log('API Key exists:', !!AIRTABLE_API_KEY);

    const { email, interestLevel } = await request.json();
    console.log('Received data:', { email, interestLevel });

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
    console.log('Airtable URL:', airtableUrl);

    // Création de l'enregistrement pour Airtable
    const record = {
      fields: {
        Email: email,
        Date: new Date().toISOString(),
        InterestLevel: interestLevel || 'unspecified'
      }
    };

    console.log('Sending record to Airtable:', record);

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
    console.log('Airtable success:', result);

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Detailed error:', error);
    return NextResponse.json(
      { error: error instanceof Error ? error.message : 'Erreur serveur' },
      { status: 500 }
    );
  }
} 