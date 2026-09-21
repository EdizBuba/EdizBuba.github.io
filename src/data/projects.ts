import type { Project, ProjectImage } from './types'

const imageRoot = '/assets/images'

const image = (path: string, width: number, height: number, fr: string, en: string): ProjectImage => ({
  src: `${imageRoot}/${path}.webp`, width, height, alt: { fr, en },
})
const plantScreens = [
  image('smart-watering-system/accueil', 483, 1079, 'Planty — liste des plantes', 'Planty — plant list'),
  image('smart-watering-system/detail', 483, 1079, 'Planty — contrôle manuel de l’arrosage', 'Planty — manual watering control'),
  image('smart-watering-system/seuil', 479, 1079, 'Planty — réglage des seuils d’arrosage', 'Planty — watering threshold settings'),
]
const arView = image('soieries-bonnet/arview', 452, 979,
  'Maquette des Soieries Bonnet placée dans l’environnement réel avec l’application iOS',
  'Soieries Bonnet model placed in the real environment using the iOS app')

// Public descriptions only: no internal screenshots, client data or identifiers.
// GitHub links checked against the public repositories on 2026-09-08.
export const projects: Project[] = [
  {
    id: 'ikos',
    group: 'professional',
    title: { fr: 'IKOS', en: 'IKOS' },
    company: 'Sopra Steria · Sopra Real Estate Software',
    context: { fr: 'Alternance · depuis septembre 2025', en: 'Apprenticeship · since September 2025' },
    type: { fr: 'Progiciel métier · Gestion immobilière', en: 'Enterprise software · Real estate management' },
    description: {
      fr: 'Contribution à l’évolution et à la maintenance d’un progiciel métier de grande ampleur dédié à la gestion immobilière : développement de fonctionnalités, évolution de modules existants, analyse et correction d’anomalies, traitement de données et validation des développements.',
      en: 'Contributing to the development and maintenance of a large-scale real estate management software product: building features, enhancing existing modules, investigating and fixing issues, processing data and validating changes.',
    },
    modalIntro: {
      fr: 'Sur IKOS, je développe et maintiens des fonctionnalités d’un progiciel de gestion immobilière.',
      en: 'On IKOS, I develop and maintain features in a real estate management software product.',
    },
    technologies: ['Java', 'JSF / PrimeFaces', 'JSP', 'Struts', 'DB2 / SQL', 'Git'],
    codeVisibility: 'private',
    visual: {
      kind: 'editorial', wordmark: 'IKOS',
      terms: { fr: ['Besoins', 'Développement', 'Validation'], en: ['Requirements', 'Development', 'Validation'] },
    },
    details: {
      kind: 'professional',
      role: {
        fr: 'J’analyse les besoins, fais évoluer les modules Java, puis teste et valide les changements.',
        en: 'I analyze requirements, enhance Java modules, then test and validate changes.',
      },
    },
    notableContributions: [{
      title: { fr: 'Personnalisation contrôlée des contenus de communication', en: 'Controlled customization of communication content' },
      problem: {
        fr: 'Permettre aux utilisateurs de personnaliser certains contenus sans modifier librement l’ensemble du message.',
        en: 'Let users customize parts of a communication without allowing unrestricted edits to the whole message.',
      },
      role: {
        fr: 'J’ai adapté les écrans, la gestion des valeurs saisies et les traitements de diffusion, puis testé et corrigé la fonctionnalité.',
        en: 'I updated the screens, handling of entered values and distribution processing, then tested and fixed the feature.',
      },
      solution: {
        fr: 'Les zones modifiables existantes sont configurées, renseignées lors de la préparation d’une campagne, puis transmises au traitement de diffusion.',
        en: 'Existing editable areas are configured, filled in when preparing a campaign, then passed through the distribution process.',
      },
      result: {
        fr: 'La fonctionnalité conserve la personnalisation des communications tout en limitant les modifications aux zones prévues à cet effet.',
        en: 'The feature supports personalized communications while restricting changes to the designated editable areas.',
      },
      technologies: {
        fr: ['Java', 'JSF / PrimeFaces', 'JSP', 'Struts', 'DB2 / SQL', 'Traitements batch', 'Git'],
        en: ['Java', 'JSF / PrimeFaces', 'JSP', 'Struts', 'DB2 / SQL', 'Batch processing', 'Git'],
      },
    }],
    otherContributions: [
      {
        title: { fr: 'Évolution des campagnes de communication', en: 'Enhancing communication campaigns' },
        description: {
          fr: 'Évolution de la validation, des pièces jointes, des comptes-rendus de diffusion et de certains droits d’accès.',
          en: 'Enhanced validation, attachments, distribution reports and selected access permissions.',
        },
      },
      {
        title: { fr: 'Modèles de flux dynamiques', en: 'Dynamic data flow templates' },
        description: {
          fr: 'Développement d’écrans de paramétrage avec validations et insertion de variables dynamiques à partir d’une structure XML/XSD.',
          en: 'Built configuration screens with validation and dynamic variable insertion based on an XML/XSD structure.',
        },
      },
      {
        title: { fr: 'Optimisation d’une recherche métier', en: 'Improving business data search' },
        description: {
          fr: 'Amélioration d’une recherche métier avec tri, pagination, critères multiples et priorisation des résultats.',
          en: 'Improved business search with sorting, pagination, multiple criteria and result prioritization.',
        },
      },
    ],
    gallery: [],
  },
  {
    id: 'micgest',
    group: 'professional',
    title: { fr: 'Micgest', en: 'Micgest' },
    company: 'OKTEO',
    context: { fr: 'Alternance · 2024–2025', en: 'Apprenticeship · 2024–2025' },
    type: { fr: 'Application métier · ERP', en: 'Business software · ERP' },
    codeVisibility: 'private',
    visual: {
      kind: 'editorial', wordmark: 'Micgest',
      terms: { fr: ['Fonctionnalités', 'Données', 'Utilisateurs'], en: ['Features', 'Data', 'Users'] },
    },
    description: {
      fr: 'Faire évoluer un ERP en contexte professionnel, de ses fonctionnalités métier aux outils destinés aux utilisateurs. Une expérience menée chez OKTEO pendant mon BUT Informatique.',
      en: 'Enhancing a business ERP, from its core features to user-facing tools. Work carried out at OKTEO during my BUT Informatique degree.',
    },
    modalIntro: {
      fr: 'Chez OKTEO, j’ai fait évoluer Micgest, un ERP métier, pendant mon alternance.',
      en: 'At OKTEO, I worked on Micgest, a business ERP, during my apprenticeship.',
    },
    technologies: ['WinDev', 'HFSQL', 'SQL'],
    details: {
      kind: 'professional',
      role: {
        fr: 'J’ai développé des fonctionnalités en WinDev, travaillé sur les données SQL/HFSQL et analysé les besoins avec les utilisateurs et consultants.',
        en: 'I developed features in WinDev, worked with SQL/HFSQL data and discussed requirements with users and consultants.',
      },
    },
    notableContributions: [{
      title: { fr: 'Outil de recherche des paramètres ERP', en: 'ERP Settings Search Tool' },
      problem: {
        fr: 'Les paramètres étaient répartis dans de nombreuses fenêtres et l’outil existant ne permettait pas de les retrouver de façon fiable et complète.',
        en: 'Settings were spread across many windows, and the existing tool could not find them reliably or comprehensively.',
      },
      role: {
        fr: 'Analyse du besoin avec les consultants, conception, développement, tests et présentation de la solution.',
        en: 'Requirements analysis with consultants, design, implementation, testing and presentation of the solution.',
      },
      solution: {
        fr: 'Un outil de recherche centralisé facilite l’accès aux paramètres tout en gardant les informations à jour et en respectant le fonctionnement de l’ERP.',
        en: 'A centralized search tool makes settings easier to find while keeping information current and fitting the existing ERP workflow.',
      },
      result: {
        fr: 'L’outil a été livré et présenté aux consultants ; la lisibilité et la catégorisation des résultats restent des pistes d’amélioration.',
        en: 'The tool was delivered and presented to consultants; result readability and categorization remain areas for improvement.',
      },
      visual: 'abstract',
    }],
    // Product screenshots are archived outside public/; do not republish them.
    gallery: [],
  },
  {
    id: 'smart-watering-system',
    group: 'selected',
    title: { fr: 'Planty — Système d’arrosage intelligent', en: 'Planty — Smart Watering System' },
    type: { fr: 'Universitaire · IoT', en: 'Academic · IoT' },
    context: { fr: 'BUT Informatique · Projet en binôme', en: 'BUT Informatique · Two-person project' },
    codeVisibility: 'public',
    github: 'https://github.com/EdizBuba/Planty-public',
    image: plantScreens[1],
    visual: { kind: 'screens', images: plantScreens },
    description: {
      fr: 'Du capteur à l’application mobile : un prototype d’arrosage connecté qui relie Flutter, Firebase et un ESP32 pour suivre les plantes et piloter leur arrosage.',
      en: 'From sensors to a mobile app: a connected-watering prototype linking Flutter, Firebase and an ESP32 to monitor plants and control watering.',
    },
    technologies: ['Flutter', 'Dart', 'Firebase', 'ESP32', 'C++'],
    details: {
      kind: 'technical',
      problem: {
        fr: 'Piloter l’arrosage à distance tout en tenant compte de l’humidité du sol, de la température et du niveau d’eau.',
        en: 'Control watering remotely while accounting for soil moisture, temperature and water level.',
      },
      role: {
        fr: 'En binôme, j’ai participé à la conception du système, de l’application mobile et du prototype physique.',
        en: 'Working in a pair, I helped design the system, mobile app and physical prototype.',
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
        fr: 'Un prototype universitaire avec authentification, suivi des plantes, historique, seuils personnalisés et contrôle à distance. Le dépôt public permet d’en étudier le code avec sa propre configuration ; il ne donne pas accès au backend d’origine.',
        en: 'An academic prototype with authentication, plant monitoring, history, custom thresholds and remote control. The public repository can be studied with a separate configuration; it does not provide access to the original backend.',
      },
    },
    gallery: [
      ...plantScreens,
      image('smart-watering-system/diagram', 1536, 1024, 'Schéma du prototype : capteurs, cloud et application mobile', 'Prototype diagram: sensors, cloud and mobile app'),
    ],
  },
  {
    id: 'soieries-bonnet',
    group: 'selected',
    title: { fr: 'Soieries Bonnet AR', en: 'Soieries Bonnet AR' },
    type: { fr: 'Universitaire · Réalité augmentée', en: 'Academic · Augmented reality' },
    context: { fr: 'Application iOS · Équipe de trois', en: 'iOS application · Team of three' },
    codeVisibility: 'unpublished',
    image: arView,
    visual: { kind: 'ar' },
    description: {
      fr: 'Explorer l’évolution des Soieries Bonnet grâce à des maquettes 3D en réalité augmentée. Une application iOS native, reliée à une API et à un outil d’administration.',
      en: 'Explore the history of Soieries Bonnet through augmented-reality 3D models. A native iOS app connected to an API and an administration tool.',
    },
    technologies: ['Swift', 'ARKit', 'RealityKit', 'Node.js', 'Vue.js'],
    details: {
      kind: 'technical',
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
      arView,
      image('soieries-bonnet/accueil', 454, 982, 'Catalogue des maquettes dans l’application iOS', 'Model catalogue in the iOS app'),
      image('soieries-bonnet/detail_2', 453, 981, 'Aperçu 3D et informations sur la maquette', '3D preview and model information'),
    ],
  },
  {
    id: 'cinelist',
    group: 'experiments',
    title: { fr: 'CineList', en: 'CineList' },
    type: { fr: 'Universitaire · Android', en: 'Academic · Android' },
    description: {
      fr: 'Une application Android autour des séries et des animes, connectée à l’API SIMKL. Un projet en binôme pour travailler les appels réseau et la présentation de données sur mobile.',
      en: 'An Android app for series and anime, connected to the SIMKL API. A two-person project exploring network requests and mobile data presentation.',
    },
    technologies: ['Kotlin', 'Retrofit', 'Coroutines', 'ViewModel'],
    codeVisibility: 'public',
    github: 'https://github.com/EdizBuba/CineList-public',
    details: {
      kind: 'compact',
      goal: { fr: 'Consulter des séries et des animes depuis une application Android native.', en: 'Browse series and anime in a native Android app.' },
      contribution: { fr: 'En binôme avec Abdellah Boussaha, j’ai travaillé sur les appels SIMKL avec Retrofit et la présentation des données Android avec coroutines et ViewModel.', en: 'Working with Abdellah Boussaha, I worked on SIMKL requests with Retrofit and presenting data in Android using coroutines and ViewModel.' },
    },
    gallery: [],
  },
  {
    id: 'iot-project',
    group: 'experiments',
    title: { fr: 'Chaîne IoT temps réel', en: 'Real-time IoT Pipeline' },
    type: { fr: 'Universitaire · Réseaux & IoT', en: 'Academic · Networking & IoT' },
    description: {
      fr: 'Une passerelle Python entre UART et UDP, reliée à une application Android. Les mesures d’une chaîne micro:bit remontent au téléphone, qui peut envoyer des commandes en retour.',
      en: 'A Python UART-to-UDP gateway connected to an Android app. Measurements from a micro:bit setup reach the phone, which can send commands back.',
    },
    technologies: ['Python', 'UDP', 'UART', 'Kotlin', 'micro:bit'],
    codeVisibility: 'public',
    github: 'https://github.com/EdizBuba/iot-project',
    details: {
      kind: 'compact',
      goal: { fr: 'Faire circuler mesures et commandes entre une chaîne micro:bit et une application Android.', en: 'Exchange measurements and commands between a micro:bit setup and an Android app.' },
      contribution: { fr: 'J’ai contribué à la passerelle Python convertissant les mesures UART en JSON diffusé via UDP, ainsi qu’au changement de serveur et à l’indicateur de dernière réception dans l’application.', en: 'I contributed to the Python gateway that converts UART readings to JSON for UDP clients, and to server switching and the last-received indicator in the app.' },
    },
    gallery: [],
  },
  {
    id: 'student-desk-mate',
    group: 'experiments',
    title: { fr: 'StudentDeskMate', en: 'StudentDeskMate' },
    type: { fr: 'Universitaire · Application de bureau', en: 'Academic · Desktop application' },
    codeVisibility: 'unpublished',
    image: image('student-desk-mate/interface-table', 1442, 811, 'Plan de salle StudentDeskMate, sans données étudiantes', 'StudentDeskMate room plan, without student data'),
    description: {
      fr: 'Une application de placement d’étudiants dans une salle avec contraintes, import de données et édition visuelle du plan.',
      en: 'A classroom seating app with placement constraints, data imports and visual room-plan editing.',
    },
    technologies: ['Java', 'Processing', 'JSON', 'CSV', 'AES'],
    details: {
      kind: 'intermediate',
      goal: {
        fr: 'Répartir automatiquement les étudiants dans une salle tout en respectant les groupes et les contraintes d’éloignement.',
        en: 'Automatically assign students to seats while respecting group and separation constraints.',
      },
      contribution: {
        fr: 'Dans ce projet d’équipe, j’ai principalement travaillé sur la liste des étudiants et la récupération des données utilisées pour l’import.',
        en: 'In this team project, I primarily worked on the student list and retrieving the data used for imports.',
      },
      technicalPoints: {
        fr: 'L’application Java / Processing représente la salle en graphe, génère un placement sous contraintes et permet l’édition visuelle par glisser-déposer. Elle prend en charge l’import/export CSV et JSON ainsi que le chiffrement AES des données exportées.',
        en: 'The Java / Processing app uses a graph-based room model, generates seating arrangements under constraints and supports drag-and-drop editing. It handles CSV and JSON import/export and encrypts exported data with AES.',
      },
    },
    gallery: [
      image('student-desk-mate/interface-table', 1442, 811, 'Plan de salle interactif', 'Interactive room plan'),
    ],
  },
]
