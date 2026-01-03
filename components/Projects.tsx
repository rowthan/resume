import {projects} from "@/data/projects";

interface Project {
    name: string
    github: string
    img: string
    description: string
}

export default function Projects() {
    return (
        <section className={'project-items'}>
            {
                projects.map((item) => (
                    <ProjectItem key={item.name} name={item.name} github={item.github} img={item.img}
                                 description={item.description}/>
                ))
            }
        </section>
    );
}


function ProjectItem(props: Project) {
    const {img, github, description, name} = props
    return (
        <div className="project-item">
            <div className="inner-item">
                <div>
                    <a className="rep-name" href={github}>
                        {img ? <img alt={name} src={img}/> : <span className={'px-1.5'}>{name}</span>}
                    </a>
                </div>
                <div className="meta project-desc">
                    {description}
                </div>
            </div>
        </div>
    )
}
