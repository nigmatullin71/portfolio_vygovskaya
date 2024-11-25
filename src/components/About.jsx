

const aboutItems = [
    {
      label: 'Проектов выполнено',
      number: 500
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

            <div className="bg-orange-300 p-7 rounded-2xl
            md:p-12">
                <p className="text-zinc-900 md-4 md:mb-8 md:text-xl md:max-w-[60ch]">
                    Здесь должно быть много текста, который ты напишешь сама
                </p>

                <div className="flex flex-wrap items-center gap-4 
                md:gap-7">
                    {
                        aboutItems.map(({label, number},key)=>(
                            <div key={key}>
                                <div className="flex items-center md:mb-2">
                                    <span className="text-2xl font-semibold md:text-4xl">{number}</span>
                                    <span className="text-orange-700 font-semibold
                                    md:text=3xl">+</span>
                                </div>

                                <p className="text-sm text-zinc-900">{label}</p>
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