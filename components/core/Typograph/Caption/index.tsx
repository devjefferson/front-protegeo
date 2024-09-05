import classNames from "classnames"
import React from "react"

export const Heading = ({children}: {
children: React.ReactNode

})=>{

    return <h1 className={classNames([
        'font-semibold',
        'lg:font-bold',
        'text-[10px]','lg:text-[12px]',
    
    ])}>{children}</h1>
}
