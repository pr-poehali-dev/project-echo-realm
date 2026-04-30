import { motion } from "framer-motion"

const portfolioItems = [
  "https://cdn.poehali.dev/projects/3f089bed-6f9e-4db5-ace3-7b8abfa587c3/bucket/469a3945-1a50-422b-9b5a-200e5278ad94.jpg",
  "https://cdn.poehali.dev/projects/3f089bed-6f9e-4db5-ace3-7b8abfa587c3/bucket/d0404366-88c7-4604-9eae-ec983ce6edac.jpg",
  "https://cdn.poehali.dev/projects/3f089bed-6f9e-4db5-ace3-7b8abfa587c3/bucket/8c2208ef-1fe6-4fcb-b384-d6fd155b3bbc.jpg",
  "https://cdn.poehali.dev/projects/3f089bed-6f9e-4db5-ace3-7b8abfa587c3/bucket/4f304058-eca6-4f0d-aba5-226cd172d7a7.jpg",
  "https://cdn.poehali.dev/projects/3f089bed-6f9e-4db5-ace3-7b8abfa587c3/bucket/df21e0e0-9d68-49dc-bc56-dafd3adcf36e.jpg",
]

export function CarouselSection() {
  // Duplicate for seamless loop
  const items = [...portfolioItems, ...portfolioItems]

  return (
    <section className="bg-primary py-24 overflow-hidden">
      <div className="max-w-6xl mx-auto px-6 mb-12">
        <motion.h2
          className="text-3xl md:text-4xl font-serif text-primary-foreground"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          В самом сердце Тюмени, на стадионе «Геолог».
        </motion.h2>
      </div>

      <div className="relative">
        <motion.div
          className="flex gap-6"
          animate={{ x: [0, "-50%"] }}
          transition={{
            duration: 30,
            repeat: Infinity,
            ease: "linear",
          }}
        >
          {items.map((src, i) => (
            <div
              key={i}
              className="flex-shrink-0 w-[300px] md:w-[400px] h-[220px] md:h-[280px] rounded-xl overflow-hidden shadow-2xl"
              data-clickable
            >
              <img
                src={src || "/placeholder.svg"}
                alt={`Фото клуба ${(i % portfolioItems.length) + 1}`}
                className="w-full h-full object-cover"
              />
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}