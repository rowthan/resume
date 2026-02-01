import qrCodePrint from "../img/qrcode.png";
import Image from "next/image";
import { profile } from "@/data/profile";
import { useSearchParams } from "next/navigation";
import { Suspense, useEffect, useState } from "react";
import {QRCodeCanvas} from "qrcode.react";



function ProfileTitle() {
    const name = useSearchParams().get('name');
    return <h1 style={{fontSize:"25px"}}>{name || '求职岗位'}</h1>;
}

export default function Profile() {
    const { contacts } = profile
    const [location,setLocation] = useState<string>('');
    useEffect(function () {
      setLocation(window.location.href);
    },[])
    
    return (
        <nav className="basic-info">
          <div className="left" style={{}}>
            <QRCodeCanvas value={location} fgColor={"#545454"} size={76} />
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

