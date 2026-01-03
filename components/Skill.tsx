import {type ReactNode} from 'react';
import {ShowMore} from "@/components/index";

interface Props {
    children?: ReactNode;
}

export default function Skill(props: Props) {
    const {children} = props;
    return (
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
    );
}

