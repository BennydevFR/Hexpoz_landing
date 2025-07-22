import * as React from 'react';

interface EmailTemplateProps {
  email: string;
  interestLevel: string;
}

export const ConfirmationEmailTemplate: React.FC<EmailTemplateProps> = ({
  email,
  interestLevel
}) => {
  const getInterestText = (level: string) => {
    switch (level) {
      case 'curious':
        return 'Curieux(se) d\'en savoir plus';
      case 'excited':
        return 'Très intéressé(e) par le concept';
      case 'needToKnowMore':
        return 'Besoin de plus d\'informations';
      default:
        return '';
    }
  };

  return (
    <div>
      <h1>Bienvenue dans la bêta d'Hexpoz ! 🎉</h1>
      <p>Bonjour,</p>
      <p>
        Merci de votre inscription à la bêta fermée d'Hexpoz. Nous sommes ravis de vous
        compter parmi nos premiers utilisateurs !
      </p>
      <p>Voici un récapitulatif de votre inscription :</p>
      <ul>
        <li>Email : {email}</li>
        <li>Niveau d'intérêt : {getInterestText(interestLevel)}</li>
      </ul>
      <p>
        Nous vous tiendrons informé(e) des prochaines étapes et du lancement de la bêta.
        En attendant, n'hésitez pas à nous suivre sur nos réseaux sociaux pour rester
        au courant des dernières actualités.
      </p>
      <p>À très bientôt !</p>
      <p>L'équipe Hexpoz</p>
    </div>
  );
}; 