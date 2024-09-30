import { Heading } from "../core/Typograph/Heading";

export const Tutorial = () => {
  return (
    <div className=" py-10 bg-white mt-3">
      
     <div className=" flex flex-col items-center w-full gap-8">
     <div className="max-w-4xl w-full">
      <Heading size='medium' className="text-red-500">Como funciona?</Heading>
      </div>
      <div className="flex justify-between max-w-4xl w-full ">
        <div className="flex flex-col justify-center text-black"><div className="flex justify-center items-center w-16 h-16 text-5 rounded-full bg-red-500">1</div> aaaaaaaaaaaaa </div>
        <div className="flex flex-col justify-center text-black"><div className="flex justify-center items-center w-16 h-16 text-5 rounded-full bg-red-500">2</div> bbbbbbbbbbbbb</div>
        <div className="flex flex-col justify-center text-black"><div className="flex justify-center items-center w-16 h-16 text-5 rounded-full bg-red-500">3</div> ccccccccccccc</div>
      </div>
     </div>
    </div>
  );
};
