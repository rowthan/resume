import {type ReactNode} from 'react';
import { ShowMore } from './ShowMore';

interface Props {
    children?: ReactNode;
    education:{
        school?:string,
        time?: string,
        detail?: string,
        more?: string,
    }
}

export default function Education(props: Props) {
    const {education = {}} = props;
    if(!education.school){
        return null;
    }
    return (
        <section>
            <header className="title">教育背景</header>
            <ul className="education">
                <li className='education-item'>
                    <div>{education?.school} <span className="">{education?.time}</span> </div>
                    <div className="meta">
                        {education?.detail}
                        {
                            education?.more && 
                            <ShowMore id='edu' noneAni>
                                {education?.more}
                            </ShowMore>
                        }
                    </div>
                </li>
            </ul>
        </section>
    );
}

