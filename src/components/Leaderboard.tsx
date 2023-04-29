import React from "react";
import { useState, useEffect } from "react";
import Link from "next/link";
import Rank from "./Rank";

interface Props {
    
}

export interface GradeInfo {
    rank: number;
    grade: string;
    points: number;
}

const Leaderboard: React.FC<Props> = ({}) => {
  const [leaders, setLeaders] = useState([
    {
        rank: 1,
        grade: "10th Grade",
        points: 1902
    },
    {
        rank: 2,
        grade: "12th Grade",
        points: 1901
    },
  ]);
  return (
    <div className="flex flex-col p-8 w-full allign-center justify-center">
        
        <div className="flex flex-col w-2/3 allign-center justify-center space-y-2">
        {leaders.map((grade) => <Rank grade={grade} ></Rank>)}
        </div>
    </div>
  );
};

export default Leaderboard;
