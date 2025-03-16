import { ButtonPrimary } from './Button';

const sitemap = [
    {
      label: 'Home',
      href: '#home'
    },
    {
      label: 'About',
      href: '#about'
    },
    {
      label: 'Projects',
      href: '#projects'
    },
    {
      label: 'Contact me',
      href: '#contact'
    }
  ];
  
  const socials = [
    {
      label: 'Telegram',
      href: 'https://web.telegram.org/a/#767432879'
    },

    {
      label: 'Instagram',
      href: 'https://www.instagram.com/_ecyc__'
    },

  ];

const Footer = () => {
  return (
    <footer className="section">
        <div className="container">

            <div className="lg:grid lg:grid-cols-2">
                <div className="mb-10">
                    <h2 className="headline-1 mb-8 lg:max-w-[12ch]">
                    Начнем работать вместе уже сейчас!
                    </h2>

                    <ButtonPrimary
                        href="mailto:desallisavy@gmail.com"
                        label="Начать проект"
                        icon="chevron_right"
                    />
                </div>

                <div className="grid grid-cols-2 gap-4 lg:pl-20">

                    <div>
                        <p className="mb-2">Переход по сайту</p>

                        <ul>
                            {sitemap.map(({label, href}, key)=>(
                                <li key={key}>
                                    <a 
                                    href={href}
                                    className='block text-sm text-zinc-400 py-1 transition-colors hover:text-zinc-200'
                                    >
                                        {label}
                                    </a>
                                </li>
                            )
                            )}
                        </ul>

                    </div>
                    
                    <div>
                        <p className="mb-2">Социальные сети</p>

                        <ul>
                            {socials.map(({label, href}, key)=>(
                                <li key={key}>
                                    <a 
                                    href={href}
                                    target='_blank'
                                    className='block text-sm text-zinc-400 py-1 transition-colors hover:text-zinc-200'
                                    >
                                        {label}
                                    </a>
                                </li>
                            )
                            )}
                        </ul>

                    </div>
                </div>

            </div>

            <div className="flex items-center justify-between pt-10 mb-8">
                <a 
                href="" 
                className=""
                >
                    <img 
                    src="/images/logo.jpg"
                    width={40}
                    height={40} 
                    alt="Logo" />
                </a>

                <p className="text-zinc-500 text-sm">
                    &copy; 2025 <span className="text-zinc-200">Выговская Алиса</span>
                </p>
            </div> 
        </div>
    </footer>
  )
}

export default Footer