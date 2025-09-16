import ServicePageTemplate from "@/components/service-page-template"

export default function DecksBalconiesPage() {
  return (
    <ServicePageTemplate
      title="Decks & Balconies"
      description="Comprehensive waterproofing services for decks and balconies to prevent water damage and extend structural life. We use advanced waterproofing membranes and sealants to create durable, weather-resistant surfaces that protect your investment."
      category="Waterproofing"
      slug="decks-balconies"
      photos={[
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG_0943_resized-sUWnRUYtGITZxZp6hnO2nXcWE69QAi.jpeg",
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG_0171_resized-mfXvn58p1qaCMjGDFIVcVdrygTlMqt.jpeg",
      ]}
    />
  )
}
