import * as trpc from "@trpc/server";
import { z } from "zod";
import { createTRPCRouter, publicProcedure } from "../trpc";

export const participantRouter = createTRPCRouter({
    updateSeen: publicProcedure.input(
        z.object({
          result: z.boolean(),
          id: z.number()
        })
      ).mutation(async ({ ctx, input }) => {
        const { result, id, ...rest } = input;
        const modEventInDb = await ctx.prisma.event.update({
          where: { id: id },
          data: {
            ...rest,
            sidenote: {
              connectOrCreate: {
                create: {
                  important: false,
                  name: sidenote,
                },
                where: {
                  name: sidenote,
                },
              },
            },
            location: {
              // alright shelbe this is it.
              // so what it does, is that it first looks for a location that has a matching name
              // if it doesnt find one itll create a new location
              connectOrCreate: {
                create: {
                  important: false,
                  name: location,
                },
                where: {
                  name: location,
                },
              },
            },
          },
        });
        return { success: true, modEvent: modEventInDb };
      },
      ),
});
