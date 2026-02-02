
interface SkillInfo {
    title: string,
    description: string
}

export default async function Skill(props:{skills: SkillInfo[]}) {

    return (
        <section >
          <header className="title">技能优势</header>
          <ul className="skills">
            {
                  props.skills.map((skill)=>(
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

