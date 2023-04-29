import { NextPage } from "next";
import Link from "next/link";
import { Icon } from "@iconify/react";

interface Props {}

const Dressup: NextPage = ({}) => {
  return (
    <div className="flex flex-col p-8 items-center justify-start w-screen h-screen bg-slate-300">
        <div className="flex h-[14] justify-between w-full">
            <div className="flex justify-center w-1/3"></div>
            <div className="flex w-1/3 justify-center items-center text-3xl font-[sans]">Dress-Up Days</div>
            <div className="flex justify-end w-1/3">
                <Link href ="/"><Icon className="w-14 h-14" icon="material-symbols:home" /></Link>
            </div>
        </div>
        <div>dress</div>
    </div>
  );
};
export default Dressup;
