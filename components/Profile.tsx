import qrCodePrint from "../img/qrcode.png";
import Image from "next/image";
import {profile} from "@/data/profile";
import app from "@/components/App";

export default function Profile() {
    const {contacts} = profile
    return (
        <nav className="basic-info">
          <div className="left" style={{}}>
            <Image className="onlyprint" src={qrCodePrint} alt="扫描二维码" width="80" height="80"/>
            <Image className="noprint" src={qrCodePrint} alt="rowthan" width="80" height="80"/>
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
                {
                    contacts.map((contact)=>(
                        <li className={contact.className||''}>
                            {
                                contact.link ?
                                    <a href={contact.link} target={'_blank'}>{contact.name}</a>:
                                    <span>{contact.name}</span>
                            }
                        </li>
                    ))
                }
              {/*<li><a href= "mailto:rowthan@icloud.com">rowthan@icloud.com</a></li>*/}
              {/*<li className="onlyprint">17611619330</li>*/}
              {/*<li className="noprint">*/}
              {/*  <a href="https://github.com/rowthan">GitHub</a>*/}
              {/*  &nbsp;&nbsp;*/}
              {/*  <a href="https://juejin.im/user/588a23d0128fe10065061eab">掘金</a>*/}
              {/*</li>*/}
            </ul>
          </div>
        </nav>
    );
}

