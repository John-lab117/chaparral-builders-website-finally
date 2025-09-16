"use client"

import Link from "next/link"
import { ArrowLeft, Phone, Mail, MapPin, Hammer, Send, Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { useState } from "react"

export default function GetEstimatePage() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  return (
    <div className="flex min-h-screen">
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

      {/* Sidebar - Same as other pages */}
      <div
        className={`fixed left-0 top-0 h-screen overflow-y-auto z-40 transform transition-transform duration-300 md:transform-none ${isMobileMenuOpen ? "translate-x-0" : "-translate-x-full md:translate-x-0"}`}
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
            className="p-4 text-center mb-6 rounded-2xl shadow-lg"
            style={{
              background: "linear-gradient(135deg, #7E1A1F 0%, #9B2A2E 100%)",
              boxShadow: "0 10px 24px rgba(0,0,0,0.18)",
            }}
          >
            <MapPin className="w-5 h-5 mx-auto mb-2" style={{ color: "#C59A45" }} />
            <p className="font-semibold !text-white" style={{ color: "#ffffff !important" }}>
              Serving
            </p>
            <p className="text-sm !text-white" style={{ color: "#ffffff !important" }}>
              North San Diego County
            </p>
          </div>

          {/* Services */}
          <div className="space-y-6">
            <div>
              <h3 className="font-semibold text-gray-900 mb-4 leading-tight">Our Services Include:</h3>
              <ul className="space-y-1 text-gray-700 leading-tight">
                <li
                  className="px-4 py-3 rounded-lg transition-all duration-200 ease-out hover:font-medium hover:-translate-y-0.5 focus:outline-none focus:ring-2 focus:ring-opacity-35 cursor-pointer"
                  onMouseEnter={(e) => {
                    e.currentTarget.style.backgroundColor = "#F6E7D6"
                    e.currentTarget.style.borderLeft = "4px solid #8A1F22"
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.backgroundColor = "transparent"
                    e.currentTarget.style.borderLeft = "none"
                  }}
                  tabIndex={0}
                >
                  <Link href="/slab-foundation" onClick={() => setIsMobileMenuOpen(false)}>
                    Slab & Foundation Work
                  </Link>
                </li>
                <li
                  className="px-4 py-3 rounded-lg transition-all duration-200 ease-out hover:font-medium hover:-translate-y-0.5 focus:outline-none focus:ring-2 focus:ring-opacity-35 cursor-pointer"
                  onMouseEnter={(e) => {
                    e.currentTarget.style.backgroundColor = "#F6E7D6"
                    e.currentTarget.style.borderLeft = "4px solid #8A1F22"
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.backgroundColor = "transparent"
                    e.currentTarget.style.borderLeft = "none"
                  }}
                  tabIndex={0}
                >
                  <Link href="/retaining-walls" onClick={() => setIsMobileMenuOpen(false)}>
                    Concrete Block Retaining Walls
                  </Link>
                </li>
                <li
                  className="px-4 py-3 rounded-lg transition-all duration-200 ease-out hover:font-medium hover:-translate-y-0.5 focus:outline-none focus:ring-2 focus:ring-opacity-35 cursor-pointer"
                  onMouseEnter={(e) => {
                    e.currentTarget.style.backgroundColor = "#F6E7D6"
                    e.currentTarget.style.borderLeft = "4px solid #8A1F22"
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.backgroundColor = "transparent"
                    e.currentTarget.style.borderLeft = "none"
                  }}
                  tabIndex={0}
                >
                  <Link href="/sidewalks-driveways" onClick={() => setIsMobileMenuOpen(false)}>
                    Concrete Sidewalks & Driveways
                  </Link>
                </li>
                <li
                  className="px-4 py-3 rounded-lg transition-all duration-200 ease-out hover:font-medium hover:-translate-y-0.5 focus:outline-none focus:ring-2 focus:ring-opacity-35 cursor-pointer"
                  onMouseEnter={(e) => {
                    e.currentTarget.style.backgroundColor = "#F6E7D6"
                    e.currentTarget.style.borderLeft = "4px solid #8A1F22"
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.backgroundColor = "transparent"
                    e.currentTarget.style.borderLeft = "none"
                  }}
                  tabIndex={0}
                >
                  <Link href="/grading-compaction" onClick={() => setIsMobileMenuOpen(false)}>
                    Grading & Compaction
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold text-gray-900 mb-4 leading-tight">Underground Utilities:</h3>
              <ul className="space-y-1 text-gray-700 leading-tight">
                <li
                  className="px-4 py-3 rounded-lg transition-all duration-200 ease-out hover:font-medium hover:-translate-y-0.5 focus:outline-none focus:ring-2 focus:ring-opacity-35 cursor-pointer"
                  onMouseEnter={(e) => {
                    e.currentTarget.style.backgroundColor = "#F6E7D6"
                    e.currentTarget.style.borderLeft = "4px solid #8A1F22"
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.backgroundColor = "transparent"
                    e.currentTarget.style.borderLeft = "none"
                  }}
                  tabIndex={0}
                >
                  <Link href="/sewer" onClick={() => setIsMobileMenuOpen(false)}>
                    Sewer
                  </Link>
                </li>
                <li
                  className="px-4 py-3 rounded-lg transition-all duration-200 ease-out hover:font-medium hover:-translate-y-0.5 focus:outline-none focus:ring-2 focus:ring-opacity-35 cursor-pointer"
                  onMouseEnter={(e) => {
                    e.currentTarget.style.backgroundColor = "#F6E7D6"
                    e.currentTarget.style.borderLeft = "4px solid #8A1F22"
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.backgroundColor = "transparent"
                    e.currentTarget.style.borderLeft = "none"
                  }}
                  tabIndex={0}
                >
                  <Link href="/water-mains" onClick={() => setIsMobileMenuOpen(false)}>
                    Water Mains
                  </Link>
                </li>
                <li
                  className="px-4 py-3 rounded-lg transition-all duration-200 ease-out hover:font-medium hover:-translate-y-0.5 focus:outline-none focus:ring-2 focus:ring-opacity-35 cursor-pointer"
                  onMouseEnter={(e) => {
                    e.currentTarget.style.backgroundColor = "#F6E7D6"
                    e.currentTarget.style.borderLeft = "4px solid #8A1F22"
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.backgroundColor = "transparent"
                    e.currentTarget.style.borderLeft = "none"
                  }}
                  tabIndex={0}
                >
                  <Link href="/area-drains" onClick={() => setIsMobileMenuOpen(false)}>
                    Area Drains
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold text-gray-900 mb-4">Waterproofing:</h3>
              <ul className="space-y-1 text-gray-700 leading-tight">
                <li
                  className="px-4 py-3 rounded-lg transition-all duration-200 ease-out hover:font-medium hover:-translate-y-0.5 focus:outline-none focus:ring-2 focus:ring-opacity-35 cursor-pointer"
                  onMouseEnter={(e) => {
                    e.currentTarget.style.backgroundColor = "#F6E7D6"
                    e.currentTarget.style.borderLeft = "4px solid #8A1F22"
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.backgroundColor = "transparent"
                    e.currentTarget.style.borderLeft = "none"
                  }}
                  tabIndex={0}
                >
                  <Link href="/decks-balconies" onClick={() => setIsMobileMenuOpen(false)}>
                    Decks & Balconies
                  </Link>
                </li>
                <li
                  className="px-4 py-3 rounded-lg transition-all duration-200 ease-out hover:font-medium hover:-translate-y-0.5 focus:outline-none focus:ring-2 focus:ring-opacity-35 cursor-pointer"
                  onMouseEnter={(e) => {
                    e.currentTarget.style.backgroundColor = "#F6E7D6"
                    e.currentTarget.style.borderLeft = "4px solid #8A1F22"
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.backgroundColor = "transparent"
                    e.currentTarget.style.borderLeft = "none"
                  }}
                  tabIndex={0}
                >
                  <Link href="/rooftop-structures" onClick={() => setIsMobileMenuOpen(false)}>
                    Rooftop Structures
                  </Link>
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
                  <Link href="/get-estimate" onClick={() => setIsMobileMenuOpen(false)}>
                    Get an Estimate
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 overflow-y-auto md:ml-64">
        <div className="bg-white min-h-screen">
          {/* Back to Home Link */}
          <div className="px-4 sm:px-12 pt-8">
            <Link
              href="/"
              className="inline-flex items-center text-gray-600 hover:text-gray-900 transition-colors duration-200"
            >
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Home
            </Link>
          </div>

          {/* Page Header */}
          <div className="px-4 sm:px-12 pt-6 pb-8">
            <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Email or Call to Discuss Project Details
            </h1>
            <div className="w-16 h-1 bg-red-800 mb-6"></div>
            <p className="text-base sm:text-lg text-gray-600">
              Tell us about your project and we'll get back to you within 24 hours.
            </p>
          </div>

          {/* Project Information Form */}
          <div className="px-4 sm:px-12 pb-16">
            <div className="bg-white rounded-lg border border-gray-200 p-4 sm:p-8 max-w-4xl shadow-sm">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-8 h-8 bg-red-800 rounded-lg flex items-center justify-center">
                  <Send className="w-4 h-4 text-white" />
                </div>
                <h2 className="text-lg sm:text-xl font-semibold text-gray-900">Project Information</h2>
              </div>

              <form className="space-y-6" action="https://formspree.io/f/xjkedqkr" method="POST">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-900 mb-2">
                      Name <span className="text-red-600">*</span>
                    </label>
                    <Input
                      id="name"
                      name="name"
                      type="text"
                      placeholder="Your full name"
                      className="w-full h-11 border-gray-300 rounded-md focus:border-red-800 focus:ring-1 focus:ring-red-800"
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-900 mb-2">
                      Phone Number <span className="text-red-600">*</span>
                    </label>
                    <Input
                      id="phone"
                      name="phone"
                      type="tel"
                      placeholder="(760) 555-0123"
                      className="w-full h-11 border-gray-300 rounded-md focus:border-red-800 focus:ring-1 focus:ring-red-800"
                      required
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-900 mb-2">
                    Email <span className="text-red-600">*</span>
                  </label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    placeholder="your.email@example.com"
                    className="w-full h-11 border-gray-300 rounded-md focus:border-red-800 focus:ring-1 focus:ring-red-800"
                    required
                  />
                </div>

                <div>
                  <label htmlFor="service" className="block text-sm font-medium text-gray-900 mb-2">
                    Service Needed <span className="text-red-600">*</span>
                  </label>
                  <input type="hidden" name="service" id="service-hidden" />
                  <Select
                    required
                    onValueChange={(value) => {
                      const hiddenInput = document.getElementById("service-hidden") as HTMLInputElement
                      if (hiddenInput) hiddenInput.value = value
                    }}
                  >
                    <SelectTrigger className="w-full h-11 border-gray-300 rounded-md focus:border-red-800 focus:ring-1 focus:ring-red-800">
                      <SelectValue placeholder="Select the service you need" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="slab-foundation">Slab & Foundation Work</SelectItem>
                      <SelectItem value="retaining-walls">Concrete Block Retaining Walls</SelectItem>
                      <SelectItem value="sidewalks-driveways">Concrete Sidewalks & Driveways</SelectItem>
                      <SelectItem value="grading-compaction">Grading & Compaction</SelectItem>
                      <SelectItem value="sewer">Sewer</SelectItem>
                      <SelectItem value="water-mains">Water Mains</SelectItem>
                      <SelectItem value="area-drains">Area Drains</SelectItem>
                      <SelectItem value="decks-balconies">Decks & Balconies</SelectItem>
                      <SelectItem value="rooftop-structures">Rooftop Structures</SelectItem>
                      <SelectItem value="multiple">Multiple Services</SelectItem>
                      <SelectItem value="other">Other</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div>
                  <label htmlFor="description" className="block text-sm font-medium text-gray-900 mb-2">
                    Project Description <span className="text-red-600">*</span>
                  </label>
                  <Textarea
                    id="description"
                    name="description"
                    placeholder="Please describe your project in detail. Include information about the scope, timeline, location, and any specific requirements..."
                    className="w-full min-h-28 border-gray-300 rounded-md focus:border-red-800 focus:ring-1 focus:ring-red-800 resize-none"
                    required
                  />
                </div>

                <Button
                  type="submit"
                  className="w-full bg-red-800 hover:bg-red-900 text-white h-12 text-base font-medium rounded-md"
                  size="lg"
                >
                  <Send className="w-4 h-4 mr-2" />
                  Request Estimate
                </Button>
              </form>
            </div>

            {/* Contact Options */}
            <div className="mt-10 text-center">
              <p className="text-base text-gray-600 mb-6">Prefer to speak directly?</p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button
                  variant="outline"
                  className="border-2 border-red-800 text-red-800 hover:bg-red-800 hover:text-white h-11 px-6 text-base font-medium bg-transparent rounded-md"
                  asChild
                >
                  <a href="tel:+17607157740">Call/Text: (760) 715-7740</a>
                </Button>
                <Button
                  className="bg-blue-600 hover:bg-blue-700 text-white h-11 px-6 text-base font-medium rounded-md"
                  asChild
                >
                  <a href="mailto:jrc411@outlook.com">Email: jrc411@outlook.com</a>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
