# Refonte ciblée de Projects — 8 septembre 2026

## Périmètre

Modifications locales uniquement : aucun commit, push, déploiement, changement de remote ou réécriture de l’historique. Les autres sections, les styles globaux et les systèmes de navigation, langue et thème sont inchangés. Le skill Sites building a été utilisé pour encadrer le travail sur le site existant et sa validation, sans migration ni hébergement Sites.

## Nouvelle hiérarchie

1. Contributions professionnelles : IKOS, Micgest.
2. Sélection de projets : Planty — Système d’arrosage intelligent, Soieries Bonnet AR.
3. Autres explorations : CineList, Chaîne IoT temps réel, StudentDeskMate.

IKOS, Micgest, CineList et la chaîne IoT sont ajoutés. StudentDeskMate devient un mini-projet avec étude de cas. L’outil de recherche ERP disparaît comme carte indépendante et devient une réalisation notable dans Micgest ; son contenu utile est conservé.

## Audit GitHub public

Lecture des descriptions, README et fichiers pertinents ; vérification des contributions pour les forks candidats. Cet audit éditorial ne constitue pas un test d’exécution des applications ni un nouvel audit exhaustif de sécurité de leurs dépendances.

| Dépôt | Décision et éléments vérifiés |
| --- | --- |
| [Planty-public](https://github.com/EdizBuba/Planty-public) | Retenu. Application Flutter/Dart, Firebase et firmware ESP32/C++. Lien vers la version publique, pas le dépôt privé historique. |
| [CineList-public](https://github.com/EdizBuba/CineList-public) | Retenu en mini-projet. Kotlin, Retrofit, coroutines, ViewModel, API SIMKL ; séries et animes. Travail en binôme. Pas de promesse d’un service actuellement opérationnel. |
| [iot-project](https://github.com/EdizBuba/iot-project) | Retenu. Passerelle Python UART/UDP et application Android Kotlin ; mesures, abonnements et commandes. README et code vérifiés. Le firmware micro:bit appartient à un dépôt distinct, non fourni dans ce lien. |
| [POO-FilRouge](https://github.com/EdizBuba/POO-FilRouge) | Écarté : projet pédagogique guidé. Contributions réelles présentes (4 commits d’avance lors de l’audit), mais moins distinctif que les projets retenus. Ce n’est pas un fork vide. |
| [api-review-game](https://github.com/EdizBuba/api-review-game) | Écarté : exercice REST guidé. Contributions réelles (6 commits d’avance lors de l’audit), contrôleurs et services TypeScript ; éviter un catalogue de TP. |
| [PLP](https://github.com/EdizBuba/PLP) | Écarté : support de cours et travaux pratiques. |
| [EdizBuba.github.io](https://github.com/EdizBuba/EdizBuba.github.io) | Écarté de la sélection : éviter l’auto-référence du portfolio. |

## Textes et confidentialité

Les textes FR/EN distinguent contribution professionnelle, prototype universitaire et expérimentation. Les fiches professionnelles présentent contexte, rôle, contributions et technologies ; les projets techniques conservent problème, rôle, solution, difficultés et résultat.

IKOS reste limité aux informations autorisées : gestion immobilière, Java/SQL/Git, développement, maintenance et validation. Micgest décrit l’ERP et la recherche centralisée de paramètres avec WinDev/HFSQL/SQL. Aucun nom de client, ticket, branche, table, écran interne, extrait de code, architecture confidentielle ou métrique inventée n’est ajouté. Les enseignements personnels facultatifs ne sont pas inventés.

## Images

- IKOS et Micgest : compositions typographiques HTML/CSS abstraites, explicitement signalées comme n’étant pas des captures produit.
- Micgest : illustration générique de l’ancien outil de recherche conservée uniquement dans sa contribution détaillée.
- Planty : trois vraies captures (liste des plantes, contrôle, seuils) remplacent l’illustration principale ; captures complémentaires conservées en galerie. L’ancienne illustration reste disponible, sans servir de preuve d’interface.
- Soieries Bonnet : vraie vue AR principale ; photographie historique conservée dans la galerie avec les captures de l’application.
- StudentDeskMate : présentation compacte sans grande image ; galerie limitée à l’import vide et au plan de salle sans noms.
- CineList et IoT : aucune fausse capture ajoutée ; les mini-projets n’exigent pas de grande image.

Sept WebP ont été déplacés de `public/assets/images/` vers `img/`, hors du build Vite, pour ne plus publier de captures contenant des informations internes ou personnelles :

- `erp-search-tool/acces.webp`
- `erp-search-tool/interface.webp`
- `erp-search-tool/resultat.webp`
- `student-desk-mate/etudiant.webp`
- `student-desk-mate/groupe.webp`
- `student-desk-mate/interface.webp`
- `student-desk-mate/poster.webp`

Ces fichiers restent récupérables localement et les originaux sont conservés. Ce déplacement ne retire rien des anciens commits ou du site actuellement déployé. Il ne faut pas confondre exclusion du build et suppression d’une donnée dans l’historique Git.

## Validation

- `npm.cmd run build` : TypeScript (`tsc -b`) puis Vite.
- `npm.cmd run lint` : ESLint.
- Tests navigateur desktop et mobile ; largeurs 320, 375, 768, 1024 et 1440 px : aucun débordement propre à Projects détecté.
- FR et EN ; rendu sombre et clair ; ancre Projects et menu mobile.
- Sept dialogues : ouverture, fermeture Échap, retour au déclencheur, verrouillage du défilement et absence de débordement. Boucle Tab/Maj+Tab renforcée et vérifiée.
- Images principales réellement chargées, dimensions explicites, chargement différé ; console sans erreur ni avertissement lors de la dernière session.
- Pas de nouvelle dépendance. Les animations existantes sont conservées ; correction du sélecteur de révélation limitée à Projects.

## Informations ou assets manquants / TODO

Aucun TODO bloquant pour Projects. Aucun lien de démonstration n’est inventé.

Compléments facultatifs : captures publiques récentes de CineList/IoT ; URL publique du firmware micro:bit ; liens publics de Soieries Bonnet et StudentDeskMate s’ils existent. Ces deux derniers affichent « Code non publié » plutôt que de prétendre que leur dépôt est privé. Les infrastructures externes et le matériel n’ont pas été exécutés pendant cette passe.

Le CV obsolète et les éventuels TODO des autres sections sont hors périmètre et restent inchangés.

## Fichiers

Modifiés :

- `src/data/projects.ts`
- `src/data/types.ts`
- `src/i18n/fr.ts` (bloc Projects uniquement)
- `src/i18n/en.ts` (bloc Projects uniquement)
- `src/i18n/types.ts` (types Projects)
- `src/components/Projects/Projects.tsx`
- `src/components/Projects/ProjectModal.tsx`

Créés :

- `src/components/Projects/ProjectLinks.tsx`
- `src/components/Projects/ProjectVisual.tsx`
- `src/components/Projects/Projects.css`
- `docs/PROJECTS-AUDIT.md`

Assets déplacés : les sept WebP listés ci-dessus. Aucun changement aux manifestes de dépendances, workflow GitHub Pages ou autres composants.
