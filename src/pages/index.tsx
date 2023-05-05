import { type NextPage } from "next";
import Head from "next/head";
import Link from "next/link";
import { signIn, signOut, useSession } from "next-auth/react";

import { api } from "~/utils/api";
import Leaderboard from "~/components/Leaderboard";

const Home: NextPage = () => {
  const { data: session } = useSession()
  /*if(session) {
    return <>
      Signed in as {session.user.email} <br/>
      <button onClick={() => signOut()}>Sign out</button>
    </>
  }
  return <>
    Not signed in <br/>
    <button onClick={() => signIn()}>Sign in</button>
  </>*/
  return (
    <div className="flex flex-col p-8 items-center justify-center w-screen h-screen bg-slate-300">
        <div className="flex flex-row items-center h-1/2 w-full p-8 space-x-2 justify-between">
          <Link className="rounded-lg flex heading-primary items-center content-center justify-center w-full h-full bg-blue-400" href="/dressup">Dress-Up Days</Link>
          <Link className="rounded-lg flex heading-primary items-center content-center justify-center w-full h-full bg-blue-400" href="/small">Small Boosters</Link>
          <Link className="rounded-lg flex heading-primary items-center content-center justify-center w-full h-full bg-blue-400" href="/medium">Medium Boosters</Link>
          <Link className="rounded-lg flex heading-primary items-center content-center justify-center w-full h-full bg-blue-400" href="/large">Large Boosters</Link>
        </div>
      <div className="flex justify-self-center h-1/2 w-full"><Leaderboard></Leaderboard></div>
    </div>
  );
};

export default Home;
