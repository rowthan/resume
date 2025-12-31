'use client';

import './index.scss'
import {ShowMore,AsideButton} from '../components/index';
// import picomodal from 'picomodal';
import {experience} from "../data/experience";
// import qrCode from '../img/qrcode_bg.png'
import qrCodePrint from '../img/qrcode.png';
import {Component} from "react";
import Projects from '../components/Projects'

class App extends Component{
    constructor(props){
      super(props);
      this.state={
        revert:false,
        showAll: false,
      };
      this.toggleMessage = this.toggleMessage.bind(this);
      this.showAll = this.showAll.bind(this);
      this.simplify = this.simplify.bind(this);
      // this.showHigh = this.showHigh.bind(this);
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

    showAll() {
      [].slice.call(document.querySelectorAll('.expander-state')).forEach((item)=>{
        item.checked = !this.state.showAll
      })
      this.setState({
        showAll: !this.state.showAll
      });
    }

    simplify() {
      const el = document.querySelectorAll('.projects');
      [].slice.call(el).forEach((item)=>{
        item.classList.add('fade-out')
      })
    }

    // showHigh(event){
    //   picomodal({
    //     content: event.target.dataset.content || 'hi',
    //     overlayStyles: {
    //       backgroundColor: "#000",
    //       opacity: 0.35
    //     },
    //     // overlayStyles: function ( styles ) { styles.opacity = 0; },
    //     // modalStyles: function ( styles ) { styles.opacity = 0; }
    //   }).show();
    // }


    render(){
      const state = this.state;
      const renderExperience = experience.filter((e)=>{return e.show});
      return(
        <div className={`${state.revert?"revert":""} container`}>
          <div className="resume-container">
            <nav className="basic-info">
              <div className="left" style={{}}>
                <img className="onlyprint" src={qrCodePrint} alt="扫描二维码" width="80" height="80"/>
                {/*<img className="noprint" src={qrCode} alt="rowthan" width="80" height="80"/>*/}
                <div style={{padding:"0 20px"}}>
                  <h1 style={{fontSize:"25px"}}>ruan yun hua</h1>
                  <div style={{lineHeight:'24px'}}>前端工程师</div>
                </div>
              </div>
              <div className="right">
                <header style={{borderBottom:" 4px solid",
                  paddingBottom: "4px"}}>
                  联系方式
                </header>
                <ul>
                  <li><a href= "mailto:rowthan@icloud.com">rowthan@icloud.com</a></li>
                  <li className="onlyprint">17611619330</li>
                  <li className="onlyprint"> <a href="https://cv.logike.cn">cv.logike.cn</a> </li>
                  <li className="noprint">
                    <a href="https://logike.cn">logike.cn</a>
                    &nbsp;&nbsp;
                    <a href="https://github.com/rowthan">GitHub</a>
                    &nbsp;&nbsp;
                    <a href="https://juejin.im/user/588a23d0128fe10065061eab">掘金</a>
                  </li>
                  <ShowMore>
                    <div>
                      <li className="noprint"><a href="#message" >在线留言</a></li>
                    </div>
                  </ShowMore>
                </ul>
              </div>
            </nav>

            <section >
              <header className="title">技能优势</header>
              <ul className="skills">
                <li><a>学习能力</a><span>可以快速的学习新技术并应用于生产中，如从零学习到上线小程序、JSB、Docker</span></li>
                <li><a>JavaScript\Node.js</a><span >掌握原生 ProtoType、ES6 新特性、模块化开发、面向对象编程，<a href="https://addons.mozilla.org/zh-CN/firefox/user/14361689/">浏览器插件发烧友</a>。</span></li>
                <li><a>HTML5、CSS3</a>  <span >熟练使用 HTML5 新特性、理解语义化标签，擅长<a className='out-link' href="">优化DOM结构</a>，CSS 动画</span></li>
                <li>
                  <a>小程序</a>
                  <span>
                    熟悉微信、字节小程序开发。有3款小程序开发经验，累计用户超百万。
                  </span>
                </li>
                <li><a>React.js、Vue.js</a>  <span >熟悉框架工作原理、常用生态圈，擅长抽离可复用组件。</span></li>
                <ShowMore>
                  <li><a>webpack、gulp</a>  <span >熟练前端构建工具应用，精通前后端分离开发模式。配置构建环境、编写插件</span></li>
                  <li><a>Git、Git-CI</a>  <span>熟练运用 <a href="https://logike.cn/%E6%8A%80%E8%83%BD%E6%80%BB%E7%BB%93/the-guide-of-git.html">Git</a>：分支合并、变基、回溯、hooks、review、pipeline/Jenkins持续集成</span></li>
                  <li><a>敏捷开发</a>  <span>熟悉敏捷开发模式；擅长建设流水线、自动化的开发环境</span></li>
                  <li><a>Linux</a>  <span>熟悉 Linux 办公操作系统及基本运维知识</span></li>
                  <li><a>AI</a> <span>能使用 AI 绘图、设计</span></li>
                  <li><a>Java</a>  <span>熟悉Java 语言, Spring，hibernate 等常用开发技术及数据库基本操作</span></li>
                </ShowMore>
              </ul>
            </section>
            <section>
              <header className="title">工作经验</header>
              <ul className="experience">
                {
                  renderExperience.map((exp)=>(
                    <li key={exp.title}>
                      <div>
                        <span className='time'>
                          【{exp.time}】
                        </span>
                        <strong className='company'>
                          {exp.company}
                        </strong>
                      </div>
                      <div className="projects">
                        {
                          exp.projects.map((project)=>(
                            <dl>
                              <dt dangerouslySetInnerHTML={{__html:project.title}}>
                              </dt>
                              <dd>
                                <ol>
                                  {
                                    (project.items||[]).map((item)=>(
                                      <li dangerouslySetInnerHTML={{__html:item}}></li>
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
                              exp.moreProject.map((project)=>(
                                  <dl>
                                    <dt dangerouslySetInnerHTML={{__html:project.title}}>
                                    </dt>
                                    <dd>
                                      <ol>
                                        {
                                          (project.items||[]).map((item)=>(
                                            <li dangerouslySetInnerHTML={{__html:item}}></li>
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
                  <Projects />
                  <div className='project-items'>
                    <div className="project-item">
                      <div className="inner-item">
                        <div>
                          <a className="" href="https://github.com/rowthan/whats-element">
                            <img alt="whats-element" src="https://img.shields.io/github/stars/rowthan/whats-element?color=lightgrey&label=%20whats-element&logo=github&style=flat-square" />
                          </a>
                        </div>
                        <div className="meta project-desc">
                          为每一个DOM元素计算唯一可定位标识符，可用于埋点跟踪。零依赖，剥离UI与功能实现，支持装配使用。
                        </div>
                      </div>
                    </div>
                    <div className="project-item">
                      <div className="inner-item">
                        <div>
                          <a className="rep-name" href="https://github.com/rowthan/mginx">mginx个性化代理解决方案</a>
                        </div>
                        <div className='meta project-desc'>
                          Node.js 实现的反向代理解决方案，支持单入口多环境代理分发。支持自动环境部署、性能监控、数据分析等功能。
                        </div>
                      </div>
                    </div>
                    <ShowMore style={{display:'flex',flexFlow: 'wrap'}}>
                      <div className="project-item">
                        <div className="inner-item">
                          <div>
                            <a className="rep-name" href="https://copixel.bytedance.com">CoPixel视觉校验工具</a>
                          </div>
                          <div className="meta project-desc">
                            前端开发对UI稿还原度校准工具，快速定位网页和UI稿的差异。超过400位字节跳动员工正在使用。2019年内部技术学院评选为「2019 最受欢迎服务」之一。已申请专利。
                          </div>
                        </div>
                      </div>
                      <div className="project-item">
                        <div className="inner-item">
                          <div>
                            <a className="rep-name" href="">auto-actor基于UI自动化</a>
                          </div>
                          <div className="meta project-desc">
                            对网页用户行为进行监控、记录、重现。曾获航信公司内部「年度最具创意项目奖」。基于UI自动化的 Chrome 扩展应用。
                            {/*<img className='github-star' alt="GitHub stars" src="https://img.shields.io/github/stars/rowthan/whats-element?logoColor=ffffff&labelColor=586069&color=lightgrey&label=stars&logo=github&style=flat-square" />*/}
                          </div>
                        </div>
                      </div>
                      <div className="project-item">
                        <div className="inner-item">
                          <div>
                            <a className="" href="https://addons.mozilla.org/zh-CN/firefox/addon/page-note/">
                              <img alt="page-note" src="https://img.shields.io/github/stars/rowthan/easyshare?color=lightgrey&label=%20page-note网页笔记&logo=github&style=flat-square" />
                            </a>
                          </div>
                          <div className="meta project-desc">
                            网页笔记，让任意网页具备标记对象、记录笔记的功能。0依赖的独立运行SDK，已发布至NPM。
                          </div>
                        </div>
                      </div>
                    </ShowMore>
                  </div>
                </li>
              </ul>
            </section>
            <section>
              <header className="title">教育背景</header>
              <ul className="education">
                <li className='education-item'>
                  <div>本科 云南大学 软件工程系（数字媒体技术专业）  <span className="">[2012-2016]</span> </div>
                  <div className="meta">
                    主修 C语言、Java、多媒体数据库、数据结构、计算机图形学、软件工程、计算机网络原理。
                    {/*<ShowMore noneAni>*/}
                    {/*  曾获得校三好学生、校级优秀志愿者、五四青年表彰。*/}
                    {/*</ShowMore>*/}
                  </div>
                </li>
              </ul>
            </section>
            <div className="other-section" style={{display:"flex",justifyContent:"space-between",flexWrap:"wrap"}}>
            </div>
            <footer className="footer noprint">
              <AsideButton></AsideButton>
              <button id="show-all-btn" onClick={this.showAll}>{this.state.showAll?'精简模式':'全部显示'}</button>
            </footer>
          </div>
          {/*{*/}
          {/*  this.state.revert &&*/}
          {/*  <Message/>*/}
          {/*}*/}
        </div>
      )
    }
}

export default App;
