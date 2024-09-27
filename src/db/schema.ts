import { pgTable, text, timestamp } from "drizzle-orm/pg-core";
import { createInsertSchema } from "drizzle-zod";

export const urlMappings = pgTable("url_mappings", {
  id: text("id").primaryKey(),
  longUrl: text("long_url").notNull(),
  shortUrl: text("short_url"),
  createdAt: timestamp("created_at").defaultNow(),
});

export const insertUrlMappingsSchema = createInsertSchema(urlMappings);
