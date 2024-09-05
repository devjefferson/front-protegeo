import classNames from "classnames"
import React from "react"

export const Subtitle = ({children, size = 'medium'}: {
children: React.ReactNode
size?: 'small' | 'medium' | 'smallbold' 
})=>{

    return <h1 className={classNames([
        'font-normal lg:font-medium',
        {
            'text-[16px] lg:text-[14px]' : size === 'small',
            'text-[14px] lg:text-[12px]' : size === 'medium',
            'font-bold text-[16px] lg:text-[14px]' : size === 'smallbold',
            
        }
    ])}>{children}</h1>
}


