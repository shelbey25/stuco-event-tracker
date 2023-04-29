import React from "react";
import { useState, useEffect } from "react";
import Link from "next/link";
import { GradeInfo } from "./Leaderboard";

interface Props {
    grade: GradeInfo;
    rank: number;
}

const Rank: React.FC<Props> = ({ rank, grade }) => {
    return (
        <div className="align-center flex w-full flex-row justify-between rounded-lg border-8 border-white bg-blue-100 p-5">
            <h1>{rank}.</h1>
            <h1>{grade.grade}</h1>
            <h1>{grade.points}</h1>
        </div>
    );
};

export default Rank;
