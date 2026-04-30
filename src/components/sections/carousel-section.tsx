import { motion } from "framer-motion"

const portfolioItems = [
  "https://cdn.poehali.dev/projects/3f089bed-6f9e-4db5-ace3-7b8abfa587c3/bucket/8c95036c-3917-4fe3-978f-fce61d2d6a45.PNG",
  "https://cdn.poehali.dev/projects/3f089bed-6f9e-4db5-ace3-7b8abfa587c3/bucket/c6fa05f5-15cb-45d4-9cf1-816a701ef99c.PNG",
  "https://cdn.poehali.dev/projects/3f089bed-6f9e-4db5-ace3-7b8abfa587c3/bucket/92f4a1aa-48d9-4fdc-bde7-9c58010cdd23.PNG",
  "https://cdn.poehali.dev/projects/3f089bed-6f9e-4db5-ace3-7b8abfa587c3/bucket/5aa55f84-9bf3-4584-b82d-f49a43479a6e.PNG",
  "https://cdn.poehali.dev/projects/3f089bed-6f9e-4db5-ace3-7b8abfa587c3/bucket/7cb2d06c-ae38-4866-8069-a5b4813ea187.PNG",
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