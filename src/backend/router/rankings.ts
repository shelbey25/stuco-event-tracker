import * as trpc from "@trpc/server";
import { z } from "zod";
import { prisma } from "~/backend/utils/prisma";

export const rankingsRouter = trpc
    .router()
  .query("all", {
    async resolve() {
      return prisma.rankings.findMany();
    },
  });
