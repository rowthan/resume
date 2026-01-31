import qrCodePrint from "../img/qrcode.png";
import Image from "next/image";
import { profile } from "@/data/profile";
import { useSearchParams } from "next/navigation";
import { Suspense } from "react";

// 使用 useSearchParams 的子组件
function ProfileTitle() {
    const name = useSearchParams().get('name');
    return <h1 style={{fontSize:"25px"}}>{name || '求职岗位'}</h1>;
}

export default function Profile() {
    const { contacts } = profile
    
    return (
        <nav className="basic-info">
          <div className="left" style={{}}>
            <Image className="onlyprint" src={qrCodePrint} alt="扫描二维码" width="80" height="80"/>
            <Image className="noprint" src={qrCodePrint} alt="rowthan" width="80" height="80"/>
            <div style={{padding:"0 20px"}}>
              <Suspense fallback={<h1 style={{fontSize:"25px"}}>求职岗位</h1>}>
                <ProfileTitle />
              </Suspense>
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
                        <li className={(contact as any).className || ''} key={contact.name}>
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

