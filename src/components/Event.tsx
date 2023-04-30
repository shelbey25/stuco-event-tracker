import React from "react";
import { useState, useEffect } from "react";
import Link from "next/link";
import { Link as LinkNew } from "react-router-dom";
import { GradeInfo } from "./Leaderboard";
import { EventStructure } from "~/pages/dressup";
import { EventInformation, Participant } from "@prisma/client";

interface Props {
    eventInfo: (EventInformation & {
        participants: Participant[];
    });
}

const Event: React.FC<Props> = ({ eventInfo }) => {
    return (
        <div className="justify-center items-center flex w-full h-1/2 rounded-lg border-8 border-white bg-blue-300">
            {!eventInfo.complete ? 
            (<Link href={`/dressup/${eventInfo.displayName.replace(/\s+/g, '').toLowerCase()}`} className="heading-primary justify-center items-center flex w-full h-full p-2">{eventInfo.displayName}</Link>)
             : 
            (<div className="flex flex-col justify-center items-center w-full h-full  p-2 border-white bg-blue-100">
                <h1 className="heading-primary">{eventInfo.displayName}</h1>
                <h1 className="heading-primary">(Archived)</h1>
            </div>)
            }
        </div>
    );
};

export default Event;
//<LinkNew to={`/dressup/${eventInfo.name}`}>{eventInfo.name}</LinkNew>
/*<*/