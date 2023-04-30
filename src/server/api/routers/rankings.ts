import * as trpc from "@trpc/server";
import { z } from "zod";
import { createTRPCRouter, publicProcedure } from "../trpc";

export const rankingsRouter = createTRPCRouter({
  getAll: publicProcedure.query(({ ctx }) => {
    return ctx.prisma.rankings.findMany({orderBy: [{ points: "desc" }],});
  }),
});
