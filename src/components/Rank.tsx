import React from "react";
import { useState, useEffect } from "react";
import Link from "next/link";
import { GradeInfo } from "./Leaderboard";

interface Props {
    grade: GradeInfo;
}


const Rank: React.FC<Props> = ({ grade }) => {
  return (
    <div className="flex flex-row w-full rounded-lg align-center bg-blue-100 justify-between p-5 border-8 border-white">
      <h1>{grade.rank}.</h1>
      <h1>{grade.grade}</h1>
      <h1>{grade.points}</h1>
    </div>
  );
};

export default Rank;
