import React, { use, useMemo } from "react";
import { useState, useEffect } from "react";
import Link from "next/link";
import Rank from "./Rank";
import { info } from "console";
import { api } from "~/utils/api";
import { Participant } from "@prisma/client";

export interface GradeInfo {
    grade: string;
    points: number;
}

interface Props { }

const Leaderboard: React.FC<Props> = ({ }) => {
    const pointsMutation = api.rankings.updatePoints.useMutation({
        onSuccess: () => {
        },
    })
    const updatePointsMethod = (id: number, data: Participant[]) => {
        pointsMutation.mutate({
        id: id,
        points: getTotalPoints(10, 1, data)
      });
    }
    const getTotalPoints = (grade: number, id: number, data: Participant[]) => {
        let totalPoints = 0;
        let totalNum = 0;
        data.map((participant) => {
        if (participant.grade === grade) {
            if (participant.dressed) {
                totalPoints = totalPoints+1
            }
            totalNum = totalNum+1
        }
        }
        )
        
        return 100*totalPoints/totalNum;
    }

    const { data: rankingsData } = api.rankings.getAll.useQuery();
    const { data: participantData } = api.participant.getAll.useQuery();
    useMemo(() => { participantData ? updatePointsMethod(1, participantData) : null
    }, [participantData])
    if (!rankingsData || !participantData) return null;
    
    

    return (
        <div className="flex w-full content-center justify-center">
            <div className="flex w-9/12 flex-col content-center justify-start space-y-2">
                {rankingsData.map((rank, index) => (
                    <Rank rank={index + 1} grade={{grade: rank.grade, points: rank.points}} key={rank.id}></Rank>
                ))}
            </div>
        </div>
    );
};

export default Leaderboard;
