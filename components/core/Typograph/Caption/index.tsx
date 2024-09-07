import classNames from "classnames"
import React from "react"

export const Caption = ({children,className}: {
children: React.ReactNode
className?:string
})=>{

    return <p className={classNames([
        'font-normal',
        'lg:font-normal',
        'text-[10px]','lg:text-[12px]',
        'text-neutral-500',
        'uppercase',
        className

    
    ])}
    >{children}</p>
}
