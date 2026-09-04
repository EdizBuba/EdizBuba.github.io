import type { Project } from './types'

const imageRoot = '/assets/images'

export const projects: Project[] = [
  {
    id: 'erp-search-tool',
    title: { fr: 'Outil de recherche ERP', en: 'ERP Search Tool' },
    type: { fr: 'Professionnel', en: 'Professional' },
    featured: true,
    image: {
      src: `${imageRoot}/erp-search-tool/affiche.webp`,
      alt: { fr: 'Illustration de l’outil de recherche ERP', en: 'ERP search tool illustration' },
    },
    description: {
      fr: 'Un outil de recherche rapide dans les nombreuses fenêtres de paramètres d’un ERP, développé pendant mon stage chez OKTEO.',
      en: 'A fast search tool across the many settings windows of an ERP, built during my internship at OKTEO.',
    },
    technologies: ['WinDev', 'HFSQL', 'SQL', 'JSON'],
    details: {
      problem: {
        fr: 'L’outil existant était lent, instable et ne couvrait pas l’ensemble des quelque 200 fenêtres de paramètres de l’ERP.',
        en: 'The existing tool was slow, unstable and did not cover all of the ERP’s roughly 200 settings windows.',
      },
      role: {
        fr: 'J’ai pris en charge le projet pendant un stage de dix semaines : analyse avec les consultants, conception, développement, tests et présentation.',
        en: 'I handled the project during a ten-week internship: consultant interviews, design, implementation, testing and presentation.',
      },
      solution: {
        fr: 'Une interface dédiée indexe les paramètres dans des structures JSON stockées en base, avec synchronisation lors des changements et mise à jour automatisée.',
        en: 'A dedicated interface indexes settings as JSON structures stored in the database, with change synchronization and automated updates.',
      },
      challenges: {
        fr: 'Rendre la recherche exhaustive sans dégrader l’ERP, maintenir les données à jour et intégrer l’outil aux habitudes de travail existantes.',
        en: 'Keeping search exhaustive without slowing the ERP down, maintaining fresh data and fitting the tool into existing workflows.',
      },
      result: {
        fr: 'L’outil a été livré et présenté aux consultants. Les pistes identifiées ensuite concernent surtout la lisibilité et la catégorisation des résultats.',
        en: 'The tool was delivered and presented to consultants. The next improvements identified mainly concern readability and result categorization.',
      },
    },
    gallery: [
      { src: `${imageRoot}/erp-search-tool/interface.webp`, alt: { fr: 'Interface principale de recherche', en: 'Main search interface' } },
      { src: `${imageRoot}/erp-search-tool/resultat.webp`, alt: { fr: 'Résultats de recherche', en: 'Search results' } },
      { src: `${imageRoot}/erp-search-tool/acces.webp`, alt: { fr: 'Accès à un paramètre', en: 'Settings access screen' } },
    ],
  },
  {
    id: 'smart-watering-system',
    title: { fr: 'Smart Watering System', en: 'Smart Watering System' },
    type: { fr: 'Universitaire · IoT', en: 'Academic · IoT' },
    featured: true,
    image: {
      src: `${imageRoot}/smart-watering-system/affiche.webp`,
      alt: { fr: 'Présentation du système d’arrosage connecté', en: 'Connected watering system presentation' },
    },
    description: {
      fr: 'Un système IoT reliant une application Flutter, Firebase et un ESP32 pour superviser et automatiser l’arrosage de plantes.',
      en: 'An IoT system connecting a Flutter app, Firebase and an ESP32 to monitor and automate plant watering.',
    },
    technologies: ['Flutter', 'Dart', 'Firebase', 'ESP32', 'C++'],
    details: {
      problem: {
        fr: 'Piloter l’arrosage à distance tout en tenant compte de l’humidité du sol, de la température et du niveau d’eau.',
        en: 'Control watering remotely while accounting for soil moisture, temperature and water level.',
      },
      role: {
        fr: 'Projet réalisé en binôme en troisième année de BUT Informatique, de la conception du système à l’application mobile et au prototype physique.',
        en: 'A two-person third-year Computer Science B.U.T. project, spanning system design, the mobile app and the physical prototype.',
      },
      solution: {
        fr: 'L’application gère les plantes et leurs seuils, Firebase synchronise les données, et l’ESP32 pilote capteurs et pompe en mode automatique ou manuel.',
        en: 'The app manages plants and thresholds, Firebase synchronizes data, and the ESP32 controls sensors and the pump in automatic or manual mode.',
      },
      challenges: {
        fr: 'Coordonner logiciel mobile, cloud et électronique, gérer les pertes de connexion et vérifier qu’un arrosage a réellement humidifié le sol.',
        en: 'Coordinating mobile software, cloud and electronics, handling connection loss and verifying that watering actually moistened the soil.',
      },
      result: {
        fr: 'Un prototype fonctionnel avec authentification, tableau de bord, historique, seuils personnalisés et contrôle à distance.',
        en: 'A working prototype with authentication, dashboard, history, custom thresholds and remote control.',
      },
    },
    gallery: [
      { src: `${imageRoot}/smart-watering-system/accueil.webp`, alt: { fr: 'Liste des plantes', en: 'Plant list' } },
      { src: `${imageRoot}/smart-watering-system/detail.webp`, alt: { fr: 'Détail d’une plante', en: 'Plant details' } },
      { src: `${imageRoot}/smart-watering-system/seuil.webp`, alt: { fr: 'Configuration des seuils', en: 'Threshold settings' } },
      { src: `${imageRoot}/smart-watering-system/historique.webp`, alt: { fr: 'Historique des arrosages', en: 'Watering history' } },
    ],
  },
  {
    id: 'soieries-bonnet',
    title: { fr: 'Soieries Bonnet AR', en: 'Soieries Bonnet AR' },
    type: { fr: 'Universitaire · Réalité augmentée', en: 'Academic · Augmented reality' },
    featured: true,
    image: {
      src: `${imageRoot}/soieries-bonnet/affiche.webp`,
      alt: { fr: 'Vue historique des Soieries Bonnet', en: 'Historic view of Soieries Bonnet' },
    },
    description: {
      fr: 'Une application iOS native permettant d’explorer l’évolution du musée à travers des maquettes 3D en réalité augmentée.',
      en: 'A native iOS app for exploring the museum’s evolution through augmented-reality 3D models.',
    },
    technologies: ['Swift', 'ARKit', 'RealityKit', 'Node.js', 'Vue.js'],
    details: {
      problem: {
        fr: 'Porter sur iOS une expérience de médiation existante et donner aux visiteurs un accès fluide aux différentes époques du site.',
        en: 'Bring an existing visitor experience to iOS and provide smooth access to the site’s different historical periods.',
      },
      role: {
        fr: 'Au sein d’un groupe de trois, j’ai participé à l’analyse de l’existant et au développement natif de la nouvelle application.',
        en: 'In a team of three, I helped analyze the existing product and build the new native application.',
      },
      solution: {
        fr: 'Une application Swift utilisant ARKit et RealityKit, reliée à une API Node.js et à une interface d’administration Vue.js.',
        en: 'A Swift app using ARKit and RealityKit, connected to a Node.js API and a Vue.js administration interface.',
      },
      challenges: {
        fr: 'Découvrir Swift, gérer les modèles 3D sur iOS et optimiser le chargement des ressources grâce à un système de cache.',
        en: 'Learning Swift, managing 3D models on iOS and optimizing resource loading through caching.',
      },
      result: {
        fr: 'Une application fonctionnelle, structurée avec une architecture MVVM et pensée pour pouvoir accueillir de nouveaux contenus.',
        en: 'A working app structured around MVVM and designed to accommodate new content.',
      },
    },
    gallery: [
      { src: `${imageRoot}/soieries-bonnet/accueil.webp`, alt: { fr: 'Accueil de l’application', en: 'Application home screen' } },
      { src: `${imageRoot}/soieries-bonnet/detail.webp`, alt: { fr: 'Détail d’une maquette', en: 'Model details' } },
      { src: `${imageRoot}/soieries-bonnet/arview.webp`, alt: { fr: 'Vue en réalité augmentée', en: 'Augmented reality view' } },
    ],
  },
  {
    id: 'student-desk-mate',
    title: { fr: 'StudentDeskMate', en: 'StudentDeskMate' },
    type: { fr: 'Universitaire · Application de bureau', en: 'Academic · Desktop application' },
    featured: false,
    image: {
      src: `${imageRoot}/student-desk-mate/interface.webp`,
      alt: { fr: 'Interface de placement des étudiants', en: 'Student seating interface' },
    },
    description: {
      fr: 'Une application de placement d’étudiants dans une salle avec contraintes, import de données et édition visuelle du plan.',
      en: 'A classroom seating app with placement constraints, data imports and visual room-plan editing.',
    },
    technologies: ['Java', 'Processing', 'JSON', 'CSV', 'AES'],
    details: {
      problem: {
        fr: 'Aider les enseignants à répartir des étudiants de manière aléatoire tout en respectant des groupes et contraintes d’éloignement.',
        en: 'Help teachers randomly assign students while respecting groups and separation constraints.',
      },
      role: {
        fr: 'Projet d’équipe de deuxième année. J’ai surtout travaillé sur la liste des étudiants et la récupération des données.',
        en: 'A second-year team project. I mainly worked on the student list and data retrieval.',
      },
      solution: {
        fr: 'Une application Processing combinant modélisation en graphe, placement automatique, drag and drop et import/export CSV, SVG et JSON.',
        en: 'A Processing app combining graph modeling, automatic placement, drag and drop, and CSV, SVG and JSON import/export.',
      },
      challenges: {
        fr: 'Implémenter des interactions graphiques sans composant prêt à l’emploi et concilier placement aléatoire et contraintes métier.',
        en: 'Implementing graphical interactions without ready-made components and reconciling random seating with business constraints.',
      },
      result: {
        fr: 'Une application modulaire avec édition du plan, gestion des groupes, sauvegarde et chiffrement des données exportées.',
        en: 'A modular app with room-plan editing, group management, persistence and encryption for exported data.',
      },
    },
    gallery: [
      { src: `${imageRoot}/student-desk-mate/interface-table.webp`, alt: { fr: 'Plan de salle interactif', en: 'Interactive room plan' } },
      { src: `${imageRoot}/student-desk-mate/etudiant.webp`, alt: { fr: 'Gestion des étudiants', en: 'Student management' } },
      { src: `${imageRoot}/student-desk-mate/import.webp`, alt: { fr: 'Import de données', en: 'Data import' } },
    ],
  },
]
