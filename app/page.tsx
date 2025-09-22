"use client"

import Link from "next/link"
import { Phone, Mail, MapPin, Hammer, Menu, X } from "lucide-react"
import { useState } from "react"

export default function HomePage() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  return (
    <div className="min-h-screen flex">
      <button
        className="fixed top-4 left-4 z-50 md:hidden bg-[#8A1F22] text-white p-2 rounded-lg shadow-lg"
        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
      >
        {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
      </button>

      {isMobileMenuOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-30 md:hidden"
          onClick={() => setIsMobileMenuOpen(false)}
        />
      )}

      {/* Fixed Sidebar */}
      <div
        className={`fixed left-0 top-0 w-64 h-screen bg-[#FAF7EF] border-r border-gray-200 flex flex-col z-40 transform transition-transform duration-300 md:transform-none ${isMobileMenuOpen ? "translate-x-0" : "-translate-x-full md:translate-x-0"}`}
      >
        {/* Fixed Logo Section */}
        <div className="bg-[#FAF7EF] p-6 border-b border-gray-200">
          <Link href="/" className="block hover:opacity-80 transition-opacity cursor-pointer">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-11 h-11 bg-[#8A1F22] rounded-xl flex items-center justify-center">
                <Hammer className="w-6 h-6 text-white" strokeWidth={2.2} />
              </div>
              <div>
                <div className="text-[22px] font-bold uppercase text-[#2F3437] leading-none">CHAPARRAL</div>
                <div className="text-[16px] font-semibold uppercase text-[#8A1F22] leading-none">BUILDERS</div>
              </div>
            </div>
          </Link>

          {/* Serving Card */}
          <div
            className="p-4 text-center rounded-2xl shadow-lg"
            style={{
              background: "linear-gradient(135deg, #7E1A1F 0%, #9B2A2E 100%) !important",
              boxShadow: "0 10px 24px rgba(0,0,0,0.18)",
            }}
          >
            <div className="flex items-center justify-center mb-2">
              <MapPin className="w-5 h-5 text-[#C59A45]" />
            </div>
            <p className="font-semibold text-sm" style={{ color: "#ffffff !important" }}>
              Serving
            </p>
            <p className="text-sm" style={{ color: "#ffffff !important" }}>
              North San Diego County
            </p>
          </div>
        </div>

        {/* Scrollable Menu Content */}
        <div className="flex-1 overflow-y-auto" style={{ scrollBehavior: "smooth" }}>
          <div className="p-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Our Services Include:</h3>
            <ul className="space-y-1">
              <li>
                <Link
                  href="/slab-foundation"
                  className="block py-2 px-3 text-gray-700 hover:bg-[#F6E7D6] hover:border-l-4 hover:border-[#8A1F22] hover:font-medium rounded transition-all duration-200 border-b border-gray-200"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Slab & Foundation Work
                </Link>
              </li>
              <li>
                <Link
                  href="/retaining-walls"
                  className="block py-2 px-3 text-gray-700 hover:bg-[#F6E7D6] hover:border-l-4 hover:border-[#8A1F22] hover:font-medium rounded transition-all duration-200 border-b border-gray-200"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Concrete Block Retaining Walls
                </Link>
              </li>
              <li>
                <Link
                  href="/sidewalks-driveways"
                  className="block py-2 px-3 text-gray-700 hover:bg-[#F6E7D6] hover:border-l-4 hover:border-[#8A1F22] hover:font-medium rounded transition-all duration-200 border-b border-gray-200"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Concrete Sidewalks & Driveways
                </Link>
              </li>
              <li>
                <Link
                  href="/grading-compaction"
                  className="block py-2 px-3 text-gray-700 hover:bg-[#F6E7D6] hover:border-l-4 hover:border-[#8A1F22] hover:font-medium rounded transition-all duration-200 border-b border-gray-200"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Grading & Compaction
                </Link>
              </li>
            </ul>

            <h3 className="text-lg font-semibold text-gray-900 mb-4 mt-8">Underground Utilities:</h3>
            <ul className="space-y-1">
              <li>
                <Link
                  href="/water-sewer"
                  className="block py-2 px-3 text-gray-700 hover:bg-[#F6E7D6] hover:border-l-4 hover:border-[#8A1F22] hover:font-medium rounded transition-all duration-200 border-b border-gray-200"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Water & Sewer
                </Link>
              </li>
              <li>
                <Link
                  href="/area-drains"
                  className="block py-2 px-3 text-gray-700 hover:bg-[#F6E7D6] hover:border-l-4 hover:border-[#8A1F22] hover:font-medium rounded transition-all duration-200 border-b border-gray-200"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Area Drains
                </Link>
              </li>
              <li>
                <Link
                  href="/underground-utilities"
                  className="block py-2 px-3 text-gray-700 hover:bg-[#F6E7D6] hover:border-l-4 hover:border-[#8A1F22] hover:font-medium rounded transition-all duration-200 border-b border-gray-200"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Underground Utilities
                </Link>
              </li>
            </ul>

            <h3 className="text-lg font-semibold text-gray-900 mb-4 mt-8">Waterproofing:</h3>
            <ul className="space-y-1">
              <li>
                <Link
                  href="/decks-balconies"
                  className="block py-2 px-3 text-gray-700 hover:bg-[#F6E7D6] hover:border-l-4 hover:border-[#8A1F22] hover:font-medium rounded transition-all duration-200 border-b border-gray-200"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Decks & Balconies
                </Link>
              </li>
              <li>
                <Link
                  href="/rooftop-structures"
                  className="block py-2 px-3 text-gray-700 hover:bg-[#F6E7D6] hover:border-l-4 hover:border-[#8A1F22] hover:font-medium rounded transition-all duration-200 border-b border-gray-200"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Rooftop Structures
                </Link>
              </li>
            </ul>

            <div className="mt-8 pt-6 border-t border-gray-200">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Contact Information</h3>

              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 bg-[#8A1F22] rounded-full flex items-center justify-center">
                    <Phone className="w-4 h-4 text-white" />
                  </div>
                  <div>
                    <p className="text-sm font-medium text-gray-900">Phone/Text:</p>
                    <a href="tel:+17607157740" className="text-sm text-[#8A1F22] hover:underline">
                      (760) 715-7740
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center">
                    <Mail className="w-4 h-4 text-white" />
                  </div>
                  <div>
                    <p className="text-sm font-medium text-gray-900">Email:</p>
                    <a href="mailto:jrc411@outlook.com" className="text-sm text-blue-600 hover:underline">
                      jrc411@outlook.com
                    </a>
                  </div>
                </div>
              </div>

              <div className="mt-4 p-3 bg-gray-100 rounded-lg text-center">
                <p className="text-xs text-gray-600">Licensed Contractor #353887</p>
                <p className="text-xs text-gray-600">Serving San Diego County</p>
              </div>

              <Link
                href="/get-estimate"
                className="mt-4 w-full bg-[#8A1F22] text-white py-3 px-4 rounded-lg font-medium hover:bg-[#7A1A1F] transition-colors flex items-center justify-center gap-2"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                <Phone className="w-4 h-4" />
                Get an Estimate
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 md:ml-64">
        {/* Hero Section */}
        <section
          className="relative min-h-screen flex items-center justify-center"
          style={{
            backgroundImage:
              "url('https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG_6534.JPG-wPjzUY1E4pXVRvQJNShQZHZJkbgZt5.jpeg')",
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
          }}
        >
          <div className="relative max-w-4xl mx-auto text-center px-4 sm:px-8 py-24 z-10">
            <h1
              className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white mb-6 max-w-4xl mx-auto antialiased tracking-tight text-balance px-4 py-2 rounded-lg"
              style={{
                lineHeight: "1.2",
                letterSpacing: "-0.01em",
                textShadow: "3px 3px 6px rgba(0,0,0,0.9), 0 0 12px rgba(0,0,0,0.8), -1px -1px 2px rgba(0,0,0,0.7)",
                WebkitTextStroke: "1px rgba(0,0,0,0.5)",
                backgroundColor: "rgba(0,0,0,0.3)",
              }}
            >
              Full-Service Concrete, Underground Utilities & Waterproofing Experts in{" "}
              <span
                className="text-yellow-600"
                style={{
                  textShadow: "3px 3px 6px rgba(0,0,0,0.9), 0 0 12px rgba(0,0,0,0.8), -1px -1px 2px rgba(0,0,0,0.7)",
                  WebkitTextStroke: "1px rgba(0,0,0,0.5)",
                }}
              >
                North San Diego County
              </span>
            </h1>

            <p
              className="text-lg sm:text-xl text-gray-100 mb-8 px-3 py-1 rounded"
              style={{
                textShadow: "2px 2px 4px rgba(0,0,0,0.9), 0 0 8px rgba(0,0,0,0.7)",
                WebkitTextStroke: "0.5px rgba(0,0,0,0.4)",
                backgroundColor: "rgba(0,0,0,0.25)",
              }}
            >
              Licensed, Local, and Trusted Since 1995
            </p>

            <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center items-center">
              <a
                href="tel:+17607157740"
                className="w-full sm:w-auto bg-[#7f1d1d] hover:bg-[#6f1a1a] text-white px-6 sm:px-8 py-4 rounded-lg font-semibold transition-all duration-200 flex items-center justify-center gap-3 shadow-lg hover:shadow-xl h-12"
              >
                <Phone className="w-5 h-5" />
                <span className="text-sm sm:text-base">Call Now: (760) 715-7740</span>
              </a>
              <Link
                href="/get-estimate"
                className="w-full sm:w-auto border-2 border-white text-white hover:bg-white hover:text-gray-900 px-6 sm:px-8 py-4 rounded-lg font-semibold transition-all duration-200 flex items-center justify-center gap-3 h-12"
                style={{
                  textShadow: "2px 2px 4px rgba(0,0,0,0.9), 0 0 8px rgba(0,0,0,0.7)",
                  WebkitTextStroke: "0.5px rgba(0,0,0,0.4)",
                  backgroundColor: "rgba(0,0,0,0.2)",
                }}
              >
                <Mail className="w-5 h-5" />
                <span className="text-sm sm:text-base">Request an Estimate</span>
              </Link>
            </div>
          </div>
        </section>

        {/* What We Do Section */}
        <section className="py-12 sm:py-20 bg-gray-50">
          <div className="max-w-6xl mx-auto px-4 sm:px-8">
            <div className="text-center mb-12 sm:mb-16">
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">What We Do</h2>
              <div className="w-16 h-1 bg-red-800 mx-auto"></div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8 items-stretch">
              <div className="bg-white p-6 sm:p-8 rounded-lg shadow-sm h-full flex flex-col">
                <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-4 text-center text-balance leading-tight">
                  Concrete
                  <br />
                  Construction
                </h3>
                <div className="flex-1">
                  <ul className="space-y-2 text-gray-600">
                    <li>• Slabs & Foundations</li>
                    <li>• Retaining Walls</li>
                    <li>• Sidewalks & Driveways</li>
                  </ul>
                </div>
              </div>

              <div className="bg-white p-6 sm:p-8 rounded-lg shadow-sm h-full flex flex-col">
                <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-4 text-center text-balance leading-tight">
                  Waterproofing
                  <br />
                  Services
                </h3>
                <div className="flex-1">
                  <ul className="space-y-2 text-gray-600">
                    <li>• Decks & Balconies</li>
                    <li>• Rooftop Structures</li>
                    <li>• Parking Garages</li>
                  </ul>
                </div>
              </div>

              <div className="bg-white p-6 sm:p-8 rounded-lg shadow-sm h-full flex flex-col sm:col-span-2 md:col-span-1">
                <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-4 text-center text-balance leading-tight">
                  Underground
                  <br />
                  Utilities
                </h3>
                <div className="flex-1">
                  <ul className="space-y-2 text-gray-600">
                    <li>• Sewer Lines</li>
                    <li>• Area Drains & Potable Water Mains</li>
                    <li>• Electrical Conduit</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Our Work Section */}
        <section className="py-12 sm:py-20 bg-white">
          <div className="max-w-6xl mx-auto px-4 sm:px-8">
            <div className="text-center mb-12 sm:mb-16">
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">Our Work Speaks for Itself</h2>
              <div className="w-16 h-1 bg-red-800 mx-auto"></div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8">
              <div className="bg-gray-100 rounded-lg overflow-hidden shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-200 cursor-pointer">
                <div className="h-48 bg-gray-200 overflow-hidden">
                  <img
                    src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-pDG1EVOCsrs9PKacMGMpy7irklFiRk.png"
                    alt="Workers in orange safety vests finishing concrete slab foundation"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-4 sm:p-6">
                  <p className="text-red-800 text-sm font-medium">Slab & Foundation Work</p>
                </div>
              </div>

              <div className="bg-gray-100 rounded-lg overflow-hidden shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-200 cursor-pointer">
                <div className="h-48 bg-gray-200 overflow-hidden">
                  <img
                    src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-APFsOMD5RlXuwpY4ocAsn2n77aOZP8.png"
                    alt="Curved concrete retaining wall structures under construction"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-4 sm:p-6">
                  <p className="text-red-800 text-sm font-medium">Concrete Blocks & Retaining Walls</p>
                </div>
              </div>

              <div className="bg-gray-100 rounded-lg overflow-hidden shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-200 cursor-pointer">
                <div className="h-48 bg-gray-200 overflow-hidden">
                  <img
                    src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-8xf3GOmlT04zMiGW49ry5mHrYu3vIr.png"
                    alt="Green and black sewer pipes installed in excavated trench"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-4 sm:p-6">
                  <p className="text-red-800 text-sm font-medium">Water & Sewer</p>
                </div>
              </div>

              <div className="bg-gray-100 rounded-lg overflow-hidden shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-200 cursor-pointer">
                <div className="h-48 bg-gray-200 overflow-hidden">
                  <img
                    src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-yDiKc8CkIS6h3Mc1lPo4LzF7X9J5pz.png"
                    alt="Large black drainage pipe installed in deep excavated trench with gravel bedding"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-4 sm:p-6">
                  <p className="text-red-800 text-sm font-medium">Area Drains</p>
                </div>
              </div>

              <div className="bg-gray-100 rounded-lg overflow-hidden shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-200 cursor-pointer">
                <div className="h-48 bg-gray-200 overflow-hidden">
                  <img
                    src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-yEzcyH37XpSwBTHXT668Be5zYi3NMc.png"
                    alt="Wooden deck under construction with plywood subflooring and waterproofing materials"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-4 sm:p-6">
                  <p className="text-red-800 text-sm font-medium">Decks and Balconies</p>
                </div>
              </div>

              <div className="bg-gray-100 rounded-lg overflow-hidden shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-200 cursor-pointer">
                <div className="h-48 bg-gray-200 overflow-hidden">
                  <img
                    src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-pHD9Yqncfl4vjPAYqiIKi8km5db8Qg.png"
                    alt="Large residential home under construction showing roof framing and structure work"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-4 sm:p-6">
                  <p className="text-red-800 text-sm font-medium">Rooftop Structures</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="bg-gray-800 text-white py-12">
          <div className="max-w-6xl mx-auto px-4 sm:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-12">
              <div>
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-11 h-11 bg-[#8A1F22] rounded-xl flex items-center justify-center">
                    <Hammer className="w-6 h-6 text-white" strokeWidth={2.2} />
                  </div>
                  <div>
                    <div className="text-xl sm:text-2xl font-bold">CHAPARRAL</div>
                    <div className="text-base sm:text-lg text-red-400">BUILDERS</div>
                  </div>
                </div>
                <p className="text-gray-300 mb-4">Concrete Construction • Waterproofing • Restoration</p>
                <p className="text-yellow-600 font-semibold">CSLB License #353887</p>
                <p className="text-gray-300">Serving San Diego County</p>
              </div>

              <div>
                <h3 className="text-lg sm:text-xl font-semibold mb-6">Contact Info</h3>
                <div className="space-y-3">
                  <p>
                    <span className="font-semibold">Phone/Text:</span>{" "}
                    <a href="tel:+17607157740" className="text-yellow-600 hover:underline">
                      (760) 715-7740
                    </a>
                  </p>
                  <p>
                    <span className="font-semibold">Email:</span>{" "}
                    <a href="mailto:jrc411@outlook.com" className="text-yellow-600 hover:underline">
                      jrc411@outlook.com
                    </a>
                  </p>
                </div>
              </div>
            </div>

            <div className="border-t border-gray-700 mt-8 pt-8 text-center">
              <p className="text-gray-400">© 2025 Chaparral Builders. All Rights Reserved.</p>
            </div>
          </div>
        </footer>
      </div>
    </div>
  )
}
