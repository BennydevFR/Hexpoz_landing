import Link from 'next/link';

export default function PolitiqueConfidentialite() {
  return (
    <div className="min-h-screen bg-black text-white py-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold mb-8">Politique de Confidentialité</h1>
        
        <div className="space-y-8">
          <section>
            <h2 className="text-2xl font-semibold mb-4">1. Collecte des données personnelles</h2>
            <p className="text-zinc-300">
              Dans le cadre de l'utilisation du site HEXPOZ, nous collectons les données suivantes :
            </p>
            <ul className="list-disc list-inside mt-2 text-zinc-300 space-y-2">
              <li>Adresse email (via le formulaire d'inscription)</li>
              <li>Données de connexion (adresse IP, logs)</li>
              <li>Cookies techniques essentiels au fonctionnement du site</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">2. Utilisation des données</h2>
            <p className="text-zinc-300">
              Vos données sont collectées pour les finalités suivantes :
            </p>
            <ul className="list-disc list-inside mt-2 text-zinc-300 space-y-2">
              <li>Vous tenir informé de nos actualités et lancements</li>
              <li>Améliorer nos services et votre expérience utilisateur</li>
              <li>Répondre à vos demandes et questions</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">3. Stockage et sécurité</h2>
            <p className="text-zinc-300">
              Vos données sont stockées sur la plateforme Airtable, notre sous-traitant pour la gestion 
              des données. Airtable assure un niveau de sécurité conforme aux exigences du RGPD. Les 
              données sont conservées pendant une durée de 3 ans à compter de votre dernière interaction 
              avec nos services.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">4. Vos droits RGPD</h2>
            <p className="text-zinc-300">
              Conformément au Règlement Général sur la Protection des Données (RGPD), vous disposez des droits suivants :
            </p>
            <ul className="list-disc list-inside mt-2 text-zinc-300 space-y-2">
              <li>Droit d'accès à vos données</li>
              <li>Droit de rectification</li>
              <li>Droit à l'effacement (droit à l'oubli)</li>
              <li>Droit à la limitation du traitement</li>
              <li>Droit à la portabilité des données</li>
              <li>Droit d'opposition</li>
            </ul>
            <p className="mt-4 text-zinc-300">
              Pour exercer ces droits, contactez-nous à : privacy@hexpoz.com
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">5. Transfert de données</h2>
            <p className="text-zinc-300">
              Vos données sont hébergées sur les serveurs d'Airtable, situés dans l'Union Européenne 
              et aux États-Unis. Les transferts de données hors UE sont encadrés par les clauses 
              contractuelles types de la Commission Européenne, assurant un niveau de protection 
              adéquat de vos données.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">6. Modification de la politique</h2>
            <p className="text-zinc-300">
              HEXPOZ se réserve le droit de modifier cette politique de confidentialité à tout moment. 
              Les utilisateurs seront informés des modifications importantes par email ou via notre site.
            </p>
          </section>
        </div>

        <div className="mt-12">
          <Link 
            href="/" 
            className="text-blue-400 hover:text-blue-300 transition-colors"
          >
            ← Retour à l'accueil
          </Link>
        </div>
      </div>
    </div>
  );
} 