export function Footer() {
  return (
    <footer className="py-16 md:py-24 border-t border-border">
      <div className="container mx-auto px-6 md:px-12">
        <div className="grid md:grid-cols-4 gap-12 mb-16">
          {/* Brand */}
          <div className="md:col-span-2">
            <a href="/" className="inline-block mb-6">
              <span className="text-foreground font-medium tracking-wide text-lg">Арх-Гранит</span>
            </a>
            <p className="text-muted-foreground leading-relaxed max-w-sm">
              Производство архитектурных изделий из гранита и мрамора. Фонтаны, колонны, стеллы, фасады и плитка — от эскиза до монтажа.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="text-sm font-medium mb-4">Предприятие</h4>
            <ul className="space-y-3 text-sm text-muted-foreground">
              <li>
                <a href="#about" className="hover:text-foreground transition-colors">
                  О нас
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-foreground transition-colors">
                  Услуги
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-foreground transition-colors">
                  Контакты
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-sm font-medium mb-4">Связь</h4>
            <ul className="space-y-3 text-sm text-muted-foreground">
              <li>
                <a href="mailto:arxgranit@yandex.ru" className="hover:text-foreground transition-colors">
                  arxgranit@yandex.ru
                </a>
              </li>
              <li>
                <a href="tel:+73433055600" className="hover:text-foreground transition-colors">
                  +7 (343) 305-56-00
                </a>
              </li>
              <li>
                <a
                  href="https://yandex.ru/maps/?text=%D0%95%D0%BA%D0%B0%D1%82%D0%B5%D1%80%D0%B8%D0%BD%D0%B1%D1%83%D1%80%D0%B3%2C%20%D1%83%D0%BB%D0%B8%D1%86%D0%B0%20%D0%A4%D1%80%D0%BE%D0%BD%D1%82%D0%BE%D0%B2%D1%8B%D1%85%20%D0%91%D1%80%D0%B8%D0%B3%D0%B0%D0%B4%2C%2018%D0%BA6"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-foreground transition-colors"
                >
                  620017, Свердловская область, г. Екатеринбург, ул. Фронтовых Бригад, д. 18, корп. 6, офис 1
                </a>
              </li>
              <li>Пн–Вс с 9:00 до 18:00</li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 border-t border-border flex flex-col md:flex-row md:items-center justify-between gap-4 text-sm text-muted-foreground">
          <p>© 2026 Архитектурный камень. Все права защищены.</p>
          <div className="flex gap-6"></div>
        </div>
      </div>
    </footer>
  )
}