"use client"

import React from "react"
import Image from "next/image"
import { useScrollReveal } from "@/hooks/use-scroll-reveal"

const photos = [
  { src: "/images/team-3.jpg", alt: "Editorial team reviewing manuscripts", rotate: "-8deg" },
  { src: "/images/team-4.jpg", alt: "Researcher in academic setting", rotate: "-4deg" },
  { src: "/images/team-5.jpg", alt: "Publishing specialist at work", rotate: "0deg" },
  { src: "/images/team-2.jpg", alt: "Author collaborating with editor", rotate: "4deg" },
  { src: "/images/team-6.jpg", alt: "Journal production team", rotate: "8deg" },
]

export default function PhotoStrip() {
  const ref = useScrollReveal<HTMLElement>({ threshold: 0.15 })

  return (
    <section ref={ref} className="py-8 px-4 md:px-8 lg:px-12">
      <div className="flex items-end justify-center gap-2 md:gap-4 lg:gap-5 overflow-hidden py-4">
        {photos.map((photo, i) => (
          <div
            key={photo.src}
            data-reveal="fan-out"
            className="relative flex-shrink-0 w-[18%] md:w-[17%] aspect-[3/4] rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2"
            style={{
              "--fan-rotate": photo.rotate,
              "--delay": `${i * 80}ms`,
            } as React.CSSProperties}
          >
            <Image
              src={photo.src || "/placeholder.svg"}
              alt={photo.alt}
              fill
              className="object-cover"
              sizes="(max-width: 768px) 33vw, 20vw"
            />
          </div>
        ))}
      </div>
    </section>
  )
}
