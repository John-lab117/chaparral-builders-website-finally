"use client"
import Link from "next/link"
import { ArrowLeft, Phone, Mail, MapPin, Hammer } from "lucide-react"
import { Button } from "@/components/ui/button"
import Image from "next/image"

interface ServicePageProps {
  title: string
  description: string
  category: string
  slug: string
  photos?: string[] // Added optional photos array
}

export default function ServicePageTemplate({ title, description, category, slug, photos }: ServicePageProps) {
  return (
    <div className="flex min-h-screen">
      {/* Sidebar - Same as main page */}
      <div
        className="fixed left-0 top-0 h-screen overflow-y-auto z-10"
        style={{ width: "264px", backgroundColor: "#FAF7EF" }}
      >
        <div className="p-6">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-4 mb-6 hover:opacity-80 transition-opacity cursor-pointer">
            <div
              className="flex items-center justify-center rounded-xl"
              style={{
                width: "44px",
                height: "44px",
                backgroundColor: "#8A1F22",
              }}
            >
              <Hammer className="text-white" style={{ strokeWidth: "2.2px" }} size={20} />
            </div>
            <div>
              <h1
                className="font-bold uppercase tracking-wide"
                style={{
                  fontSize: "22px",
                  color: "#2F3437",
                  lineHeight: "1.1",
                }}
              >
                CHAPARRAL
              </h1>
              <p
                className="font-semibold uppercase"
                style={{
                  fontSize: "16px",
                  color: "#8A1F22",
                  lineHeight: "1.1",
                }}
              >
                BUILDERS
              </p>
            </div>
          </Link>

          {/* Serving Card */}
          <div
            className="text-white p-4 text-center mb-6 rounded-2xl shadow-lg"
            style={{
              background: "linear-gradient(135deg, #7E1A1F 0%, #9B2A2E 100%)",
              boxShadow: "0 10px 24px rgba(0,0,0,0.18)",
            }}
          >
            <MapPin className="w-5 h-5 mx-auto mb-2" style={{ color: "#C59A45" }} />
            <p className="font-semibold text-white">Serving</p>
            <p className="text-sm text-white">North San Diego County</p>
          </div>

          {/* Services */}
          <div className="space-y-6">
            <div>
              <h3 className="font-semibold text-gray-900 mb-4 leading-tight">Our Services Include:</h3>
              <ul className="space-y-1 text-gray-700 leading-tight">
                <li
                  className={`px-4 py-3 rounded-lg transition-all duration-200 ease-out hover:font-medium hover:-translate-y-0.5 focus:outline-none focus:ring-2 focus:ring-opacity-35 cursor-pointer ${slug === "slab-foundation" ? "bg-red-100 border-l-4 border-red-800 font-medium" : ""}`}
                  onMouseEnter={(e) => {
                    if (slug !== "slab-foundation") {
                      e.currentTarget.style.backgroundColor = "#F6E7D6"
                      e.currentTarget.style.borderLeft = "4px solid #8A1F22"
                    }
                  }}
                  onMouseLeave={(e) => {
                    if (slug !== "slab-foundation") {
                      e.currentTarget.style.backgroundColor = "transparent"
                      e.currentTarget.style.borderLeft = "none"
                    }
                  }}
                  tabIndex={0}
                >
                  <Link href="/slab-foundation">Slab & Foundation Work</Link>
                </li>
                <li
                  className={`px-4 py-3 rounded-lg transition-all duration-200 ease-out hover:font-medium hover:-translate-y-0.5 focus:outline-none focus:ring-2 focus:ring-opacity-35 cursor-pointer ${slug === "retaining-walls" ? "bg-red-100 border-l-4 border-red-800 font-medium" : ""}`}
                  onMouseEnter={(e) => {
                    if (slug !== "retaining-walls") {
                      e.currentTarget.style.backgroundColor = "#F6E7D6"
                      e.currentTarget.style.borderLeft = "4px solid #8A1F22"
                    }
                  }}
                  onMouseLeave={(e) => {
                    if (slug !== "retaining-walls") {
                      e.currentTarget.style.backgroundColor = "transparent"
                      e.currentTarget.style.borderLeft = "none"
                    }
                  }}
                  tabIndex={0}
                >
                  <Link href="/retaining-walls">Concrete Block Retaining Walls</Link>
                </li>
                <li
                  className={`px-4 py-3 rounded-lg transition-all duration-200 ease-out hover:font-medium hover:-translate-y-0.5 focus:outline-none focus:ring-2 focus:ring-opacity-35 cursor-pointer ${slug === "sidewalks-driveways" ? "bg-red-100 border-l-4 border-red-800 font-medium" : ""}`}
                  onMouseEnter={(e) => {
                    if (slug !== "sidewalks-driveways") {
                      e.currentTarget.style.backgroundColor = "#F6E7D6"
                      e.currentTarget.style.borderLeft = "4px solid #8A1F22"
                    }
                  }}
                  onMouseLeave={(e) => {
                    if (slug !== "sidewalks-driveways") {
                      e.currentTarget.style.backgroundColor = "transparent"
                      e.currentTarget.style.borderLeft = "none"
                    }
                  }}
                  tabIndex={0}
                >
                  <Link href="/sidewalks-driveways">Concrete Sidewalks & Driveways</Link>
                </li>
                <li
                  className={`px-4 py-3 rounded-lg transition-all duration-200 ease-out hover:font-medium hover:-translate-y-0.5 focus:outline-none focus:ring-2 focus:ring-opacity-35 cursor-pointer ${slug === "grading-compaction" ? "bg-red-100 border-l-4 border-red-800 font-medium" : ""}`}
                  onMouseEnter={(e) => {
                    if (slug !== "grading-compaction") {
                      e.currentTarget.style.backgroundColor = "#F6E7D6"
                      e.currentTarget.style.borderLeft = "4px solid #8A1F22"
                    }
                  }}
                  onMouseLeave={(e) => {
                    if (slug !== "grading-compaction") {
                      e.currentTarget.style.backgroundColor = "transparent"
                      e.currentTarget.style.borderLeft = "none"
                    }
                  }}
                  tabIndex={0}
                >
                  <Link href="/grading-compaction">Grading & Compaction</Link>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold text-gray-900 mb-4 leading-tight">Underground Utilities:</h3>
              <ul className="space-y-1 text-gray-700 leading-tight">
                <li
                  className={`px-4 py-3 rounded-lg transition-all duration-200 ease-out hover:font-medium hover:-translate-y-0.5 focus:outline-none focus:ring-2 focus:ring-opacity-35 cursor-pointer ${slug === "sewer" ? "bg-red-100 border-l-4 border-red-800 font-medium" : ""}`}
                  onMouseEnter={(e) => {
                    if (slug !== "sewer") {
                      e.currentTarget.style.backgroundColor = "#F6E7D6"
                      e.currentTarget.style.borderLeft = "4px solid #8A1F22"
                    }
                  }}
                  onMouseLeave={(e) => {
                    if (slug !== "sewer") {
                      e.currentTarget.style.backgroundColor = "transparent"
                      e.currentTarget.style.borderLeft = "none"
                    }
                  }}
                  tabIndex={0}
                >
                  <Link href="/sewer">Sewer</Link>
                </li>
                <li
                  className={`px-4 py-3 rounded-lg transition-all duration-200 ease-out hover:font-medium hover:-translate-y-0.5 focus:outline-none focus:ring-2 focus:ring-opacity-35 cursor-pointer ${slug === "water-mains" ? "bg-red-100 border-l-4 border-red-800 font-medium" : ""}`}
                  onMouseEnter={(e) => {
                    if (slug !== "water-mains") {
                      e.currentTarget.style.backgroundColor = "#F6E7D6"
                      e.currentTarget.style.borderLeft = "4px solid #8A1F22"
                    }
                  }}
                  onMouseLeave={(e) => {
                    if (slug !== "water-mains") {
                      e.currentTarget.style.backgroundColor = "transparent"
                      e.currentTarget.style.borderLeft = "none"
                    }
                  }}
                  tabIndex={0}
                >
                  <Link href="/water-mains">Water Mains</Link>
                </li>
                <li
                  className={`px-4 py-3 rounded-lg transition-all duration-200 ease-out hover:font-medium hover:-translate-y-0.5 focus:outline-none focus:ring-2 focus:ring-opacity-35 cursor-pointer ${slug === "area-drains" ? "bg-red-100 border-l-4 border-red-800 font-medium" : ""}`}
                  onMouseEnter={(e) => {
                    if (slug !== "area-drains") {
                      e.currentTarget.style.backgroundColor = "#F6E7D6"
                      e.currentTarget.style.borderLeft = "4px solid #8A1F22"
                    }
                  }}
                  onMouseLeave={(e) => {
                    if (slug !== "area-drains") {
                      e.currentTarget.style.backgroundColor = "transparent"
                      e.currentTarget.style.borderLeft = "none"
                    }
                  }}
                  tabIndex={0}
                >
                  <Link href="/area-drains">Area Drains</Link>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold text-gray-900 mb-4">Waterproofing:</h3>
              <ul className="space-y-1 text-gray-700 leading-tight">
                <li
                  className={`px-4 py-3 rounded-lg transition-all duration-200 ease-out hover:font-medium hover:-translate-y-0.5 focus:outline-none focus:ring-2 focus:ring-opacity-35 cursor-pointer ${slug === "decks-balconies" ? "bg-red-100 border-l-4 border-red-800 font-medium" : ""}`}
                  onMouseEnter={(e) => {
                    if (slug !== "decks-balconies") {
                      e.currentTarget.style.backgroundColor = "#F6E7D6"
                      e.currentTarget.style.borderLeft = "4px solid #8A1F22"
                    }
                  }}
                  onMouseLeave={(e) => {
                    if (slug !== "decks-balconies") {
                      e.currentTarget.style.backgroundColor = "transparent"
                      e.currentTarget.style.borderLeft = "none"
                    }
                  }}
                  tabIndex={0}
                >
                  <Link href="/decks-balconies">Decks & Balconies</Link>
                </li>
                <li
                  className={`px-4 py-3 rounded-lg transition-all duration-200 ease-out hover:font-medium hover:-translate-y-0.5 focus:outline-none focus:ring-2 focus:ring-opacity-35 cursor-pointer ${slug === "rooftop-structures" ? "bg-red-100 border-l-4 border-red-800 font-medium" : ""}`}
                  onMouseEnter={(e) => {
                    if (slug !== "rooftop-structures") {
                      e.currentTarget.style.backgroundColor = "#F6E7D6"
                      e.currentTarget.style.borderLeft = "4px solid #8A1F22"
                    }
                  }}
                  onMouseLeave={(e) => {
                    if (slug !== "rooftop-structures") {
                      e.currentTarget.style.backgroundColor = "transparent"
                      e.currentTarget.style.borderLeft = "none"
                    }
                  }}
                  tabIndex={0}
                >
                  <Link href="/rooftop-structures">Rooftop Structures</Link>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold text-gray-900 mb-4">Contact Information</h3>
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 bg-red-800 rounded-full flex items-center justify-center">
                    <Phone className="w-4 h-4 text-white" />
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-gray-900">Phone/Text:</p>
                    <a href="tel:+17607157740" className="text-sm text-gray-700 hover:text-red-800 transition-colors">
                      (760) 715-7740
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center">
                    <Mail className="w-4 h-4 text-white" />
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-gray-900">Email:</p>
                    <a
                      href="mailto:jrc411@outlook.com"
                      className="text-sm text-gray-700 hover:text-blue-600 transition-colors"
                    >
                      jrc411@outlook.com
                    </a>
                  </div>
                </div>

                <p className="text-sm text-gray-600 mt-4">License Number #353887</p>

                <Button className="w-full bg-red-800 hover:bg-red-900 text-white mt-4" asChild>
                  <Link href="/get-estimate">Get an Estimate</Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 overflow-y-auto" style={{ marginLeft: "264px" }}>
        <div className="bg-white min-h-screen">
          {/* Back to Home Link */}
          <div className="px-12 pt-8">
            <Link
              href="/"
              className="inline-flex items-center text-gray-600 hover:text-gray-900 transition-colors duration-200"
            >
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Home
            </Link>
          </div>

          {/* Service Header */}
          <div className="px-12 pt-6 pb-8">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">{title}</h1>
            <div className="w-16 h-1 bg-red-800 mb-6"></div>

            <p className="text-lg text-gray-600 mb-6 max-w-4xl leading-relaxed">{description}</p>
          </div>

          {/* Our Work Section */}
          <div className="px-12 pb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">Our Work</h2>

            <div className="grid grid-cols-2 gap-8 mb-16">
              {photos && photos.length > 0 ? (
                <>
                  <div className="relative h-64 rounded-lg overflow-hidden shadow-lg">
                    <Image
                      src={photos[0] || "/placeholder.svg"}
                      alt={`${title} project example 1`}
                      fill
                      className="object-cover"
                    />
                  </div>
                  {photos[1] && (
                    <div className="relative h-64 rounded-lg overflow-hidden shadow-lg">
                      <Image
                        src={photos[1] || "/placeholder.svg"}
                        alt={`${title} project example 2`}
                        fill
                        className="object-cover"
                      />
                    </div>
                  )}
                  {!photos[1] && (
                    <div className="bg-gray-100 rounded-lg border-2 border-dashed border-gray-300 h-64 flex items-center justify-center">
                      <div className="text-center text-gray-500">
                        <div className="w-8 h-8 border-2 border-gray-400 rounded mx-auto mb-2"></div>
                        <p>Photo will be added</p>
                      </div>
                    </div>
                  )}
                </>
              ) : (
                <>
                  <div className="bg-gray-100 rounded-lg border-2 border-dashed border-gray-300 h-64 flex items-center justify-center">
                    <div className="text-center text-gray-500">
                      <div className="w-8 h-8 border-2 border-gray-400 rounded mx-auto mb-2"></div>
                      <p>Photo will be added</p>
                    </div>
                  </div>
                  <div className="bg-gray-100 rounded-lg border-2 border-dashed border-gray-300 h-64 flex items-center justify-center">
                    <div className="text-center text-gray-500">
                      <div className="w-8 h-8 border-2 border-gray-400 rounded mx-auto mb-2"></div>
                      <p>Photo will be added</p>
                    </div>
                  </div>
                </>
              )}
            </div>
          </div>

          {/* Ready to Get Started Section */}
          <div className="bg-gray-50 px-12 py-16">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">Ready to Get Started?</h2>

              <div className="grid grid-cols-2 gap-8">
                {/* Contact Information Card */}
                <div className="bg-white rounded-lg border-2 border-red-800 p-8">
                  <h3 className="text-xl font-bold text-gray-900 mb-6">Contact Information</h3>

                  <div className="space-y-4">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 bg-red-800 rounded-full flex items-center justify-center">
                        <Phone className="w-5 h-5 text-white" />
                      </div>
                      <div>
                        <p className="font-semibold text-gray-900">Phone/Text:</p>
                        <a
                          href="tel:+17607157740"
                          className="text-red-800 font-medium hover:text-red-900 transition-colors"
                        >
                          (760) 715-7740
                        </a>
                      </div>
                    </div>

                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center">
                        <Mail className="w-5 h-5 text-white" />
                      </div>
                      <div>
                        <p className="font-semibold text-gray-900">Email:</p>
                        <a
                          href="mailto:jrc411@outlook.com"
                          className="text-blue-600 font-medium hover:text-blue-700 transition-colors"
                        >
                          jrc411@outlook.com
                        </a>
                      </div>
                    </div>

                    <div className="bg-gray-100 rounded-lg p-4 mt-6 text-center">
                      <p className="text-sm font-medium text-gray-700">Licensed Contractor #353887</p>
                      <p className="text-sm text-gray-600">Serving San Diego County</p>
                    </div>
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex flex-col justify-center space-y-4">
                  <Button
                    className="bg-red-800 hover:bg-red-900 text-white h-14 text-lg font-semibold"
                    size="lg"
                    asChild
                  >
                    <Link href="/get-estimate">Get an Estimate</Link>
                  </Button>

                  <Button
                    variant="outline"
                    className="border-2 border-red-800 text-red-800 hover:bg-red-800 hover:text-white h-14 text-lg font-semibold bg-transparent"
                    size="lg"
                    asChild
                  >
                    <a href="tel:+17607157740">
                      <Phone className="w-5 h-5 mr-2" />
                      Call Now
                    </a>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
