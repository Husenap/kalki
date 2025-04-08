import { authTables } from "@convex-dev/auth/server";
import {
  defineEnt,
  defineEntSchema,
  defineEntsFromTables,
  getEntDefinitions,
} from "convex-ents";
import { v } from "convex/values";

const schema = defineEntSchema({
  ...defineEntsFromTables(authTables),

  users: defineEnt({})
    .field("username", v.string())
    .field("firstname", v.string())
    .field("lastname", v.string())
    .index("by_username", ["username"])
    .edges("sheets", { to: "sheets", ref: true }),

  sheets: defineEnt({})
    .field("name", v.string())
    .edge("owner", { to: "users" }),
});

export default schema;

export const entDefinitions = getEntDefinitions(schema);
