import ServicePageTemplate from "@/components/service-page-template"

export default function UndergroundUtilitiesPage() {
  return (
    <ServicePageTemplate
      title="Underground Utilities"
      description="Chaparral Builders specializes in comprehensive underground utility installation and maintenance services throughout North San Diego County. Our experienced team handles all aspects of underground infrastructure, from initial excavation and trenching to final installation and testing. We work with sewer lines, water mains, electrical conduit systems, and drainage infrastructure to ensure your property has reliable, code-compliant utility connections. Whether you're building new construction, upgrading existing systems, or need emergency repairs, we have the expertise and equipment to handle projects of any size safely and efficiently."
      category="Underground Utilities"
      slug="underground-utilities"
      photos={[
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Picture%20Street%20Utilities.jpg-G2laWNBt8foCHzfYdtcFTWqOWhECzC.jpeg",
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Picture%20Underground%20Utilities.jpg-rx5hRxbBPMYGOZPawJ0CeCBt2d6DDi.jpeg",
      ]}
    />
  )
}
