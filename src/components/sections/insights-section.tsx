import type React from "react"
import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { ArrowRight } from "lucide-react"

const articles = [
  {
    title: "Как начать тренироваться и не бросить",
    category: "ЗОЖ",
    image: "https://cdn.poehali.dev/projects/3f089bed-6f9e-4db5-ace3-7b8abfa587c3/bucket/8c95036c-3917-4fe3-978f-fce61d2d6a45.PNG",
  },
  {
    title: "Польза бассейна и сауны после тренировки",
    category: "СПА",
    image: "https://cdn.poehali.dev/projects/3f089bed-6f9e-4db5-ace3-7b8abfa587c3/bucket/92f4a1aa-48d9-4fdc-bde7-9c58010cdd23.PNG",
  },
  {
    title: "Тренажёрный зал с видом на Тюмень",
    category: "Клуб",
    image: "https://cdn.poehali.dev/projects/3f089bed-6f9e-4db5-ace3-7b8abfa587c3/bucket/c6fa05f5-15cb-45d4-9cf1-816a701ef99c.PNG",
  },
  {
    title: "Групповые программы: найди своё направление",
    category: "Тренировки",
    image: "https://cdn.poehali.dev/projects/3f089bed-6f9e-4db5-ace3-7b8abfa587c3/bucket/5aa55f84-9bf3-4584-b82d-f49a43479a6e.PNG",
  },
]

export function InsightsSection() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })

  const handleMouseMove = (e: React.MouseEvent) => {
    setMousePosition({ x: e.clientX, y: e.clientY })
  }

  return (
    <section className="bg-background px-6 py-24" onMouseMove={handleMouseMove}>
      <div className="max-w-4xl mx-auto">
        <motion.p
          className="text-muted-foreground text-sm uppercase tracking-widest mb-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          Полезное
        </motion.p>

        <div className="divide-y divide-border">
          {articles.map((article, i) => (
            <motion.a
              key={i}
              href="#"
              className="group flex items-center justify-between py-6 relative"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              onMouseEnter={() => setHoveredIndex(i)}
              onMouseLeave={() => setHoveredIndex(null)}
              whileHover={{ paddingLeft: 16, paddingRight: 16 }}
              data-clickable
            >
              <div className="flex-1">
                <span className="text-xs text-muted-foreground uppercase tracking-wider">{article.category}</span>
                <h3 className="font-serif text-xl md:text-2xl text-foreground mt-1 group-hover:text-primary transition-colors">
                  {article.title}
                </h3>
              </div>
              <ArrowRight className="w-5 h-5 text-muted-foreground group-hover:text-primary group-hover:translate-x-1 transition-all" />
            </motion.a>
          ))}
        </div>

        {/* Floating hover image */}
        <AnimatePresence>
          {hoveredIndex !== null && (
            <motion.div
              className="fixed pointer-events-none z-50 w-[200px] md:w-[300px] rounded-lg overflow-hidden shadow-2xl hidden md:block"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{
                opacity: 1,
                scale: 1,
                x: mousePosition.x + 20,
                y: mousePosition.y - 100,
              }}
              exit={{ opacity: 0, scale: 0.8 }}
              transition={{ duration: 0.2 }}
            >
              <img
                src={articles[hoveredIndex].image || "/placeholder.svg"}
                alt={articles[hoveredIndex].title}
                className="w-full h-auto"
              />
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  )
}