import { pgTable, serial, text } from "drizzle-orm/pg-core";

export const testing = pgTable("testing", {
  id: serial("id").primaryKey().notNull(),
  name: text("name"),
});
