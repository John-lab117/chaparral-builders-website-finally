import { Button } from "@/components/ui/button"
import { ArrowRight, Award, Users, Calendar } from "lucide-react"

export function HeroSection() {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url('/modern-construction-site-with-workers-building-a-h.png')`,
        }}
      >
        <div className="absolute inset-0 bg-primary/70"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center text-white">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 text-balance">
            Building Dreams with <span className="text-accent">Expert Craftsmanship</span>
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-pretty opacity-90">
            {
              "Professional construction services you can trust. From residential homes to commercial projects, we deliver quality results on time and within budget."
            }
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Button size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground">
              Start Your Project
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-white hover:text-primary bg-transparent"
            >
              View Our Work
            </Button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-2xl mx-auto">
            <div className="flex flex-col items-center">
              <Award className="w-8 h-8 text-accent mb-2" />
              <div className="text-2xl font-bold">25+</div>
              <div className="text-sm opacity-90">Years Experience</div>
            </div>
            <div className="flex flex-col items-center">
              <Users className="w-8 h-8 text-accent mb-2" />
              <div className="text-2xl font-bold">500+</div>
              <div className="text-sm opacity-90">Happy Clients</div>
            </div>
            <div className="flex flex-col items-center">
              <Calendar className="w-8 h-8 text-accent mb-2" />
              <div className="text-2xl font-bold">1000+</div>
              <div className="text-sm opacity-90">Projects Completed</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
