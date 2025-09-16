import ServicePageTemplate from "@/components/service-page-template"

export default function SidewalksAndDrivewaysPage() {
  const photos = [
    "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG_7521_resized-k7YFclb1878UoOC9uwueoK7dkCmP8H.jpeg", // Large paved driveway with interlocking pavers
    "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG_7517_resized-Q3e6FobZ0wZyU1ScExpiEJFycwgMDX.jpeg", // Curved concrete tiered structure
  ]

  return (
    <ServicePageTemplate
      title="Concrete Sidewalks & Driveways"
      description="Professional installation of concrete sidewalks and driveways that combine durability with aesthetic appeal. We use high-quality materials and proven techniques to create smooth, long-lasting surfaces that enhance your property's curb appeal and functionality."
      category="Concrete Construction"
      slug="sidewalks-driveways"
      photos={photos}
    />
  )
}
