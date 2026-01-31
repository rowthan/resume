import {type ReactNode} from 'react';
import {ShowMore} from "@/components/ShowMore";
import Projects from "@/components/Projects";
import {experience} from "@/data/experience";

interface Props {
    children?: ReactNode;
}
interface ProjectObject {title: string, items:string[]}

function ProjectItem(props: {project:ProjectObject}) {
    const {project} = props
    return(
        <dl key={project.title}>
            <dt dangerouslySetInnerHTML={{__html: project.title}}>
            </dt>
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

export default function Jobs(props: Props) {
    const {children} = props;

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
                <li className='project-container'>
                    <div><strong className='company'>个人项目</strong></div>
                    <Projects/>
                </li>
            </ul>
        </section>
    );
}

