"use client"

import { useState, useEffect } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Star, ChevronLeft, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"

const testimonials = [
  {
    name: "Sarah Johnson",
    role: "Homeowner",
    content:
      "Chaparral Builders exceeded our expectations in every way. Their attention to detail and commitment to quality is unmatched. Our dream home became a reality thanks to their expert team.",
    rating: 5,
    image: "/professional-woman-smiling.png",
  },
  {
    name: "Michael Chen",
    role: "Business Owner",
    content:
      "The commercial renovation of our office space was completed on time and within budget. The team was professional, communicative, and delivered exceptional results.",
    rating: 5,
    image: "/professional-man-suit.png",
  },
  {
    name: "Emily Rodriguez",
    role: "Property Developer",
    content:
      "We've worked with Chaparral Builders on multiple projects. Their reliability, craftsmanship, and project management skills make them our go-to construction partner.",
    rating: 5,
    image: "/professional-woman-with-hard-hat.png",
  },
]

export function TestimonialsSection() {
  const [currentIndex, setCurrentIndex] = useState(0)

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length)
  }

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }

  useEffect(() => {
    const interval = setInterval(nextTestimonial, 5000)
    return () => clearInterval(interval)
  }, [])

  return (
    <section id="testimonials" className="py-20 bg-card">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-card-foreground mb-4">What Our Clients Say</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
            {
              "Don't just take our word for it. Here's what our satisfied clients have to say about working with Chaparral Builders."
            }
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <Card className="border-border">
            <CardContent className="p-8 md:p-12">
              <div className="flex items-center justify-between mb-8">
                <Button variant="outline" size="icon" onClick={prevTestimonial} className="rounded-full bg-transparent">
                  <ChevronLeft className="w-4 h-4" />
                </Button>

                <div className="flex space-x-2">
                  {testimonials.map((_, index) => (
                    <button
                      key={index}
                      className={`w-2 h-2 rounded-full transition-colors ${
                        index === currentIndex ? "bg-primary" : "bg-border"
                      }`}
                      onClick={() => setCurrentIndex(index)}
                    />
                  ))}
                </div>

                <Button variant="outline" size="icon" onClick={nextTestimonial} className="rounded-full bg-transparent">
                  <ChevronRight className="w-4 h-4" />
                </Button>
              </div>

              <div className="text-center">
                <div className="flex justify-center mb-4">
                  {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-accent text-accent" />
                  ))}
                </div>

                <blockquote className="text-xl md:text-2xl text-card-foreground mb-8 text-pretty">
                  "{testimonials[currentIndex].content}"
                </blockquote>

                <div className="flex items-center justify-center space-x-4">
                  <img
                    src={testimonials[currentIndex].image || "/placeholder.svg"}
                    alt={testimonials[currentIndex].name}
                    className="w-16 h-16 rounded-full object-cover"
                  />
                  <div className="text-left">
                    <div className="font-bold text-card-foreground">{testimonials[currentIndex].name}</div>
                    <div className="text-muted-foreground">{testimonials[currentIndex].role}</div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
