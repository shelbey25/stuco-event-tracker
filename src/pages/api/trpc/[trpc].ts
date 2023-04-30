import * as trpcNext from "@trpc/server/adapters/next";
import { appRouter } from "~/pages/api/router/index";
export default trpcNext.createNextApiHandler({
  router: appRouter,
  createContext: () => null,
});

