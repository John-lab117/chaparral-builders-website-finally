import ServicePageTemplate from "@/components/service-page-template"

export default function SewerPage() {
  return (
    <ServicePageTemplate
      title="Sewer"
      description="Complete sewer line installation, repair, and maintenance services for residential and commercial properties. We handle everything from new sewer connections to line replacements, using modern equipment and techniques to ensure reliable wastewater management."
      category="Underground Utilities"
      slug="sewer"
      photos={[
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG_1573_resized-0P7x5G2GsAGzb2yUmmnTyfSCE5eSDl.jpeg",
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG_1564_resized-unEPFJfkyM9JpsWBWuknGJUBk8Ta35.jpeg",
      ]}
    />
  )
}
