import * as trpc from "@trpc/server";
import superjson from "superjson";
import { dressupRouter } from "./dressup";

export const appRouter = trpc
  .router()
  .transformer(superjson)
  .merge("dressup.", dressupRouter);

// export type definition of API
export type AppRouter = typeof appRouter;

