

/**
 * Components
 */
import { ButtonOutline } from "./Button"


const Hero = () => {
  return (
    <section
        id="home"
        className="pt-28 lg:pt-36"
    >
        <div className="container lg:grid lg:grid-cols-2 
        items-center lg:gap-10">
        
            <div>

               <div className="flex items-center gap-3">
                    <figure className="img-box w-9 h-9 rounded-lg">
                        <img 
                        src="/images/avatar-1.jpg" 
                        width={40}
                        height={40}
                        alt="Alisa works"
                        className="img-cover" 
                        />
                    </figure>

                    <div className="flex items-center gap-1.5 text-emerald-400
                    text-sm tracking-wide">
                        <span className="relative w-2 h-2 rounded-full bg-emerald-400">
                            <span className="absolute inset-0 rounded-full bg-emerald-400 animate-ping">                                
                            </span>
                        </span>
                       
                        Всегда в поиске интересных проектов
                    </div>
               </div>

               <h2 className="headline-1 max-w-[15ch]
               sm:max-w-[20ch] lg:max-w-[40ch] mt-5 mb-8 lg:mb-10">
               Создание графического дизайна, motion-дизайна, 3d графики, иллюстрации, картин в графических редакторах и в материале
               </h2>

               <div className="flex items-center gap-3">

                <ButtonOutline 
                    href="#about"
                    label="Обо мне"
                    icon="arrow_downward"
                />
               </div>

            </div>

          <div className="hidden lg:block">
            <figure className="w-full max-w-[480px] ml-auto
            rounded-[70px] overflow-hidden">
                <img 
                src="/images/card1.jpg" 
                width={656}
                height={800}
                alt="Alisa works" 
                className="w-full"/>
            </figure>     
            
          </div>  
        
        </div>

    </section>
  )
}

export default Hero