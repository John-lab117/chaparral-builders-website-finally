import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ExternalLink } from "lucide-react"

const projects = [
  {
    title: "Modern Family Home",
    category: "Residential",
    image: "/modern-two-story-family-home-with-large-windows.png",
    description: "A stunning 3,500 sq ft contemporary home featuring open floor plans and sustainable materials.",
  },
  {
    title: "Downtown Office Complex",
    category: "Commercial",
    image: "/modern-glass-office-building-downtown.png",
    description: "A 50,000 sq ft mixed-use development combining office space with retail on the ground floor.",
  },
  {
    title: "Kitchen Renovation",
    category: "Remodeling",
    image: "/luxury-modern-kitchen-with-island-and-granite-coun.png",
    description: "Complete kitchen transformation featuring custom cabinetry and high-end appliances.",
  },
  {
    title: "Warehouse Facility",
    category: "Industrial",
    image: "/large-industrial-warehouse-with-loading-docks.png",
    description: "A 75,000 sq ft distribution center with advanced logistics and energy-efficient systems.",
  },
  {
    title: "Historic Restoration",
    category: "Restoration",
    image: "/restored-historic-brick-building-with-modern-updat.png",
    description: "Careful restoration of a 1920s building while preserving its historic character.",
  },
  {
    title: "Luxury Bathroom Suite",
    category: "Remodeling",
    image: "/luxury-spa-bathroom-with-marble-and-modern-fixture.png",
    description: "A spa-like master bathroom featuring natural stone, custom lighting, and premium fixtures.",
  },
]

export function ProjectsSection() {
  return (
    <section id="projects" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Featured Projects</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
            {
              "Explore our portfolio of completed projects showcasing our commitment to quality, innovation, and client satisfaction."
            }
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <Card
              key={index}
              className="group overflow-hidden border-border hover:shadow-xl transition-all duration-300"
            >
              <div className="relative overflow-hidden">
                <img
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute top-4 left-4">
                  <span className="bg-accent text-accent-foreground px-3 py-1 rounded-full text-sm font-medium">
                    {project.category}
                  </span>
                </div>
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-bold text-foreground mb-2">{project.title}</h3>
                <p className="text-muted-foreground mb-4">{project.description}</p>
                <Button variant="outline" size="sm" className="group/btn bg-transparent">
                  View Details
                  <ExternalLink className="ml-2 w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground">
            View All Projects
          </Button>
        </div>
      </div>
    </section>
  )
}
