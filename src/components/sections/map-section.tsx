import { motion } from "framer-motion"
import Icon from "@/components/ui/icon"

export function MapSection() {
  return (
    <section className="bg-background px-6 py-24">
      <div className="max-w-6xl mx-auto">
        <motion.p
          className="text-muted-foreground text-sm uppercase tracking-widest mb-4"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          Как нас найти
        </motion.p>

        <motion.h2
          className="text-3xl md:text-5xl font-serif text-foreground mb-10"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
        >
          Мы на стадионе <em className="italic text-primary">«Геолог»</em>
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start">
          {/* Map */}
          <motion.div
            className="md:col-span-2 rounded-2xl overflow-hidden shadow-lg"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <iframe
              src="https://yandex.ru/map-widget/v1/?ll=65.515858%2C57.161605&z=17&pt=65.515858,57.161605,pm2orangel"
              width="100%"
              height="420"
              style={{ border: 0, display: "block" }}
              allowFullScreen
              title="Карта Л СПОРТ"
            />
          </motion.div>

          {/* Info */}
          <motion.div
            className="flex flex-col gap-5"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <div className="bg-secondary rounded-xl p-5 flex items-start gap-4">
              <div className="bg-primary/10 rounded-lg p-2 flex-shrink-0">
                <Icon name="MapPin" size={20} className="text-primary" />
              </div>
              <div>
                <p className="font-medium text-foreground text-sm mb-1">Адрес</p>
                <p className="text-muted-foreground text-sm">г. Тюмень, ул. Коммуны 22к1, 3 этаж</p>
                <p className="text-muted-foreground text-sm">Стадион «Геолог»</p>
              </div>
            </div>

            <div className="bg-secondary rounded-xl p-5 flex items-start gap-4">
              <div className="bg-primary/10 rounded-lg p-2 flex-shrink-0">
                <Icon name="Clock" size={20} className="text-primary" />
              </div>
              <div>
                <p className="font-medium text-foreground text-sm mb-1">Режим работы</p>
                <p className="text-muted-foreground text-sm">Будни: 8:00 – 22:00</p>
                <p className="text-muted-foreground text-sm">Выходные: 9:00 – 22:00</p>
              </div>
            </div>

            <div className="bg-secondary rounded-xl p-5 flex items-start gap-4">
              <div className="bg-primary/10 rounded-lg p-2 flex-shrink-0">
                <Icon name="Phone" size={20} className="text-primary" />
              </div>
              <div>
                <p className="font-medium text-foreground text-sm mb-1">Телефон</p>
                <a
                  href="tel:+73452518400"
                  className="text-primary text-sm hover:underline"
                >
                  +7 (3452) 518-400
                </a>
              </div>
            </div>

            <a
              href="https://yandex.ru/maps/?ll=65.515858,57.161605&z=17&pt=65.515858,57.161605"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full py-3 px-6 rounded-xl font-medium bg-primary text-primary-foreground hover:bg-primary/90 transition-colors text-center text-sm"
            >
              Построить маршрут
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  )
}