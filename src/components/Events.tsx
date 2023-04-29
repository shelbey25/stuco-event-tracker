import React from "react";
import { useState, useEffect } from "react";
import Link from "next/link";
import Event from "./Event";
import { EventStructure } from "~/pages/dressup";

interface Props {
    events: EventStructure[]
}


const Events: React.FC<Props> = ({ events }) => {
    return (
        <div className="flex h-full grid grid-cols-4 gap-4 w-full">
            {events.map((event) => (
                <Event eventInfo={event} key={event.name}/>
            ))}
        </div>
    );
};

export default Events;
