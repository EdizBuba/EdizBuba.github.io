import Link from "next/link"
import Image from "next/image"
import { Github, ArrowLeft } from "lucide-react"

import { Button } from "@/components/ui/button"

export default function Project4() {
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
          <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Application météo</h1>
          <p className="text-muted-foreground">Prévisions météorologiques précises et personnalisées</p>
        </div>

        <Image
          src="/placeholder.svg?height=600&width=1200"
          alt="Capture d'écran détaillée de l'application météo"
          width={1200}
          height={600}
          className="w-full rounded-lg object-cover"
        />

        <div className="space-y-4">
          <h2 className="text-2xl font-bold">Description du projet</h2>
          <p className="text-muted-foreground">
            Cette application météo offre des prévisions météorologiques précises et personnalisées en utilisant des API
            externes. Elle permet aux utilisateurs de consulter les conditions météorologiques actuelles et les
            prévisions pour les jours à venir pour n'importe quelle ville dans le monde.
          </p>

          <h2 className="text-2xl font-bold">Technologies utilisées</h2>
          <ul className="list-disc pl-6 text-muted-foreground">
            <li>Frontend: React, TypeScript, Styled Components</li>
            <li>API: OpenWeatherMap, Mapbox</li>
            <li>Géolocalisation: Navigator API</li>
            <li>Déploiement: Netlify</li>
            <li>PWA: Service Workers</li>
          </ul>

          <h2 className="text-2xl font-bold">Fonctionnalités principales</h2>
          <ul className="list-disc pl-6 text-muted-foreground">
            <li>Prévisions météorologiques actuelles et à 7 jours</li>
            <li>Recherche de villes avec autocomplétion</li>
            <li>Géolocalisation pour obtenir la météo locale</li>
            <li>Visualisation des données météorologiques sur une carte</li>
            <li>Mode hors ligne avec données mises en cache</li>
            <li>Notifications pour les alertes météorologiques</li>
            <li>Installation en tant qu'application (PWA)</li>
          </ul>

          <div className="flex justify-center pt-4">
            <Button asChild>
              <Link href="https://github.com/username/weather-app" target="_blank" rel="noopener noreferrer">
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

