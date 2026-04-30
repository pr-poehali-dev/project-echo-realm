import { useState } from "react"
import { motion } from "framer-motion"
import Icon from "@/components/ui/icon"

const subscriptions = [
  {
    name: "Выносливость",
    description: "Тренажёрный зал + групповые программы",
    prices: [
      { label: "1 месяц", price: "3 000 ₽" },
      { label: "6 месяцев", price: "15 000 ₽" },
      { label: "12 месяцев", price: "25 000 ₽" },
    ],
    features: [
      "Тренажёрный зал: будни 8:00–22:00, выходные 9:00–22:00",
      "Групповые программы по расписанию клуба",
      "Полотенце при каждом посещении",
    ],
  },
  {
    name: "Чемпион",
    description: "Полный доступ: зал + СПА + групповые",
    prices: [
      { label: "1 месяц", price: "6 000 ₽" },
      { label: "6 месяцев", price: "30 000 ₽" },
      { label: "12 месяцев", price: "50 000 ₽" },
    ],
    features: [
      "Тренажёрный зал: будни 8:00–22:00, выходные 9:00–22:00",
      "Групповые программы по расписанию клуба",
      "2 полотенца при каждом посещении",
      "СПА: будни 12:00–15:00 и 18:00–21:30",
      "СПА: суббота 11:00–18:00, воскресенье 11:00–16:00",
    ],
    bonus: "12 мес.: СПА, зал, групповые, 2 полотенца, парковка и 30 дней заморозки",
  },
]

const personalServices = [
  { name: "Персональная тренировка", options: ["1 занятие — 2 200 ₽", "10 занятий — 19 800 ₽"] },
  { name: "Мини-группа", options: ["1 занятие — 1 200 ₽", "5 занятий — 5 500 ₽", "10 занятий — 10 000 ₽"] },
  { name: "Школьники", options: ["8 занятий — 7 200 ₽"] },
]

const personalIncludes = [
  "Тестирование и индивидуальные программы",
  "Контроль техники выполнения упражнений",
  "Составление плана питания",
  "Отслеживание прогресса",
  "Реабилитационные программы",
]

export function PricingSection({ id }: { id?: string }) {
  const [activeTab, setActiveTab] = useState<"subscriptions" | "personal">("subscriptions")

  return (
    <section id={id} className="bg-secondary px-6 py-24">
      <div className="max-w-5xl mx-auto">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-5xl font-serif text-foreground">Выберите свой формат</h2>
          <p className="text-muted-foreground mt-4 max-w-md mx-auto">Абонемент на любой образ жизни — от тренажёрного зала до полного спа-опыта.</p>
        </motion.div>

        {/* Tabs */}
        <motion.div
          className="flex justify-center mb-10"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <div className="bg-background rounded-xl p-1 flex gap-1">
            <button
              onClick={() => setActiveTab("subscriptions")}
              className={`px-5 py-2.5 rounded-lg text-sm font-medium transition-colors ${
                activeTab === "subscriptions"
                  ? "bg-primary text-primary-foreground"
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              Абонементы
            </button>
            <button
              onClick={() => setActiveTab("personal")}
              className={`px-5 py-2.5 rounded-lg text-sm font-medium transition-colors ${
                activeTab === "personal"
                  ? "bg-primary text-primary-foreground"
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              Карта «Активность»
            </button>
          </div>
        </motion.div>

        {/* Subscriptions */}
        {activeTab === "subscriptions" && (
          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
          >
            {subscriptions.map((plan, i) => (
              <motion.div
                key={i}
                className={`relative bg-background rounded-xl p-8 flex flex-col ticket-edge ${plan.popular ? "ring-2 ring-primary" : ""}`}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
              >
                {plan.popular && (
                  <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-primary text-primary-foreground text-xs font-medium px-3 py-1 rounded-full">
                    Максимум
                  </span>
                )}

                <div className="pb-6 border-b border-dashed border-border">
                  <h3 className="font-serif text-2xl text-foreground">{plan.name}</h3>
                  <p className="text-muted-foreground text-sm mt-1">{plan.description}</p>
                </div>

                {/* Prices */}
                <div className="mt-6 flex flex-col gap-2">
                  {plan.prices.map((p, j) => (
                    <div key={j} className="flex items-center justify-between">
                      <span className="text-sm text-muted-foreground">{p.label}</span>
                      <span className={`font-serif text-foreground ${j === 0 ? "text-2xl" : "text-lg"}`}>{p.price}</span>
                    </div>
                  ))}
                </div>

                {/* Features */}
                <ul className="mt-6 space-y-3 flex-1">
                  {plan.features.map((feature, j) => (
                    <li key={j} className="flex items-start gap-3 text-foreground">
                      <Icon name="Check" size={16} className="text-primary flex-shrink-0 mt-0.5" />
                      <span className="text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>

                {plan.bonus && (
                  <div className="mt-4 bg-primary/10 rounded-lg p-3">
                    <p className="text-xs text-primary font-medium">{plan.bonus}</p>
                  </div>
                )}

                <button className="w-full mt-6 py-3 px-6 rounded-lg font-medium transition-colors bg-primary text-primary-foreground hover:bg-primary/90">
                  Оформить абонемент
                </button>
              </motion.div>
            ))}
          </motion.div>
        )}

        {/* Personal */}
        {activeTab === "personal" && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
          >
            <p className="text-center text-muted-foreground text-sm mb-8 max-w-lg mx-auto">
              Карта «Активность» — для тех, кто пользуется только услугами тренерского состава.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Services */}
              <div className="bg-background rounded-xl p-8 ticket-edge flex flex-col gap-6">
                {personalServices.map((service, i) => (
                  <div key={i}>
                    <h4 className="font-serif text-lg text-foreground mb-3">{service.name}</h4>
                    <ul className="space-y-2">
                      {service.options.map((opt, j) => (
                        <li key={j} className="flex items-center justify-between">
                          <span className="text-sm text-muted-foreground">{opt.split("—")[0]}</span>
                          <span className="font-serif text-foreground">{opt.split("—")[1]}</span>
                        </li>
                      ))}
                    </ul>
                    {i < personalServices.length - 1 && <div className="mt-4 border-t border-dashed border-border" />}
                  </div>
                ))}
                <button className="w-full mt-2 py-3 px-6 rounded-lg font-medium transition-colors bg-primary text-primary-foreground hover:bg-primary/90">
                  Записаться к тренеру
                </button>
              </div>

              {/* Includes */}
              <div className="bg-background rounded-xl p-8 ticket-edge flex flex-col">
                <h4 className="font-serif text-lg text-foreground mb-6">Что входит в услуги</h4>
                <ul className="space-y-4 flex-1">
                  {personalIncludes.map((item, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <Icon name="Check" size={16} className="text-primary flex-shrink-0 mt-0.5" />
                      <span className="text-sm text-foreground">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </motion.div>
        )}
      </div>
    </section>
  )
}