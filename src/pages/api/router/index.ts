import * as trpc from "@trpc/server";
import superjson from "superjson";
import { dressupRouter } from "./dressup";
import { rankingsRouter } from "./rankings";
import { z } from 'zod';
import { createTRPCRouter } from "~/server/api/trpc";

export const appRouter = createTRPCRouter({
  dressup: dressupRouter,
  rankings: rankingsRouter
});

// export type definition of API
export type AppRouter = typeof appRouter;

