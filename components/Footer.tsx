'use client';
import React, {type ReactNode, useState} from 'react';

interface Props {
    children?: ReactNode;
}

export default function Footer(props: Props) {
    const {children} = props;
    return (
        <div className="">
            {children}
        </div>
    );
}

export const AsideButton = () => {
    const download = function () {
        toggleAll(false);
        window.print();
    }
    const [allVisible, setAllVisible] = useState(false)

    function toggleAll(visible: boolean | any) {
        const switchState = typeof visible === 'boolean' ? visible : !allVisible;
        [].slice.call(document.querySelectorAll('.expander-state')).forEach((item: HTMLInputElement) => {
            item.checked = switchState
        })
        setAllVisible(!allVisible)
    }

    return (
        <footer className="footer noprint fixed bottom-2 right-40">
            <span className="get-resume-container">
                <button onClick={download}>打印</button>
                <button id="show-all-btn" onClick={toggleAll}>{allVisible ? '精简模式' : '全部显示'}</button>
              </span>
        </footer>

    )
}
