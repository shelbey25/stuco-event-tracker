import React, { use, useMemo } from "react";
import { useState, useEffect } from "react";
import Link from "next/link";
import Rank from "./Rank";
import { info } from "console";
import { api } from "~/utils/api";

export interface GradeInfo {
    grade: string;
    points: number;
}

interface Props { }

const Leaderboard: React.FC<Props> = ({ }) => {
    const { data } = api.rankings.getAll.useQuery();
    if (!data) return null;

    return (
        <div className="flex w-full content-center justify-center">
            <div className="flex w-9/12 flex-col content-center justify-start space-y-2">
                {data.map((rank, index) => (
                    <Rank rank={index + 1} grade={{grade: rank.grade, points: rank.points}} key={rank.id}></Rank>
                ))}
            </div>
        </div>
    );
};

export default Leaderboard;
