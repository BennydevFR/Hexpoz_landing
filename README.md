# 🚀 HEXPOZ Landing Page

Une landing page premium dans le style Apple pour promouvoir HEXPOZ - la plateforme révolutionnaire de galeries 3D virtuelles.

## ✨ Caractéristiques

- **Design Premium** : Interface inspirée du design Apple avec animations fluides
- **Responsive** : Optimisé pour tous les appareils (mobile, tablette, desktop)
- **Performance** : Chargement ultra-rapide avec Next.js 15 et optimisations avancées
- **Conversions** : Sections optimisées pour maximiser la capture d'emails
- **Animations** : Transitions élégantes avec Framer Motion
- **Accessibilité** : Conforme aux standards WCAG pour l'accessibilité

## 🎯 Sections de la Landing Page

1. **HeroSection** - Section d'accueil avec CTA principal
2. **AboutSection** - Mission, vision et valeurs
3. **FeaturesSection** - Fonctionnalités principales avec statistiques
4. **WaitlistSection** - Capture d'emails avec offres exclusives
5. **FAQSection** - Questions fréquentes pour rassurer les prospects
6. **Footer** - Navigation et liens sociaux

## 🛠️ Technologies Utilisées

- **Next.js 15** - Framework React avec App Router
- **TypeScript** - Typage statique pour une meilleure fiabilité
- **Tailwind CSS** - Framework CSS utilitaire pour un design cohérent
- **Framer Motion** - Animations et transitions fluides
- **Lucide React** - Icônes modernes et optimisées

## 🚀 Installation

### Prérequis
- Node.js 18+ 
- npm ou yarn

### Étapes d'installation

1. **Cloner le projet**
   ```bash
   git clone [your-repo-url]
   cd hexpoz_landing
   ```

2. **Installer les dépendances**
   ```bash
   npm install
   ```

3. **Lancer le serveur de développement**
   ```bash
   npm run dev
   ```

4. **Ouvrir dans le navigateur**
   Aller sur [http://localhost:3000](http://localhost:3000)

## 📁 Structure du Projet

```
hexpoz_landing/
├── app/
│   ├── components/
│   │   ├── commons/          # Composants partagés (Header, Footer)
│   │   ├── landing/          # Sections de la landing page
│   │   └── ui/               # Composants UI réutilisables
│   ├── lib/                  # Utilitaires et helpers
│   ├── globals.css           # Styles globaux
│   ├── layout.tsx            # Layout principal
│   └── page.tsx              # Page d'accueil
├── public/                   # Assets statiques
└── ...
```

## 🎨 Personnalisation

### Couleurs et Thème
Les couleurs principales sont définies dans `globals.css` :
```css
:root {
  --primary: #2563eb;
  --background: #1d1d1d;
  --foreground: #ffffff;
  /* ... */
}
```

### Contenu
- Modifiez les textes dans chaque composant de section
- Ajustez les statistiques dans `FeaturesSection.tsx`
- Personnalisez les FAQ dans `FAQSection.tsx`

### Styles
- Utilisez les classes Tailwind pour ajuster les styles
- Les animations Framer Motion peuvent être modifiées dans chaque composant

## 📧 Capture d'Emails

La section `WaitlistSection` contient un formulaire de capture d'emails. Pour l'intégrer avec votre backend :

1. **Remplacer la simulation** dans `WaitlistSection.tsx`
   ```typescript
   // Remplacer cette ligne :
   await new Promise(resolve => setTimeout(resolve, 1500));
   
   // Par votre API :
   await fetch('/api/waitlist', {
     method: 'POST',
     body: JSON.stringify({ email }),
     headers: { 'Content-Type': 'application/json' }
   });
   ```

2. **Intégrations populaires** :
   - Mailchimp
   - ConvertKit
   - Brevo (ex-Sendinblue)
   - Supabase
   - Firebase

## 🚀 Déploiement

### Vercel (Recommandé)
1. Push votre code sur GitHub
2. Connecter le repo à Vercel
3. Déploiement automatique à chaque push

### Netlify
1. Build le projet : `npm run build`
2. Upload le dossier `out/` sur Netlify

### Docker
```dockerfile
FROM node:18-alpine
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build
EXPOSE 3000
CMD ["npm", "start"]
```

## 📈 Optimisations SEO

- Ajoutez des meta tags dans `layout.tsx`
- Optimisez les images avec Next.js Image
- Utilisez des URLs sémantiques
- Ajoutez un sitemap.xml

### Exemple de meta tags :
```typescript
export const metadata = {
  title: 'HEXPOZ - Galeries 3D Révolutionnaires',
  description: 'Créez des galeries virtuelles époustouflantes...',
  keywords: 'galerie 3D, art virtuel, exposition en ligne',
  openGraph: {
    title: 'HEXPOZ - Galeries 3D Révolutionnaires',
    description: '...',
    images: ['/og-image.jpg'],
  },
};
```

## 📊 Analytics et Tracking

Pour suivre les conversions, ajoutez :

1. **Google Analytics 4**
2. **Facebook Pixel**
3. **Hotjar** pour les heatmaps
4. **Mixpanel** pour les événements

## 🔧 Scripts Disponibles

- `npm run dev` - Serveur de développement
- `npm run build` - Build de production
- `npm run start` - Serveur de production
- `npm run lint` - Vérification du code

## 🐛 Debugging

### Problèmes Courants

1. **Erreurs d'hydratation** : Vérifiez les `useEffect` et `useState`
2. **Problèmes de style** : Purgez le cache Tailwind
3. **Animations lentes** : Réduisez la complexité des animations Framer Motion

### Mode Debug
```bash
npm run dev -- --inspect
```

## 🤝 Contribution

1. Fork le projet
2. Créer une branche feature (`git checkout -b feature/AmazingFeature`)
3. Commit les changements (`git commit -m 'Add AmazingFeature'`)
4. Push sur la branche (`git push origin feature/AmazingFeature`)
5. Ouvrir une Pull Request

## 📄 Licence

Ce projet est sous licence MIT. Voir le fichier `LICENSE` pour plus de détails.

## 📞 Support

- Email : support@hexpoz.com
- Discord : [Rejoindre notre communauté]
- Documentation : [docs.hexpoz.com]

---

**Créé avec ❤️ pour la communauté HEXPOZ**

🌟 N'hésitez pas à star le repo si ce projet vous a aidé !
# Hexpoz_landing
# Hexpoz_landing
