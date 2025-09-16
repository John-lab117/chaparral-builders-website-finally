import ServicePageTemplate from "@/components/service-page-template"

export default function GradingCompactionPage() {
  return (
    <ServicePageTemplate
      title="Grading & Compaction"
      description="Professional site preparation services including grading and soil compaction. We ensure proper drainage, level surfaces, and stable foundations for all types of construction projects, meeting engineering specifications and local building codes."
      category="Site Preparation"
      slug="grading-compaction"
      photos={[
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG_1777_resized-RTRKe9126yEIlfieIpAJBBN7XaTzWx.jpeg",
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG_1283_resized-vfs5I7YJrrnnBqUiZKFPr0MLEoJddp.jpeg",
      ]}
    />
  )
}
