import classNames from "classnames";
import { Caption } from "../core/Typograph/Caption";
import { Body } from "../core/Typograph/Body";
import { Heading } from "../core/Typograph/Heading";

//function CardInfo (){}
export const CardContent = ({
    titlecontent, 
    onClick, 
    content
}: {
    titlecontent: string,
    content: string,
    onClick: () => void
}) => {
    return (
        <div 
             
            className={classNames(
                'flex',
                'flex-row-reverse',
                'bg-white',
                'mt-[50px]',
                'mr-[500px]'
            )}
        >
            <div className={classNames(
                'min-w-[720px]', 
                'h-[540px]', 
                'lg:flex', 
                'hidden',
            )}>
                <img className="w-full h-full" src="/map.png" alt="" />
            </div>
            <div className={classNames(
                'flex',
                'flex-col',
                'w-[720px]', 
                'my-[140px]',
                'pl-[160px]',
                'gap-[32px]',
            )}>
                <div>
                    <Heading size="medium" className="">{titlecontent}</Heading>
                </div> 
                <div>
                    <Body size="normal" className="overflow-hidden line-clamp-2">{content}</Body>
                </div> 
                <div onClick={onClick} className="cursor-pointer w-[135px] h-[48px] bg-zinc-700 flex items-center">
                    <Body size="normalbold" className="font-light text-[11px] text-white ml-3">Saber mais{' ->'}</Body>
                </div>
            </div>
        </div>
    );
}
