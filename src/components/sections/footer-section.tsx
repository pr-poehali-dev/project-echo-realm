import { useState } from "react"
import { motion } from "framer-motion"
import { ArrowRight } from "lucide-react"
import Icon from "@/components/ui/icon"

const footerLinks = [
  { label: "О клубе", href: "#about" },
  { label: "Программы", href: "#" },
  { label: "СПА", href: "#" },
  { label: "Тарифы", href: "#pricing" },
]

export function FooterSection() {
  const [email, setEmail] = useState("")

  return (
    <footer className="relative bg-background px-6 py-24 overflow-hidden">
      {/* Gradient blob */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[600px] pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-tr from-orange-300 via-orange-200 to-amber-200 opacity-40 blur-3xl rounded-full" />
      </div>

      <div className="relative max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-end">
          {/* Logo and links */}
          <div>
            <motion.h2
              className="text-6xl md:text-8xl font-serif text-foreground"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              Л СПОРТ.
            </motion.h2>

            <nav className="flex flex-wrap gap-6 mt-8">
              {footerLinks.map((link, i) => (
                <motion.a
                  key={i}
                  href={link.href}
                  className="text-muted-foreground hover:text-foreground transition-colors"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.05 }}
                  data-clickable
                >
                  {link.label}
                </motion.a>
              ))}
            </nav>

            <motion.div
              className="mt-8 flex flex-col gap-3"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              <a
                href="https://maps.yandex.ru/?text=Тюмень+ул.+Коммуны+22"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-start gap-2 text-muted-foreground hover:text-foreground transition-colors text-sm"
                data-clickable
              >
                <Icon name="MapPin" size={16} className="mt-0.5 text-primary flex-shrink-0" />
                г. Тюмень, ул. Коммуны 22, стр. 1, 3 этаж
              </a>
              <a
                href="tel:+73452518400"
                className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors text-sm"
                data-clickable
              >
                <Icon name="Phone" size={16} className="text-primary flex-shrink-0" />
                +7 (3452) 518-400
              </a>
            </motion.div>
          </div>

          {/* Email signup */}
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <p className="text-muted-foreground text-sm mb-4">Оставьте email — пришлём специальное предложение на первый месяц.</p>
            <form onSubmit={(e) => e.preventDefault()} className="flex gap-2">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Введите email"
                className="flex-1 bg-secondary border-0 rounded-lg px-4 py-3 text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary"
              />
              <button
                type="submit"
                className="bg-foreground text-background p-3 rounded-lg hover:bg-foreground/90 transition-colors"
                data-clickable
              >
                <ArrowRight className="w-5 h-5" />
              </button>
            </form>
          </motion.div>
        </div>

        <div className="mt-16 pt-8 border-t border-border flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-muted-foreground text-sm">2025 Л СПОРТ. Тюмень, стадион «Геолог».</p>
          <div className="flex gap-6">
            <a href="#" className="text-muted-foreground hover:text-foreground text-sm" data-clickable>
              Конфиденциальность
            </a>
            <a href="#" className="text-muted-foreground hover:text-foreground text-sm" data-clickable>
              Условия
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}