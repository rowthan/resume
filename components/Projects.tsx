import { ShowMore } from "./ShowMore";

interface Project {
    name: string
    github: string
    img: string
    description: string
}

export default function Projects(props:{projects: Project[]}) {
    const {projects = []} = props
    return (
        <section className="project-container">
            <header className=''>
                <div><strong className='company'>开源项目</strong></div>
            </header>
            <div className={'project-items'}>
                {
                    projects.slice(0,2).map((item) => (
                        <ProjectItem key={item.name}  project={item} />
                    ))
                }
                {
                    projects.length > 2 && 
                    <ShowMore id='more-projects'>
                    {
                        projects.slice(2).map((item) => (
                            <ProjectItem key={item.name}  project={item} />
                        ))
                    }
                    </ShowMore>
                }
                
            </div>
        </section>
    );
}


function ProjectItem(props: {project: Project}) {
    const {img, github, description, name} = props.project
    return (
        <div className="project-item inline-flex">
            <div className="inner-item">
                <div className="meta project-desc">
                    <a className="rep-name mr-2" href={github || `#${name}`} target={github?"_blank":''}>
                        {img ? <img alt={name} src={img}/> : <span className={'px-1.5'}>{name}</span>}
                    </a>
                    {description}
                </div>
            </div>
        </div>
    )
}
