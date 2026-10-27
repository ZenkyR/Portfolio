// Politique de confidentialité de l'appli Android Portail Bedrock, en français et en anglais.
export const privacyUpdated = "2026-10-27";

export const privacyContactUrl = "https://discord.com/invite/gTukR24g78";

export type PrivacySection = { title: string; paragraphs: string[] };

export type PrivacyPolicy = {
  lang: "fr" | "en";
  title: string;
  updatedLabel: string;
  intro: string;
  sections: PrivacySection[];
  contactLabel: string;
};

export const privacyPolicies: PrivacyPolicy[] = [
  {
    lang: "fr",
    title: "Politique de confidentialité de Portail Bedrock",
    updatedLabel: "Mise à jour le 27 octobre 2026",
    intro:
      "Portail Bedrock est une appli Android gratuite, éditée par Kezon Lacheteau, qui fait apparaître un serveur Minecraft Bedrock dans l'onglet Mondes d'une console. Elle n'a ni compte, ni publicité, ni outil de mesure d'audience : je ne collecte aucune donnée personnelle, et je n'ai aucun serveur qui en recevrait.",
    sections: [
      {
        title: "Ce qui reste sur ton téléphone",
        paragraphs: [
          "Ta liste de serveurs (adresses, titres, images, blagues), tes réglages, ta langue et le choix de tes widgets sont enregistrés uniquement sur ton téléphone. Ils disparaissent quand tu désinstalles l'appli.",
          "Si tu exportes une sauvegarde, le fichier est écrit à l'endroit que tu choisis. Personne d'autre n'y a accès.",
        ],
      },
      {
        title: "Les connexions que fait l'appli",
        paragraphs: [
          "Pour afficher si un serveur est allumé et combien de joueurs y sont connectés, l'appli interroge directement l'adresse de chaque serveur que tu as ajouté. Comme pour toute connexion à internet, ce serveur voit l'adresse IP de ton réseau.",
          "Quand le portail est ouvert, l'appli annonce tes serveurs sur ton réseau local et accepte la connexion de ta console. Rien de cela ne passe par moi.",
        ],
      },
      {
        title: "Les images partagées",
        paragraphs: [
          "Quand tu partages un serveur qui a une image, celle-ci est envoyée de façon anonyme sur l'hébergeur d'images Catbox (catbox.moe), pour que ton ami la reçoive avec le lien. Toute personne qui possède ce lien peut voir l'image, et elle ne peut pas être supprimée ensuite.",
          "Si tu ne veux pas que l'image quitte ton téléphone, active « Garder l'image sur ce téléphone » dans l'édition du serveur : elle ne sera alors jamais envoyée.",
          "Quand tu ouvres un lien de partage reçu, l'appli télécharge l'image correspondante depuis Catbox.",
        ],
      },
      {
        title: "Les mises à jour",
        paragraphs: [
          "Si tu as installé l'appli depuis Google Play, c'est Google Play qui lui indique si une nouvelle version existe, selon sa propre politique de confidentialité.",
          "Si tu l'as installée autrement (itch.io ou un fichier APK), l'appli lit au plus deux fois par jour un petit fichier publié avec chaque version sur GitHub (github.com), pour savoir si une version plus récente existe. Aucune donnée sur toi ni sur tes serveurs n'est envoyée ; comme pour toute connexion à internet, GitHub voit l'adresse IP de ton réseau. Le téléchargement d'une mise à jour ne se fait que si tu appuies sur « Mettre à jour ».",
        ],
      },
      {
        title: "Les autorisations demandées",
        paragraphs: [
          "Caméra : uniquement pour scanner le QR code d'un serveur. L'image est analysée sur le téléphone, ni enregistrée ni envoyée.",
          "Notifications : pour afficher que le portail est ouvert. Réseau local et internet : pour annoncer tes serveurs à ta console et vérifier leur état.",
        ],
      },
      {
        title: "Signaler un problème",
        paragraphs: [
          "Le bouton « Signaler un problème » prépare un texte sur ton téléphone (version de l'appli et d'Android, modèle du téléphone, langue, nombre de serveurs, état du portail) et le copie. Rien n'est envoyé automatiquement : c'est toi qui choisis de le coller, par exemple sur le Discord de l'appli.",
        ],
      },
      {
        title: "Les sites externes",
        paragraphs: [
          "L'appli peut ouvrir des sites externes à ta demande : la page Ko-fi pour les dons, le Discord de l'appli, ou le panneau de ton hébergeur de serveur. Ces sites ont leurs propres règles de confidentialité.",
          "Si tu installes l'appli depuis Google Play, Google traite certaines données selon sa propre politique de confidentialité.",
        ],
      },
      {
        title: "Changements",
        paragraphs: [
          "Si l'appli se met à traiter des données autrement, cette page sera mise à jour avant, avec sa date.",
        ],
      },
    ],
    contactLabel: "Une question ? Écris-moi sur le Discord de l'appli",
  },
  {
    lang: "en",
    title: "Portail Bedrock privacy policy",
    updatedLabel: "Updated on October 27, 2026",
    intro:
      "Portail Bedrock is a free Android app, published by Kezon Lacheteau, that shows a Minecraft Bedrock server in a console's Worlds tab. It has no account, no ads and no analytics: I collect no personal data, and I have no server that would receive any.",
    sections: [
      {
        title: "What stays on your phone",
        paragraphs: [
          "Your server list (addresses, titles, images, jokes), your settings, your language and your widget choices are stored only on your phone. They are deleted when you uninstall the app.",
          "If you export a backup, the file is written where you choose. Nobody else has access to it.",
        ],
      },
      {
        title: "Connections made by the app",
        paragraphs: [
          "To show whether a server is online and how many players are connected, the app contacts the address of each server you added directly. As with any internet connection, that server sees your network's IP address.",
          "While the portal is open, the app announces your servers on your local network and accepts your console's connection. None of this goes through me.",
        ],
      },
      {
        title: "Shared images",
        paragraphs: [
          "When you share a server that has an image, the image is uploaded anonymously to the Catbox image host (catbox.moe), so your friend receives it with the link. Anyone with that link can see the image, and it cannot be deleted afterwards.",
          "If you don't want the image to leave your phone, turn on “Keep the image on this phone” in the server editor: it will then never be uploaded.",
          "When you open a share link you received, the app downloads the matching image from Catbox.",
        ],
      },
      {
        title: "Updates",
        paragraphs: [
          "If you installed the app from Google Play, Google Play tells it whether a new version exists, under its own privacy policy.",
          "If you installed it another way (itch.io or an APK file), the app reads, at most twice a day, a small file published with each version on GitHub (github.com) to find out whether a newer version exists. No data about you or your servers is sent; as with any internet connection, GitHub sees your network's IP address. An update is only downloaded if you tap “Update”.",
        ],
      },
      {
        title: "Permissions",
        paragraphs: [
          "Camera: only to scan a server's QR code. The picture is analysed on the phone, never stored or sent.",
          "Notifications: to show that the portal is open. Local network and internet: to announce your servers to your console and check their status.",
        ],
      },
      {
        title: "Reporting a problem",
        paragraphs: [
          "The “Report a problem” button prepares a text on your phone (app and Android version, phone model, language, number of servers, portal status) and copies it. Nothing is sent automatically: you choose whether to paste it, for example on the app's Discord.",
        ],
      },
      {
        title: "External sites",
        paragraphs: [
          "The app can open external sites when you ask it to: the Ko-fi page for donations, the app's Discord, or your server host's panel. These sites have their own privacy policies.",
          "If you install the app from Google Play, Google processes some data under its own privacy policy.",
        ],
      },
      {
        title: "Changes",
        paragraphs: [
          "If the app starts handling data differently, this page will be updated beforehand, with its date.",
        ],
      },
    ],
    contactLabel: "A question? Write to me on the app's Discord",
  },
];
