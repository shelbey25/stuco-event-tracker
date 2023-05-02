import * as trpc from "@trpc/server";
import { z } from "zod";
import { createTRPCRouter, publicProcedure } from "../trpc";

export const participantRouter = createTRPCRouter({
    updateSeen: publicProcedure.input(
        z.object({
          seen: z.boolean(),
          id: z.number()
        })
      ).mutation(async ({ ctx, input }) => {
        const { seen, id } = input;
        return ctx.prisma.participant.update({
          where: { id: id },
          data: {
            seen: seen,
          },
        });
      },
      ),
      updateParticipated: publicProcedure.input(
        z.object({
          dressed: z.boolean(),
          id: z.number()
        })
      ).mutation(async ({ ctx, input }) => {
        const { dressed, id } = input;
        return ctx.prisma.participant.update({
          where: { id: id },
          data: {
            dressed: dressed,
          },
        });
      },
      ),
});
