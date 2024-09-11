import classNames from "classnames"
import { Caption } from "../core/Typograph/Caption"
import { Body } from "../core/Typograph/Body"

//function CardInfo (){}
export const CardInfo = ({
    cityOfState, 
    onClick, 
    street,
    description
}:{
    cityOfState:string
    street: string
    description: string
    onClick: ()=> void
}) => {
    return (
        <div onClick={onClick} className={classNames([
            'flex',
            'shadow-md',
            'bg-white', 'p-3', 'w-[431px]','gap-2'])}>
            <div className={classNames([
                'min-w-[158px]', 'h-full'
            ])}>
                <img className="object-cover h-full" src="/map.png" alt="" />
            </div>
            <div className={classNames([
                'flex',
                'flex-col',
                'gap-2',
            ])}>
            <div>
                <Caption className="-mb-2">bairro - cidade</Caption>
                    <Body size="normal">{cityOfState}{/*Campo grande - Rio de janeiro*/}</Body>
            </div> 
            <div>
                <Caption className="text-[9px] font-normal capitalize -mb-1">Endereço</Caption>
                <Body size="normal">{street}</Body>
            </div> 
            <div>
                <Caption className="text-[9px] font-medium capitalize">Descrição</Caption>
                <Body className="text-[9px] font-light">{description}</Body>
            </div> 
            <div className="flex justify-end">
                <Body className="font-light text-[11px]" >Mais Detalhes{'-->'}</Body>
            </div>
            </div>
        </div>
        )


} 