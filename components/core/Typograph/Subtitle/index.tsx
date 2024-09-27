import classNames from "classnames"
import React from "react"

export const Subtitle = ({children}: {
children: React.ReactNode
className?:string
})=>{

    return <h1 className={classNames([
        'font-normal',
        'lg:font-normal',
        'text-[18px]','lg:text-[24px]',
        classNames,
    ])}>{children}</h1>
}

