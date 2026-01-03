import {skills} from "@/data/skills";

export default function Skill() {
    return (
        <section >
          <header className="title">技能优势</header>
          <ul className="skills">
              {
                  skills.map((skill)=>(
                      <li key={skill.title}>
                          <a href="">
                              {skill.title}
                          </a>
                          <span dangerouslySetInnerHTML={{__html: skill.description}}>

                          </span>
                      </li>
                  ))
              }
          </ul>
        </section>
    );
}

