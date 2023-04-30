import * as trpc from "@trpc/server";
import { z } from "zod";
import { prisma } from "~/backend/utils/prisma";

export const dressupRouter = trpc
  .router();
