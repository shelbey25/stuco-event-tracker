import React, { use } from "react";
import { useState, useEffect } from "react";
import Link from "next/link";
import Rank from "./Rank";
import { info } from "console";

interface Props {
    
}

export interface GradeInfo {
    rank: number;
    grade: string;
    points: number;
}

let leaders: GradeInfo[];
const Leaderboard: React.FC<Props> = ({}) => {
  const [leaders, setLeaders] = useState([
    {
        rank: 1,
        grade: "Sophmores",
        points: 1902
    },
    {
        rank: 1,
        grade: "Seniors",
        points: 1901
    },
    {
        rank: 1,
        grade: "Freshmen",
        points: 103
    },
    {
        rank: 1,
        grade: "Juniors",
        points: 1900
    },
  ]);

  useEffect(() => {
    setLeaders(leaders.sort(function(a, b){
        return b.points - a.points; 
    }))
    setLeaders(leaders.map((info, index) => { 
        info.rank = index + 1; 
        return info; 
    }))
  }, [leaders, setLeaders])

  return (
    <div className="flex w-full content-center justify-center">
        <div className="flex flex-col w-9/12 content-center justify-start space-y-2">
        {leaders.map((grade) => <Rank grade={grade} key={grade.grade} ></Rank>)}
        </div>
    </div>
  );
};

export default Leaderboard;
