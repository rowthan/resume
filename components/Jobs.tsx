import {type ReactNode} from 'react';
import {ShowMore} from "@/components/index";
import Projects from "@/components/Projects";
import {experience} from "@/data/experience";

interface Props {
    children?: ReactNode;
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
                                        <dl>
                                            <dt dangerouslySetInnerHTML={{__html: project.title}}>
                                            </dt>
                                            <dd>
                                                <ol>
                                                    {
                                                        (project.items || []).map((item) => (
                                                            <li dangerouslySetInnerHTML={{__html: item}}></li>
                                                        ))
                                                    }
                                                </ol>
                                            </dd>
                                        </dl>
                                    ))
                                }
                                {
                                    exp.moreProject &&
                                    <ShowMore>
                                        {
                                            exp.moreProject.map((project) => (
                                                <dl>
                                                    <dt dangerouslySetInnerHTML={{__html: project.title}}>
                                                    </dt>
                                                    <dd>
                                                        <ol>
                                                            {
                                                                (project.items || []).map((item) => (
                                                                    <li dangerouslySetInnerHTML={{__html: item}}></li>
                                                                ))
                                                            }
                                                        </ol>
                                                    </dd>
                                                </dl>
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

