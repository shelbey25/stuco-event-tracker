import { NextPage } from "next";
import { useState, useEffect, useMemo } from "react";
import Link from "next/link";
import { Icon } from "@iconify/react";
import Events from "../components/Events";
import { api } from "~/utils/api";

interface Props {}

export interface EventStructure {
  name: string;
  complete: boolean;
}

const Dressup: NextPage = ({}) => {
  const { data } = api.eventInformation.getAllDressUp.useQuery();
  if (!data) return null;

  return (
    <div className="flex h-screen w-screen flex-col items-center justify-start bg-slate-300 p-8">
      <div className="flex h-[14] w-full justify-between p-2">
        <div className="flex w-1/3 justify-start">
          <Link href="/">
            <Icon className="h-14 w-14" icon="ion:arrow-back-circle-outline" />
          </Link>
        </div>
        <div className="flex w-1/3 items-center justify-center">
          <h1 className="heading-primary">Dress-Up Days</h1>
        </div>
        <div className="flex w-1/3 justify-end">
          <Link href="/">
            <Icon className="h-14 w-14" icon="material-symbols:home" />
          </Link>
        </div>
      </div>
      <div className="flex h-full w-full p-2">
        <Events events={data} />
      </div>
    </div>
  );
};
export default Dressup;
