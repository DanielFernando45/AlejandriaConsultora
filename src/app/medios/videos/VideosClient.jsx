import { Link } from "react-router-dom"
import { Badge } from "@/components/ui/badge"
import { Calendar, Clock, Play } from "lucide-react"
import { videos } from "@/data/videos"

export default function VideoHeroCard() {
  const featuredVideo = videos[0]

  return (
    <Link to={`/medios/videos/${featuredVideo.slug}`}>
      <div className="relative group overflow-hidden rounded-xl border border-border bg-card hover:border-primary/50 transition-all duration-300">
        <div className="grid md:grid-cols-2 gap-6 p-6">
          {/* Thumbnail */}
          <div className="relative rounded-lg overflow-hidden aspect-video bg-muted">
            <img
              src={featuredVideo.thumbnail || "/placeholder.svg"}
              alt={featuredVideo.title}
              className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
            />

            <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
              <div className="w-16 h-16 rounded-full bg-primary flex items-center justify-center">
                <Play className="w-8 h-8 text-white ml-1" fill="white" />
              </div>
            </div>

            <div className="absolute top-3 left-3">
              <Badge className="bg-primary text-primary-foreground">
                Destacado
              </Badge>
            </div>
          </div>

          {/* Content */}
          <div className="flex flex-col justify-center space-y-4">
            <div className="flex gap-2 flex-wrap">
              {featuredVideo.category.map((cat) => (
                <Badge key={cat} variant="secondary">
                  {cat}
                </Badge>
              ))}
            </div>

            <h2 className="text-2xl md:text-3xl font-bold text-foreground group-hover:text-primary transition-colors text-balance">
              {featuredVideo.title}
            </h2>

            <p className="text-muted-foreground text-balance">
              {featuredVideo.description}
            </p>

            <div className="flex items-center gap-4 text-sm text-muted-foreground">
              <span className="flex items-center gap-1">
                <Calendar className="w-4 h-4" />
                {featuredVideo.date}
              </span>

              <span className="flex items-center gap-1">
                <Clock className="w-4 h-4" />
                {featuredVideo.duration}
              </span>
            </div>

            <p className="text-sm font-medium text-foreground">
              Por {featuredVideo.author}
            </p>
          </div>
        </div>
      </div>
    </Link>
  )
}
