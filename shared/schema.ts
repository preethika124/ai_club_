import { pgTable, text, varchar, integer, timestamp } from "drizzle-orm/pg-core";
import { createInsertSchema } from "drizzle-zod";
import { z } from "zod";

// Team Members
export const teamMembers = pgTable("team_members", {
  id: varchar("id").primaryKey(),
  name: text("name").notNull(),
  role: text("role").notNull(),
  category: text("category").notNull(), // "faculty" | "student" | "core"
  department: text("department"),
  year: text("year"),
  linkedIn: text("linkedin_url"),
  avatarColor: text("avatar_color").notNull(),
  imageUrl: text("image_url"), // Optional profile image URL
});

export const insertTeamMemberSchema = createInsertSchema(teamMembers).omit({ id: true });
export type InsertTeamMember = z.infer<typeof insertTeamMemberSchema>;
export type TeamMember = typeof teamMembers.$inferSelect;

// Events/Activities
export const events = pgTable("events", {
  id: varchar("id").primaryKey(),
  title: text("title").notNull(),
  description: text("description").notNull(),
  category: text("category").notNull(), // "Workshop" | "Hackathon" | "Seminar" | "Project" | "Event" | "Competition"
  date: text("date").notNull(),
  month: text("month").notNull(),
  year: text("year").notNull(),
  participants: integer("participants").notNull(),
  tags: text("tags").array().notNull(),
  images: integer("image_count").notNull().default(3),
});

export const insertEventSchema = createInsertSchema(events).omit({ id: true });
export type InsertEvent = z.infer<typeof insertEventSchema>;
export type Event = typeof events.$inferSelect;

// Articles
export const articles = pgTable("articles", {
  id: varchar("id").primaryKey(),
  title: text("title").notNull(),
  excerpt: text("excerpt").notNull(),
  category: text("category").notNull(), // "Tutorials" | "Events" | "Research" | "Projects" | "Insights"
  author: text("author").notNull(),
  authorAvatar: text("author_avatar").notNull(),
  date: text("date").notNull(),
  readTime: text("read_time").notNull(),
  featured: integer("featured").notNull().default(0), // 1 for featured, 0 for not
});

export const insertArticleSchema = createInsertSchema(articles).omit({ id: true });
export type InsertArticle = z.infer<typeof insertArticleSchema>;
export type Article = typeof articles.$inferSelect;

// Achievements
export const achievements = pgTable("achievements", {
  id: varchar("id").primaryKey(),
  title: text("title").notNull(),
  description: text("description").notNull(),
  category: text("category").notNull(),
  date: text("date").notNull(),
  icon: text("icon").notNull(), // trophy, document, handshake, briefcase, medal, badge
});

export const insertAchievementSchema = createInsertSchema(achievements).omit({ id: true });
export type InsertAchievement = z.infer<typeof insertAchievementSchema>;
export type Achievement = typeof achievements.$inferSelect;
