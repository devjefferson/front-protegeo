import classNames from "classnames"
import React from "react"

export const Body = ({children, size = 'normal'}: {
children: React.ReactNode
size?: 'small' | 'normal' | 'normalbold' 
})=>{

    return <h1 className={classNames([
        'font-normal lg:font-medium',
        {
            'text-[12px] lg:text-[14px]' : size === 'small',
            'text-[14px] lg:text-[16px]' : size === 'normal',
            'font-bold text-[14px] lg:text-[16px]' : size === 'normalbold',
            
        }
    ])}>{children}</h1>
}


