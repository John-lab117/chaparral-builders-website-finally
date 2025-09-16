import ServicePageTemplate from "@/components/service-page-template"

export default function SlabFoundationPage() {
  const photos = [
    "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG_7492_resized-MHnuqOLq7mIp7bWD7HQiuuyE8mykp0.jpeg", // Workers finishing concrete slab from elevated view
    "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG_2543_resized-8xjY5ntL4IfHKUBSA8rQa1a5Txkdvo.jpeg", // Large concrete slab pour with multiple workers
  ]

  return (
    <ServicePageTemplate
      title="Slab & Foundation Work"
      description="Professional concrete slab and foundation services for residential and commercial projects. We specialize in engineered concrete foundations that provide lasting stability and meet all building code requirements."
      category="Concrete Construction"
      slug="slab-foundation"
      photos={photos}
    />
  )
}
