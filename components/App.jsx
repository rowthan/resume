import './index.scss'
// import {Component} from "react";
import Profile from './Profile'
import Skill from "@/components/Skill";
import Education from "@/components/Education";
import Jobs from "@/components/Jobs";
import Projects from './Projects';
import {AsideButton} from "@/components/Footer";
// class App extends Component{
//     constructor(props){
//       super(props);
//       this.state={
//         revert:false,
//         showAll: false,
//       };
//       this.toggleMessage = this.toggleMessage.bind(this);
//     }

//     componentDidMount(){
//       this.refreshHashState();
//       window.onhashchange = ()=>{
//         this.refreshHashState()
//       }
//     }

//     refreshHashState(){
//       this.setState({
//         revert:window.location.hash === "#message"
//       })
//     }

//     toggleMessage(value){
//       this.setState({ revert: value })
//     }

//     render(){
//       const state = this.state;
//       return(
//         <div className={`${state.revert?"revert":""} root-container`}>
//           <div className="resume-container">
//             <Profile />
//             <Skill />
//             <Jobs />
//             <Education />
//             {/*<div className="other-section" style={{display:"flex",justifyContent:"space-between",flexWrap:"wrap"}}>*/}
//             {/*</div>*/}
//           </div>
//             <AsideButton/>
//           {/*{*/}
//           {/*  this.state.revert &&*/}
//           {/*  <Message/>*/}
//           {/*}*/}
//         </div>
//       )
//     }
// }

export default async function() {
  const config = await (await fetch('https://api.jsonbin.io/v3/b/69808bf5ae596e708f0b4986')).json();
  const data = config.record;
  return(
    <div className={`root-container`}>
      <div className="resume-container">
        <Profile profile={data.profile} />
        <Skill skills={data.skills} />
        <Jobs jobs = {data.jobs}/>
        <Projects projects={data.projects}/>
        <Education education={data.education} />
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
