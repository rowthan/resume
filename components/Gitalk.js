import 'gitalk/dist/gitalk.css'
import Gitalk from 'gitalk'
import React from 'react'

class Message extends React.PureComponent{
    
    componentDidMount(){
        var gitalk = new Gitalk({
            clientID: 'd0c468e2c637437ceb5a',
            clientSecret: '3294881c8183dad8c810216aae7621fb2eea9f74',
            repo: 'rowthan.github.io',
            owner: 'rowthan',
            admin: ['rowthan'],
            id: "resume-comment",      // Ensure uniqueness and length less than 50
            language:"zh-CN",
            createIssueManually:true,
            distractionFreeMode: false  // Facebook-like distraction free mode
          })
          gitalk.render('gitalk-container')
    }

    render(){
        return(
            <div className="back-page">
            <a href="#">返回简历</a>
            <div id="gitalk-container"></div>
          </div>
        )
    }
}
export default Message