import { Body } from "@/components/core/Typograph/Body"
import { Caption } from "@/components/core/Typograph/Caption"
import IconComponent from "@/components/Icon"
import { Button, ButtonGroup } from "@nextui-org/button"
import classNames from "classnames"
import { BiTrashAlt } from "react-icons/bi"


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
        <div className={classNames([
         
            'flex',
            'shadow-md',
            'bg-white', 'p-3', 'lg:w-full','gap-2'])}>
            <div className={classNames([
                'min-w-[158px]', 'h-full', 'lg:flex hidden'
            ])}>
                <img className="object-cover h-full" src="/map.png" alt="" />
            </div>
            <div className={classNames([
                'flex',
                'flex-col',
                'gap-2',
                'w-full'
            ])}>
            <div>
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
          
            </div>
            <div className="flex justify-end">
            <Button isIconOnly color="danger" aria-label="Like" onClick={onClick}>
                <BiTrashAlt />
            </Button>  
            </div>
        </div>
        )


} 