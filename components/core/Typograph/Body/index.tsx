import classNames from "classnames"
import React from "react"

export const Body = ({children,size,className}: {
children: React.ReactNode
size?: 'small' | 'normal' | 'normalbold'
className?:string
})=>{

    return <p className={classNames([
        'font-normal lg:font-normal','text-neutral-700',
        {
            'text-[12px] lg:text-[14px]' : size === 'small',
            'text-[14px] lg:text-[16px]' : size === 'normal',
            'font-bold text-[14px] lg:text-[16px]' : size === 'normalbold',
            
        },className
    ])}>{children}</p>
}


