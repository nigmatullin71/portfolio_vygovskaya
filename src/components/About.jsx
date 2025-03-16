

const aboutItems = [
    {
      label: 'Проектов выполнено',
      number: 100
    },
    {
      label: 'Года опыта',
      number: 3
    }
  ];


const About = () => {
  return (
    <section
        id="about"
        className="section"
    >
        <div className="container">

            <div className="bg-zinc-700 p-7 rounded-2xl
            md:p-12">
                <p className="text-zinc-200 md-4 md:mb-8 md:text-xl md:max-w-[60ch]">
                Привет! Меня зовут Алиса, я художник, графический и motion-дизайнер. Мне 23 года, я учусь в Санкт-Петербургском Государственном Университете Промышленных Технологий и Дизайна, на кафедре Монументально-Декоративного искусства. В остальное время изучаю и создаю дизайн. В своих работах я опираюсь на художественную академическую базу и основы классической композиции, стараясь органично вписывать их в современные тенденции графического дизайна.
                </p>

                <div className="flex flex-wrap  items-center gap-4 
                md:gap-7">
                    {
                        aboutItems.map(({label, number},key)=>(
                            <div key={key}>
                                <div className="flex items-center md:mb-2">
                                    <span className="text-2xl font-semibold md:text-4xl">{number}</span>
                                    <span className="text-blue-500 font-semibold
                                    md:text=3xl">+</span>
                                </div>

                                <p className="text-sm text-zinc-200">{label}</p>
                            </div>
                        )
                        )
                    }


                </div>
            </div>



        </div>
    </section>
  )
}

export default About