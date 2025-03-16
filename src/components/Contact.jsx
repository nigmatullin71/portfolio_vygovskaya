const socialLinks = [
    {
      href: 'https://web.telegram.org/a/#767432879',
      icon:  <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M9.645 14.221 9.393 18.52c.455 0 .654-.196.89-.43l2.14-2.024 4.444 3.25c.814.447 1.385.213 1.604-.751l2.91-13.716L2.15 9.854c-1.27.396-1.27 1.212-.233 1.516l4.381 1.365 10.165-6.411c.48-.315.917-.142.558.173L9.645 14.221Z"
        fill="currentColor"
      />
    </svg>,
      alt: 'Telegram'
    },
    {
      href: 'https://www.instagram.com/_ecyc__',
      icon: <svg width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M8.75 2.5C5.58319 2.5 3 5.08319 3 8.25V15.75C3 18.9164 5.5831 21.5 8.75 21.5H16.25C19.4165 21.5 22 18.9165 22 15.75V8.25C22 5.0831 19.4164 2.5 16.25 2.5H8.75ZM8.75 4H16.25C18.6056 4 20.5 5.8939 20.5 8.25V15.75C20.5 18.1055 18.6055 20 16.25 20H8.75C6.3939 20 4.5 18.1056 4.5 15.75V8.25C4.5 5.89381 6.39381 4 8.75 4ZM17.5 6C16.9475 6 16.5 6.4475 16.5 7C16.5 7.5525 16.9475 8 17.5 8C18.0525 8 18.5 7.5525 18.5 7C18.5 6.4475 18.0525 6 17.5 6ZM12.5 7C9.74759 7 7.5 9.24759 7.5 12C7.5 14.7524 9.74759 17 12.5 17C15.2524 17 17.5 14.7524 17.5 12C17.5 9.24759 15.2524 7 12.5 7ZM12.5 8.5C14.4416 8.5 16 10.0584 16 12C16 13.9416 14.4416 15.5 12.5 15.5C10.5584 15.5 9 13.9416 9 12C9 10.0584 10.5584 8.5 12.5 8.5Z" fill="currentColor" />
      </svg>,
      alt: 'Instagram'
    },
  ];



const Contact = () => {
  return (
    <section 
    id="contact"
    className="section"
    >
        <div className="container lg:grid lg:grid-cols-2 lg:items-stretch">

            <div className="mb-12 lg:mb=0 lg:flex lg:flex-col">
                <h2 className="headline-2 lg:max-w-[14ch]">
                    Ты можешь написать мне для коллаборации здесь
                </h2>
                <p className="text-zinc-200 mt-3 mb-8 max-w-[50ch]
                lg:max-w-[30ch]">
                Свяжись со мной сегодня, чтобы обсудить
                ваш проект и начать совместную работу над 
                чем-то удивительным!
                </p>
                <div className="flex items-center gap-2 mt-auto">
                    {socialLinks.map(({href, icon},key) =>(
                        <a 
                        key={key}
                        href={href}
                        target="_blank"
                        className="w-12 h-12 grid place-items-center ring-inset
                        ring-2 ring-blue-200 rounded-lg transition-[background-color,color]
                        hover:bg-zinc-50 hover:text-zinc-950 active:bg-zinc-50/80"
                        >
                            {icon}
                        </a>
                    ))}
                </div>


            </div>

            <form 
            action="https://getform.io/f/bnlqjlzb" 
            method="POST"
            className="xl:pl-10 2xl:pl-20">
                <div className="md:grid md:items-center md-grid-cols-2 md:gap-2">
                    <div className="mb-4">
                        <label 
                        htmlFor="name"
                        className="label"
                        >Имя</label>
                        <input 
                        type="text"
                        name="name"
                        id="name"
                        autoComplete="name"
                        required
                        placeholder="Иван Иванов"
                        className="text-field"
                         />
                    </div>
                </div>

                <div className="mb-4">
                    <div className="">
                        <label 
                        htmlFor="email"
                        className="label"
                        >Email</label>
                        <input 
                        type="email"
                        name="email"
                        id="email"
                        autoComplete="email"
                        required
                        placeholder="alisa@example.com"
                        className="text-field"
                         />
                    </div>
                </div>

                <div className="mb-4">
                    <label 
                    htmlFor="message"
                    className="label"
                    >
                        Сообщение
                    </label>

                    <textarea 
                    name="message" 
                    id="message"
                    placeholder="Привет!"
                    required
                    className="text-field resize-y min-h-32 max-h-80"
                    ></textarea>
                </div>

                <button
                type="submit"
                className="btn btn-primary [&]:max-w-full w-full justify-center"
                >
                    Отправить</button>
            </form>


        </div>


    </section>
  )
}

export default Contact