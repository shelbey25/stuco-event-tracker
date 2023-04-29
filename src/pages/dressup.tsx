import { NextPage } from "next";
import Link from "next/link";
import { Icon } from "@iconify/react";

interface Props {}

const Dressup: NextPage = ({}) => {
  return (
    <div className="flex flex-col p-8 items-center justify-start w-screen h-screen bg-slate-300">
        <div className="flex h-[14] justify-between w-full p-2">
            <div className="flex justify-center w-1/3"></div>
            <div className="flex w-1/3 justify-center items-center"><h1 className="heading-primary">Dress-Up Days</h1></div>
            <div className="flex justify-end w-1/3">
                <Link href ="/"><Icon className="w-14 h-14" icon="material-symbols:home" /></Link>
            </div>
        </div>
        <div className="flex h-full grid grid-cols-4 gap-4 w-full p-2">
            
        </div>
    </div>
  );
};
export default Dressup;
