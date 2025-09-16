import ServicePageTemplate from "@/components/service-page-template"

export default function WaterMainsPage() {
  return (
    <ServicePageTemplate
      title="Water Mains"
      description="Professional water main installation and repair services for municipal and private water systems. Our experienced team handles all aspects of water main work, from new connections to emergency repairs, ensuring reliable water supply and distribution."
      category="Underground Utilities"
      slug="water-mains"
      photos={[
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG_7475_resized-01hqkheH2LgRxbRrhvj6Evv4WJe2j5.jpeg",
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG_1564_resized-BSqER5f97TL0f0OLBZO2XigtvITY08.jpeg",
      ]}
    />
  )
}
