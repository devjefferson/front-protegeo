import classNames from "classnames"

export const Heading = ({title, size}: {
title: string
size: "small" | 'medium' | 'large'
})=>{

    return <h1 className={classNames([
        {
            'text-small' : size === 'small',
             'text-[64px]' : size === 'medium',
              'text-[84px]' : size === 'large'
        }
    ])}>{title}</h1>
}