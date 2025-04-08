import { v } from "convex/values";
import { mutation, query } from "./functions";

export const createSheet = mutation({
  args: {
    name: v.string(),
  },
  handler: async (ctx, { name }) => {
    const viewer = await ctx.viewerX();

    if (name.length <= 0) {
      throw new Error("Name is required");
    }

    return await ctx.table("sheets").insert({
      name,
      ownerId: viewer._id,
    });
  },
});

export const mySheets = query({
  handler: async (ctx) => {
    const viewer = await ctx.viewerX();
    const sheets = await viewer.edge("sheets").docs();
    return sheets;
  },
});

export const byId = query({
  args: {
    sheetId: v.id("sheets"),
  },
  handler: async (ctx, { sheetId }) => {
    return await ctx.table("sheets").getX(sheetId).doc();
  },
});
