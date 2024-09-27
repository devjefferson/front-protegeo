import classNames from "classnames"
import React from "react"

export const Heading = ({children, size ,className}: {
children: React.ReactNode
size?: 'small' | 'medium' | 'large' | 'xlarge'
className?:string
})=>{

    return <h1 className={classNames([
        'font-normal lg:font-medium',
        {
            'text-[20px] lg:text-[28px]' : size === 'small',
            'text-[28px] lg:text-[64px]' : size === 'medium',
            'text-[40px] lg:text-[84px]' : size === 'large',
            'text-[48px] lg:text-[96px]' : size === 'xlarge',
        },classNames
    ])}>{children}</h1>
}


