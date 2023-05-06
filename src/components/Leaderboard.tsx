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

interface Props {}

const Leaderboard: React.FC<Props> = ({}) => {
  const gradeIdConvertor = [0, 10, 11, 12, 9];
  const pointsMutation = api.rankings.updatePoints.useMutation({
    onSuccess: () => {},
  });
  const updateAllPoints = (data: Participant[]) => {
    updatePointsMethod(1, data);
    updatePointsMethod(2, data);
    updatePointsMethod(3, data);
    updatePointsMethod(4, data);
  };
  const updatePointsMethod = (id: number, data: Participant[]) => {
    pointsMutation.mutate({
      id: id,
      points: getTotalPoints(gradeIdConvertor[id] || 0, id, data),
    });
  };
  const getTotalPoints = (grade: number, id: number, data: Participant[]) => {
    let totalPoints: number[] = [];
    let totalNum: number[] = [];

    const eventsIds = data
      .map((e) => e.eventInformationId)
      .filter((e) => e != null)
      .filter((item, pos, arr) => arr.indexOf(item) === pos);

    const events: { points: number; num: number; id: number }[] = eventsIds.map(
      (id) => ({
        id: id ?? 0,
        num: data.filter(
          (p) => p.eventInformationId === id && p.grade === grade
        ).length,
        points: data.filter(
          (p) => p.eventInformationId === id && p.dressed && p.grade === grade
        ).length,
      })
    );

    const total = events.reduce(
      (prev, event) =>
        prev +
        Math.round((100 * event.points) / (event.num === 0 ? 1 : event.num)),
      0
    );

    return total;
  };

  const { data: rankingsData, refetch: refetchRank } =
    api.rankings.getAll.useQuery();
  const { data: participantData, refetch: refetchParticipant } =
    api.participant.getAll.useQuery();
  useMemo(() => {
    participantData ? updateAllPoints(participantData) : null;
  }, [participantData]);
  refetchRank();
  refetchParticipant();
  if (!rankingsData || !participantData)
    return (
      <div className="flex w-full content-center justify-center">
        <div className="heading-sub flex h-16 w-9/12 justify-center rounded-lg bg-rose-600 p-2 text-center align-middle text-slate-100">
          Loading...
        </div>
      </div>
    );

  return (
    <div className="flex w-full content-center justify-center">
      <div className="flex w-9/12 flex-col content-center justify-start space-y-2">
        {rankingsData.map((rank, index) => (
          <Rank
            rank={index + 1}
            grade={{ grade: rank.grade, points: rank.points }}
            key={rank.id}
          ></Rank>
        ))}
      </div>
    </div>
  );
};

export default Leaderboard;
