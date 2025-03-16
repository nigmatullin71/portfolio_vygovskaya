import SkillCard from "./SkillCard";
const skillItem = [
  {
    imgSrc: '/images/photoshop.svg',
    label: 'Adobe Photoshop',
    desc: 'Фоторедактор, ретушь'
  },
  {
    imgSrc: '/images/illustrator.svg',
    label: 'Adobe Illustrator',
    desc: 'Векторная графика'
  },
  {
    imgSrc: '/images/afftereffects.svg',
    label: 'Adobe After Effects',
    desc: 'Анимация, визуализация'
  },
  {
    imgSrc: '/images/cinema4d.svg',
    label: 'Cinema4d',
    desc: '3D-моделирование, анимация'
  },
  {
    imgSrc: '/images/blender.svg',
    label: 'Blender',
    desc: '3D-графика, рендер'
  },
  {
    imgSrc: '/images/procreate.svg',
    label: 'Procreate',
    desc: 'Цифровой рисунок'
  },
  {
    imgSrc: '/images/capcut.svg',
    label: 'Capcut',
    desc: 'Видеомонтаж, эффекты'
  },
];

const Skill = () => {
  return (
   <section className="section">
    <div className="container">
      <h2 className="headline-2">
      Основные инструменты, которые я использую
      </h2>
      <p className="text- mt-3 mb-8 max-w-[50ch]">
      В своей работе я использую современные инструменты, которые позволяют мне создавать качественный графический дизайн, анимацию, 3D-графику и иллюстрации. Каждый из этих инструментов помогает мне воплощать идеи в жизнь, сочетая классические принципы искусства с актуальными трендами дизайна.
      </p>
      <div className="grid gap-3 grid-cols-[repeat(auto-fill,_minmax(250px,_1fr))]">
        {
          skillItem.map(({imgSrc, label, desc}, key) =>
          (
            <SkillCard
             key={key}
             imgSrc={imgSrc}
             label={label}
             desc={desc}
            />
          ))
        }
      </div>
    </div>
   </section>
  )
}

export default Skill