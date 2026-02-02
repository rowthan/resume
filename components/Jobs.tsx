import {ShowMore} from "@/components/ShowMore";
import Projects from "@/components/Projects";

interface Job {
    time: string,
    company: string,
    projects: ProjectObject[],
    moreProject: ProjectObject[],
}
interface ProjectObject {title: string, items?:string[]}

function ProjectItem(props: {project:ProjectObject}) {
    const {project} = props
    return(
        <dl key={project.title}>
            {
                project.title && 
                <dt dangerouslySetInnerHTML={{__html: project.title}}>
                </dt>
            }
            <dd>
                <ol>
                    {
                        (project.items || []).map((item,index) => (
                            <li key={index} dangerouslySetInnerHTML={{__html: item}}></li>
                        ))
                    }
                </ol>
            </dd>
        </dl>
    )
}

export default async function Jobs(props:{jobs: Job[]}) {

    const experience: Job[] = props.jobs || [];
    if(!experience.length){
        return null;
    }
    return (
        <section>
            <header className="title">工作经验</header>
            <ul className="experience">
                {
                    experience.map((exp) => (
                        <li key={exp.company}>
                            <div>
                                <strong className='company'>
                                    {exp.company}
                                </strong>
                                <span className='time'>
                                  【{exp.time}】
                                </span>
                            </div>
                            <div className="projects">
                                {
                                    exp.projects.map((project) => (
                                        <ProjectItem key={project.title} project={project} />
                                    ))
                                }
                                {
                                    exp.moreProject && exp.moreProject.length > 0 &&
                                    <ShowMore id='more-project'>
                                        {
                                            exp.moreProject.map((project: ProjectObject) => (
                                                <ProjectItem key={project.title} project={project} />
                                            ))
                                        }
                                    </ShowMore>
                                }
                            </div>
                        </li>
                    ))
                }
            </ul>
        </section>
    );
}

