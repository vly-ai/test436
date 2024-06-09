import { query, mutation } from "./_generated/server";
import { v } from "convex/values";
import { api } from "./_generated/api";

export const get = query({
  args: {},
  handler: async (ctx) => {
    const tasks = await ctx.db.query("tasks").order("desc").take(100);
    return tasks;
  },
});

export const add = mutation({
  args: { isCompleted: v.boolean(), text: v.string() },
  handler: async (ctx, args) => {
    console.log(args.isCompleted);
    await ctx.db.insert("tasks", {
      isCompleted: args.isCompleted,
      text: args.text,
    });
  },
});
