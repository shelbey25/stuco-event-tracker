import * as trpc from "@trpc/server";
import { z } from "zod";
import { createTRPCRouter, publicProcedure } from "../trpc";

export const eventInformationRouter = createTRPCRouter({
  getAllDressUp: publicProcedure.query(({ ctx }) => {
    return ctx.prisma.eventInformation.findMany({
      where: {
        type: {
          endsWith: 'dress-up',
        }, 
    }, include: {
      participants: true,
    }
  });
  }),
});
