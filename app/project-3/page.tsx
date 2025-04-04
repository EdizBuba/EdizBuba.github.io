import Link from "next/link"
import Image from "next/image"
import { Github, ArrowLeft } from "lucide-react"

import { Button } from "@/components/ui/button"

export default function Project3() {
  return (
    <div className="container mx-auto px-4 py-12">
      <Button variant="ghost" asChild className="mb-8">
        <Link href="/#projects">
          <ArrowLeft className="mr-2 h-4 w-4" />
          Retour aux projets
        </Link>
      </Button>

      <div className="mx-auto max-w-3xl space-y-8">
        <div className="space-y-2">
          <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Blog personnel</h1>
          <p className="text-muted-foreground">Partage de connaissances et d'expériences</p>
        </div>

        <Image
          src="/placeholder.svg?height=600&width=1200"
          alt="Capture d'écran détaillée du blog personnel"
          width={1200}
          height={600}
          className="w-full rounded-lg object-cover"
        />

        <div className="space-y-4">
          <h2 className="text-2xl font-bold">Description du projet</h2>
          <p className="text-muted-foreground">
            Ce blog personnel a été développé pour partager mes connaissances, mes expériences et mes réflexions sur le
            développement web et les technologies associées. Il offre une interface utilisateur élégante et intuitive,
            avec des fonctionnalités avancées de recherche et de catégorisation des articles.
          </p>

          <h2 className="text-2xl font-bold">Technologies utilisées</h2>
          <ul className="list-disc pl-6 text-muted-foreground">
            <li>Frontend: Next.js, TypeScript, Tailwind CSS</li>
            <li>CMS: Contentful</li>
            <li>Déploiement: Vercel</li>
            <li>Analytique: Google Analytics</li>
            <li>Commentaires: Disqus</li>
          </ul>

          <h2 className="text-2xl font-bold">Fonctionnalités principales</h2>
          <ul className="list-disc pl-6 text-muted-foreground">
            <li>Articles de blog avec formatage riche (Markdown)</li>
            <li>Catégorisation et tags pour les articles</li>
            <li>Recherche avancée</li>
            <li>Système de commentaires</li>
            <li>Partage sur les réseaux sociaux</li>
            <li>Mode sombre/clair</li>
            <li>Optimisation SEO</li>
          </ul>

          <div className="flex justify-center pt-4">
            <Button asChild>
              <Link href="https://github.com/username/blog" target="_blank" rel="noopener noreferrer">
                <Github className="mr-2 h-4 w-4" />
                Voir le code source sur GitHub
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}

