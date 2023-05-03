import * as trpc from "@trpc/server";
import { z } from "zod";
import { createTRPCRouter, publicProcedure } from "../trpc";

export const rankingsRouter = createTRPCRouter({
  getAll: publicProcedure.query(async ({ ctx }) => {
    return (await ctx.prisma.rankings.findMany()).sort((a, b) => b.points - a.points);
  }),
  updatePoints: publicProcedure.input(
    z.object({
      points: z.number(),
      id: z.number()
    })
  ).mutation(async ({ ctx, input }) => {
    const { points, id } = input;
    return ctx.prisma.rankings.update({
      where: { id: id },
      data: {
        points: points,
      },
    });
  },
  ),
});
