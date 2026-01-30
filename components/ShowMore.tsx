import React, {Fragment} from "react";
// import Loadable from "react-loadable";

interface Props {
    children: React.ReactNode
    noneAni? : boolean,
    id: string
}

export const ShowMore =({children, noneAni, id}: Props)=>{
    const random = id || Math.random().toString()+'toggle-show';
    return(
        <Fragment>
             <input className='expander-state' type="checkbox" id={random}/>
            {
                noneAni!==undefined?
                    <span className='toggle-show-content no-animation'>
                      {children}
                    </span> :
                    <div className='toggle-show-content'>
                        {children}
                    </div>
            }

            <label className='noprint ellipsis-expander' htmlFor={random}>
               
            </label>
        </Fragment>
    )
};

// export const Message = Loadable({
//     loader: () => import('./Gitalk'),
//     loading: () => <div>加载中...</div>
// })

