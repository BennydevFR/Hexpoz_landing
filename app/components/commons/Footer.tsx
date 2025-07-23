export default function Footer() {
  return (
    <footer 
      className="bg-[#111111]/80 border-t border-zinc-800/50 py-16 lg:py-20 xl:py-24 m-2 rounded-lg"
      role="contentinfo"
      aria-label="Pied de page"
    >
      <div className="max-w-5xl xl:max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 xl:px-12">
        <div 
          className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12"
          role="navigation"
          aria-label="Navigation du pied de page"
        >
          {/* Colonne 1 - À propos */}
          <div role="region" aria-label="À propos d'HEXPOZ">
            <div 
              className="text-2xl font-bold text-white tracking-tight mb-4"
              role="heading"
              aria-level={2}
            >
              <span 
                className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent"
                aria-label="HEXPOZ"
              >
                HEXPOZ
              </span>
            </div>
            <p className="text-zinc-400 text-sm mb-4">
              L'avenir de l'exposition artistique digitale
            </p>
          </div>

          {/* Colonne 2 - Navigation */}
          <nav aria-label="Navigation principale">
            <h3 
              className="text-white font-semibold mb-4"
              role="heading"
              aria-level={2}
            >
              Navigation
            </h3>
            <ul 
              className="space-y-2"
              role="list"
            >
              <li role="listitem">
                <a 
                  href="#about" 
                  className="text-zinc-400 hover:text-white transition-colors text-sm"
                  aria-label="En savoir plus à propos d'HEXPOZ"
                >
                  À propos
                </a>
              </li>
              <li role="listitem">
                <a 
                  href="#features" 
                  className="text-zinc-400 hover:text-white transition-colors text-sm"
                  aria-label="Découvrir nos fonctionnalités"
                >
                  Fonctionnalités
                </a>
              </li>
              <li role="listitem">
                <a 
                  href="#contact" 
                  className="text-zinc-400 hover:text-white transition-colors text-sm"
                  aria-label="Nous contacter"
                >
                  Contact
                </a>
              </li>
            </ul>
          </nav>

          {/* Colonne 3 - Mentions légales */}
          <nav aria-label="Informations légales">
            <h3 
              className="text-white font-semibold mb-4"
              role="heading"
              aria-level={2}
            >
              Informations légales
            </h3>
            <ul 
              className="space-y-2"
              role="list"
            >
              <li role="listitem">
                <a 
                  href="/mentions-legales" 
                  className="text-zinc-400 hover:text-white transition-colors text-sm"
                  aria-label="Consulter les mentions légales"
                >
                  Mentions légales
                </a>
              </li>
              <li role="listitem">
                <a 
                  href="/politique-confidentialite" 
                  className="text-zinc-400 hover:text-white transition-colors text-sm"
                  aria-label="Consulter notre politique de confidentialité"
                >
                  Politique de confidentialité
                </a>
              </li>
              <li role="listitem">
                <a 
                  href="/cgu" 
                  className="text-zinc-400 hover:text-white transition-colors text-sm"
                  aria-label="Consulter nos conditions générales d'utilisation"
                >
                  CGU
                </a>
              </li>
            </ul>
          </nav>
        </div>

        {/* Section légale */}
        <div 
          className="border-t border-zinc-800/50 pt-8"
          role="contentinfo"
          aria-label="Informations légales et copyright"
        >
          <p 
            className="text-zinc-400 text-xs mb-4"
            role="note"
            aria-label="Information sur le traitement des données personnelles"
          >
            En utilisant notre formulaire d'inscription, vous acceptez que les informations saisies soient traitées par HEXPOZ pour vous tenir informé de nos actualités. Vos données sont stockées sur Airtable et ne seront en aucun cas cédées à des tiers. Conformément au RGPD, vous disposez d'un droit d'accès, de rectification et de suppression de vos données. Pour exercer ces droits, contactez-nous à{' '}
            <a 
              href="mailto:privacy@hexpoz.com"
              className="text-zinc-300 hover:text-white transition-colors"
              aria-label="Envoyer un email à privacy@hexpoz.com"
            >
              privacy@hexpoz.com
            </a>
          </p>
          <p 
            className="text-zinc-500 text-xs text-center"
            role="contentinfo"
            aria-label="Copyright"
          >
            © 2024 HEXPOZ. Tous droits réservés.
          </p>
        </div>
      </div>
    </footer>
  );
} 