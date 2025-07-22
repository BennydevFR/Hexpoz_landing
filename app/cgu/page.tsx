import Link from 'next/link';

export default function CGU() {
  return (
    <div className="min-h-screen bg-black text-white py-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold mb-8">Conditions Générales d'Utilisation</h1>
        
        <div className="space-y-8">
          <section>
            <h2 className="text-2xl font-semibold mb-4">1. Objet</h2>
            <p className="text-zinc-300">
              Les présentes Conditions Générales d'Utilisation (CGU) ont pour objet de définir les 
              modalités et conditions d'utilisation du site HEXPOZ (ci-après "le Site"), ainsi que 
              de définir les droits et obligations des parties dans ce cadre.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">2. Accès au site</h2>
            <p className="text-zinc-300">
              Le Site est accessible gratuitement à tout utilisateur disposant d'un accès à Internet. 
              Tous les coûts afférents à l'accès au Site, que ce soient les frais matériels, logiciels 
              ou d'accès à Internet sont exclusivement à la charge de l'utilisateur.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">3. Inscription à la newsletter</h2>
            <p className="text-zinc-300">
              L'inscription à la newsletter HEXPOZ s'effectue via le formulaire présent sur le Site. 
              En s'inscrivant, l'utilisateur :
            </p>
            <ul className="list-disc list-inside mt-2 text-zinc-300 space-y-2">
              <li>Garantit fournir des informations exactes, à jour et complètes</li>
              <li>Accepte de recevoir des communications de la part d'HEXPOZ</li>
              <li>Peut se désinscrire à tout moment via le lien présent dans les emails</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">4. Propriété intellectuelle</h2>
            <p className="text-zinc-300">
              Le contenu du Site (textes, images, logos, etc.) est protégé par le droit d'auteur. 
              Toute reproduction ou représentation totale ou partielle du Site ou de son contenu 
              est interdite sans l'autorisation expresse d'HEXPOZ.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">5. Protection des données personnelles</h2>
            <p className="text-zinc-300">
              Le traitement des données personnelles est détaillé dans notre{' '}
              <Link href="/politique-confidentialite" className="text-blue-400 hover:text-blue-300">
                Politique de Confidentialité
              </Link>
              . En utilisant le Site, l'utilisateur accepte le traitement de ses données tel que 
              décrit dans ce document.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">6. Responsabilités</h2>
            <p className="text-zinc-300">
              HEXPOZ s'efforce d'assurer au mieux de ses possibilités l'exactitude et la mise à 
              jour des informations diffusées sur le Site. Toutefois, HEXPOZ ne peut garantir 
              l'exactitude, la précision ou l'exhaustivité des informations mises à disposition 
              sur le Site.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">7. Modification des CGU</h2>
            <p className="text-zinc-300">
              HEXPOZ se réserve le droit de modifier les présentes CGU à tout moment. L'utilisateur 
              est invité à consulter régulièrement cette page pour prendre connaissance des 
              modifications éventuelles.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">8. Droit applicable</h2>
            <p className="text-zinc-300">
              Les présentes CGU sont régies par le droit français. En cas de litige, les tribunaux 
              français seront seuls compétents.
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