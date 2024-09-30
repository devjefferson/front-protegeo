import classNames from "classnames"
import { Heading } from "../core/Typograph/Heading";
import { Body } from "../core/Typograph/Body";
import { Caption } from "../core/Typograph/Caption";

export const ScrollDefault = ({
    location,
    details,
    text,
    onClick,
}:{
    location:string
    details:string
    text:string
    onClick: ()=> void

}) => {
    return (
        <div className={classNames([
            'flex',
            'flex-col',
            'justify-center',
            'items-center',
            'max-h-[1422px]',
            'w-full',
            'pb-5'
         

            ])}>
                
            <div className={classNames([
                
            ])}>
                <img className="object-cover min-w-[1440px] h-[680px]" src="/map.png" alt="" />
                
            </div>
            
            <div className={classNames([
                'max-h-[188px]',
                'mx-[182px]',
                'flex',
                'justify-center',
                'items-center',
                'text-center',
                'py-10'
                

            ])}>
              <Heading size="medium" className="lg:font-normal"> {location}</Heading> 
            </div>

            <div className={classNames([
                'flex',
                'flex-row',
                'max-h-[428px]',
                'px-[182px]',
                'pt-14',
                'pb-20',

            ])}>
                
               <div className={classNames([
                 'w-[526px]',
                 'h-[176px]',


               ])}>
                <div className={classNames([
                'flex',
                'flex-row',
                'max-w-[416px]'

                ])}>
                    <div className={classNames([
                    'min-w-[111px]',
                    'max-w-[111px]',

                    ])}>
                    <Caption>Detalhes</Caption>
                    </div>
                    <Caption>{details}</Caption>
                    </div>
                </div> 
               <div className={classNames([
                 'flex',
                 'w-[526px]',
                 'h-[346px]',

               ])}>
                <Body size="normal">{text}</Body>
               </div>
               
               </div>
           
               <button  className={classNames([
                'flex',
                'flex-row',
                'justify-center',
                'items-center',
                'bg-zinc-300',
                'h-[59px]',
                'w-[359px]',
                'cursor-pointer',
               ])}
               
               onClick={onClick}>
               <Body size="normal">Voltar</Body>
               </button>
            </div>
    );
};