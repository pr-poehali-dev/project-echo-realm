import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import Icon from "@/components/ui/icon"

function GymAnimation() {
  const [active, setActive] = useState(0)
  const bars = [60, 80, 100, 75, 90]

  useEffect(() => {
    const interval = setInterval(() => {
      setActive((prev) => (prev + 1) % bars.length)
    }, 600)
    return () => clearInterval(interval)
  }, [])

  return (
    <div className="flex items-end justify-center gap-2 h-full pb-4">
      {bars.map((h, i) => (
        <motion.div
          key={i}
          className="w-6 rounded-t-md"
          style={{ height: `${h * 0.8}px` }}
          animate={{ backgroundColor: i === active ? "hsl(var(--primary))" : "hsl(var(--primary) / 0.2)" }}
          transition={{ duration: 0.3 }}
        />
      ))}
    </div>
  )
}

function SpaAnimation() {
  const [ripple, setRipple] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setRipple((prev) => prev + 1)
    }, 1500)
    return () => clearInterval(interval)
  }, [])

  return (
    <div className="flex items-center justify-center h-full relative">
      {[0, 1, 2].map((i) => (
        <motion.div
          key={`${ripple}-${i}`}
          className="absolute rounded-full border-2 border-primary/40"
          initial={{ width: 20, height: 20, opacity: 0.8 }}
          animate={{ width: 120, height: 120, opacity: 0 }}
          transition={{ duration: 2, delay: i * 0.5, ease: "easeOut" }}
        />
      ))}
      <Icon name="Waves" size={32} className="text-primary relative z-10" />
    </div>
  )
}

function GroupAnimation() {
  const [layout, setLayout] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setLayout((prev) => (prev + 1) % 3)
    }, 2000)
    return () => clearInterval(interval)
  }, [])

  const positions = [
    [{ x: 0, y: 0 }, { x: 40, y: -20 }, { x: -40, y: -20 }, { x: 20, y: 20 }, { x: -20, y: 20 }],
    [{ x: -60, y: 0 }, { x: -30, y: 0 }, { x: 0, y: 0 }, { x: 30, y: 0 }, { x: 60, y: 0 }],
    [{ x: 0, y: -30 }, { x: -40, y: 10 }, { x: 40, y: 10 }, { x: -20, y: 40 }, { x: 20, y: 40 }],
  ]

  return (
    <div className="flex items-center justify-center h-full relative">
      {positions[layout].map((pos, i) => (
        <motion.div
          key={i}
          className="absolute w-8 h-8 rounded-full bg-primary/30 border-2 border-primary/60 flex items-center justify-center"
          animate={{ x: pos.x, y: pos.y }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        >
          <div className="w-3 h-3 rounded-full bg-primary" />
        </motion.div>
      ))}
    </div>
  )
}

export function FeaturesSection() {
  return (
    <section className="bg-background px-6 py-24">
      <div className="max-w-6xl mx-auto">
        <motion.p
          className="text-muted-foreground text-sm uppercase tracking-widest mb-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          Возможности клуба
        </motion.p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Gym Card */}
          <motion.div
            className="bg-secondary rounded-xl p-8 min-h-[280px] flex flex-col"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            whileHover={{ scale: 0.98 }}
            whileTap={{ scale: 0.96 }}
            transition={{ duration: 0.2 }}
            data-clickable
          >
            <div className="flex-1">
              <GymAnimation />
            </div>
            <div className="mt-4">
              <h3 className="font-serif text-xl text-foreground">Тренажёрный зал</h3>
              <p className="text-muted-foreground text-sm mt-1">Панорамный вид на исторический центр Тюмени и Мост Влюблённых.</p>
            </div>
          </motion.div>

          {/* Group Card */}
          <motion.div
            className="bg-secondary rounded-xl p-8 min-h-[280px] flex flex-col"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            whileHover={{ scale: 0.98 }}
            whileTap={{ scale: 0.96 }}
            data-clickable
          >
            <div className="flex-1">
              <GroupAnimation />
            </div>
            <div className="mt-4">
              <h3 className="font-serif text-xl text-foreground">Групповые программы</h3>
              <p className="text-muted-foreground text-sm mt-1">Уютные залы и квалифицированные тренеры для занятий любого уровня.</p>
            </div>
          </motion.div>

          {/* Spa Card */}
          <motion.div
            className="bg-secondary rounded-xl p-8 min-h-[280px] flex flex-col"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            whileHover={{ scale: 0.98 }}
            whileTap={{ scale: 0.96 }}
            data-clickable
          >
            <div className="flex-1">
              <SpaAnimation />
            </div>
            <div className="mt-4">
              <h3 className="font-serif text-xl text-foreground">СПА-зона</h3>
              <p className="text-muted-foreground text-sm mt-1">Бассейн, сауна и хаммам — полное восстановление после тренировки.</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
