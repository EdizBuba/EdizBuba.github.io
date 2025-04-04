import Link from "next/link"
import Image from "next/image"
import { Github, Mail, FileText, ArrowRight } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center">
          <Link href="/" className="font-bold">
            Portfolio
          </Link>
          <nav className="ml-auto flex gap-4 sm:gap-6">
            <Link href="#about" className="text-sm font-medium hover:underline underline-offset-4">
              À propos
            </Link>
            <Link href="#projects" className="text-sm font-medium hover:underline underline-offset-4">
              Projets
            </Link>
            <Link href="#contact" className="text-sm font-medium hover:underline underline-offset-4">
              Contact
            </Link>
          </nav>
        </div>
      </header>
      <main className="flex-1">
        <section id="hero" className="w-full py-12 md:py-24 lg:py-32 bg-muted">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
              <div className="flex flex-col justify-center space-y-4">
                <div className="space-y-2">
                  <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">Jean Dupont</h1>
                  <p className="text-xl text-muted-foreground">Développeur Web Full Stack</p>
                </div>
                <div className="flex flex-col gap-2 min-h-[100px]">
                  <p className="max-w-[600px] text-muted-foreground md:text-xl">
                    Passionné par le développement web et les nouvelles technologies, je crée des applications web
                    modernes et performantes.
                  </p>
                </div>
                <div className="flex flex-col gap-2 sm:flex-row">
                  <Button asChild>
                    <Link href="#projects">
                      Voir mes projets <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                  <Button variant="outline" asChild>
                    <Link href="#contact">Me contacter</Link>
                  </Button>
                </div>
              </div>
              <div className="flex items-center justify-center">
                <Image
                  src="/placeholder.svg?height=600&width=600"
                  alt="Photo de profil"
                  width={400}
                  height={400}
                  className="rounded-full aspect-square object-cover border-4 border-background shadow-xl"
                  priority
                />
              </div>
            </div>
          </div>
        </section>

        <section id="about" className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">À propos de moi</h2>
                <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
                  Découvrez mon parcours, mes compétences et ma passion pour le développement web.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 py-12 lg:grid-cols-2 lg:gap-12">
              <div className="flex flex-col justify-center space-y-4">
                <h3 className="text-2xl font-bold">Mon parcours</h3>
                <p className="text-muted-foreground">
                  Diplômé en informatique, j'ai développé une expertise en développement web full stack. Mon parcours
                  académique m'a permis d'acquérir de solides connaissances théoriques, tandis que mes expériences
                  professionnelles m'ont offert l'opportunité de les mettre en pratique sur des projets concrets.
                </p>
                <p className="text-muted-foreground">
                  Je suis constamment à la recherche de nouvelles technologies et méthodologies pour améliorer mes
                  compétences et rester à la pointe de l'innovation dans le domaine du développement web.
                </p>
              </div>
              <div className="space-y-4">
                <h3 className="text-2xl font-bold">Mes compétences</h3>
                <Tabs defaultValue="frontend">
                  <TabsList className="grid w-full grid-cols-3">
                    <TabsTrigger value="frontend">Frontend</TabsTrigger>
                    <TabsTrigger value="backend">Backend</TabsTrigger>
                    <TabsTrigger value="tools">Outils</TabsTrigger>
                  </TabsList>
                  <TabsContent value="frontend" className="space-y-4">
                    <div className="grid grid-cols-2 gap-2">
                      <div className="flex items-center gap-2 rounded-lg border p-2">
                        <div className="font-medium">React</div>
                      </div>
                      <div className="flex items-center gap-2 rounded-lg border p-2">
                        <div className="font-medium">Next.js</div>
                      </div>
                      <div className="flex items-center gap-2 rounded-lg border p-2">
                        <div className="font-medium">TypeScript</div>
                      </div>
                      <div className="flex items-center gap-2 rounded-lg border p-2">
                        <div className="font-medium">Tailwind CSS</div>
                      </div>
                    </div>
                  </TabsContent>
                  <TabsContent value="backend" className="space-y-4">
                    <div className="grid grid-cols-2 gap-2">
                      <div className="flex items-center gap-2 rounded-lg border p-2">
                        <div className="font-medium">Node.js</div>
                      </div>
                      <div className="flex items-center gap-2 rounded-lg border p-2">
                        <div className="font-medium">Express</div>
                      </div>
                      <div className="flex items-center gap-2 rounded-lg border p-2">
                        <div className="font-medium">MongoDB</div>
                      </div>
                      <div className="flex items-center gap-2 rounded-lg border p-2">
                        <div className="font-medium">PostgreSQL</div>
                      </div>
                    </div>
                  </TabsContent>
                  <TabsContent value="tools" className="space-y-4">
                    <div className="grid grid-cols-2 gap-2">
                      <div className="flex items-center gap-2 rounded-lg border p-2">
                        <div className="font-medium">Git</div>
                      </div>
                      <div className="flex items-center gap-2 rounded-lg border p-2">
                        <div className="font-medium">Docker</div>
                      </div>
                      <div className="flex items-center gap-2 rounded-lg border p-2">
                        <div className="font-medium">Figma</div>
                      </div>
                      <div className="flex items-center gap-2 rounded-lg border p-2">
                        <div className="font-medium">VS Code</div>
                      </div>
                    </div>
                  </TabsContent>
                </Tabs>
              </div>
            </div>
          </div>
        </section>

        <section id="projects" className="w-full py-12 md:py-24 lg:py-32 bg-muted">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Mes projets</h2>
                <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
                  Découvrez une sélection de mes projets les plus récents et les plus significatifs.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 py-12 md:grid-cols-2 lg:gap-12">
              <Card className="overflow-hidden">
                <CardHeader className="p-0">
                  <Image
                    src="/placeholder.svg?height=400&width=600"
                    alt="Capture d'écran du projet E-commerce"
                    width={600}
                    height={400}
                    className="w-full object-cover"
                  />
                </CardHeader>
                <CardContent className="p-6">
                  <CardTitle className="text-2xl">Plateforme E-commerce</CardTitle>
                  <CardDescription className="mt-2 line-clamp-3">
                    Une plateforme e-commerce complète avec panier d'achat, paiement en ligne et gestion des commandes.
                  </CardDescription>
                </CardContent>
                <CardFooter className="flex justify-between p-6 pt-0">
                  <Button variant="outline" asChild>
                    <Link href="#project-1">Détails</Link>
                  </Button>
                  <Button variant="outline" asChild>
                    <Link href="https://github.com/username/ecommerce" target="_blank" rel="noopener noreferrer">
                      <Github className="mr-2 h-4 w-4" />
                      GitHub
                    </Link>
                  </Button>
                </CardFooter>
              </Card>
              <Card className="overflow-hidden">
                <CardHeader className="p-0">
                  <Image
                    src="/placeholder.svg?height=400&width=600"
                    alt="Capture d'écran de l'application de gestion de tâches"
                    width={600}
                    height={400}
                    className="w-full object-cover"
                  />
                </CardHeader>
                <CardContent className="p-6">
                  <CardTitle className="text-2xl">Application de gestion de tâches</CardTitle>
                  <CardDescription className="mt-2 line-clamp-3">
                    Une application web permettant de gérer ses tâches quotidiennes avec des fonctionnalités de
                    collaboration.
                  </CardDescription>
                </CardContent>
                <CardFooter className="flex justify-between p-6 pt-0">
                  <Button variant="outline" asChild>
                    <Link href="#project-2">Détails</Link>
                  </Button>
                  <Button variant="outline" asChild>
                    <Link href="https://github.com/username/task-manager" target="_blank" rel="noopener noreferrer">
                      <Github className="mr-2 h-4 w-4" />
                      GitHub
                    </Link>
                  </Button>
                </CardFooter>
              </Card>
              <Card className="overflow-hidden">
                <CardHeader className="p-0">
                  <Image
                    src="/placeholder.svg?height=400&width=600"
                    alt="Capture d'écran du blog personnel"
                    width={600}
                    height={400}
                    className="w-full object-cover"
                  />
                </CardHeader>
                <CardContent className="p-6">
                  <CardTitle className="text-2xl">Blog personnel</CardTitle>
                  <CardDescription className="mt-2 line-clamp-3">
                    Un blog personnel développé avec Next.js et un CMS headless pour partager mes connaissances et
                    expériences.
                  </CardDescription>
                </CardContent>
                <CardFooter className="flex justify-between p-6 pt-0">
                  <Button variant="outline" asChild>
                    <Link href="#project-3">Détails</Link>
                  </Button>
                  <Button variant="outline" asChild>
                    <Link href="https://github.com/username/blog" target="_blank" rel="noopener noreferrer">
                      <Github className="mr-2 h-4 w-4" />
                      GitHub
                    </Link>
                  </Button>
                </CardFooter>
              </Card>
              <Card className="overflow-hidden">
                <CardHeader className="p-0">
                  <Image
                    src="/placeholder.svg?height=400&width=600"
                    alt="Capture d'écran de l'application météo"
                    width={600}
                    height={400}
                    className="w-full object-cover"
                  />
                </CardHeader>
                <CardContent className="p-6">
                  <CardTitle className="text-2xl">Application météo</CardTitle>
                  <CardDescription className="mt-2 line-clamp-3">
                    Une application météo utilisant des API externes pour fournir des prévisions météorologiques
                    précises et personnalisées.
                  </CardDescription>
                </CardContent>
                <CardFooter className="flex justify-between p-6 pt-0">
                  <Button variant="outline" asChild>
                    <Link href="#project-4">Détails</Link>
                  </Button>
                  <Button variant="outline" asChild>
                    <Link href="https://github.com/username/weather-app" target="_blank" rel="noopener noreferrer">
                      <Github className="mr-2 h-4 w-4" />
                      GitHub
                    </Link>
                  </Button>
                </CardFooter>
              </Card>
            </div>
          </div>
        </section>

        <section id="project-1" className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="mx-auto max-w-3xl space-y-8">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Plateforme E-commerce</h2>
                <p className="text-muted-foreground">Une solution complète pour la vente en ligne</p>
              </div>
              <Image
                src="/placeholder.svg?height=600&width=1200"
                alt="Capture d'écran détaillée du projet E-commerce"
                width={1200}
                height={600}
                className="w-full rounded-lg object-cover"
              />
              <div className="space-y-4">
                <h3 className="text-2xl font-bold">Description du projet</h3>
                <p className="text-muted-foreground">
                  Cette plateforme e-commerce offre une expérience d'achat complète et intuitive. Elle permet aux
                  utilisateurs de parcourir des produits, de les ajouter à leur panier, de passer commande et de suivre
                  leurs livraisons. Pour les administrateurs, elle propose un tableau de bord complet pour gérer les
                  produits, les commandes et les clients.
                </p>
                <h3 className="text-2xl font-bold">Technologies utilisées</h3>
                <ul className="list-disc pl-6 text-muted-foreground">
                  <li>Frontend: React, Next.js, TypeScript, Tailwind CSS</li>
                  <li>Backend: Node.js, Express, MongoDB</li>
                  <li>Paiement: Stripe API</li>
                  <li>Authentification: NextAuth.js</li>
                  <li>Déploiement: Vercel</li>
                </ul>
                <h3 className="text-2xl font-bold">Fonctionnalités principales</h3>
                <ul className="list-disc pl-6 text-muted-foreground">
                  <li>Catalogue de produits avec filtres et recherche</li>
                  <li>Panier d'achat persistant</li>
                  <li>Processus de paiement sécurisé</li>
                  <li>Gestion des commandes et des livraisons</li>
                  <li>Tableau de bord administrateur</li>
                  <li>Système d'authentification et de gestion des utilisateurs</li>
                </ul>
                <div className="flex justify-center pt-4">
                  <Button asChild>
                    <Link href="https://github.com/username/ecommerce" target="_blank" rel="noopener noreferrer">
                      <Github className="mr-2 h-4 w-4" />
                      Voir le code source sur GitHub
                    </Link>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="project-2" className="w-full py-12 md:py-24 lg:py-32 bg-muted">
          <div className="container px-4 md:px-6">
            <div className="mx-auto max-w-3xl space-y-8">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                  Application de gestion de tâches
                </h2>
                <p className="text-muted-foreground">Organisez votre travail efficacement</p>
              </div>
              <Image
                src="/placeholder.svg?height=600&width=1200"
                alt="Capture d'écran détaillée de l'application de gestion de tâches"
                width={1200}
                height={600}
                className="w-full rounded-lg object-cover"
              />
              <div className="space-y-4">
                <h3 className="text-2xl font-bold">Description du projet</h3>
                <p className="text-muted-foreground">
                  Cette application de gestion de tâches permet aux utilisateurs de créer, organiser et suivre leurs
                  tâches quotidiennes. Elle offre des fonctionnalités de collaboration pour les équipes, avec la
                  possibilité d'assigner des tâches, de définir des échéances et de suivre la progression des projets.
                </p>
                <h3 className="text-2xl font-bold">Technologies utilisées</h3>
                <ul className="list-disc pl-6 text-muted-foreground">
                  <li>Frontend: React, TypeScript, Tailwind CSS</li>
                  <li>Backend: Node.js, Express, PostgreSQL</li>
                  <li>Authentification: JWT</li>
                  <li>Temps réel: Socket.io</li>
                  <li>Déploiement: Heroku</li>
                </ul>
                <h3 className="text-2xl font-bold">Fonctionnalités principales</h3>
                <ul className="list-disc pl-6 text-muted-foreground">
                  <li>Création et gestion de tâches avec priorités</li>
                  <li>Organisation en projets et listes</li>
                  <li>Collaboration en temps réel</li>
                  <li>Notifications et rappels</li>
                  <li>Tableaux de bord personnalisables</li>
                  <li>Suivi du temps passé sur chaque tâche</li>
                </ul>
                <div className="flex justify-center pt-4">
                  <Button asChild>
                    <Link href="https://github.com/username/task-manager" target="_blank" rel="noopener noreferrer">
                      <Github className="mr-2 h-4 w-4" />
                      Voir le code source sur GitHub
                    </Link>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="contact" className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Me contacter</h2>
                <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
                  Vous avez un projet en tête ou une opportunité à me proposer ? N'hésitez pas à me contacter !
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 py-12 lg:grid-cols-2">
              <div className="flex flex-col justify-center space-y-4">
                <div className="flex items-center space-x-2">
                  <Mail className="h-5 w-5" />
                  <span className="text-muted-foreground">jean.dupont@example.com</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Github className="h-5 w-5" />
                  <Link
                    href="https://github.com/username"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-muted-foreground hover:underline"
                  >
                    github.com/username
                  </Link>
                </div>
                <div className="flex items-center space-x-2">
                  <FileText className="h-5 w-5" />
                  <Link href="#" className="text-muted-foreground hover:underline">
                    Télécharger mon CV
                  </Link>
                </div>
              </div>
              <Card>
                <CardHeader>
                  <CardTitle>Envoyez-moi un message</CardTitle>
                  <CardDescription>Remplissez le formulaire ci-dessous pour me contacter directement.</CardDescription>
                </CardHeader>
                <CardContent>
                  <form className="grid gap-4">
                    <div className="grid gap-2">
                      <label
                        htmlFor="name"
                        className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                      >
                        Nom
                      </label>
                      <input
                        id="name"
                        className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                        placeholder="Votre nom"
                      />
                    </div>
                    <div className="grid gap-2">
                      <label
                        htmlFor="email"
                        className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                      >
                        Email
                      </label>
                      <input
                        id="email"
                        type="email"
                        className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                        placeholder="Votre email"
                      />
                    </div>
                    <div className="grid gap-2">
                      <label
                        htmlFor="message"
                        className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                      >
                        Message
                      </label>
                      <textarea
                        id="message"
                        className="flex min-h-[120px] w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                        placeholder="Votre message"
                      />
                    </div>
                    <Button type="submit" className="w-full">
                      Envoyer
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
      </main>
      <footer className="w-full border-t py-6 md:py-0">
        <div className="container flex flex-col items-center justify-between gap-4 md:h-24 md:flex-row">
          <p className="text-center text-sm leading-loose text-muted-foreground md:text-left">
            © 2023 Jean Dupont. Tous droits réservés.
          </p>
          <div className="flex items-center gap-4">
            <Link href="https://github.com/username" target="_blank" rel="noopener noreferrer">
              <Github className="h-5 w-5" />
              <span className="sr-only">GitHub</span>
            </Link>
          </div>
        </div>
      </footer>
    </div>
  )
}

