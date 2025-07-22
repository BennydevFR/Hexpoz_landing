export default function Footer() {
  return (
    <footer className="bg-[#111111]/80 border-t border-zinc-800/50 py-16 lg:py-20 xl:py-24 m-2 rounded-lg">
      <div className="max-w-5xl xl:max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 xl:px-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {/* Colonne 1 - À propos */}
          <div>
            <div className="text-2xl font-bold text-white tracking-tight mb-4">
              <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
                HEXPOZ
              </span>
            </div>
            <p className="text-zinc-400 text-sm mb-4">
              L'avenir de l'exposition artistique digitale
            </p>
          </div>

          {/* Colonne 2 - Navigation */}
          <div>
            <h3 className="text-white font-semibold mb-4">Navigation</h3>
            <ul className="space-y-2">
              <li><a href="#about" className="text-zinc-400 hover:text-white transition-colors text-sm">À propos</a></li>
              <li><a href="#features" className="text-zinc-400 hover:text-white transition-colors text-sm">Fonctionnalités</a></li>
              <li><a href="#contact" className="text-zinc-400 hover:text-white transition-colors text-sm">Contact</a></li>
            </ul>
          </div>

          {/* Colonne 3 - Mentions légales */}
          <div>
            <h3 className="text-white font-semibold mb-4">Informations légales</h3>
            <ul className="space-y-2">
              <li><a href="/mentions-legales" className="text-zinc-400 hover:text-white transition-colors text-sm">Mentions légales</a></li>
              <li><a href="/politique-confidentialite" className="text-zinc-400 hover:text-white transition-colors text-sm">Politique de confidentialité</a></li>
              <li><a href="/cgu" className="text-zinc-400 hover:text-white transition-colors text-sm">CGU</a></li>
            </ul>
          </div>
        </div>

        {/* Section légale */}
        <div className="border-t border-zinc-800/50 pt-8">
          <p className="text-zinc-400 text-xs mb-4">
            En utilisant notre formulaire d'inscription, vous acceptez que les informations saisies soient traitées par HEXPOZ pour vous tenir informé de nos actualités. Vos données sont stockées sur Airtable et ne seront en aucun cas cédées à des tiers. Conformément au RGPD, vous disposez d'un droit d'accès, de rectification et de suppression de vos données. Pour exercer ces droits, contactez-nous à privacy@hexpoz.com
          </p>
          <p className="text-zinc-500 text-xs text-center">
            © 2024 HEXPOZ. Tous droits réservés.
          </p>
        </div>
      </div>
    </footer>
  );
} 