import * as trpc from "@trpc/server";
import superjson from "superjson";
import { dressupRouter } from "./dressup";
import { rankingsRouter } from "./rankings";

export const appRouter = trpc
  .router()
  .transformer(superjson)
  .merge("dressup.", dressupRouter)
  .merge("rankings.", rankingsRouter);

// export type definition of API
export type AppRouter = typeof appRouter;

