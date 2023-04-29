import { type NextPage } from "next";
import Head from "next/head";
import Link from "next/link";
import { signIn, signOut, useSession } from "next-auth/react";

import { api } from "~/utils/api";
import Leaderboard from "~/components/Leaderboard";

const Home: NextPage = () => {
  const hello = api.example.hello.useQuery({ text: "from tRPC" });

  return (
    <div className="flex flex-col p-8 allign-center justify-center w-screen h-screen bg-slate-300">
      <div className="flex flex-row h-1/2 w-full">
      <div className="align-middle"><Link href="/dressup"></Link></div>
      </div>
      <div className="flex justify-self-center h-1/2 w-full"><Leaderboard></Leaderboard></div>
    </div>
  );
};

export default Home;
