import * as trpc from "@trpc/server";
import { z } from "zod";
import { createTRPCRouter, publicProcedure } from "../trpc";

export const eventInformationRouter = createTRPCRouter({
  getAllDressUp: publicProcedure.query(async ({ ctx }) => {
    return (await ctx.prisma.eventInformation.findMany({
      where: {
        type: {
          endsWith: 'dress-up',
        },
      }, include: {
        participants: true,
      }
    })).sort((a, b) => (a.complete ? 1 : 0) - (b.complete ? 1 : 0));
  }),
});
