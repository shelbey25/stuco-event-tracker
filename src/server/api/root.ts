import { createTRPCRouter } from "~/server/api/trpc";
import { rankingsRouter } from "./routers/rankings";
import { eventInformationRouter } from "./routers/eventInformation";

/**
 * This is the primary router for your server.
 *
 * All routers added in /api/routers should be manually added here.
 */
export const appRouter = createTRPCRouter({
  rankings: rankingsRouter,
  eventInformation: eventInformationRouter
});

// export type definition of API
export type AppRouter = typeof appRouter;
