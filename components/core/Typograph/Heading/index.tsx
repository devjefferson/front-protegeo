import classNames from "classnames"
import React from "react"

export const Heading = ({children}: {
children: React.ReactNode

})=>{

    return <h1 className={classNames([
        'font-normal',
        'lg:font-normal',
        'text-[18px]',
        'lg:text-[24px]',
    
    ])}>{children}</h1>
}


