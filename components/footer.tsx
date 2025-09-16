import { Facebook, Twitter, Instagram, Linkedin, Phone, Mail, MapPin } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-8 h-8 bg-accent rounded-md flex items-center justify-center">
                <span className="text-accent-foreground font-bold text-lg">C</span>
              </div>
              <span className="text-xl font-bold">Chaparral Builders</span>
            </div>
            <p className="text-primary-foreground/80 mb-4 text-pretty">
              {
                "Building excellence since 1998. Your trusted partner for all construction needs, delivering quality craftsmanship and exceptional service."
              }
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-primary-foreground/80 hover:text-accent transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="text-primary-foreground/80 hover:text-accent transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="text-primary-foreground/80 hover:text-accent transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="text-primary-foreground/80 hover:text-accent transition-colors">
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-bold mb-4">Services</h3>
            <ul className="space-y-2 text-primary-foreground/80">
              <li>
                <a href="#" className="hover:text-accent transition-colors">
                  Residential Construction
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-accent transition-colors">
                  Commercial Projects
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-accent transition-colors">
                  Remodeling & Renovation
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-accent transition-colors">
                  Design & Planning
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-accent transition-colors">
                  General Contracting
                </a>
              </li>
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2 text-primary-foreground/80">
              <li>
                <a href="#home" className="hover:text-accent transition-colors">
                  Home
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-accent transition-colors">
                  Services
                </a>
              </li>
              <li>
                <a href="#projects" className="hover:text-accent transition-colors">
                  Projects
                </a>
              </li>
              <li>
                <a href="#testimonials" className="hover:text-accent transition-colors">
                  About
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-accent transition-colors">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-bold mb-4">Contact Info</h3>
            <div className="space-y-3 text-primary-foreground/80">
              <div className="flex items-center space-x-3">
                <Phone className="w-4 h-4 flex-shrink-0" />
                <span>(555) 123-4567</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="w-4 h-4 flex-shrink-0" />
                <span>info@chaparralbuilders.com</span>
              </div>
              <div className="flex items-start space-x-3">
                <MapPin className="w-4 h-4 flex-shrink-0 mt-0.5" />
                <span>
                  123 Construction Ave
                  <br />
                  Building City, BC 12345
                </span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-primary-foreground/20 mt-8 pt-8 text-center text-primary-foreground/80">
          <p>&copy; 2024 Chaparral Builders. All rights reserved. | Licensed & Insured</p>
        </div>
      </div>
    </footer>
  )
}
