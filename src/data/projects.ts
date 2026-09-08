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
    technologies: ['Java', 'JSF / PrimeFaces', 'JSP', 'Struts', 'DB2 / SQL', 'Git'],
    codeVisibility: 'private',
    visual: {
      kind: 'editorial', wordmark: 'IKOS',
      terms: { fr: ['Besoins', 'Développement', 'Validation'], en: ['Requirements', 'Development', 'Validation'] },
    },
    details: {
      kind: 'professional',
      context: {
        fr: 'Je travaille sur IKOS au sein de Sopra Real Estate Software, dans le cadre de mon alternance de développeur Java chez Sopra Steria et de ma formation d’ingénieur à CPE Lyon.',
        en: 'I work on IKOS within Sopra Real Estate Software as a Java developer apprentice at Sopra Steria, alongside my engineering degree at CPE Lyon.',
      },
      role: {
        fr: 'Contribuer à l’évolution de l’application, de l’analyse du besoin jusqu’au développement, aux tests et à la validation des fonctionnalités.',
        en: 'Contributing to application enhancements, from requirements analysis through feature development, testing and validation.',
      },
      contributions: {
        fr: ['Développement de nouvelles fonctionnalités et évolution de modules existants en Java.', 'Analyse et correction d’anomalies sur l’existant.', 'Manipulation de données SQL et gestion des modifications avec Git.', 'Analyse des besoins, tests et validation des développements.'],
        en: ['Developing new features and enhancing existing Java modules.', 'Investigating and fixing issues in the existing application.', 'Working with SQL data and managing code changes with Git.', 'Analyzing requirements, testing and validating changes.'],
      },
    },
    notableContributions: [{
      title: { fr: 'Personnalisation contrôlée des contenus de communication', en: 'Controlled customization of communication content' },
      problem: {
        fr: 'Les utilisateurs devaient pouvoir personnaliser certains contenus de communication sans modifier librement l’intégralité du message. L’objectif était de préserver cette flexibilité tout en encadrant la saisie.',
        en: 'Users needed to customize parts of a communication without being able to freely edit the entire message. The aim was to retain flexibility while keeping input within defined boundaries.',
      },
      role: {
        fr: 'J’ai adapté un mécanisme existant de zones modifiables au contexte des campagnes de communication. Mon travail a couvert la compréhension de l’existant, l’adaptation des écrans, la gestion et la propagation des valeurs saisies, ainsi que les traitements, tests et corrections associés.',
        en: 'I adapted an existing editable-area mechanism for communication campaigns. My work involved understanding the existing implementation, updating the screens, managing user-entered values and passing them through the workflow, as well as adapting the related processing, testing and fixing issues.',
      },
      solution: {
        fr: 'La solution réutilise le mécanisme existant de zones modifiables. Définies dans le paramétrage, ces zones sont renseignées lors de la préparation d’une campagne. Les valeurs saisies sont conservées et transmises au cours du traitement de diffusion pour générer les communications avec le contenu personnalisé attendu.',
        en: 'The solution reuses the existing editable-area mechanism. Areas are defined in the configuration and filled in when preparing a campaign. The entered values are retained and passed through the distribution process so that communications are generated with the intended personalized content.',
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
          fr: 'Ajout de comportements fonctionnels autour de la validation, des pièces jointes, des comptes-rendus de diffusion et de certains droits d’accès, avec adaptation des écrans, de la logique métier et des traitements associés.',
          en: 'Added functionality for validation, attachments, distribution reports and selected access permissions, with corresponding changes to screens, business logic and associated processing.',
        },
      },
      {
        title: { fr: 'Modèles de flux dynamiques', en: 'Dynamic data flow templates' },
        description: {
          fr: 'Développement d’écrans de paramétrage de modèles de flux avec validations fonctionnelles, gestion de contenus structurés et insertion de variables dynamiques à partir d’une structure XML/XSD.',
          en: 'Developed configuration screens for data flow templates, including business validation, structured content management and dynamic variable insertion based on an XML/XSD structure.',
        },
        technologies: ['Java', 'JSF', 'DB2 / SQL', 'XML / XSD'],
      },
      {
        title: { fr: 'Optimisation d’une recherche métier', en: 'Improving business data search' },
        description: {
          fr: 'Amélioration d’un écran de sélection avec tri, pagination, recherche multicritère et priorisation des résultats pour faciliter la navigation dans un volume croissant de données métier.',
          en: 'Improved a selection screen with sorting, pagination, multi-criteria search and result prioritization to make a growing volume of business data easier to navigate.',
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
    technologies: ['WinDev', 'HFSQL', 'SQL'],
    details: {
      kind: 'professional',
      context: {
        fr: 'Micgest est l’ERP sur lequel j’ai travaillé chez OKTEO pendant mon parcours en BUT Informatique, notamment durant mon alternance de 2024 à 2025.',
        en: 'Micgest is the ERP I worked on at OKTEO during my BUT Informatique, including my 2024–2025 apprenticeship.',
      },
      role: {
        fr: 'J’ai participé au développement de fonctionnalités, à l’analyse d’anomalies et à la création d’outils facilitant l’utilisation de l’ERP.',
        en: 'I contributed to feature development, investigated software issues and built tools to make the ERP easier to use.',
      },
      contributions: {
        fr: ['Développement et évolution de fonctionnalités en WinDev.', 'Travail sur les données SQL et HFSQL.', 'Analyse des besoins avec les utilisateurs et consultants.', 'Conception, tests et validation d’un outil de recherche de paramètres.'],
        en: ['Developing and enhancing features in WinDev.', 'Working with SQL and HFSQL data.', 'Discussing requirements with users and consultants.', 'Designing, testing and validating a settings search tool.'],
      },
    },
    notableContributions: [{
      title: { fr: 'Retrouver les paramètres de l’ERP', en: 'Finding ERP settings' },
      problem: {
        fr: 'Les paramètres étaient répartis dans de nombreuses fenêtres. L’outil existant ne permettait pas de les retrouver de façon suffisamment fiable et complète.',
        en: 'Settings were spread across many windows, and the existing tool did not provide a reliable, comprehensive way to find them.',
      },
      role: {
        fr: 'Analyse du besoin avec les consultants, conception, développement, tests et présentation de la solution.',
        en: 'Requirements analysis with consultants, design, implementation, testing and presentation of the solution.',
      },
      solution: {
        fr: 'Un outil de recherche centralisé pour retrouver les paramètres et y accéder plus facilement, tout en maintenant les informations à jour et en respectant le fonctionnement de l’ERP.',
        en: 'A centralized search tool that makes settings easier to find and access, while keeping information up to date and fitting the existing ERP workflow.',
      },
      result: {
        fr: 'L’outil a été livré et présenté aux consultants. Les pistes identifiées ensuite concernent surtout la lisibilité et la catégorisation des résultats.',
        en: 'The tool was delivered and presented to consultants. The next improvements identified mainly concern readability and result categorization.',
      },
      image: image('erp-search-tool/affiche', 1536, 1024,
        'Illustration générique de recherche ERP, sans interface ni données de Micgest',
        'Generic ERP search illustration, not a Micgest interface or dataset'),
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
        fr: 'Un prototype universitaire avec authentification, suivi des plantes, historique, seuils personnalisés et contrôle à distance. Le dépôt public permet d’en étudier le code avec sa propre configuration ; il ne donne pas accès au backend d’origine.',
        en: 'An academic prototype with authentication, plant monitoring, history, custom thresholds and remote control. The public repository can be studied with a separate configuration; it does not provide access to the original backend.',
      },
    },
    gallery: [
      ...plantScreens,
      image('smart-watering-system/compte', 480, 1079, 'Réglage du délai des notifications', 'Notification timing settings'),
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
      image('soieries-bonnet/affiche', 640, 384, 'Photographie historique des Soieries Bonnet : contexte du projet', 'Historic photograph of Soieries Bonnet: project context'),
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
      kind: 'technical',
      problem: { fr: 'Consulter des contenus de séries et d’animes depuis une application Android native.', en: 'Access series and anime content in a native Android app.' },
      role: { fr: 'Projet universitaire réalisé en binôme avec Abdellah Boussaha.', en: 'An academic project built with Abdellah Boussaha.' },
      solution: { fr: 'Des appels à SIMKL avec Retrofit, des modèles Kotlin et une séparation des accès aux données dans des repositories. Le projet utilise également les coroutines et ViewModel.', en: 'SIMKL requests through Retrofit, Kotlin data models and repositories separating data access. The project also uses coroutines and ViewModel.' },
      challenges: { fr: 'Relier les réponses d’une API externe aux écrans Android et gérer les échanges asynchrones.', en: 'Connecting external API responses to Android screens and handling asynchronous requests.' },
      result: { fr: 'Une démonstration universitaire dont la version publique est accessible sans compte. Le fonctionnement des appels distants dépend de l’API SIMKL.', en: 'An academic demo whose public version can be entered without an account. Remote requests depend on the SIMKL API.' },
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
      kind: 'technical',
      problem: { fr: 'Faire circuler des mesures et des commandes entre un dispositif embarqué et une application mobile.', en: 'Exchange measurements and commands between an embedded device and a mobile app.' },
      role: { fr: 'Contribution au serveur et à l’application Android dans un projet collaboratif, notamment au changement de serveur et à l’affichage de la dernière réception.', en: 'Contributed to the server and Android app in a collaborative project, including server switching and the last-received indicator.' },
      solution: { fr: 'La passerelle Python lit le port série, convertit les mesures en JSON et les diffuse aux clients UDP. L’application Kotlin affiche les mesures et transmet les commandes de configuration.', en: 'The Python gateway reads the serial port, converts measurements to JSON and broadcasts them to UDP clients. The Kotlin app displays readings and sends configuration commands.' },
      challenges: { fr: 'Coordonner la réception série, les échanges UDP et les mises à jour de l’interface, en distinguant une commande envoyée de son accusé de réception.', en: 'Coordinating serial input, UDP traffic and UI updates, while distinguishing a sent command from its acknowledgement.' },
      result: { fr: 'Un serveur et une application Android avec abonnement aux mesures et suivi des commandes. Le dépôt couvre ces deux composants ; le firmware micro:bit appartient à un dépôt séparé.', en: 'A server and Android app with measurement subscriptions and command tracking. This repository covers those two components; the micro:bit firmware lives in a separate repository.' },
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
      kind: 'technical',
      problem: {
        fr: 'Aider les enseignants à répartir des étudiants de manière aléatoire tout en respectant des groupes et contraintes d’éloignement.',
        en: 'Help teachers randomly assign students while respecting groups and separation constraints.',
      },
      role: {
        fr: 'Projet d’équipe de deuxième année. J’ai surtout travaillé sur la liste des étudiants et la récupération des données.',
        en: 'A second-year team project. I mainly worked on the student list and data retrieval.',
      },
      solution: {
        fr: 'Une application Processing combinant modélisation en graphe, placement automatique, glisser-déposer et import/export CSV, SVG et JSON.',
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
      image('student-desk-mate/interface-table', 1442, 811, 'Plan de salle interactif', 'Interactive room plan'),
      image('student-desk-mate/import', 1800, 1013, 'Écran d’import de données, sans liste d’étudiants', 'Data import screen, without a student list'),
    ],
  },
]
