'use client'
// import profile from "@/data/profile.json";
import { useSearchParams } from "next/navigation";
import { Suspense, useEffect, useState } from "react";
import {QRCodeCanvas} from "qrcode.react";



function ProfileTitle() {
    const name = useSearchParams().get('name');
    return <h1 style={{fontSize:"25px"}}>{name || '求职岗位'}</h1>;
}

interface ProfileInfo {
  contacts: {link: string,name: string}[]
}

export default function Profile(props:{profile: ProfileInfo}) {
    const contacts = props.profile?.contacts || [];
    const [location,setLocation] = useState<string>('');
    useEffect(function () {
      setLocation(window.location.href);
    },[])
    
    return (
        <nav className="basic-info">
          <div className="left" style={{}}>
            <a href={location}>
              <div className="flex items-center">
                  <QRCodeCanvas value={location} fgColor={"#545454"} size={76} />
                  <div className="text-[12px] [writing-mode:vertical-rl]">
                    点击在线查看
                  </div>
                </div>
              </a>
            <div className="px-9">
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
                                    <a href={contact.link} >{contact.name}</a>:
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

