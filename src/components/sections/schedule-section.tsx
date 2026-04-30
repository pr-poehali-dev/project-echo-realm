import { useState } from "react"
import { motion } from "framer-motion"

const days = ["Пн", "Вт", "Ср", "Чт", "Пт", "Сб", "Вс"]

type ClassType = "fitness" | "cycle" | null

interface ClassItem {
  time: string
  name: string
  trainer: string
  type: ClassType
}

type Schedule = {
  [key: string]: ClassItem[]
}

const schedule: Schedule = {
  "Пн": [
    { time: "13:05", name: "Здоровая спина", trainer: "Рябухина Алина", type: "fitness" },
    { time: "18:00", name: "Зумба*", trainer: "Рябкова Александра", type: "fitness" },
    { time: "19:00", name: "Круговая тренировка", trainer: "Рябкова Александра", type: "fitness" },
  ],
  "Вт": [
    { time: "13:05", name: "Вело-тренировка 45'+ растяжка", trainer: "Макарова Светлана", type: "cycle" },
    { time: "19:00", name: "Пилатес", trainer: "Макарова Светлана", type: "fitness" },
  ],
  "Ср": [
    { time: "13:05", name: "Силовая тренировка", trainer: "Рябухина Алина", type: "fitness" },
    { time: "19:00", name: "Сильные ноги + растяжка", trainer: "Палецких Светлана", type: "fitness" },
  ],
  "Чт": [
    { time: "13:05", name: "Пилатес", trainer: "Макарова Светлана", type: "fitness" },
    { time: "19:00", name: "Тренировка с мини-штангой", trainer: "Макарова Светлана", type: "fitness" },
  ],
  "Пт": [
    { time: "13:05", name: "Пресс + спина 45'", trainer: "Рябухина Алина", type: "fitness" },
    { time: "18:00", name: "Вело-тренировка 45'+ растяжка", trainer: "Палецких Светлана", type: "cycle" },
  ],
  "Сб": [
    { time: "11:00", name: "Зумба*", trainer: "Рябкова Александра", type: "fitness" },
    { time: "12:00", name: "Пресс 45'+ растяжка", trainer: "Рябкова Александра", type: "fitness" },
  ],
  "Вс": [
    { time: "11:00", name: "Тренировка с мини-штангой", trainer: "Палецких Светлана", type: "fitness" },
    { time: "12:00", name: "Растяжка МФР", trainer: "Палецких Светлана", type: "fitness" },
  ],
}

const rules = [
  "Спортивная одежда",
  "Сменная спортивная обувь",
  "Без мобильного телефона",
  "Не опаздывать",
  "Без жевательной резинки",
]

export function ScheduleSection() {
  const [activeDay, setActiveDay] = useState("Пн")

  return (
    <section id="schedule" className="bg-background px-6 py-24">
      <div className="max-w-6xl mx-auto">
        <motion.p
          className="text-muted-foreground text-sm uppercase tracking-widest mb-4"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          Групповые программы
        </motion.p>

        <motion.h2
          className="text-3xl md:text-5xl font-serif text-foreground mb-10"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
        >
          Расписание <em className="italic text-primary">апрель 2026</em>
        </motion.h2>

        {/* Day tabs */}
        <motion.div
          className="flex gap-2 flex-wrap mb-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
        >
          {days.map((day) => (
            <button
              key={day}
              onClick={() => setActiveDay(day)}
              className={`px-5 py-2.5 rounded-xl text-sm font-medium transition-all ${
                activeDay === day
                  ? "bg-primary text-primary-foreground shadow-md"
                  : "bg-secondary text-muted-foreground hover:text-foreground"
              }`}
            >
              {day}
            </button>
          ))}
        </motion.div>

        {/* Classes list */}
        <motion.div
          key={activeDay}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-12"
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
        >
          {schedule[activeDay]?.length ? (
            schedule[activeDay].map((item, i) => (
              <motion.div
                key={i}
                className={`rounded-xl p-5 flex flex-col gap-2 border ${
                  item.type === "cycle"
                    ? "bg-amber-50 border-amber-200"
                    : "bg-orange-50 border-orange-200"
                }`}
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.07 }}
              >
                <span className="text-2xl font-serif text-primary font-medium">{item.time}</span>
                <h3 className="font-medium text-foreground leading-snug">{item.name}</h3>
                <p className="text-sm text-muted-foreground">{item.trainer}</p>
                <span className={`self-start text-xs px-2 py-1 rounded-full font-medium ${
                  item.type === "cycle"
                    ? "bg-amber-200 text-amber-800"
                    : "bg-orange-200 text-orange-800"
                }`}>
                  {item.type === "cycle" ? "Велостудия" : "Фитнес-студия"}
                </span>
              </motion.div>
            ))
          ) : (
            <div className="col-span-3 py-12 text-center text-muted-foreground">
              В этот день занятий нет
            </div>
          )}
        </motion.div>

        {/* Info blocks */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Rules */}
          <motion.div
            className="bg-secondary rounded-xl p-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h4 className="font-serif text-lg text-foreground mb-4">Правила посещения</h4>
            <ol className="space-y-2">
              {rules.map((rule, i) => (
                <li key={i} className="flex items-start gap-3 text-sm text-muted-foreground">
                  <span className="text-primary font-medium flex-shrink-0">{i + 1}.</span>
                  {rule}
                </li>
              ))}
            </ol>
          </motion.div>

          {/* Halls */}
          <motion.div
            className="bg-secondary rounded-xl p-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            <h4 className="font-serif text-lg text-foreground mb-4">Залы</h4>
            <div className="space-y-3">
              <div className="bg-orange-100 rounded-lg px-4 py-3 text-sm font-medium text-orange-800">
                Большой зал / Fitness-studio
              </div>
              <div className="bg-amber-100 rounded-lg px-4 py-3 text-sm font-medium text-amber-800">
                Велостудия / Cycle-studio
              </div>
            </div>
          </motion.div>

          {/* Spa hours */}
          <motion.div
            className="bg-secondary rounded-xl p-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <h4 className="font-serif text-lg text-foreground mb-4">Время работы СПА</h4>
            <div className="space-y-3 text-sm text-muted-foreground">
              <div>
                <p className="font-medium text-foreground">Будни</p>
                <p>12:00–15:00 / 18:00–21:30</p>
              </div>
              <div>
                <p className="font-medium text-foreground">Суббота</p>
                <p>11:00–18:00</p>
              </div>
              <div>
                <p className="font-medium text-foreground">Воскресенье</p>
                <p>11:00–16:00</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
