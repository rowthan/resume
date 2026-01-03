import {type ReactNode} from 'react';

interface Props {
    children?: ReactNode;
}

export default function Education(props: Props) {
    const {children} = props;
    return (
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
    );
}

