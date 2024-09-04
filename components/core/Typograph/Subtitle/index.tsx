import classNames from "classnames"
import React from "react"

export const Subtitle = ({children, size = 'medium'}: {
children: React.ReactNode
size?: 'small' | 'medium' | 'large' | 'xlarge'
})=>{

    return <h1 className={classNames([
        'font-normal lg:font-medium',
        {
            'text-[14px] lg:text-[16px]' : size === 'small',
            'text-[28px] lg:text-[64px]' : size === 'medium',
            'text-[40px] lg:text-[84px]' : size === 'large',
            'text-[48px] lg:text-[96px]' : size === 'xlarge',
        }
    ])}>{children}</h1>
}


