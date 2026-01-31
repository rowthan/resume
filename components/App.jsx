'use client';

import './index.scss'
import {Component} from "react";
import Profile from './Profile'
import Skill from "@/components/Skill";
import Education from "@/components/Education";
import Jobs from "@/components/Jobs";
import {AsideButton} from "@/components/Footer";
class App extends Component{
    constructor(props){
      super(props);
      this.state={
        revert:false,
        showAll: false,
      };
      this.toggleMessage = this.toggleMessage.bind(this);
    }

    componentDidMount(){
      this.refreshHashState();
      window.onhashchange = ()=>{
        this.refreshHashState()
      }
    }

    refreshHashState(){
      this.setState({
        revert:window.location.hash === "#message"
      })
    }

    toggleMessage(value){
      this.setState({ revert: value })
    }

    render(){
      const state = this.state;
      return(
        <div className={`${state.revert?"revert":""} root-container`}>
          <div className="resume-container">
            <Profile />
            <Skill />
            <Jobs />
            <Education />
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
    }
}

export default App;
