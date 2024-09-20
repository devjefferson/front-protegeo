import classNames from "classnames"
import { Body } from "../core/Typograph/Body"
import { Heading } from "../core/Typograph/Heading"

//function CardInfo (){}
export const CardNews = ({
    titlenews, 
    onClick, 
    news,
}:{
    titlenews:string
    news: string
    onClick: ()=> void
}) => {
    return (
        <div onClick={onClick} className={classNames([
            'cursor-pointer',
            'flex',
            'flex-col',
            'shadow-md',
            'ml-[500px]',
            'bg-white',
            'lg:w-[262px]',
            ])}>
            <div className={classNames([
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
            <Heading size="small" className="text-clip overflow-hidden line-clamp-2 w-full">{titlenews}</Heading> 
            </div> 
            <div>
                <Body size="small" className="text-clip overflow-hidden line-clamp-4 w-full."> {news}</Body>
            </div> 
            </div>
        </div>
        )


} 