import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Home, Building2, Wrench, Paintbrush, Hammer, Shield } from "lucide-react"

const services = [
  {
    icon: Home,
    title: "Residential Construction",
    description:
      "Custom homes, renovations, and additions built to your exact specifications with quality materials and expert craftsmanship.",
  },
  {
    icon: Building2,
    title: "Commercial Projects",
    description:
      "Office buildings, retail spaces, and industrial facilities designed for functionality and built to last.",
  },
  {
    icon: Wrench,
    title: "Remodeling & Renovation",
    description:
      "Transform your existing space with our comprehensive remodeling services, from kitchens to complete home makeovers.",
  },
  {
    icon: Paintbrush,
    title: "Design & Planning",
    description:
      "Complete design services from initial concept to detailed blueprints, ensuring your vision becomes reality.",
  },
  {
    icon: Hammer,
    title: "General Contracting",
    description:
      "Full-service project management handling all aspects of construction from permits to final inspection.",
  },
  {
    icon: Shield,
    title: "Maintenance & Repair",
    description: "Ongoing maintenance and repair services to keep your property in excellent condition year-round.",
  },
]

export function ServicesSection() {
  return (
    <section id="services" className="py-20 bg-card">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-card-foreground mb-4">Our Construction Services</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
            {
              "From concept to completion, we provide comprehensive construction services tailored to meet your specific needs and exceed your expectations."
            }
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card key={index} className="border-border hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <service.icon className="w-6 h-6 text-primary" />
                </div>
                <CardTitle className="text-xl text-card-foreground">{service.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-muted-foreground">{service.description}</CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
