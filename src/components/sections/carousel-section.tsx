import { motion } from "framer-motion"

const portfolioItems = [
  "https://cdn.poehali.dev/projects/3f089bed-6f9e-4db5-ace3-7b8abfa587c3/files/ff70a420-8f9b-4a0a-bb68-54c1885ef321.jpg",
  "https://cdn.poehali.dev/projects/3f089bed-6f9e-4db5-ace3-7b8abfa587c3/files/95b8b3a3-57ca-4e01-a6af-b0bee8e3cc4d.jpg",
  "https://cdn.poehali.dev/projects/3f089bed-6f9e-4db5-ace3-7b8abfa587c3/files/f465120d-4ff1-449c-ab46-cd83fefba9b6.jpg",
  "https://cdn.poehali.dev/projects/3f089bed-6f9e-4db5-ace3-7b8abfa587c3/files/ff70a420-8f9b-4a0a-bb68-54c1885ef321.jpg",
  "https://cdn.poehali.dev/projects/3f089bed-6f9e-4db5-ace3-7b8abfa587c3/files/95b8b3a3-57ca-4e01-a6af-b0bee8e3cc4d.jpg",
  "https://cdn.poehali.dev/projects/3f089bed-6f9e-4db5-ace3-7b8abfa587c3/files/f465120d-4ff1-449c-ab46-cd83fefba9b6.jpg",
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
              className="flex-shrink-0 w-[300px] md:w-[400px] rounded-xl overflow-hidden shadow-2xl"
              data-clickable
            >
              <img
                src={src || "/placeholder.svg"}
                alt={`Пример портфолио ${(i % portfolioItems.length) + 1}`}
                className="w-full h-auto"
              />
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}