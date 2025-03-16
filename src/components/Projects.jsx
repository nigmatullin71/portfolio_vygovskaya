import ProjectCard from "./ProjectCard";

const works = [
  {
    imgSrc: '/images/project-1.jpg',
    title: '3D графика',
    tags: ['3D'],
    projectLink: 'link'
  },
  {
    imgSrc: '/images/project-2.jpg',
    title: '3D графика',
    tags: ['3D'],
    projectLink: 'link'
  },
  {
    imgSrc: '/images/project-3.jpg',
    title: 'Персонажная 3D графика',
    tags: ['3D'],
    projectLink: 'link'
  },
  {
    imgSrc: '/images/project-4.jpg',
    title: 'обложка к релизу Вирус-"Лотос"',
    tags: ['Graph-design', 'Poster'],
    projectLink: 'link'
  },
  {
    imgSrc: '/images/project-5.jpg',
    title: 'Рендер Кресла',
    tags: ['3D', 'Furniture design'],
    projectLink: 'link'
  },
  {
    imgSrc: '/images/project-6.jpg',
    title: 'Subway',
    tags: ['Бумага', 'Темпура'],
    projectLink: 'link'
  },
  {
    imgSrc: '/images/project-7.jpg',
    title: 'Плейлист "Осенний чилл"',
    tags: ['Graph-design', 'Poster', 'ZION Music'],
    projectLink: 'link'
  },
  {
    imgSrc: '/images/project-8.jpg',
    title: 'Плейлист "Расцветай"',
    tags: ['Graph-design','Poster', 'ZION Music'],
    projectLink: 'link'
  },
];

const Projects = () => {
  return (
    <section
      id="projects"
    className="section">
      <div className="container">

        <h2 className="headline-2 mb-8">
          Мои проекты
        </h2>

        <div className="grid gap-x-4 gap-y-5 grid-cols-[repeat(auto-fill,_minmax(280px,_1fr))]">
          {works.map(({imgSrc, title, tags, projectLink}
          ,key)=>(
            <ProjectCard 
              key = {key}
              imgSrc={imgSrc}
              title = {title}
              tags = {tags}
              projectLink={projectLink}
            />
          ))}
        </div>

      </div>

    </section>
  )
}

export default Projects