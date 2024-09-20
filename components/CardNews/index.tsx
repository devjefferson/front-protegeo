import classNames from "classnames"
import { Body } from "../core/Typograph/Body"
import { Heading } from "../core/Typograph/Heading"

//function CardInfo (){}
export const CardNews = ({
    title, 
    onClick, 
    description,
}:{
    title:string
    description: string
    onClick: ()=> void
}) => {
    return (
        <div className={classNames([
            'cursor-pointer',
            'flex',
            'flex-col',
            'shadow-md',
            'ml-[500px]',
            'bg-white',
            'lg:w-[262px]',
            ])}>
            <div onClick={onClick} className={classNames([
                'min-w-[158px]', 'h-full', 'lg:flex hidden',
            ])}>
                    <img className="object-cover h-[148px] w-[262px]" src="/public/image.png" alt="" />
            </div>
            <div className={classNames([
                'flex',
                'flex-col',
                'gap-1',
                'px-[16px]',
                'py-[24px]',
            ])}>
            <div>
            <Heading size="small" className="text-clip overflow-hidden line-clamp-2 w-full">{title}Título do material em até duas ou três linhas </Heading> 
            </div> 
            <div>
                <Body size="small" className="text-clip overflow-hidden line-clamp-4 w-full."> {description}Descrição rápida do material em até quatro linhas quebradas com reticências no final.Descrição rápida do material em até quatro linhas quebradas com reticências no final.Descrição rápida do material em até quatro linhas quebradas com reticências no final.</Body>
            </div> 
            </div>
        </div>
        )


} 