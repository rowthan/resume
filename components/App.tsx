import './index.scss'
import Profile from './Profile'
import Skill from "@/components/Skill";
import Education from "@/components/Education";
import Jobs from "@/components/Jobs";
import Projects from './Projects';
import {AsideButton} from "@/components/Footer";
import {notFound} from 'next/navigation';


export default async function HomeApp(props: { id: string }) {
  const {id} = props
  let data;
  if (!id) {
    data = await import('@/data/demo.json');
  } else {
    const config = await (await fetch(`https://api.jsonbin.io/v3/b/${id}`)).json();
    data = config.record;
    if (!data) {
      return notFound();
    }
  }

  return (
    <div className={`root-container`}>
      <div className="resume-container">
        <Profile profile={data.profile}/>
        <Skill skills={data.skills}/>
        <Jobs jobs={data.jobs}/>
        <Projects projects={data.projects}/>
        <Education education={data.education}/>
        {/*<div className="other-section" style={{display:"flex",justifyContent:"space-between",flexWrap:"wrap"}}>*/}
        {/*</div>*/}
      </div>
      <AsideButton/>
      {/*{*/}
      {/*  this.state.revert &&*/}
      {/*  <Message/>*/}
      {/*}*/}
    </div>
  )
};
