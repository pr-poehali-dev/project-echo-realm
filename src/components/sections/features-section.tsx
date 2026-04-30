import { motion } from "framer-motion"
import Icon from "@/components/ui/icon"

const highlights = [
  { icon: "MapPin", text: "Стадион «Геолог» в центре Тюмени" },
  { icon: "Eye", text: "Панорама на исторический центр и Мост Влюблённых" },
  { icon: "Waves", text: "СПА: бассейн, сауна и хаммам" },
  { icon: "Users", text: "Уютные залы для групповых программ" },
  { icon: "Heart", text: "Приветливый персонал и домашняя атмосфера" },
  { icon: "Award", text: "Квалифицированные тренеры по ЗОЖ" },
]

export function FeaturesSection() {
  return (
    <section id="about" className="bg-background px-6 py-24">
      <div className="max-w-6xl mx-auto">
        <motion.p
          className="text-muted-foreground text-sm uppercase tracking-widest mb-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          О клубе
        </motion.p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          {/* Text */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          >
            <h2 className="text-3xl md:text-5xl font-serif text-foreground leading-tight mb-8">
              Место, где спорт становится <em className="italic text-primary">образом жизни</em>
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed">
              Клуб расположен в самом сердце города Тюмени, на стадионе «Геолог». Тренажёрный зал с панорамой на исторический центр города и Мост Влюблённых. Уютные залы для групповых программ, спа-зона с бассейном, сауной и хаммамом. Приветливый персонал и домашняя атмосфера. Квалифицированные тренеры поделятся с вами опытом на пути к здоровому образу жизни.
            </p>
          </motion.div>

          {/* Highlights grid */}
          <motion.div
            className="grid grid-cols-1 sm:grid-cols-2 gap-4"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          >
            {highlights.map((item, i) => (
              <motion.div
                key={i}
                className="bg-secondary rounded-xl p-5 flex items-start gap-4"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
              >
                <div className="bg-primary/10 rounded-lg p-2 flex-shrink-0">
                  <Icon name={item.icon} size={18} className="text-primary" />
                </div>
                <p className="text-sm text-foreground leading-snug">{item.text}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
