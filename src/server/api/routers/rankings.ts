import * as trpc from "@trpc/server";
import { z } from "zod";
import { createTRPCRouter, publicProcedure } from "../trpc";

export const rankingsRouter = createTRPCRouter({
  getAll: publicProcedure.query(async ({ ctx }) => {
    return (await ctx.prisma.rankings.findMany()).sort((a, b) => b.points - a.points);
  }),
});
