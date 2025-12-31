import {type ReactNode} from 'react';

interface Props {
    children?: ReactNode;
}

interface Project {
    name: string
    github: string
    img: string
    description: string
}

const projects:Project[] = [
  {
    name: "whats-element",
    github: 'https://github.com/rowthan/whats-element',
    img:"https://img.shields.io/github/stars/rowthan/whats-element?color=lightgrey&label=%20whats-element&logo=github&style=flat-square",
    description:"为每一个DOM元素计算唯一可定位标识符，可用于埋点跟踪。零依赖，剥离UI与功能实现，支持装配使用。",
  },
]
export default function index() {
    return (
        <section className={'project-items'}>
          {
            projects.map((item)=>(
                <ProjectItem key={item.name} name={item.name} github={item.github} img={item.img} description={item.description}/>
            ))
          }
        </section>
    );
}



function ProjectItem(props:Project) {
  const {img,github,description,name} = props
  return(
      <div className="project-item">
        <div className="inner-item">
          <div>
            <a className="" href={github}>
              <img alt={name} src={img} />
            </a>
          </div>
          <div className="meta project-desc">
            {description}
          </div>
        </div>
      </div>
  )
}
