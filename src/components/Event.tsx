import React from "react";
import { useState, useEffect } from "react";
import Link from "next/link";
import { GradeInfo } from "./Leaderboard";
import { EventStructure } from "~/pages/dressup";

interface Props {
    eventInfo: EventStructure;
}

const Event: React.FC<Props> = ({ eventInfo }) => {
    return (
        <div className="justify-center items-center flex w-full h-full rounded-lg border-8 border-white bg-blue-300">
            {!eventInfo.complete ? 
            (<Link href="" className="heading-primary justify-center items-center flex w-full h-full p-2">{eventInfo.name}</Link>)
             : 
            (<div className="flex flex-col justify-center items-center w-full h-full  p-2 border-white bg-blue-100">
                <h1 className="heading-primary">{eventInfo.name}</h1>
                <h1 className="heading-primary">(Archived)</h1>
            </div>)
            }
        </div>
    );
};

export default Event;
