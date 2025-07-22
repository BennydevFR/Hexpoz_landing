import Link from 'next/link';

export default function MentionsLegales() {
  return (
    <div className="min-h-screen bg-black text-white py-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold mb-8">Mentions Légales</h1>
        
        <div className="space-y-8">
          <section>
            <h2 className="text-2xl font-semibold mb-4">1. Éditeur du site</h2>
            <p className="text-zinc-300">
              Le site HEXPOZ est édité par :<br />
              HEXPOZ SAS<br />
              [Adresse à compléter]<br />
              Email : contact@hexpoz.com<br />
              SIRET : [À compléter]<br />
              Capital social : [À compléter]
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">2. Directeur de la publication</h2>
            <p className="text-zinc-300">
              [Nom du directeur de publication]<br />
              Contactable à l'adresse de l'éditeur.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">3. Hébergement</h2>
            <p className="text-zinc-300">
              Ce site est hébergé par :<br />
              Vercel Inc.<br />
              340 S Lemon Ave #4133<br />
              Walnut, CA 91789<br />
              États-Unis
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">4. Propriété intellectuelle</h2>
            <p className="text-zinc-300">
              L'ensemble du contenu de ce site (structure, textes, images, logos, base de données...) 
              est la propriété exclusive de HEXPOZ SAS. Toute reproduction, représentation, modification, 
              publication, transmission, dénaturation, totale ou partielle du site ou de son contenu, 
              par quelque procédé que ce soit, et sur quelque support que ce soit est interdite sans 
              l'autorisation écrite préalable de HEXPOZ SAS.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">5. Liens hypertextes</h2>
            <p className="text-zinc-300">
              Le site HEXPOZ peut contenir des liens hypertextes vers d'autres sites internet. 
              HEXPOZ n'exerce aucun contrôle sur ces sites et décline toute responsabilité quant 
              à leur contenu.
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