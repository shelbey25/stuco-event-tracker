import React, { use, useMemo } from "react";
import { useState, useEffect } from "react";
import Link from "next/link";
import Rank from "./Rank";
import { info } from "console";

export interface GradeInfo {
    grade: string;
    points: number;
}

interface Props { }

const Leaderboard: React.FC<Props> = ({ }) => {
    const [leaders, setLeaders] = useState([
        {
            grade: "Sophmores",
            points: 1902,
        },
        {
            grade: "Seniors",
            points: 1901,
        },
        {
            grade: "Freshmen",
            points: 103,
        },
        {
            grade: "Juniors",
            points: 1900,
        },
    ]);

    const sorted = useMemo(
        () => leaders.sort((a, b) => b.points - a.points),
        [leaders]
    );

    return (
        <div className="flex w-full content-center justify-center">
            <div className="flex w-9/12 flex-col content-center justify-start space-y-2">
                {leaders.map((grade, index) => (
                    <Rank rank={index + 1} grade={grade} key={grade.grade}></Rank>
                ))}
            </div>
        </div>
    );
};

export default Leaderboard;
