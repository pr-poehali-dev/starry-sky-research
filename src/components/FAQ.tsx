import { useState } from "react"
import { Plus } from "lucide-react"

const faqs = [
  {
    question: "С какими породами камня вы работаете?",
    answer:
      "Мы работаем с гранитом и мрамором всех ценовых категорий: от российских пород (Мансуровский, Балтийский, Габбро) до импортных (Bianco Carrara, Nero Marquina, Rosso Verona). Подберём оптимальный вариант под ваш бюджет и задачу.",
  },
  {
    question: "Какие сроки изготовления изделий?",
    answer:
      "Сроки зависят от сложности изделия и объёма заказа. Простые изделия (плитка, бордюры) — от 2 недель. Сложные объекты (фонтаны, колонны с резьбой) — от 1 до 3 месяцев. Крупные партии для строительных объектов обсуждаем индивидуально.",
  },
  {
    question: "Вы работаете по индивидуальным проектам?",
    answer:
      "Да, это наш основной формат работы. Принимаем чертежи, 3D-модели или эскизы. Наши конструкторы помогут доработать проект до технологически реализуемого состояния и предложат оптимальное решение по материалу и обработке.",
  },
  {
    question: "Осуществляете ли вы доставку и монтаж?",
    answer:
      "Да, мы организуем доставку изделий по всей России и в ближнее зарубежье. Также оказываем услуги монтажа силами наших специалистов — это гарантирует правильную установку с учётом нагрузок и крепёжных требований.",
  },
  {
    question: "Какой минимальный объём заказа?",
    answer:
      "Для штучных изделий (фонтаны, колонны, стеллы) минимальный заказ — от одной позиции. Для облицовочной плитки и бордюров минимальная партия обсуждается индивидуально. Мы работаем как с частными заказчиками, так и с застройщиками.",
  },
  {
    question: "Как оформить заказ?",
    answer:
      "Свяжитесь с нами по телефону или через форму на сайте. Мы проведём бесплатную консультацию, уточним требования к изделию, предоставим образцы материалов при необходимости и выставим коммерческое предложение в течение 1-2 рабочих дней.",
  },
]

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  const toggleQuestion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <section id="faq" className="py-20 md:py-29">
      <div className="container mx-auto px-6 md:px-12">
        <div className="max-w-3xl mb-16">
          <p className="text-muted-foreground text-sm tracking-[0.3em] uppercase mb-6">Вопросы</p>
          <h2 className="text-6xl font-medium leading-[1.15] tracking-tight mb-6 text-balance lg:text-7xl">
            Частые вопросы
          </h2>
        </div>

        <div>
          {faqs.map((faq, index) => (
            <div key={index} className="border-b border-border">
              <button
                onClick={() => toggleQuestion(index)}
                className="w-full py-6 flex items-start justify-between gap-6 text-left group"
              >
                <span className="text-lg font-medium text-foreground transition-colors group-hover:text-foreground/70">
                  {faq.question}
                </span>
                <Plus
                  className={`w-6 h-6 text-foreground flex-shrink-0 transition-transform duration-300 ${
                    openIndex === index ? "rotate-45" : "rotate-0"
                  }`}
                  strokeWidth={1.5}
                />
              </button>
              <div
                className={`overflow-hidden transition-all duration-500 ease-in-out ${
                  openIndex === index ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
                }`}
              >
                <p className="text-muted-foreground leading-relaxed pb-6 pr-12">{faq.answer}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}