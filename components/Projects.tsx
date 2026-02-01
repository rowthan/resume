import {projects} from "@/data/projects";
import { ShowMore } from "./ShowMore";

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
            
        </section>
    );
}


function ProjectItem(props: {project: Project}) {
    const {img, github, description, name} = props.project
    return (
        <div className="project-item inline-flex">
            <div className="inner-item">
                {/* <div>
                    
                </div> */}
                <div className="meta project-desc">
                    <a className="rep-name mr-2" href={github}>
                        {img ? <img alt={name} src={img}/> : <span className={'px-1.5'}>{name}</span>}
                    </a>
                    {description}
                </div>
            </div>
        </div>
    )
}
