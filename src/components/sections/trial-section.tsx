import { useState } from "react"
import { motion } from "framer-motion"
import Icon from "@/components/ui/icon"

const programs = [
  "Тренажёрный зал",
  "Групповые программы",
  "СПА-зона",
  "Персональная тренировка",
]

export function TrialSection() {
  const [name, setName] = useState("")
  const [phone, setPhone] = useState("")
  const [program, setProgram] = useState("")
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle")

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setStatus("loading")

    try {
      const res = await fetch("https://functions.poehali.dev/f8ffee70-4c02-4348-8457-cd00f22d380e", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, phone, program }),
      })

      if (res.ok) {
        setStatus("success")
        setName("")
        setPhone("")
        setProgram("")
      } else {
        setStatus("error")
      }
    } catch {
      setStatus("error")
    }
  }

  return (
    <section className="bg-secondary px-6 py-24">
      <div className="max-w-5xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          {/* Left */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          >
            <p className="text-muted-foreground text-sm uppercase tracking-widest mb-4">Первый шаг</p>
            <h2 className="text-3xl md:text-5xl font-serif text-foreground leading-tight">
              Запишитесь на <em className="italic text-primary">пробное занятие</em>
            </h2>
            <p className="text-muted-foreground mt-6 leading-relaxed">
              Оставьте заявку — мы свяжемся с вами и подберём удобное время. Первое посещение поможет познакомиться с клубом и выбрать подходящую программу.
            </p>

            <div className="mt-8 flex flex-col gap-3">
              <div className="flex items-center gap-3 text-sm text-muted-foreground">
                <Icon name="MapPin" size={16} className="text-primary flex-shrink-0" />
                г. Тюмень, ул. Коммуны 22, стр. 1, 3 этаж
              </div>
              <div className="flex items-center gap-3 text-sm text-muted-foreground">
                <Icon name="Phone" size={16} className="text-primary flex-shrink-0" />
                +7 (3452) 518-400
              </div>
            </div>
          </motion.div>

          {/* Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          >
            {status === "success" ? (
              <div className="bg-background rounded-xl p-10 flex flex-col items-center text-center gap-4">
                <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center">
                  <Icon name="Check" size={32} className="text-primary" />
                </div>
                <h3 className="font-serif text-2xl text-foreground">Заявка отправлена!</h3>
                <p className="text-muted-foreground">Мы свяжемся с вами в ближайшее время.</p>
                <button
                  onClick={() => setStatus("idle")}
                  className="mt-2 text-sm text-primary hover:underline"
                >
                  Отправить ещё одну заявку
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="bg-background rounded-xl p-8 flex flex-col gap-4">
                <div>
                  <label className="text-sm text-muted-foreground mb-1.5 block">Ваше имя *</label>
                  <input
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Иван Иванов"
                    required
                    className="w-full bg-secondary border-0 rounded-lg px-4 py-3 text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                  />
                </div>

                <div>
                  <label className="text-sm text-muted-foreground mb-1.5 block">Телефон *</label>
                  <input
                    type="tel"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    placeholder="+7 (___) ___-__-__"
                    required
                    className="w-full bg-secondary border-0 rounded-lg px-4 py-3 text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                  />
                </div>

                <div>
                  <label className="text-sm text-muted-foreground mb-1.5 block">Направление</label>
                  <select
                    value={program}
                    onChange={(e) => setProgram(e.target.value)}
                    className="w-full bg-secondary border-0 rounded-lg px-4 py-3 text-foreground focus:outline-none focus:ring-2 focus:ring-primary appearance-none"
                  >
                    <option value="">Не выбрано</option>
                    {programs.map((p) => (
                      <option key={p} value={p}>{p}</option>
                    ))}
                  </select>
                </div>

                {status === "error" && (
                  <p className="text-sm text-red-500">Что-то пошло не так. Позвоните нам: +7 (3452) 518-400</p>
                )}

                <button
                  type="submit"
                  disabled={status === "loading"}
                  className="w-full mt-2 py-3 px-6 rounded-lg font-medium bg-primary text-primary-foreground hover:bg-primary/90 transition-colors disabled:opacity-60 flex items-center justify-center gap-2"
                >
                  {status === "loading" ? (
                    <>
                      <Icon name="Loader2" size={18} className="animate-spin" />
                      Отправляем...
                    </>
                  ) : "Записаться на пробное занятие"}
                </button>

                <p className="text-xs text-muted-foreground text-center">
                  Нажимая кнопку, вы соглашаетесь на обработку персональных данных
                </p>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
