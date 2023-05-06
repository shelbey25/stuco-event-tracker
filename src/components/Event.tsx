import React from "react";
import { useState, useEffect } from "react";
import Link from "next/link";
import { Link as LinkNew } from "react-router-dom";
import { GradeInfo } from "./Leaderboard";
import { EventStructure } from "~/pages/dressup";
import { EventInformation, Participant } from "@prisma/client";

interface Props {
  eventInfo: EventInformation & {
    participants: Participant[];
  };
}

const Event: React.FC<Props> = ({ eventInfo }) => {
  return (
    <div className="flex h-1/2 w-full items-center justify-center rounded-lg border-8 border-white bg-blue-300">
      {!eventInfo.complete ? (
        <Link
          href={`/dressup/${eventInfo.displayName
            .replace(/\s+/g, "")
            .toLowerCase()}`}
          className="heading-primary flex h-full w-full items-center justify-center p-2"
        >
          {eventInfo.displayName}
        </Link>
      ) : (
        <div className="flex h-full w-full flex-col items-center justify-center  border-white bg-blue-100 p-2">
          <h1 className="heading-primary">{eventInfo.displayName}</h1>
          <h1 className="heading-primary">(Archived)</h1>
        </div>
      )}
    </div>
  );
};

export default Event;
//<LinkNew to={`/dressup/${eventInfo.name}`}>{eventInfo.name}</LinkNew>
/*<*/
