import { PHOTOS } from '@/data/shop';
import { Reveal, SectionLabel } from '@/components/ui';

const FACTS = [
  'Одежда, обувь и аксессуары',
  'Примерка на месте',
  'Поступления — в Telegram',
];

export default function About() {
  return (
    <section id="about" className="scroll-mt-16 lg:scroll-mt-20">
      <div className="mx-auto grid max-w-7xl gap-12 px-4 py-16 sm:px-6 lg:grid-cols-12 lg:gap-10 lg:py-24 lg:px-8">
        <div className="lg:col-span-5">
          <Reveal>
            <SectionLabel index="02" text="О магазине" />
            <h2 className="mt-5 font-display text-4xl font-bold uppercase leading-tight tracking-tight sm:text-5xl">
              О магазине
            </h2>
            <p className="mt-6 max-w-md text-lg leading-relaxed text-ink/80">
              Стоник — магазин мужской одежды, обуви и аксессуаров в Оренбурге. Здесь можно
              посмотреть вещи вживую, примерить их и собрать образ целиком.
            </p>
            <ul className="mt-8 space-y-3 text-sm font-semibold uppercase tracking-[0.12em] text-pine-700">
              {FACTS.map((fact) => (
                <li key={fact} className="flex items-center gap-3">
                  <span className="h-2 w-2 shrink-0 bg-accent" aria-hidden />
                  {fact}
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
        <div className="lg:col-span-7">
          <Reveal delay={120}>
            <figure className="border-2 border-ink bg-concrete-50 shadow-hard-sm">
              <img
                src={PHOTOS.street.src}
                alt={PHOTOS.street.alt}
                width={PHOTOS.street.width}
                height={PHOTOS.street.height}
                loading="lazy"
                className="block aspect-[4/3] w-full object-cover"
              />
              <figcaption className="border-t-2 border-ink px-4 py-3 text-sm font-semibold">
                Магазин со стороны улицы
              </figcaption>
            </figure>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
