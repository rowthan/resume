import qrCodePrint from "../img/qrcode.png";
import Image from "next/image";
import { profile } from "@/data/profile";
import { useSearchParams } from "next/navigation";

export default function Profile() {
    const { contacts } = profile
    // 从URL中获取参数 name
    const name = useSearchParams().get('name');
    
    return (
        <nav className="basic-info">
          <div className="left" style={{}}>
            <Image className="onlyprint" src={qrCodePrint} alt="扫描二维码" width="80" height="80"/>
            <Image className="noprint" src={qrCodePrint} alt="rowthan" width="80" height="80"/>
            <div style={{padding:"0 20px"}}>
              <h1 style={{fontSize:"25px"}}>{name || '求职岗位'}</h1>
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
                        <li className={contact.className||''} key={contact.name}>
                            {
                                contact.link ?
                                    <a href={contact.link} target={'_blank'}>{contact.name}</a>:
                                    <span>{contact.name}</span>
                            }
                        </li>
                    ))
                }
            </ul>
          </div>
        </nav>
    );
}

